import { getUser } from "@/src/utils/service";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type Props = {
    userId: string
}
export default async function UserModal({ userId }: Props) {
    const user = await getUser(userId)

    // ekrana basılacak verierin dizisi
    const fields = [
        {
            label: "Email",
            value: user.email
        },
        {
            label:"Telefon",
            value:user.phone
        },
        {
            label:"Ülker",
            value:user.address.country
        },
        {
            label:"Şehir",
            value:user.address.city
        },
        {
            label:"Adres",
            value:user.address.street
        },
        {
            label:"Posta Kodu",
            value: user.address.postal_code
        },
        {
            label:"Sipariş Sayısı",
            value:user.orders.length ||0
        }
    ]


    return (
        <div className="fixed bg-black/10 inset-0  backdrop:blur-[2px] grid place-items-center z-999">
            <div className="bg-white rounded-lg py-6 px-10 pb-14 w-full max-w-md">
                <div className="flex justify-end items-center">

                    <Link href="/users" className="button hover:bg-zinc-200 transition">
                        <MdClose />
                    </Link>
                </div>

                <div className=" flex flex-col gap-5">
                    <h1 className="text-4xl font-semibold text-center my-5">
                        {user.name}

                    </h1>

                    <div className="flex flex-col gap-3 ">
                       {fields.map((field,key) =>(
                        <div key={key} className="flex justify-between">
                               <span>{field.label}</span>
                               <span className="font-semibold">{field.value}</span>
                                </div>
                       ))}
                    </div>

                    <hr className="h-1 bg-gray-300 border-0 shadow mt-4"/>
                    {/* Önceki Sipariş Detayları */}

                    <div className="mt-4">
                        <div className="grid grid-cols-3 divide-x">
                            <span className="text-center">Ürün Id</span>
                            <span className="text-center">Adet</span>
                            <span className="text-center">Toplam Fiyat</span>
                        </div>
                       
                       <div className="flex flex-col gap-2 mt-2">
                        {user.orders.map((order,key) => (
                            <div key={key} className= "bg-gray-100 p-2 rounded-lg grid grid-cols-3 font-semibold ">

                         <span className="text-center ">{order.product_id}</span>
                         <span className="text-center ">{order.quantity}</span>
                        <span className="text-center ">${order.total_price}</span>
                            </div>
                        ))}
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
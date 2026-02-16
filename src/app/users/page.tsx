import UserTable from "@/src/components/table/user-table";
import { Suspense } from "react";
import Loading from "../loading";
import UserModal from "@/src/components/modals/user-modal";

type Props = {
    searchParams:Promise<{show?:string}>
}
export default async function Users({searchParams}:Props) {
    const {show} = await searchParams
    return (
        <div className="page">
            <h1 className="title">Kullanıcılar</h1>

            <Suspense fallback={<Loading/>}>

                <UserTable />
                {show && <UserModal userId={show} />}  
            </Suspense>

          

        </div>
    )
}
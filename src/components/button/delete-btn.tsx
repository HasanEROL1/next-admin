"use client"
import { deleteProduct } from "@/src/utils/service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
export default  function DeleteButton({id}: {id:string}) {
  const router =useRouter()
  const [isLoading, setIsLoading] = useState(false)


    //butona tıklanınca
    const handleDelete = async() => {
        // silme işlemi için onay al
        if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            return;
           
        }
        try{
       setIsLoading(true)
        await deleteProduct(id) 
         router.refresh()
         alert("işlem Başarılı")
        } catch (error) {
            alert("işlem Başarısız")

        }
        finally{
         setIsLoading(false)
        }
    }


  return (
    <button 
    disabled={isLoading}
    onClick={handleDelete} 
          className={` flex items-center justify-between bg-red-500 text-white py-0.5 px-3 rounded hover:bg-red-600 transition-colors w-19 cursor-pointer disabled:opacity-70`}>{isLoading ? "Siliniyor..." : " Sil"}
    <span className="ml-2 text-sm "><FaTrash/></span></button>
  )
}
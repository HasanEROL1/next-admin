"use client"

import { deleteUser } from "@/src/utils/service"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"

const BanButton = ({id}:{id:string}) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    // Sil butonuna tıklanınca
    const handleDelete = async () =>{
        if(!confirm("Bu kullanıcıyı silmek istediğinize emin misiniz ?")) return;
       
        setIsLoading(true)
        deleteUser(id)
        .then(()=> {
            toast.success("Kullanıcı Silindi")
          router.refresh()
        })
        .catch(()=> {
            toast.error("Kullanıcı silinemedi")
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
  return (
 <button onClick={handleDelete}
 className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed">
    <FaTrash/>
 </button>
  )
}


export default BanButton

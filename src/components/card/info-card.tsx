import { InfoCardItem } from "@/src/types"
import Image from "next/image"

type Props = {
  item:InfoCardItem
}
export default function InfoCard({item}:Props) {
  return (
 <div className="bg-white rounded-lg p-3 flex justify-between items-center">
  <div>
    <h4 className="text-gray-700 whitespace-nowrap text-base sm:text-sm">
      {item.label}
    </h4>
    <p className="font-bold text-xl md:text-2xl">{item.value}</p>
  </div>

  <Image src ={item.icon} alt={item.label}
        className="w-12 h-12 object-cover rounded-md"
/>
 </div>

  )
}
import { getOrders } from "@/src/utils/service"
import TableWrapper from "./table-wrapper"


const OrderTable = async () => {
const orders = await getOrders()

console.log(orders)
const getColor = (status:string) => {
    switch (status) {
        case "Kargoya Verildi":
            return "bg-blue-600";
        case "Teslim Edildi":
            return "bg-green-600";
        case "Hazırlanıyor":
            return "bg-yellow-600";
        default:
            return "bg-gray-600";
    }
}
  return (
   <TableWrapper>
    <thead>
        <tr>
            <th>#</th>
            <th>Sipariş Tarihi</th>
            <th>Ürün Sayısı</th>
            <th>Toplam Tutar</th>
            <th>Adres</th>
            <th>Durum</th>
        </tr>
    </thead>

<tbody>
{orders.map((order,key)=>(
    <tr key={key}>
        <td>{order.id}</td>
        <td>{new Date(order.order_date).toLocaleDateString("tr",{
            day:"2-digit",
            month:"long",
            year:"2-digit",
        })}
        </td>


        <td>{order.items.reduce((acc,item)=> acc + item.quantity,0)}</td>
        <td className="text-green-600">${order.total_price.toFixed(2)}</td>
        <td>{order.shipping_address.city}</td>
        <td>
            <span className={`${getColor(order.status)} text-white py-1 px-2 rounded-lg shadow w-full text-center `}>{order.status}</span>
        </td>
        
    </tr>
))}
</tbody>
   </TableWrapper>
  )
}
export default OrderTable


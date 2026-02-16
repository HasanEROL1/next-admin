import { Suspense } from "react";
import Loading from "../loading";
import OrderTable from "@/src/components/table/order-table";

export default function Orders() {
  return (
    <div><h1 className="title">Siparişler</h1>
    
    <Suspense fallback={<div><Loading designs="my-20" /></div>}>
    <OrderTable />
    </Suspense>
    </div>
  )
}
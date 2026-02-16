"use client"

import { ChartData } from "@/src/types"
import { Doughnut } from "react-chartjs-2"
import "chart.js/auto"
type Props = {
    data:ChartData
}
export default function DoughnutGraph({data}:Props) {
  return (
    <div><Doughnut data={data} 
          className="w-full! h-full! max-w-100 max-h-100"
    /></div>
  )
}
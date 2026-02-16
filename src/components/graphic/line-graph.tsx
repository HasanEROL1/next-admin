"use client"
import "chart.js/auto"
import { ChartData } from "@/src/types"
import { Line } from 'react-chartjs-2';

type Props ={
    data:ChartData
}
export default function LineGraph
({data}:Props) {
  return (
    <div className="size-full">
<Line data={data} className="size-full!" />
    </div>
  )
}
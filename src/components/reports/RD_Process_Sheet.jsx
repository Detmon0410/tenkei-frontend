import React from 'react'
import { useParams} from 'react-router-dom';

export default function RD_Process_Sheet() {
  const { orderNo } = useParams(); // รับพารามิเตอร์จาก URL


  return (
    <div>
    <h1>Report Page</h1>
    <p>Order Number from URL: {orderNo}</p>

  </div>
  )
}
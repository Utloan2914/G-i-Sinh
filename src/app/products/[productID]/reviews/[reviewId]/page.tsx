import React from 'react'
import {notFound} from "next/navigation";
export default function ReviewDetail({params}:{
    params: {
        productID:string;
        reviewId: string;
    };
}) {
    if (parseInt (params.reviewId)>1000){
        notFound();
    }
  return (
    <div>Loan Review {params.reviewId} for product {params.productID}</div>
  )
}

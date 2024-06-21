import React from 'react'

// export default function page({params}) {
//   return (
//     <h1>Product theo kieeur /1 . page of product {params.productID}</h1>
//   )
// }

export default function ProductDetails({
    params,
    }: {
    params: { productID: string};
    }) {
    return <h1>Details about product {params.productID}</h1>;
    }
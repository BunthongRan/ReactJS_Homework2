import { useEffect, useState } from "react"

export const ProductCollection = () => {
    //state hook
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    const fetchProduct = () => {
        fetch(" https://api.escuelajs.co/api/v1/products")
        .then (resp => resp.json())
        .then (e => setProducts(e))
        setProducts(e)
        setLoading(false)
        console.log(products)
    }

    useEffect(() => {
        console.log("First launch")
        fetchProduct()
    }, [])

    // return (
    //     <>
    //         {
    //             products.length > 0 && <>
    //             {
    //                 products.map(e => (
    //                     <h1 key={e.id} > {e.title}</h1>
    //                 ))
    //             }
    //             </>
    //         }
    //     </>
        
    // )

    return loading ? <WaitingData/> : (
        product.map(e => (
            <p key={e.id}>Title: {e.name}</p>
        ))
    )
    function WaitingData () {
        return <h1 style={{color: "red"}}>Waiting data</h1>
    }

}
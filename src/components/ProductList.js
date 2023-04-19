
const ProductList = () => {
    const products = [
        {
            id: 1, 
            title: "iwatch"
        },
        {
            id: 2,
            title: "macbook"
        }
    ]
    return (
        <>
            <h1>Product List</h1>
            {
                products.length > 0 && <h2> Our Product {products[0].title}</h2>
            }
        </>
    )
}
export default ProductList
export function Table({ product }) {
    return ( 
        product.map(e => {
            <tr>
                <th scope="row">1</th>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
            </tr>
        })
    )
}
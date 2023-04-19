export function Card({products}){
    return (
        <tbody>
        {
            products.map(dataMap => (
                <tr>
                    <th scope="row">{dataMap.id}</th>
                    <td>{dataMap.title}</td>
                    <td>{dataMap.price}</td>
                    <td>{dataMap.description}</td>
                </tr>
            ))
        }
    </tbody>
    )
}
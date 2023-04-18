
import { useState } from 'react'
import { Card } from './components/Card';

function App() {
  const [products, setProducts] = useState([]);
  let link = 'https://api.escuelajs.co/api/v1/products';
  fetch(link).then(res => {
    return res.json();
  }).then(data => setProducts(data))

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <Card product={products} />
      </tbody>
    </table>

  )
}

export default App;
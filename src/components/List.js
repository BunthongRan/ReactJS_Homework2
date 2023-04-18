export function List (products){
    return (
        <tbody>
            {
                products.map(products => 
                    <>
                        <div class="card" style="width: 18rem;">
                            <img src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__480.jpg." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </>
                              
        )}
      </tbody>
    )
}
import { useState, useEffect } from 'react';

export const RenderingCards = () => {
    const [card, SetCardData] = useState([]);
    const [loading, SetDataLoading] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(data => {
            SetCardData(data);
            SetDataLoading(false)
        });
    }
    useEffect(() => {
        fetchCards();
    }, [])

    return loading ? (
        
        <div class="container"> 
            <div class="row">
                <SetLoading/>
            </div>  
        </div>
           
    ) : (
        card.map(e => (
            <div class="card col-12 col-lg-3 col-sm-6 col-md-4 bg-dark text-light">
                <img src={e.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{e.id}</h5>
                    <p class="card-text">{e.name}</p>
                    <button class="btn btn-primary">Click me</button>
                </div>
            </div>
        ))
    )
}
function SetLoading() {
    const [loading, SetHolder] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/categories').then(res => res.json()).then(data => {
            SetHolder(data);
        });
    }
    useEffect(() => {
        fetchCards();
    }, [])
    return (
        <>
            {
                loading.map(e => (
                    <div class="card col-12 col-lg-3 col-sm-6 col-md-4" aria-hidden="true">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="..." width={'100px'} />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <button class="btn btn-primary w-25 h-25"></button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
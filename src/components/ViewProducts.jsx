import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewProducts = () => {
    const [prodata, changeData] = useState(

        [
            { "name": "Cauliflower", "price": 34, "avatar": "https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg?tr=w-154,q-80" },
            { "name": "Chicken", "price": 150, "avatar": "https://imgs.search.brave.com/GndTOBGipsMaxfrAEKKMEj4pxqiSedKfa9PILnZcxdA/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAw/OTUxODQ3NC9waG90/by9yYXctY2hpY2tl/bi1tZWF0LWZpbGxl/dC10aGlnaC13aW5n/cy1hbmQtbGVncy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ME9kT01sYXBQSkF5/MGYxaFlyNHMwRU9U/NU10cHZnbkozUUY5/UWRsdHdEaz0" },
            { "name": "Eggs", "price": 130, "avatar": "https://imgs.search.brave.com/fSBxqH6HuHbmH8gxbKYlJrhwFqfinh9XTKpjOIlaS-k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3MjYwNzIz/NjAwNjgtY2RjMzU2/MWVhNjE1P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE5YeDha/V2RuYzN4bGJud3dm/SHd3Zkh4OE1BPT0" },
            { "name": "Milk", "price": 58, "avatar": "https://imgs.search.brave.com/PtGxJARQJNHXywlI_4tZ4g47LOT3ly_Jo8lZBCmOQ5M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzEwRnB6bWh5T0wu/anBn" },
            { "name": "Tomato", "price": 34, "avatar": "https://imgs.search.brave.com/Vhadzf27aTAgsvZbbOSFpBQHlBvheNRIeBgcnw2FeIg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NjE4MDE4NS9waG90/by9yZWQtdG9tYXRv/ZXMtYmFja2dyb3Vu/ZC1ncm91cC1vZi10/b21hdG9lcy1jbG9z/ZS11cC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZHZPOGdk/UC1xcjNSYUtxX2xM/WDVpNUFQcnhHN3Az/ZE1JLUN6Wk1xbVow/UT0" },
        ]

    )
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {prodata.map(
                                (value, index) => (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                        <div class="card">
                                            <img src= {value.avatar} height="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h6 class="card-title">Name: {value.name}</h6>
                                                <h6 class="card-title">Price: {value.price}</h6>
                                                <a href="#" class="btn btn-success">Add to cart</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            )}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewProducts
import React from 'react'


 function List() {
    const carBrands = ["Tata","Mahindra","Kia","Hyundai"];
  return (
    <div>
        <ul className='car-brands'>
            {carBrands.map((brands, index)=>(
                <li key={index}>{brands}</li>
            ))}
        </ul>
    </div>
  )
}

export default List;
import React from 'react'

const Web = () => {


    const person = {
        name:'oveze',
        age:21,
        gmail:'oveze@gmail.com',
        pincode:560083

    }
const product = {
    title:'iphone',
    model:'15 pro',
    price:80000
}

const person1 ={
  name:'oveze',
  age:23
}

  
 


  return (
    <>
    
     <div>
     <h1>name= {person.name}</h1>
     <h1>age={person.age}</h1>
     <h1>gmail={person.gmail}</h1>
     <h1>pincode={person.pincode}</h1>
    </div>


    <div>
        <h1>title={product.title}</h1>
        <h1>model={product.model}</h1>
        <h1>price={product.price}</h1>
    </div> 

    <div>
      <h1>name={person1.name}</h1>
      <h1>
        {person1.age>18 ? <h1>you  can drive</h1>: <h1>you  cant drive</h1>}
      </h1>
    </div>
  
    </>
  )
}

export default Web

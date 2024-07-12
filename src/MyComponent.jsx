import { useState } from "react";


function MyComponent(){
    const [name , setName] = useState("Guest");
    const [quantity , setQuantity] = useState();
    const [shipping, setShipping] = useState("Pick Up");
    
    let handleNameChange = (event)=>{
        setName(event.target.value);
    }
    let handleQuantity = (event)=>{
        setQuantity(event.target.value);
    }
    let handleShipping = (event)=>{
        setShipping(event.target.value);
    } 

    return(
        <>
            <div>
                <input value={name} onChange={handleNameChange} />
                <p> Name : {name}</p>

                <input value={quantity} onChange={handleQuantity} />
                <p> Quantity : {quantity}</p>

                <input type="radio"  value="Delivery" onChange={handleShipping} 
                
                        checked = {shipping === "Delivery"} 
                
                /> Delivery
                <br />
                <input type="radio"  value="Pick Up " onChange={handleShipping} 
                
                checked = {shipping === "Pick Up "}
        
        /> Pick Up

        <p>Shipping : {shipping}</p>
            </div>
        </>
    )
}


export default MyComponent;
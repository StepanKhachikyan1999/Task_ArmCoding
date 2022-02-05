import React from 'react';
import styled from 'styled-components';


const Basket = () => {

    let RenderCart = JSON.parse(localStorage.getItem("key")) || [];
    console.log(RenderCart);

    function removeItemFromCart(id) {
        RenderCart = RenderCart.filter((cart) => cart.id === id);
        console.log(RenderCart);
        localStorage.removeItem("key",RenderCart)
        
      }
      

    return (
        <div>
            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                name
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                image
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                price
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                delete
              </th>
            </tr>
          </thead>
          <tbody>
           {RenderCart.map((cart) => {
               return(
                <tr className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cart.name}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <img src={cart.img} alt='no img'/>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {cart.price}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                onClick={() => removeItemFromCart(`${cart.id}`)}
                style={{fontSize:"30px",cursor:"pointer",color:"red"}} class="far fa-trash-alt"
                ></i>
                </td>
              </tr>
               )
           })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>

        
    );
};

export default Basket;

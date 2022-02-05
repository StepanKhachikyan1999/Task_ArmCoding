import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {getOneItem} from "../redux/actions/item.action";
import Button from "react-bootstrap/Button";
import styled from "styled-components"
import { useState } from 'react';
// import { createAction } from 'mobx/dist/internal';

let cart = []

const DeviceItem = ({device}) => {
    const [cartItems,setCartItems] = useState({});
    const check = useSelector(state => state?.itemReducer.checkId)
    const history = useHistory()
    const dispatch = useDispatch()

    const setId = (id) => {
        dispatch(getOneItem(id))
    }


    console.log(setId);
    
    // cart array
   
    // ADD TO CART
    function addToCart() {
        const obj = {}
        obj.id = device.id
        obj.name = device.name
        obj.img = device.img
        obj.price = device.price
        cart.push(obj)
        let cartItems = JSON.stringify(cart)
        localStorage.setItem("key",cartItems)

    }

   const CartItem = styled.div `
   border: 1px solid gray;
   border-radius:5px;
   width: 250px;
   height: 297px;
   position: relative;
   margin:2rem;
   `

    return (
        <CartItem className='cartItem'>
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer',border:'none'}}>
                <Image style={{width:"150px",height:"110px"}} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.price}$</div>
                </div>
                <div>{device.name}</div>
                <div><Button onClick={()=>setId(device.id)}>More</Button></div>
            </Card>
        </Col>
        <Button className="bg-success"
        onClick={() => addToCart()}
        style={{marginTop: "2.2rem",float:"right"}}>Add To cart </Button>
        </CartItem>
    );
};

export default DeviceItem;

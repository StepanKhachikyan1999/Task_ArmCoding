import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,CHAT_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    let a = localStorage.getItem("key")
    let cartLength = JSON.parse(a)
    

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Ecommerce.am</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                         <Button
                        style={{margin:"0 1rem 0 0"}}
                        onClick={() => history.push(CHAT_ROUTE)}
                        ><i class="fab fa-facebook-messenger"></i></Button>
                        <Button
                        style={{margin:"0 1rem 0 0"}}
                        onClick={() => history.push("basket")}
                        ><i class="fas fa-shopping-cart"></i><small>{cartLength ? cartLength.length : "0"}</small></Button>
                        <Button
                            style={{margin:"0 1rem 0 0"}}
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Sign out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Autorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;

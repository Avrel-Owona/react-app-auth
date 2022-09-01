import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductDetails} from "../productDetails";
import {Login} from "../login";
import {Register} from "../register";
import {Products} from "../products";
import {Home} from "../home";
import {useAuth} from "../context/authContext";


const Navbar = () => {
    const {user} = useAuth()

    // const handleLogout = async  () => {
    //     try {
    //        await logout()
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    return(
            <div>
                <nav className='w-full shadow-lg flex items-center justify-center h-20'>
                    {user ?
                        <ul className='flex h-full justify-center items-center'>
                            <a className='ml-3' href="/products/">Products</a>
                            <a className='ml-3' href="/">Home</a>
                            <button className='bg-black px-4 py-3 text-white ml-3' onClick={''}>Logout</button>
                        </ul> :
                        <ul className='flex h-full justify-center items-center'>
                            <a className='ml-3' href="/">Home</a>
                            <a className='ml-3' href="/login/">Login</a>
                            <a className='ml-3' href="/register/">Register</a>
                        </ul>}
                </nav>
                       <Routes>
                           <Route path="/" exact element={<Home/>} />
                           <Route path="/products/" element={<Products/>} />
                           {/*<Route path="/products/" element={<ProtectedRoutes><Products/></ProtectedRoutes>} />*/}
                           <Route path="/login/" element={<Login/>} />
                           <Route path="/register/" element={<Register/>} />
                           <Route path="/products/:id" exact element={<ProductDetails/>} />
                       </Routes>
            </div>
    );
};

export default Navbar;
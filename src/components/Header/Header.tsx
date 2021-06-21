import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="">
            <Link className="" to={"/"}>Home</Link>
            <button className="">Iniciar sesion</button>
        </div>
    )
}

export default Header;

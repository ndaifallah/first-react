import React from "react";
import Logo from "./logo";
import Menu from "./menu";


function Navbar(){
    return (<div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px'
    }}>
        <Logo />
        <Menu/>
    </div>);
}

export default Navbar;
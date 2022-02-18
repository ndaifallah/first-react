import React from 'react';
import MenuItem from './menuItem';

function Menu(){
    const items = [
        "acceuil",
        "Mes recettes",
        "mon menu"
    ]
    return (<div style={{
        display: 'flex',
        justifyContent: 'space-between'
    }} >
        {items.map(function(element){
            return <MenuItem titre={element} />
        })}
    </div>);
}

export default Menu;
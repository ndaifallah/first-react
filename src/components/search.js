import React, { useState } from 'react';

import { Input, Button } from 'antd';

function Search(){
    var [ loading, setLoading ] = useState(false);
    var [ text, setText ] = useState("");

    function clickCallback(){
        console.log("clicked");
        setLoading(!loading);
        setTimeout(function(){setLoading(false);}, 2000);
    }

    const onchangeCallback = (e) => {
        setText(e.target.value);
        console.log(text);
    }
    
    return(<div style={{
        width: "300px",
        margin: "200px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <h1>{text == "" ? "Search songs" : text}</h1>
        <br/>
        <Input onChange={onchangeCallback} placeholder="Exemple: Hello ..." />
        <br/>
        <br/>
        <Button onClick={clickCallback} style={{width: "100px"}} type="primary" loading={loading} disabled={text == "" ? true : false}>Search</Button>
    </div>);
}

export default Search;
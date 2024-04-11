import React from "react";
import ContentHeader from "./ContentHeader";
import ContentHeaderSecond from "./ContentHeaderSecond";
import Card from "./Card";
import "../Styles/Content.css";
const Content=()=>{
    return(
       <div className="content">
        <ContentHeader/>
        <ContentHeaderSecond/>
        <Card/>

       </div>
    );
}
export default Content;

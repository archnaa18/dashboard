import React from "react";
import "../Styles/ContentHeaderSecond.css";
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
const ContentHeaderSecond=()=>{
    return(
     <div className="second-header">
        <div className="first-sec">
            <span><BiHomeAlt/> Home /</span>
            <span>Sales Order <HiOutlineChevronDown/></span>
            <span>/ <b>Product Catalouge</b></span>
        </div>
        <div className="second-sec">
           <span>Place Order</span>
        </div>
     </div>
    );
}
export default ContentHeaderSecond;
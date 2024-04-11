import React from "react";
import Logo from "../assets/orgLogo.png";
import { BiCalendar, BiCart, BiCloset, BiCube,BiHome, BiListOl, BiSolidTShirt, BiSolidTruck, BiTask } from "react-icons/bi";
import { Bs0CircleFill, BsFillDatabaseFill, BsFillPersonFill } from "react-icons/bs";
import "../Styles/SideBar.css";
const SideBar=()=>{
    return(
        
        <div className="menu">
            <div className="logo">
                <img src={Logo} alt="logo" />

            </div>
            <div className="menu-list">
                <a href="#" className="item item1">
                <BiHome className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiSolidTShirt className="logoicons"/>
                </a>
                <a href="#" className="item">
                <BiCart className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiCalendar className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiSolidTruck className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiCube className="logoicons"/>
                </a>
                <a href="#" className="item item22">
                <BsFillDatabaseFill className="logoicons"/>
                <Bs0CircleFill className="ciecle-sec"/>
                </a>
                <a href="#" className="item">
                    <BsFillPersonFill className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiTask className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiListOl className="logoicons"/>
                </a>
                <a href="#" className="item">
                    <BiCloset className="logoicons"/>
                </a>
            </div>
        </div>
    );
}
export default SideBar;
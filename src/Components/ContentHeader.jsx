import React from "react";

import {  BiSearch, } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { FiCommand } from "react-icons/fi";
import { HiOutlineBell, HiOutlineChevronDown } from "react-icons/hi";
import { HiMiniDocument, HiMiniUserCircle, HiOutlineArrowUpOnSquare } from "react-icons/hi2";
const ContentHeader = () => {
    return (
        <div className="content--header">

            <div className="header--activity">
                <div className="search-box">
                    <BiSearch className="icon" />
                    <input type="text" placeholder="Search POs,ASNs,& Pages etc" />

                </div>
                <div className="search-next">
                    <span><FiCommand/> + K /<FiCommand/> + Shift + K</span>
                </div>
              
            </div>
            <div className="header--sec">
                <div className="side-box-header">
                    <div className="left-side-box">
                        <div><BsQuestionCircle/></div>
                        <div><HiOutlineArrowUpOnSquare/></div>
                        <div><HiMiniDocument/>
                        <span>20</span></div>
                        <div><HiOutlineBell/>
                        <span>120</span></div>
                        <p className="line-bottom"><span></span><span></span></p>
                      
                     
                    </div>
                    <div className="right-side-box">
                        <div className="profile-box">
                            <span><HiMiniUserCircle/></span>
                        </div>
                        <div className="name-box">
                            <span>Vmart-Procurement Team <HiOutlineChevronDown/></span>
                            <span>Aashish Kumar Singhla </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentHeader;

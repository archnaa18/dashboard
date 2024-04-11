import React from "react";
import { CardData } from "../Data/CardData";
import {  BiChevronDown, BiChevronLeft,BiChevronRight, BiPlus, BiSearch } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import "../Styles/Card.css";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight,  HiMiniMagnifyingGlassPlus, HiOutlineFilm, HiOutlineTableCells, HiSquares2X2 } from "react-icons/hi2";
import { HiOutlineCog, HiOutlineSparkles, HiOutlineUsers } from "react-icons/hi";
const Card = () => {
    return (
        <div className="main-section">
            <div className="cardSec">
                <div className="card-upper">
                    <div className="card-1">
                        <div className="sec-11">
                            <div className="search-box">
                                <BiSearch className="icon" />
                                <input type="text" placeholder="Search Products" />

                            </div>
                            <div className="next-icon-box">
                                <span><HiSquares2X2 /></span>
                                <span><HiOutlineTableCells /></span>
                                <span><HiOutlineFilm /></span>
                            </div>
                        </div>
                        <div className="sec-22">
                            <span>Add Remarks</span>
                            <span>Show By : <b>Sizes</b></span>
                            <span><BiPlus /></span>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="card-22-1">
                            <div className="search-box">
                                <HiMiniMagnifyingGlassPlus className="icon" />
                                <input type="text" placeholder="Scan Product By.." />

                            </div>
                            <div className="dialog-box">
                                <span><b>Design No. <BiChevronDown /></b></span>
                            </div>
                        </div>
                        <div className="card-22-2">
                            <HiOutlineCog />
                        </div>
                    </div>
                </div>
                <div className="cardmain">
                    {CardData.map((data) => {
                        return (
                            <div className="card-inner">
                                <div className="cardimg">
                                    <div className="img-con">
                                        <img src={data.image} alt="tshirt" />
                                    </div>
                                    <span className="imgtext">10%off</span>
                                    <span className="check-icon"><span className="line"></span></span>
                                    <div className="dots">
                                        <span className="white-dot"><BsFillCircleFill /></span>
                                        <span><BsFillCircleFill /></span>
                                        <span><BsFillCircleFill /></span>
                                        <span><BsFillCircleFill /></span>
                                    </div>
                                </div>
                                <div className="card-text">
                                    <div className="upper-text">
                                        <div className="cout-multi">
                                            <span>{data.imgTxt}</span>
                                            <span>{data.color}</span>
                                        </div>
                                        <div className="cout-multi-new">
                                            <span>{data.qauntity} <b>:</b></span>
                                            <span>{data.num}</span>
                                        </div>

                                    </div>
                                    <div className="middle-text">
                                        <span className="head">
                                            {data.subHead}
                                        </span>
                                        <span className="head2">
                                            {data.subTxt}
                                        </span>
                                        <span className="head3">
                                            {data.subTxt2}
                                        </span>
                                        <span className="design-num">
                                            {data.designHead}
                                        </span>
                                        <span className="design-num2">
                                            {data.designNum}
                                        </span>
                                    </div>
                                    <div className="lower-middle">
                                        <span className="size">{data.size}</span>
                                        <span className="size2"><b>{data.instockTxt}:</b><b>{data.instockNum}</b></span>

                                    </div>
                                    <div className="upper-below">
                                        <span className="rate">
                                            {data.price}
                                        </span>
                                        <span className="del-price">
                                            <del>  {data.oldprice}</del>
                                        </span>
                                    </div>
                                    <div className="lower-below">
                                        <div className="del-icon">
                                            {data.delicon}
                                        </div>
                                        <div className="del-txt">
                                            <span>{data.sizeTxt}</span>
                                            <span>{data.moreTxt}</span>
                                            <span>{data.editicon}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
                <div className="left-right-arrow">
                    <span><BiChevronLeft /></span>
                    <span><BiChevronRight /></span>
                </div>

            </div>
            <div className="profile-details">
                <div className="profile-section">
                    <div className="p-sec1">
                        <div><HiOutlineUsers /></div>
                        <div><span>Customer</span>
                            <span><b>SRG INdia Pvt. Ltd</b></span></div>
                    </div>
                    <div className="p-sec1">
                        <div><HiMiniArrowLongLeft /></div>
                        <div><span>Delievry Location</span>
                            <span><b>Gurgaon-017838</b></span></div>
                    </div>
                    <div className="p-sec1">
                        <div><HiMiniArrowLongRight /></div>
                        <div><span>Dispatch Location</span>
                            <span><b>Gurgaon-017838</b></span></div>
                    </div>
                    <div className="p-sec1 btn-1">
                        <div>

                            <div><span>Show More</span></div>
                        </div>
                    </div>
                </div>
                <div className="profile-section2">
                    <div className="p-sec2">
                        <div><span><b>Summary</b></span></div>
                    </div>
                    <div className="p-sec2 sec22">
                        <div><span><b>#SO_DRAFT_00000017_2024</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>Total Quantity</b></span>
                        </div>
                        <div><span><b>21</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>Total Items</b></span>
                        </div>
                        <div><span><b>7</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>Order Quantity</b></span>
                        </div>
                        <div><span><b>21</b></span></div>
                    </div>
                    <div className="p-sec2 sec-122">
                        <div><span><b>Total Bag Price</b></span>
                        </div>
                        <div><span><b>₹ 23031.808</b></span></div>
                    </div>
                </div>
                <div className="profile-section2">
                    <div className="p-sec2">
                        <div><span><b>Price Breakup</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>IGST</b></span>
                        </div>
                        <div><span><b>₹ 230.80</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>CGST</b></span>
                        </div>
                        <div><span><b>₹ 230.80</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>SGST</b></span>
                        </div>
                        <div><span><b>₹ 230.80</b></span></div>
                    </div>
                    <div className="p-sec2">
                        <div><span><b>CESS</b></span>
                        </div>
                        <div><span><b>₹ 0.00</b></span></div>
                    </div>
                    <div className="p-sec2 green-text">
                        <div className="green-text"><span className="green-text"><b className="green-text"><HiOutlineSparkles/> Discount</b></span>
                        </div>
                        <div className="green-text"><span className="green-text"><b className="green-text">₹ 690.00</b></span></div>
                    </div>
                    <div className="p-sec2 sec-122">
                        <div><span><b>Total Amount</b></span>
                        </div>
                        <div><span><b>₹ 23031.808</b></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Img/odor-bi.svg";

export default function SideNavLogin(){
    return (
        <div className="sidenav-container">
            <div className="sidenav-wrap">
                <div className="sideNavLogin">
                    <Link to='/'>
                        <img style={{marginTop: "32px", marginBottom: "32px" , marginLeft: "18px"}} 
                             src={Logo} alt="로고" />
                    </Link>
                    <ul className="footer">
                        <li>
                            <p>Tel : 0505-700-7599</p>
                            <p>Mobile : +82-10-3660-5647</p>
                            <p>Fax : 0505-300-59</p>
                            <p>E-mail : 
                                <a href="mailto:" style={{ color: '#ccc' }}>
                                    sun210@gmail.com
                                </a>
                            </p>
                        </li>
                        <li>
                            <p>Address</p>
                            <p>
                            경기도 화성시 남양읍 남양로451번길 49 A동
                            <br />(우 18269)
                            </p>
                        </li>
                        <li>
                            <p>English Address</p>
                            <p>
                            A Building, 49 Namyang-ro 451beon-gil, 
                            Namyang-eup, Hwaseong-si, Gyeonggi-do, 
                            Republic of Korea, zip code: 18269
                            </p>
                        </li>
                        <li className="copyright">
                            Copyright ⓒ 2022 ECOview Solution Inc, All Right Reserved.
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Img/odor-bi.svg";


import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faWrench} from '@fortawesome/free-solid-svg-icons';
import {faUnlockKeyhole} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function SideNav(){
    return (
        <div className="sidenav-container">
            <div className="sidenav-wrap">
                <div className="sidenav-list-wrap">
                    <Link to='/'>
                        <img style={{marginTop: "32px", marginBottom: "32px"}} 
                             src={Logo} alt="로고" />
                    </Link>
                    <ul>
                        <li>
                            <Link className="side-nav-item-login" to="/Login">
                                <FontAwesomeIcon icon={faUnlockKeyhole} />
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/Home">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/Setting">
                                <FontAwesomeIcon icon={faGear} />
                                <span>설정</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/Customer">
                                <FontAwesomeIcon icon={faWrench} />
                                <span>고객지원</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
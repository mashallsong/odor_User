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
                            <Link className="side-nav-item" to="/Login">
                                <FontAwesomeIcon icon={faUnlockKeyhole} />
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/AdminSetting">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>관리자 설정</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/Registration">
                                <FontAwesomeIcon icon={faGear} />
                                <span>장비등록</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="side-nav-item" to="/Management">
                                <FontAwesomeIcon icon={faWrench} />
                                <span>장비관리</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

/* 폰트어썸 import */
import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notfound(){
    return (
        <div className="container">
            <div className="header-wrap">
                <h1>notfound</h1>
                <div className="info-wrap">
                    <div className="info-id">
                        <span>User Name</span>
                        <button className="logout-btn">로그아웃</button>
                    </div>
                    <div className="info-email">
                        Username@email.com
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    )
}
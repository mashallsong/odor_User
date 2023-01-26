import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';



import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Customer(){
    return (
        <div className="container">
            <div className="header-wrap">
                <h1>고객지원</h1>
                <div className="input-seach">
                    <input type="text" id="Seach" name="검색" placeholder="검색어를 입력해주세요."/>
                    <FontAwesomeIcon className="seach-icon" icon={faMagnifyingGlass} />
                </div>
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

            <div className="body-wrap-customer">
                <div className="customer-grop-1">
                    <div className="customer-layout-1">
                        <div className="customer-layout-header">
                            <h3>고객지원 센터</h3> <span>Customer Support Center</span>
                        </div>
                    </div>
                    <div className="customer-layout-2">
                        <div className="customer-layout-header">
                            <h3>자주묻는 질문</h3> <span>FAQ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';



import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Setting(){
    return (
        <div className="container">
            <div className="header-wrap">
                <h1>설정</h1>
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

            <div className="body-wrap-setting">
                <div className="setting-grop-1">
                    <div className="setting-layout-1">
                        <div className="setting-layout-header">
                            <h3>기본정보 설정</h3> <span>Set default information</span>
                        </div>
                    </div>
                    <div className="setting-layout-2">
                        <div className="setting-layout-2_1">
                            <div className="setting-layout-header">
                                <h3>경고설정</h3> <span>Alert Settings</span>
                            </div>
                        </div>
                        <div className="setting-layout-2_2">
                            <div className="setting-layout-header">
                                <h3>경고설정</h3> <span>Alert Settings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
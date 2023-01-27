import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@mui/material/Button';



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
                        <div className="settingLayoutBody1">
                            <div className="textInputList">
                                상호
                                <input className="textInput1" type="text" placeholder="소농장" />
                            </div>
                            <div className="textInputList">
                                주소
                                <input className="textInput1" type="text" placeholder="소농경기도 화성시 남양읍 46-1" />
                            </div>
                            <div className="textInputList">
                                전화번호
                                <input className="textInput1" type="text" placeholder="010-0000-0000" />
                            </div>
                            <div className="textInputList">
                                담당자
                                <input className="textInput1" type="text" placeholder="김철수" />
                            </div>
                            <div className="textInputList">
                                휴대폰 1
                                <input className="textInput1" type="text" placeholder="010-0000-0000" />
                            </div>
                            <div className="textInputList">
                                휴대폰 2
                                <input className="textInput1" type="text" placeholder="010-0000-0000" />
                            </div>
                            <div className="settingLayoutBody1Btn">
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , margin: '0 16px' , padding: '6px 64px', border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        수 정
                                </Button>
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , margin: '0 16px' , padding: '6px 64px', border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        저 장
                                </Button>
                            </div>
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
                                <h3>측정 간격 설정</h3> <span>Setting the Measurement Interval</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
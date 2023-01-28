import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import Button from '@mui/material/Button';

/* Radio Group */
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminSetting(){
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
                            <h3>관리자 리스트</h3> <span>Administrator List</span>
                        </div>
                    </div>
                    <div className="setting-layout-2">
                        <div className="setting-layout-2_1">
                            <div className="setting-layout-header">
                                <h3>관리자 정보수정</h3> <span>Modify Administrator Information</span>
                            </div>
                            <div className="settingLayoutBody1">
                                <div className="textInputList">
                                    관리자 명
                                    <input className="textInput2" disabled="disabled" type="text" placeholder="김철수" />
                                </div>
                                <div className="textInputList">
                                    아이디
                                    <input className="textInput2" disabled="disabled" type="text" placeholder="aaaabc123@gmail.com" />
                                </div>
                                <div className="textInputList">
                                    비밀번호
                                    <input className="textInput3" type="password" placeholder="비밀번호를 입력해주세요" />
                                </div>
                                <div className="textInputList">
                                    비밀번호 확인
                                    <input className="textInput3" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
                                </div>
                                <div className="RadioList">
                                    관리등급
                                    <div className="Radio">
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="최고관리자" control={<Radio />} label="일반관리자" />
                                                <FormControlLabel value="일반관리자" control={<Radio />} label="최고관리자" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="AdminSettingBtn">
                                    <Button style={{backgroundColor: '#DADADA' , borderRadius:'8px' , padding: '6px 64px', border: 'none' , color:'white'}} 
                                            variant="outlined">
                                            저 장
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="setting-layout-2_2">
                            <div className="setting-layout-header">
                                <h3>관리자 추가</h3> <span>Add Administrator</span>
                            </div>
                            <div className="settingLayoutBody1">
                                <div className="textInputList">
                                    관리자 명
                                    <input className="textInput4" type="text" placeholder="관리자명을 입력하세요" />
                                </div>
                                <div className="textInputList">
                                    아이디
                                    <input className="textInput4" type="text" placeholder="아이디를 입력하세요" />
                                </div>
                                <div className="textInputList">
                                    비밀번호
                                    <input className="textInput3" type="password" placeholder="비밀번호를 입력해주세요" />
                                </div>
                                <div className="textInputList">
                                    비밀번호 확인
                                    <input className="textInput3" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
                                </div>
                                <div className="RadioList">
                                    관리등급
                                    <div className="Radio">
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="최고관리자" control={<Radio />} label="일반관리자" />
                                                <FormControlLabel value="일반관리자" control={<Radio />} label="최고관리자" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="AdminSettingBtn">
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 64px', border: 'none' , color:'white'}} 
                                            variant="outlined">
                                            추 가
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';


import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export default function Home(){
    
    return (
        <div className="container">
            <div className="header-wrap">
                <h1>Home</h1>
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

            <div className="body-wrap-home">
                <div className="home-grop-1">
                    <div className="home-layout-1">
                        <div className="home-layout-header">
                            <h3>사용자 정보</h3> <span>User info</span>
                        </div>
                        <div className="home1Contents">
                            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                                    frameborder="0"
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                     />
                        </div>
                    </div>
                    <div className="home-layout-2">
                        <div className="home-layout-header">
                            <h3>실시간 측정치</h3> <span>Real Time</span>
                        </div>
                        <div className="home2Contents">
                            <div className="graphList">
                                <div className="graphTitle">
                                    <p>CO2</p> <p className="ppmText">449,33 ppm</p>
                                </div>
                                <div className="home2Graph">
                                    <meter value="60" max="100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-grop-1">
                    <div className="home-layout-1">
                        <div className="home3-layout-header">
                            <div className="home3Title">
                                <h3>측정 그래프</h3> <span>Measurement graph</span>
                            </div>
                            <div className="home3Button">
                                <button className="homeBtnst1">암모니아</button>
                                <button className="homeBtnst2">황화수소</button>
                                <button className="homeBtnst3">온도</button>
                                <button className="homeBtnst4">수소</button>
                            </div>
                        </div>
                        <div className="homeGraph">
                            <a href="https://www.highcharts.com/demo/line-labels" target="_blank" rel="noopener noreferrer">그래프 참조 사이트 클릭</a>
                        </div>
                        <div className="homePrint">
                            <button className="homePrintBtn">측정이력 출력</button>
                        </div> 
                    </div>
                    <div className="home-layout-2">
                        <div className="home-layout-header">
                            <h3>실시간 장비상태</h3> <span>Real-time Equipment status</span>
                        </div>
                        <div className="home4TableWrap">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
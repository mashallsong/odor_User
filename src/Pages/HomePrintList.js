import React, { useState } from "react";
import '../Css/Header.css';
import '../Css/Body.css';

/* 폰트어썸 import */
import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@mui/material/Button';

/* Select */
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
/* Pagination */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// 달력
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function HomePrintList(){
    
    const [PartNo, setList] = React.useState('');

    const handleChange = (event) => {
        setList(event.target.value);
    };
    
    // 달력
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


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

            <div className="bodyHomePrintList">
                <div className="HomePrintListGrop1">
                    <div className="HomePrintListLayout">
                        <div className="setting-layout-header">
                            <h3>기간별 측정 이력</h3> <span>Measurement history by period</span>
                        </div>
                        <div className="HomePrintListLayoutBody">
                            <div className="HomePrintListSelect">
                                {/* PartNo 검색 */}
                                <Box sx={{ minWidth: 200 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Part No</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={PartNo}
                                        label="PartNo"
                                        onChange={handleChange}
                                        style={{ borderRadius: '8px' }}
                                        >
                                        <MenuItem value={1}>MOS-KR00001</MenuItem>
                                        <MenuItem value={2}>MOS-KR00002</MenuItem>
                                        <MenuItem value={3}>MOS-KR00003</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                {/* 달력 */}   
                                <div className="CalendarSeach">
                                    <span>기간 검색</span>
                                    <div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date:Date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            className={'DPstartDate'}
                                        />
                                    </div>
                                    <span>~</span>
                                    <div>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date:Date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={endDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            className={'DPstartDate'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="HomePrintListTable">
                                <ul className="realtimeTableTh">
                                    <li>측정시간</li>
                                    <li>장비 Part No.</li>
                                    <li>암모니아 ppm</li>
                                    <li>황화수소 ppm</li>
                                    <li>온도 ℃</li>
                                    <li>습도 %</li>
                                </ul>
                                <ul className="realtimeTableTd">
                                    <li>MOS-2022/09/18 [14:35]</li>
                                    <li>MOS-KR00001</li>
                                    <li>0.30</li>
                                    <li>0.05</li>
                                    <li>27</li>
                                    <li>37</li>
                                </ul>
                            </div>
                            <div className="HomePrintListBtn">
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 32px', border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        측정이력 저장
                                </Button>
                            </div>
                            <div className="pagination">
                                <Pagination count={10} shape="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
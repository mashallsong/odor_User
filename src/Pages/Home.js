import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

/* 폰트어썸 import */
import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 모달팝업용
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// 모달팝업용
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Home(){
    // 모달팝업용
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

                            {/* 모달팝업용 */}
                            <Button onClick={handleOpen}>지도 클릭 시 모달창</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '90%' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField id="standard-basic" label="Device:" variant="standard" />
                                </Box>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    ID : IX0100003
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Location : 741 singildong yougdongpogu seoul
                                </Typography>
                                </Box>
                            </Modal>

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
                                <Button style={{backgroundColor: '#FDF2E2' , color: '#A06500' , padding: '4px 16px' , border: 'none'}} 
                                        variant="outlined">암모니아</Button>
                                <Button style={{backgroundColor: '#E2DAFF' , color: '#8906C3' , padding: '4px 16px' , border: 'none'}} 
                                        variant="outlined">황화수소</Button>
                                <Button style={{backgroundColor: '#FAD9ED' , color: '#BF0B78' , padding: '4px 16px' , border: 'none'}} 
                                        variant="outlined">온도</Button>
                                <Button style={{backgroundColor: '#B4CDCE' , color: '#2C7679' , padding: '4px 16px' , border: 'none'}} 
                                        variant="outlined">수소</Button>
                            </div>
                        </div>
                        <div className="homeGraph">
                            <a href="https://www.highcharts.com/demo/line-labels" target="_blank" rel="noopener noreferrer">그래프 참조 사이트 클릭</a>
                        </div>
                        <div className="homePrint">
                            <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , marginRight: '32px' , padding: '6px 32px', border: 'none' , color:'white'}} 
                                    variant="outlined"
                                    href="/HomePrintList" >
                                    측정이력 출력
                            </Button>
                        </div> 
                    </div>
                    <div className="home-layout-2">
                        <div className="home-layout-header">
                            <h3>실시간 장비상태</h3> <span>Real-time Equipment status</span>
                        </div>
                        <div className="home4TableWrap">
                            <ul className="realtimeTableTh">
                                <li>장비 Part ON</li>
                                <li>센서상태</li>
                                <li>측정치 누락</li>
                                <li>재설정</li>
                            </ul>
                            <ul className="realtimeTableTd">
                                <li>MOS - KR00001</li>
                                <li>정상동작</li>
                                <li>0</li>
                                <li>
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 8px', border: 'none' , color:'white'}} 
                                            ariant="outlined">
                                            재설정
                                    </Button>
                                </li>
                            </ul>
                            <ul className="realtimeTableTd2">
                                <li>MOS - KR00002</li>
                                <li> <span className="textCheck">통신오류</span></li>
                                <li>15</li>
                                <li>
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 8px', border: 'none' , color:'white'}} 
                                            ariant="outlined">
                                            재설정
                                    </Button>
                                </li>
                            </ul>
                            <ul className="realtimeTableTd3">
                                <li>MOS - KR00003</li>
                                <li> <span className="textError">점검필요</span></li>
                                <li>15</li>
                                <li>
                                    <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 8px', border: 'none' , color:'white'}} 
                                            ariant="outlined">
                                            재설정
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
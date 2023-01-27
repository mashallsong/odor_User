import React from "react";
import '../Css/Header.css';
import '../Css/Body.css';

import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));



export default function Customer(){

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

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
                        <div className="csLayoutBody1">
                            <div className="textInputListNone">
                                상호
                                <input className="textInput2" type="text" disabled="disabled" placeholder="㈜에코뷰 솔루션" />
                            </div>
                            <div className="textInputListNone">
                                주소
                                <input className="textInput2" type="text" disabled="disabled" placeholder="경기도 화성시 남양읍 467" />
                            </div>
                            <div className="textInputListNone">
                                전화번호
                                <input className="textInput2" type="text" disabled="disabled" placeholder="010-0000-0000" />
                            </div>
                            <div className="csMap">
                                <p>오시는 길</p>
                                <div className="csMapWrap">
                                    <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                                        frameborder="0"
                                        id="inlineFrameExample"
                                        title="Inline Frame Example"
                                    />
                                </div>
                            </div>
                            <div className="textInputListNone">
                                사용설명서
                                <Button style={{backgroundColor: '#4e82eb' , borderRadius:'8px' , padding: '6px 64px', border: 'none' , color:'white'}} 
                                        variant="outlined">
                                        다운로드
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="customer-layout-2">
                        <div className="customer-layout-header">
                            <h3>자주묻는 질문</h3> <span>FAQ</span>
                        </div>
                        <div className="accordionLayout">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: '#F5F6FF' }}>
                                <Typography>1.메인센서 디스플레이가 꺼진 경우</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{ backgroundColor: '#F5F6FF' }}>
                                <Typography>2.메인센서 디스플레이가 꺼진 경우</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{ backgroundColor: '#F5F6FF' }}>
                                <Typography>3.메인센서 디스플레이가 꺼진 경우</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
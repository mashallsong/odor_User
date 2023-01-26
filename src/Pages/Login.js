import React, { useEffect, useState } from 'react'
import '../Css/Header.css';
import '../Css/Body.css';

import {faMagnifyingGlass, faWrench} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const User = {
    email: 'test@example.com',
    pw: 'a1234567!'
  }
  

  export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    
    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    useEffect (() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);



    return (
        <div className="container">
            <div className="body-wrap-login">
                <div className="login-grop-1">
                    <div className="login-layout-1">
                        <div className="login-header-wrap">
                            <h1>Login</h1>
                        </div>
                        <div className="login-input-layout">
                            <div className="login-input-title">이메일 주소</div>
                            <div className="login-input-wrap">
                            <input
                                className="input"
                                type="text"
                                placeholder="test@gmail.com"
                                value={email}
                                onChange={handleEmail}
                             />
                            </div>
                            <div className="login-error-message">
                            {!emailValid && email.length > 0 && (
                                <div>올바른 이메일을 입력해주세요.</div>
                            )}
                            </div>

                            <div className="login-input-title">비밀번호</div>
                            <div className="login-input-wrap">
                            <input
                                className="input"
                                type="password"
                                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                                value={pw}
                                onChange={handlePw}
                             />
                            </div>
                            <div className="login-error-message">
                                {!pwValid && pw.length > 0 && (
                                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                                )}
                            </div>
                            <div>
                                <button onClick={onClickConfirmButton} disabled={notAllow} className="loginButton">로그인</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}
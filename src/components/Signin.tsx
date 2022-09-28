import { LoginOutlined } from '@ant-design/icons';
import { Row, Col, Button, Input, InputRef } from 'antd';
import { useRef } from 'react';
import { LoginReqType } from '../types';
import styles from "./Signin.module.css";



interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({}) => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img src="/pg_signin.png" alt='Signin' className={styles.signin_bg}/>
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>Email
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input 
                placeholder='Email' 
                autoComplete='email' 
                name='email' 
                className={styles.input}
                ref ={emailRef}
              />
            </div>
            <div className={styles.password_title}>Password
              <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input 
                type="password"
                placeholder='current-password' 
                className={styles.input}
                ref={passwordRef} 
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={click}>Sign in</Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function click() {
    const email = emailRef.current!.input?.focus;
    const password = passwordRef.current!.input?.focus;
    
    login({email, password});
  }
}

export default Signin;


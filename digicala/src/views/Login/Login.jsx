import React, { useState } from "react";
import { login } from "../../api/authentication";
import Auth from "../../api/localStorage";
import { Redirect } from 'react-router-dom'

// import { Navigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import juice from '../../assets/image/juice.jpg'
import lock5 from '../../assets/image/lock5.jpg'
import login5 from '../../assets/image/login5.jpg'
import styles from './Login.styles.module.css' 
import { useNavigate } from "react-router-dom";                   
// export default Login;

function Login() {
  let navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [error, setErrors] = useState({
    none_filed_error: []
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    login(state).then((data) => {
      console.log(data);
      Auth.login(data.accessToken , data.refreshToken);
      alert('success')
     
        navigate("/")
        
      
    }).catch(res => {
      console.log(res)
      setErrors(res.data)

    })
    
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((old) => ({ ...old, [name]: value }));
    
  };
  // if (Auth.checklogin()){
  //   return(
  //     navigate("/")
  //   )
  // }
  
  return (
    <>
    <div className={styles.login_form}>
     <div className={styles.login_form__wrapper}>
        <div className={styles.login_form__left_side}>         
            <div className={styles.login_form__header}>
                       
                <div className={styles.login_form__img_wrap}>        
                    <img src={lock5} alt="lock"/>
                    </div>
                    <h1>login form</h1>
            </div>
            <div className={styles.login_form__content}>
            <div>{error.none_filed_error.map(error => <p style={{
      backgroundColor: 'red',
      color: 'white',
      padding: 15,
      borderRadius: 5
    }} key={error}>{error}</p>)}</div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.login_form__form_group}>
                        <label for="username">username or email</label>
                        <input type="text" placeholder="Enter username or email"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        value={state.username}/>
                    </div>
                    <div className={styles.login_form__form_group}>
                        <label for="password">password</label>
                        <input type="password" placeholder="Enter password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={state.password}/>        
                    </div>
                    <div className={styles.login_form__submit}>          
                        <button type="submit"><span>&#10140;</span></button>
                    </div>
                </form>
            </div>
        </div>
        <div className={styles.login_form__right_side}>         
            <div className={styles.login_form__cover}>        
                <img src={login5} alt="login"/>
            </div>
        </div>
    </div>
</div>

    </>
  );
}

export default Login;
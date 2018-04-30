import React, { Component } from 'react';
import Header from '../common/Header/Header';
import { Form, Input } from 'semantic-ui-react';
import './Login.css';
import AuthService from '../AuthService';

class Login extends Component {
   
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    
  render(){
    
    return(
        <div className="App">
          <Header />
        <div className="LoginContainer">
            
             <h1> Login </h1>

               <div className="LoginFormContainer">
        
                        <Form onSubmit={this.handleFormSubmit}> 
                            <Form.Field>
                            <label > Email : </label>
                            <Input  name="email" type="email" placeholder="Enter Email Address" onChange={this.handleChange}/>  <br />
                            </Form.Field>
                            <Form.Field>
                            <label > Password : </label>
                            <Input  name="password" type="password" placeholder="Enter Password"  onChange={this.handleChange} />
                            </Form.Field>
                            <Input type="submit" value="Submit" /> 
                        </Form>
                </div>
            
        </div>
    </div>
    );
  }

  handleFormSubmit(event){
    event.preventDefault();
  
    this.Auth.login(this.state.email,this.state.password)
        .then(res =>{
           this.props.history.replace('/dashboard');
        })
        .catch(err =>{
            alert('Wrong Credentials');
        })
}

handleChange(event){
    this.setState(
        {
            [event.target.name]: event.target.value
        }
    )
}

}

export default Login;
import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import './Login.css';

const Login = () => {
    return(
        <div className="LoginContainer">
             <h1> Login </h1>

               <div className="LoginFormContainer">
        
                        <Form> 
                            <Form.Field>
                                    <label for="email"> Email : </label>
                                    <Input id="email" type="email" placeholder="Enter Email Address" />  <br />
                                    </Form.Field>
                                    <Form.Field>
                                    <label for="password"> Password : </label>
                                    <Input id="password" type="password" placeholder="Enter Password" />
                                    </Form.Field>
                                    <Input type="submit" value="submit" /> 
                                </Form>
                </div>
            
        </div>
    );
}

export default Login;
import React, { Component } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form,Input, InputGroup, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            email: '',  
            mobileNumber:'',
            password: ''
              
        }  
  
        this.email = this.email.bind(this);  
        this.mobileNumber = this.mobileNumber.bind(this);
        this.password = this.password.bind(this);  
        this.Login = this.Login.bind(this);  
    }  
  
    email(event) {  
        this.setState({ email: event.target.value })  
    }  
    mobileNumber(event) {  
        this.setState({ mobileNumber: event.target.value })  
    }  
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    
    Login(event) {  
        // debugger;  
        fetch(`https://localhost:7105/api/BoxingAdmission/Login`, {  
            method:'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                email: this.state.email,  
                mobileNumber : this.state.mobileNumber,
                password: this.state.password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status === 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Dashboard");  
            })  
    }  

    
  
    render() {  
  
        return (  
            <div>
            <h1>BOXING ACADEMY ADMISSION</h1>
            <div className="container">  

           
           
                <Container className='box'>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div  className="pageheading">  
                                                <div href="./Register" className=" btn-primary">  
                                                    Login  
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.email} placeholder="Enter Email" id="a1"/>  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  

                                            <Input type="text" onChange={this.mobileNumber} placeholder="Enter mobileNumber"  id="a1" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password" onChange={this.password} placeholder="Enter Password"  id="a1"/>  
                                            </InputGroup>  
                                            <Button className='btn' onClick={this.Login} color="success" block><Link to="/Login">Login</Link></Button>
                                            <a href='SignUp'id="a2"><Link to="/Register">SignUp</Link></a>
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
                </div>
        </div>

        );  

    }  
  
}  
export default Login;
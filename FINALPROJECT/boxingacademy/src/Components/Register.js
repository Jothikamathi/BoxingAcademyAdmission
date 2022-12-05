import React, { Component } from 'react';  
import { Row, Form, Col, Button } from "react-bootstrap";
import './Register.css';
class Register extends Component {  
  
  constructor(props) {  
    super(props);  
  
    this.initialState = {  
      regName: '',  
      regAddress: '',  
      regFathersName: '',  
      regMobile: '',  
      regEmailId: '',
      regPassword:'',
      regAge:'',
      regDateofBirth:'',
      regWeight:'',
      regHeight:''  
    };
  
     if (props.user.id) {
      this.state = props.user;
     } else {
      this.state = this.initialState;
     }

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  
    }

    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        [name]: value,
      });
    }
    
    handleSubmit(event) {
      event.preventDefault();
      this.props.onFormSubmit(this.state);
      this.setState(this.initialState);
    }

    render() {
      let pageTitle;
      let actionStatus;
      if (this.state.id) {
        pageTitle = <h2>Edit User</h2>
        actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Register</h2>;
      actionStatus = <b>Save</b>;
    }

    return (
      <div >
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="regName">
                <Form.Label>Name</Form.Label>
                <Form.Control
            
                  type="text"
                  name="regName"
                  data-testid="regName"
                  value={this.state.regName}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="regAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
              
                  type="text"
                  name="regAddress"
                  data-testid="regAddress"
                  value={this.state.regAddress}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="regFathersName">
                <Form.Label>Fathers Name</Form.Label>
                <Form.Control
          
                  type="text"
                  name="regFathersName"
                  data-testid="regFathersName"
                  value={this.state.regFathersName}
                  onChange={this.handleChange}
                  placeholder="Fathers Name"
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="regMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
            
                  type="text"
                  name="regMobile"
                  data-testid="regMobile"
                  value={this.state.regMobile}
                  onChange={this.handleChange}
                  placeholder="Mobile Number"
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="regEmailId">
                <Form.Label>Email Id</Form.Label>
                <Form.Control
          
                  type="text"
                  name="regEmailId"
                  data-testid="regEmailId"
                  value={this.state.regEmailId}
                  onChange={this.handleChange}
                  placeholder="Email Id"
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="regPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
              
                  type="password"
                  name="regPassword"
                  data-testid="regPassword"
                  value={this.state.regPassword}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="regAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
          
                  type="text"
                  name="regAge"
                  data-testid="regAge"
                  value={this.state.regAge}
                  onChange={this.handleChange}
                  placeholder="Age"
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="regDateofBirth">
                <Form.Label>DateofBirth</Form.Label>
                <Form.Control
            
                  type="text"
                  name="regDateofBirth"
                  data-testid="regDateofBirth"
                  value={this.state.regDateofBirth}
                  onChange={this.handleChange}
                  placeholder="DateofBirth"
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="regWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
          
                  type="text"
                  name="regWeight"
                  data-testid="regWeight"
                  value={this.state.regWeight}
                  onChange={this.handleChange}
                  placeholder="Weight"
                />
              </Form.Group>
              <br></br>

              <Form.Group controlId="regHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control
        
                  type="text"
                  name="regHeight"
                  data-testid="regHeight"
                  value={this.state.regHeight}
                  onChange={this.handleChange}
                  placeholder="Height"
                />
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="Id"
                  value={this.state.id}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;

      
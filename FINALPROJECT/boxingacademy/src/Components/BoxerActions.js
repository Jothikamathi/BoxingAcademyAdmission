import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './BoxerActions.css';
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
import Login from "./Login";
import axios from "axios";




const apiUrl = "https://localhost:7105/api/BoxingAdmission";

class BoxerActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegister: false,
    
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isBoxingAcademies: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isRegister: true });
    this.setState({ isBoxingAcademies: false });
  }
  onDetails() {
    this.setState({ isBoxingAcademies: true });
    this.setState({ isRegister: false });
  }

  onFormSubmit(data) {
    this.setState({ isRegister: true });
    this.setState({ isBoxingAcademies: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertBoxers", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isRegister: false,
          isEdituser: false,
        });
      });
    }
  }

  
  

  editUser = (id) => {
    this.setState({ isBoxingAcademies: false });
    axios.get(apiUrl + "/GetUserDetailsById/" + id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isRegister: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
   
    let userForm;
    if (this.state.isRegister || this.state.isEditUser) {
      userForm = (
        <div>
       
        <Login
          data-testid="register"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />

        

        
        </div>
      );
    }
    return (
      <div className="App">

        <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>

        <Container>
          <h1 style={{ textAlign: "center" }}>BOXING ACADEMY ADMISSION</h1>
          <hr></hr>
          {!this.state.isBoxingAcademies && (
            <Button variant="primary" onClick={() => this.onDetails()}>
              {" "}
              Boxer Details
            </Button>
          )}
         
          
          <br></br>
          {!this.state.isRegister && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default BoxerActions;

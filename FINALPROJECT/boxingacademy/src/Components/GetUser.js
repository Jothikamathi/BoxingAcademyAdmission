import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import './GetUser.css';

const apiUrl = "https://localhost:7105/api/BoxingAdmission";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllEmployees")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    <button className="logout"><Link to="/" className="logbtn" >Logout</Link></button>

    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>FathersName</th>
                <th>Mobile</th>
                <th>EmailId</th>
                <th>Password</th>
                <th>Age</th>
                <th>DateofBirth</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.fathersName}</td>
                  <td>{user.mobile}</td>
                  <td>{user.emailId}</td>
                  <td>{user.password}</td>
                  <td>{user.age}</td>
                  <td>{user.dateofBirth}</td>
                  <td>{user.weight}</td>
                  <td>{user.height}</td>
                  <td>
                    
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Developer = (props) => (
  <tr>
    <td>{props.developer._id}</td>
    <td>{props.developer.firstname}</td>
    <td>{props.developer.lastname}</td>
    <td>{props.developer.email}</td>
    <td>{props.developer.phonenumber}</td>
    <td>{props.developer.address}</td>
    <td>
      <Link to={"/edit/" + props.developer._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteDeveloper(props.developer._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class DevelopersList extends Component {
  constructor(props) {
    super(props);

    this.deleteDeveloper = this.deleteDeveloper.bind(this);

    this.state = { developers: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/developers/")
      .then((response) => {
        this.setState({ developers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteDeveloper(id) {
    axios.delete("http://localhost:5000/developers/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      developers: this.state.developers.filter((el) => el._id !== id),
    });
  }

  developerList() {
    return this.state.developers.map((currentdeveloper) => {
      return (
        <Developer
          developer={currentdeveloper}
          deleteDeveloper={this.deleteDeveloper}
          key={currentdeveloper._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-center">List of Developers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.developerList()}</tbody>
        </table>
      </div>
    );
  }
}

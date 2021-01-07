import React, { Component } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

class AddDevelopers extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: 0,
      address: "",
    };
  }

  // componentDidMount() {
  //   axios.get("http://localhost:5000/users/").then((response) => {
  //     if (response.data.length > 0) {
  //       this.setState({
  //         users: response.data.map((user) => user.username),
  //         username: response.data[0].username,
  //       });
  //     }
  //   });
  // }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const developer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      address: this.state.address,
    };

    console.log(developer);

    axios
      .post("http://localhost:5000/developers/add", developer)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add New Developer</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="form-group">
            <label>Phone Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
            />
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Developer Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddDevelopers;

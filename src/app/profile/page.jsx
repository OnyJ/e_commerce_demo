"use client";
import * as React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { userName: "John" };
  }

  componentDidMount() {
    console.log("bienvenue, la page a chargé");
  }

  componentDidUpdate() {
    console.log("vous avez fait une modification");
  }

  componentWillUnmount() {
    console.log("la page va décharger");
  }

  render() {
    return (
      <>
        <h1>Profil</h1>
        <p>Profil de {this.state.userName}</p>
        <button onClick={() => this.setState({ userName: "Jane" })}>
          Change le nom
        </button>
      </>
    );
  }
}

export default Profile;

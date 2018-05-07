import React, { Component } from 'react';
import firebase from 'firebase';

import FileUpload from './FileUpload';
import './App.css';

class Pseudogram extends Component {

  constructor () {
    super();

    this.state = {
      user: null,
      pictures: [],
      uploadValue: 0
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({
        user
      });
    });

    firebase.database().ref('pictures').on('child_added', snapshot => {
      this.setState({
        pictures: this.state.pictures.concat(snapshot.val())
      })
    });
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then( result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch( error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
      .then( result => console.log(`El usuario ha salido`))
      .catch( error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleUpload (event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage
      });
    }, error =>{
      console.log(error.message);
    }, () => {
      
      const record = {
        photoURL: this.state.user.photoURL,
        displayName: this.state.user.displayName,
        image: task.snapshot.downloadURL
      };

      const dbRef= firebase.database().ref('pictures');
      const newPicture = dbRef.push();
      newPicture.set(record);
    });
  }

  renderLoginButton () {

    if(this.state.user) {

      return (
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <h1>Hola {this.state.user.displayName}!</h1>
          <button onClick={this.handleLogout}>Salir</button>
          <FileUpload onUpload={this.handleUpload} />
          <progress value={this.state.uploadValue}></progress>

          {
            this.state.pictures.map( picture => (
              <div>
                <img src={picture.image} />
                <br/>
                <img src={picture.photoURL} alt={picture.displayName} />
                <br/>
                <span>{picture.displayName}</span>
              </div>
            )).reverse()
          }
        </div>
      );
    } else {
      return (
        <button onClick={this.handleAuth}>Login con Google</button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pseudogram - Aplicación de prueba</h1>
        </header>
        <div className="App-intro">
          { this.renderLoginButton() }
        </div>
      </div>
    );
  }
}

export default Pseudogram;

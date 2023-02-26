import axios from 'axios';
import React from 'react';
import styles from './RegisterForm.module.css'; // Import the CSS module

class RegisterForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, email, password } = this.state;

    axios.post('/https://localhost:3000', {
      username,
      email,
      password,
    })
      .then(response => {
        console.log(response);
        // Handle successful response
      })
      .catch(error => {
        console.error(error);
        // Handle error response
      });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Username:
          <input className={styles.input} type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </label>
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
        </label>
        <label className={styles.label}>
          Password:
          <input className={styles.input} type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <button className={styles.button} type="submit">Register</button>
      </form>
    );
  }
}

export default RegisterForm;

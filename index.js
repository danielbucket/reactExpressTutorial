import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      users: {}
    }
    this.getUsers = this.getUsers.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    fetch('api/v1/users')
    .then(resp => resp.json())
    .then(users => {
      console.log(users)
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
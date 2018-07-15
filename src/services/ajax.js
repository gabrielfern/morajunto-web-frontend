import loginControl from '../services/login_control'

export default {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  createUser (name, age, email, contact, username, password) {
    return fetch('/api/users', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        contact: contact,
        age: age,
        name: name
      })
    })
  },

  login (username, password) {
    let success = false
    return fetch('/api/users/' + username + '/' + password, {
      method: 'POST',
      headers: this.headers
    })
      .then(resp => {
        if (resp.status < 300) {
          success = true
          loginControl.logged = true
          return resp.json()
        }
      })
      .then(json => {
        loginControl.loginData = json
        return success
      })
  },

  getAllUsers () {
    return fetch('/api/users')
      .then(resp => resp.json())
  },

  logAllUsers () {
    this.getAllUsers()
      .then(data => console.log(data))
  },

  deleteAllUsers () {
    this.getAllUsers()
      .then(data => {
        for (let user of data.data) {
          fetch('/api/users/' + user.id, {
            method: 'DELETE'
          })
        }
      })
  }
}

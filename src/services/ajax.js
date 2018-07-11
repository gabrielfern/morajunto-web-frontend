import loginControl from '../services/login_control'

export default {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  createUser (username, password, email, contact, cpf, age, name) {
    return fetch('/api/users', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        contact: contact,
        cpf: cpf,
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
          return resp.json()
        }
      })
      .then(json => {
        loginControl.logged = true
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

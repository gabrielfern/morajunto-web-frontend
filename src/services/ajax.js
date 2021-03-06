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
        if (json && json.user) {
          localStorage.setItem('username', json.user.username)
        }
        return success
      })
  },

  updateUser () {
    let user = loginControl.loginData.user
    fetch('/api/users/' + user.id, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        email: user.email,
        contact: user.contact,
        age: user.age,
        name: user.name
      })
    })
  },

  deleteAcc () {
    return fetch('/api/users/' + loginControl.loginData.user.id, {
      method: 'DELETE',
      headers: this.headers
    })
  },

  getUserByUsername (username) {
    return fetch('/api/users/' + username)
      .then(resp => resp.json())
  },

  getAllUsers () {
    return fetch('/api/users')
      .then(resp => resp.json())
  },

  getAllAnuncios () {
    return fetch('/api/advertisements')
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
  },

  deleteAllAnuncios () {
    this.getAllAnuncios()
      .then(data => {
        for (let anuncio of data.data) {
          fetch('/api/advertisements/' + anuncio.id, {
            method: 'DELETE'
          })
        }
      })
  },

  deleteAnuncioById (id) {
    return fetch('/api/advertisements/' + id, {
      method: 'DELETE'
    })
  }
}

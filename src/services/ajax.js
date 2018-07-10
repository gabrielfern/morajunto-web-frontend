export default {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  createUser (name, email, password) {
    return fetch('/api/users', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        username: name,
        email: email,
        password: password
      })
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

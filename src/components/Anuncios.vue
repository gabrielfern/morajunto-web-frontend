<template>
  <div class="row">
    <table id="example" class="mdl-data-table" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      id: ''
    }
  },
  methods: {
    processing (data) {
      // this.username = data.username
      // this.email = data.email
      // this.password = data.password
      // this.id = data.id
    },
    goToCadastrarAnuncio () {
      this.$router.push({ path: '/criarAnuncio' })
    },
    goToUpdateUser () {
      this.$router.push({ path: '/user/update/' + this.username })
    },
    goToAnuncios () {
      this.$router.push({ path: '/user/anuncios/' })
    },
    deleteUser () {
      fetch('/api/users/' + this.id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      fetch('/api/users/', {
        method: 'GET'
      })
        .then(resp => resp.json())
        .then(data => this.processing(data.data))
    })
  }
}
</script>

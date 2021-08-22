<template>
  <div class="container deplacement">

  <img src="/images/logo.png" alt="..." class="img-thumbnail">
  <p class="title">Enregistrement Administrateurs</p>
  <div>
   <Notification v-if="error" :message="error" />
 </div>
  <form method="post" @submit.prevent="register">
  <div class="form-group">
    <label for="exampleInputEmail1">Utilisateurs</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer utilisateur" required>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
   <div class="form-group">
    <label for="exampleInputPassword1">email</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputPassword1" placeholder="email" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mot de passe</label>
    <input v-model="motdepasse" type="password" class="form-control" id="exampleInputPassword1" placeholder="mot de passe" required>
  </div>
  <button type="submit" class="btn btn-primary">S'enregistrer</button>
</form>
<br>
<NuxtLink class="enre" to="/admin">j'ai déjà un compte</NuxtLink>
 </div>
</template>

<style scoped>
.enre{
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  text-decoration: none;
}
.title{
margin-top: 2px;
text-align: center;
font-family:Georgia, 'Times New Roman', Times, serif, monospace;
text-transform: uppercase;
}

.deplacement{
  margin-right: auto;
  margin-left: auto;
  width:345px;
  margin-top: 50px;
  margin-bottom: 50px;
  border: solid 3px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family:Georgia, 'Times New Roman', Times, serif, monospace;
  background-color: white;

}
</style>

<script>
import Notification from '~/components/Notification'

export default {
  loading: true,
  layout:'admin',
  components: {
    Notification,
  },

  data() {
    return {
      utilisateur: '',
      email: '',
      motdepasse: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('enregistrement', {
          utilisateur: this.utilisateur,
          email: this.email,
          motdepasse: this.motdepasse
        })

        this.$router.push('/admin')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

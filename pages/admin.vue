<template>
<div class="container deplacement">
 <div>
  <Notification v-if="error" :message="error" />
 </div>
  <img src="/images/logo.png" alt="..." class="img-thumbnail">
  <p class="title">Administrateurs</p>
  <form method="post" @submit.prevent="loginAdmin">
  <div class="form-group">
    <label for="exampleInputEmail1">Utilisateurs</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer utilisateur" required>
    <small id="emailHelp" class="form-text text-muted">Seul les administrateurs sont autorisés à se connecter</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Mot de passe</label>
    <input v-model="motdepasse" type="password" class="form-control" id="exampleInputPassword1" placeholder="mot de passe" required>
  </div>
  <button type="submit" class="btn btn-primary">Se connecter</button>
</form>
<br>
<NuxtLink class="enre" to="/enregistrement">enregistrer vous ici</NuxtLink>
 </div>
</template>

<script>
import Notification from '~/components/Notification'
export default {
loading: true,
layout:'admin',
middleware: 'guest',
components: {
    Notification
  },
data () {
    return {
      utilisateur:'',
      motdepasse:'',
      error: null
    }
    },
    methods: {
    async loginAdmin () {
      try {

        await this.$auth.loginWith('local', {
          data: {
            utilisateur: this.utilisateur,
            motdepasse: this.motdepasse
          }
        })

        this.$router.push('/administration')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
 }

}
</script>

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



<template>
<div class="container deplacement">
  <p class="title">Administration</p>
  <div class="ecole">
  <form method="post" @submit.prevent="postMatricule">
  <div class="row">
    <div class="col-md-6 form-group">
    <label for="exampleInputEmail1" class="title1">Matricules</label>
    <input v-model="matricule" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ajouter les matricules" required>
    </div>
    <div class="col-md-6 btn">
    <button type="submit" class="btn btn-primary">Ajouter</button>
    </div>
  </div>
  </form>
  </div>
 <br>
  <br>
  <div class="ecole">
  <p> Ajouter les DRENS ici </p>
  <form method="post" @submit.prevent="postDren">
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">Nom de la DREN</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de la DREN" required>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">code de la DREN</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code de la DREN" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="title1">Localisation </label>
    <input v-model="motdepasse" type="text" class="form-control" id="exampleInputPassword1" placeholder="Localisation" required>
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
</div>
  <br>
  <br>
  <div class="ecole">
  <p> Ajouter les IEP ici </p>
  <form method="post" @submit.prevent="postIep">
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">Nom de l'IEP</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de l'IEP" required>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">code de l'IEP</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code de l'IEP" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="title1">Localisation </label>
    <input v-model="motdepasse" type="text" class="form-control" id="exampleInputPassword1" placeholder="Localisation" required>
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
</div>
<br>
  <br>
  <div class="ecole">
  <p> Ajouter les Ecoles ici </p>
  <form method="post" @submit.prevent="postEcole">
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">Nom de l'Ecole</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom de l'Ecole" required>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1" class="title1">code de l'Ecole</label>
    <input v-model="utilisateur" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Code de l'Ecole" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="title1">Localisation</label>
    <input v-model="motdepasse" type="text" class="form-control" id="exampleInputPassword1" placeholder="Localisation" required>
  </div>
  <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
</div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
loading: true,
layout:'administration',
middleware: 'auth',
computed: {
    ...mapGetters(['loggedInUser'])
  },

data () {
    return {

    }
    },

}
</script>

<style scoped>
.ecole{
 border: solid 1px;
 border-radius: 5px;
 padding: 7px 7px 7px 7px;
 color: black;
 background-color: white;
}
.btn{
margin-top: 6px;
}
.title{
margin-top: 2px;
text-align: center;
font-family:Georgia, 'Times New Roman', Times, serif, monospace;
text-transform: uppercase;
color: black;
font-size: 30px;
}
.title1{
color: black;
}

.deplacement{
  margin-right: auto;
  margin-left: auto;
  width:600px;
  margin-top: 150px;
  margin-bottom: 50px;
  border: solid 3px;
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family:Georgia, 'Times New Roman', Times, serif, monospace;
  background-color: aquamarine;
  color: black;

}

</style>



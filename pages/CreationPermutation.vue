<template>
  <div id="creation">
  <!-- Header -->
	<header id="head">
		<div class="container">
			<div class="row">
				<h1 class="lead">PLATFORME DU MINISTERE DE L'EDUCATION NATIONAL</h1>
        <br>
        <br>
				<p class="tagline">Vous pouvez <span style="color:orange; text-transform: uppercase"> creer ici votre avis</span> de permutation</p>
            <a href="#en-bas" class="direction"></a>
			</div>
		</div>
	</header>
	<!-- /Header -->
  <br>
  <br>
  <h3 class="titre mt-5" id="en-bas">DEMANDE DE PERMUTATION</h3>
  <br>
  <br>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <p class="text">Pour créer votre avis de permutation, veuillez s'il vous plait remplir le formulaire  avec les informations averées </p>
          <br>
        </div>

        <div class="col-md-8 permu">
            <form class="mt-5 form" method="post" @submit.prevent="creation" >
            <div>
              <Notification class="error" v-if="error" :message="error" />
              <Notification class="color" v-if="succes" :message="succes" />
            </div>
            <br>
            <br>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Nom & Prénom</label>
                <input v-model="noms" type="text" class="form-control contour uper" name="noms" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Nom de jeune de fille</label>
                <input v-model="jeunefille" type="text" class="form-control contour uper" name="jeunefille" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Date de naissance</label>
                <input v-model="creationdate" type="date" class="form-control contour uper" name="creationdate" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Emploi</label>
                <input v-model="creationemploie" type="text" class="form-control contour uper" name="creationemploie" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Matricule</label>
                <input v-model="creationmatricule" type="text" class="form-control contour uper" name="creationmatricule" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Direction régionale</label>
                <input v-model="creationdirection" type="text" class="form-control contour uper" name="creationdirection" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Etablissement ou service</label>
                <input v-model="creationEtablissement" type="text" class="form-control contour uper" name="creationEtablissement" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Discipline enseignée</label>
                <input v-model="creationdiscipline" type="text" class="form-control contour uper" name="creationdiscipline"  required>
                </div>
              </div>
              <div class=" form-group mb-5">
                <label for="" class="col-form-label">Fonction exercée</label>
                <input v-model="creationfonction" type="text" class="form-control contour uper" name="creationfonction" required>
                </div>
              <div class="row">
                <div class="col-md-12 form-group titre">
                <input type="submit" value="Créer un avis de permutation" class="btn btn-primary rounded-0 py-2 px-4">
                <span class="submitting"></span>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
import Notification from '~/components/Notification'
export default {

components: {
    Notification
  },
 data () {
    return {

      noms:'',
      jeunefille:'',
      creationdate:'',
      creationemploie:'',
      creationmatricule:'',
      creationdirection:'',
      creationEtablissement:'',
      creationdiscipline:'',
      creationfonction:'',
      error: null,
      succes: '',

    }
    },
    methods: {
    async creation () {
      try {
         await this.$axios.post('CreationPermutation',  {
          noms:this.noms,
          jeunefille: this.jeunefille,
          creationdate: this.creationdate,
          creationemploie:this.creationemploie,
          creationmatricule: this.creationmatricule,
          creationdirection: this.creationdirection,
          creationEtablissement: this.creationEtablissement,
          creationdiscipline: this.creationdiscipline,
          creationfonction: this.creationfonction,

        })
        this.succes = 'votre demande a ete correctement enregistrée'
        this.$router.go()
      } catch (e) {
       this.error = e.response.data.message
       this.$router.go()
      }
    }
 }
}
</script>

<style scoped>
.error{
  color: red;
}
.color{
  color: green;
}
.direction{
font-size: 25px;
color: white;
text-decoration: none;
}
.permu{
  margin-top:20px;
  border: solid 1px;
  border-radius: 5px;
}
.uper{
text-transform: uppercase;
}
.titre{
 font-weight: 300;
font-size: 35px;
font-family: Georgia, monospace;
text-align: center;
text-transform: uppercase;
text-decoration: underline rgb(54, 54, 54);
}
.contour{
border-top: 0px;
border-left: none;
border-right: none;
border-bottom: solid orange;
}
.form{
margin: 15px 10px 10px 15px;
font-family: 'Times New Roman', Times, serif,;
font-size: 15px;
font: bold;
}
.text{
margin-top: 35px;
 text-align: justify;
 font-family: 'Times New Roman', Times, serif;
 font-size: 19px;
}
.col-form-label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
#head {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url( /images/avis.jpg) no-repeat;
  background-size: cover;
  min-height:520px;
  text-align: center;
  padding-top:240px;
  color:white;
  font-family:Georgia, 'Times New Roman', Times, serif, monospace;
  font-weight:300; }
</style>

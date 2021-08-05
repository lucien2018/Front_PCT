<template>
<div>
	<!-- Header -->
	<header id="head">
		<div class="container">
			<div class="row">
				<h1 class="lead">PLATFORME DU MINISTERE DE L'EDUCATION NATIONAL</h1>
				<p class="tagline">Pour la Gestion des permutations <span style="color:orange">DU PERSONNEL
PRÉSCOLAIRE ET DU PRIMAIRE</span> en ligne</p>
			</div>
		</div>
	</header>
	<!-- /Header -->
<br>
<br>
<br>
<br>
  <div class="container" id="lien">
    <div class="row">
      <div class="col-md-9 permuta">
        <h4 class="titre">LISTE DES AVIS DE PERMUTATIONS</h4>
       <div class="card">
       <hr>
       <div class="row " v-for="avi in avis" :key="avi.id">
            <div>
                <p class="bg-light">Avis N° {{avi.id}}</p>
            </div>
          <div class="col-lg-12">
                <p> je soussigné M.<span>{{avi.noms}}</span> enseignant en fonction a <span>{{avi.creationfonction}}</span> dans la discipline <span>{{avi.creationdiscipline}}</span>
                de l'IEP: <span>{{avi.creationdirection}}</span>, souhaiterait permuter avec toute personne appartenant au corps enseignant et exercant la même fonction, de preference dans les localités de <span>{{avi.jeunefille}}</span>
                Prière donc a toute personne interessée par cet avis de permutation de clicker sur le button je suis interessé. <br> <span class="nom">M. {{avi.noms}}</span> </p>
           </div>
          <button type="button" class="btn"  data-toggle="modal" data-target="#myModal">
            <span class="bou">je suis interessé</span>
          </button>
          <!-- Modal -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">veuillez s'il vous plait remplir ce formulaire</h4>
                </div>
                <div class="modal-body">
                      <form class="mt-5 form" method="post" @submit.prevent="intersse" >
                      <div>
                        <Notification v-if="error" :message="error" />
                      </div>
                      <div class="row">
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Nom & Prénom</label>
                        <input v-model="nom" type="text" class="form-control contour" name="name" required>
                        </div>
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Nom de jeune de fille</label>
                        <input v-model="nomdejeune" type="text" class="form-control contour"  required>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Date de naissance</label>
                        <input v-model="date" type="date" class="form-control contour"  required>
                        </div>
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Emploi</label>
                        <input v-model="emploie" type="text" class="form-control contour"  required>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Matricule</label>
                        <input v-model="matricule" type="text" class="form-control contour"  required>
                        </div>
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Direction régionale</label>
                        <input v-model="direction" type="text" class="form-control contour"  required>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Etablissement ou service</label>
                        <input v-model="etablissement" type="text" class="form-control contour" required>
                        </div>
                        <div class="col-md-6 form-group mb-5">
                        <label for="" class="col-form-label">Discipline enseignée</label>
                        <input  v-model="discipline" type="text" class="form-control contour" required>
                        </div>
                      </div>
                      <div class=" form-group mb-5">
                        <label for="" class="col-form-label">Fonction exercée</label>
                        <input v-model="fonction" type="text" class="form-control contour" required>
                        </div>
                      <div class="row">
                        <div class="col-md-12 form-group titre">
                        <input type="submit" value="je suis interresé" class="btn btn-primary rounded-0 py-2 px-4">
                        <span class="submitting"></span>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <hr class="trait">
          <div>
            <p class="bg-light1">Fait, a Abidjan le {{avi.created_at}}</p>
          </div>
        </div>


        <div class="pagination text-center">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">&raquo;</a>
        </div>
       </div>
      </div>

      <div class="col-md-3 permutat">
       <p class="text"> Dans le soucis de gerer plus efficacement les demandes de Permutation, la Sous-Direction des ressources humaines en charge du personnel du préscolaire et du primaire
        du Ministère de l’Education Nationale (MEN), met a la disposition du
        personnel enseignant, cette platforme en ligne. vous trouverez ci-contre une liste de tous les avis de permutations de demandeurs partout en côte d'ivoire. le MEN expert ainsi par ce nouveau dispositif satisfaire tout son personnel.</p>
      </div>
    </div>

  </div>
  <br>
<br>
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


      nom:'',
      nomdejeune:'',
      date:'',
      emploie:'',
      matricule:'',
      direction:'',
      etablissement:'',
      discipline:'',
      fonction:'',
      avis: null,
      error: null,

    }
    },
     methods: {

       mounted () {
       this.$axios
       .get('index')
       .then(
         response => {
           this.avis = response.data.avis
         }
       ).catch(error =>{
         console.log(error)
       })
        },

    async intersse () {
      try {
         await this.$axios.post('index',  {
          nom:this.nom,
          nomdejeune: this.nomdejeune,
          date: this.date,
          emploie:this.emploie,
          matricule: this.matricule,
          direction: this.direction,
          etablissement: this.etablissement,
          discipline: this.discipline,
          fonction: this.fonction,

        })
      } catch (e) {
        this.error = e.response.data.message

      }
    }
 }

}
</script>

<style scoped>
.bou{
  color: white;
  text-transform: uppercase;
}
.modal-title{
color: black;
font-family: 'Times New Roman', Times, serif;
}
.btn{
 background: rgb(4, 4, 65);
 margin-left: auto;
 margin-right: auto;
 width: 100%;

}
.col-form-label{
color: black;
font-family: 'Times New Roman', Times, serif;
}
.permuta{
 margin-top: 20px;
 text-align: justify;
 font-family: 'Times New Roman', Times, serif;
 font-size: 19px;
}
.bg-light{
 background: rgb(213, 215, 216);
 text-align: center;
 font-family: 'Times New Roman', Times, serif;
 font-size: 30px;
}
.bg-light1{
 background: rgb(213, 215, 216);
 text-align: center;
 font-family: 'Times New Roman', Times, serif;
 font-size: 20px;
}
.permutat{
 margin-top: 35px;
 text-align: justify;
 font-family: 'Times New Roman', Times, serif;
 font-size: 19px;
}
.contour{
border-top: 0px;
border-left: none;
border-right: none;
border-bottom: solid orange;
}


.titre{
font-weight: 300;
font-size: 35px;
font-family: Georgia, monospace;
text-align: center;
text-transform: uppercase;
text-decoration: underline rgb(54, 54, 54);
}

.card{

 border-radius: 10px;
 padding: 3px 10px 10px 20px;
 overflow: scroll;
}
.permutat>.text{
margin-top: 10px;
font-size: 18px;
}
.card>.trait{
  size: 5px;
  color: black;

}
.col-md-9 >p{
  text-align: justify;
}
.pagination{
position: relative;
right: 60%;
left: 40%;
}
@media only screen and (max-width: 670px) {
  .pagination{
position: relative;
right: 65%;
left: 35%;
}
}
@media only screen and (max-width: 470px) {
  .pagination{
position: relative;
right: 70%;
left: 30%;
}
}
@media only screen and (max-width: 370px) {
  .pagination{
position: relative;
right: 80%;
left: 20%;
}
}
.pagination a {
  color: black;
  float: left;
  padding: 4px 8px;
  text-decoration: none;
  transition: background-color .3s;
}

.pagination a.active {
  background-color: red;
  color: white;
}
.pagination a:hover:not(.active) {background-color: #ddd;}

#head {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url( /images/bg.jpg) no-repeat;
  background-size: cover;
  min-height:520px;
  text-align: center;
  padding-top:240px;
  color:white;
  font-family:Georgia, 'Times New Roman', Times, serif, monospace;
  font-weight:300;
  }
</style>



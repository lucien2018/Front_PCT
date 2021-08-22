<template>
<div class="container">
    <div class="row">
    <div class="col-md-2 deplacement">
    <div>
      <Notification class="rouge" v-if="error" :message="error" />
      <Notification class="vert" v-if="succes" :message="succes" />
    </div>
      <form method="post" @submit.prevent="recup">
      <div class="form-group">
        <label for="exampleInputEmail1">Numero de l'avis</label>
        <input v-model="identifiant" type="text" class="form-control" name="numero" placeholder="Entrer le numero de l'avis" required>
      </div>
      <button type="submit" class="btn btn-primary">Verifier</button>
    </form>
    <br>
    <p class="rouge">NB: Verifiez premièrement vos informations avant d'imprimer votre demande.</p>
    <p class="rouge">De préférence imprimez la demande à partir d'un ordinateur pour eviter les désagrements dus aux resolutions</p>
    <p class="rouge">En cas d'erreur, contactez le service technique Pour une rectification </p>
    </div>
    <!--<div class="col-xs-10 deplacement1">
    <iframe class="taille" src="document"></iframe>
    </div>-->
  <div class="card">
  <div  ref="content" class="col-md-10 deplacement1">
      <div  v-for="donnee in donnees" :key="donnee.id">
        <div class="row">
          <div class="col-xs-5">
          <p class="trait">MINISTERE DE L'EDUCATION NATIONAL ET DE L'ENSEIGNEMENT TECHNIQUE</p>
          <p class="trait">--------------------</p>
          <p class="trait">DIRECTION DE RESSOURCES HUMAINES </p>
          <P class="trait"><strong> BP 807 Abidjan 04 - Tél: 20-21-90-47</strong></P>
          </div>
          <div class="col-xs-2">
          </div>
          <div class="col-xs-5">
          <p class="trait">REPUBLIQUE DE COTE D'IVOIRE</p>
          <p class="trait">-----------</p>
          <p class="trait"> Union - Discipline - Travail</p>
          </div>
        </div>
        <p class="milieu"><strong>DEMANDE PERMUTATION <br> ANNEE 20.../20... </strong></p>
        <p> NB:
        <ul>
        <li> Nul ne peut postuler en même temps pour les INET, les EXEAT et les permutations</li>
        <li> Toute demande d'EXEAT validée ne peut être annulée.</li>
        </ul>
        </p>
        <br>
        <p class="trait"><strong>ENTRE</strong></p>
        <br>
        <p><strong>Nom et Prénoms: </strong><span class="text">{{donnee.noms}}</span></p>
        <div class="row">
          <div class="col-xs-6">
          <p><strong>Nom de jeune de fille:</strong> <span class="text">{{donnee.jeunefille}}</span></p>
          </div>
          <div class="col-xs-6">
          <p><strong>Date de naissance:</strong> <span class="text">{{donnee.creationdate}}</span></p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6">
          <p><strong>Emploi:</strong> <span class="text">{{donnee.creationemploie}}</span></p>
          </div>
          <div class="col-xs-6">
          <p><strong>Matricule:</strong> <span class="text">{{donnee.creationmatricule}}</span> </p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-10">
          <p><strong>Etablissement ou Service:</strong> <span class="text">{{donnee.creationEtablissement}}</span></p>
          <p><strong>Discipline enseignée: </strong> <span class="text">{{donnee.creationdiscipline}}</span></p>
          <p><strong>Fonction exercée: </strong> <span class="text">{{donnee.creationfonction}}</span></p>
          </div>
          <div class="col-xs-2">
          <p><strong> Signature de l'interessé</strong></p>
          </div>
        </div>
        <br>
        <div class="row depla">
          <div class="col-xs-6">
          <p><strong>AVIS MOTIVE DU CHEF D'ETABLISSEMENT</strong></p>
          </div>
          <div class="col-xs-6">
          <p class="trait"><strong> AVIS DU DIRECTEUR REGIONAL</strong></p>
          </div>
        </div>
        <br>
  </div>
  <div v-for="autre in autres" :key="autre.id">
      <p class="trait"><strong>ET</strong></p>
      <br>
      <p><strong>Nom et Prénoms:   </strong> <span class="text">{{autre.nom}}</span></p>
      <div class="row">
        <div class="col-xs-6">
        <p><strong>Nom de jeune de fille:  </strong> <span class="text">{{autre.nomdejeune}}</span></p>
        </div>
        <div class="col-xs-6">
        <p><strong>Date de naissance:    </strong><span class="text"> {{autre.date}}</span></p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
        <p><strong>Emploi:   </strong> <span class="text">{{autre.emploie}}</span></p>
        </div>
        <div class="col-xs-6">
        <p><strong>Matricule:  </strong> <span class="text">{{autre.matricule}}</span></p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-10">
        <p><strong>Etablissement ou Service: </strong> <span class="text">{{autre.etablissement}}</span></p>
        <p><strong>Discipline enseignée: </strong> <span class="text">{{autre.discipline}}</span></p>
        <p><strong>Fonction exercée: </strong> <span class="text">{{autre.fonction}}</span></p>
        </div>
        <div class="col-xs-2">
        <p><strong>  Signature de l'interessé</strong></p>
        </div>
      </div>
      <br>
      <br>
      <div class="row depla">
      <div class="col-xs-6">
      <p><strong>AVIS MOTIVE DU CHEF D'ETABLISSEMENT</strong></p>
      </div>
      <div class="col-xs-6">
      <p class="trait"><strong> AVIS DU DIRECTEUR REGIONAL</strong></p>
      </div>
      </div>
      <br>
      <br>
      <br>
      <p class="trait1"><strong>DECISION DU DIRECTEUR DES RESSOURCES HUMAINES</strong></p>
      <br>
      <br>
      <br>
  </div>
  <div class="row">
  <div class="col-xs-4">
  <p><strong>Cachet et Signature</strong></p>
  </div>
  <div class="col-xs-8">
  <p class="trait">A..................................., Le ...................... 20...........</p>
  </div>
  </div>
  <br>
  <br>
  <p>NB: la permutation se fait entre deux agents de même qualification.</p>
  <button  @click="generateReport" class="btn btn-primary">Annulée</button> <button  @click="generate" class="btn btn-primary">imprimer</button>
</div>   
<br>  
   </div>
   <br>
   <br>
</div>
 </div>
 </div>
</template>
<script>
export default {

  data() {

  return {
    identifiant:'',
    succes: null,
    donnees: null,
    autres: null,
    error: null
  }
},

 methods: {
    async recup () {
      try {
         await this.$axios.post('impression',  {
          identifiant: this.identifiant
        }).then(
         response => {
           this.donnees = response.data.donnee
           this.autres  = response.data.autres
         })
         this.succes ="verifiez vos informations et imprimer votre fiche, si vous êtes satisfait. Si rien ne s'affiche alors le numero de l'avis demandé est inextistent" 
      } catch (e) {
        this.error = e.response.data.message
      }
    },
     generateReport () {
      this.$router.go()
        },
   async generate() {
        if(process.client) {
        const jsPDF = require('jspdf');
        const html2canvas = require('html2canvas');

        const doc = new jsPDF();
        var scaleBy = 0.8;
        var w = 1000;
        var h = 1290;
        var div = document.querySelector('#screen');
        var canvasElement = document.createElement('canvas');
        canvasElement.width = w * scaleBy;
        canvasElement.height = h * scaleBy;
        canvasElement.style.width = w + 'px';
        canvasElement.style.height = h + 'px';
        canvasElement.style.font = 45 + 'px';
        var context = canvasElement.getContext('2d');
        context.scale(scaleBy, scaleBy);

       
          html2canvas(this.$refs.content, {  dpi:125, canvas: canvasElement
            }).then(function (canvas) {
          const img = canvas.toDataURL("image/png", 1);
          doc.addImage(img,'JPEG',7,8);
          doc.save("Demande.pdf");
        });
        await this.$axios.$delete('impression',
         {  
            data:{identifiant: this.identifiant},
            headers:{Authorization:'token'}
         })
         this.$router.push('/') 
        }
      }, 
    }
 }

</script>
<style scoped>
.card{
overflow-x: scroll;
overflow-y: scroll;
height:650px;
border: solid 1px;
margin-top:130px;
margin-left:2px;
}
.depla{
  margin-left:15px;
}
.deplacement{
  margin-top: 130px;
  margin-bottom: 50px;
  border: solid 1px;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family:'Times New Roman', Times, serif, monospace;
  background-color: white;
}
.deplacement1{
   margin-top: 130px;
   margin-left: 10px;
   width:100%;
   font-family:'Times New Roman', Times, serif, monospace;
   font-size: 16.5px;
   
}
.taille{
  height:450px;
  width: 100%;
  padding: 30px,30px,30px,30px;
}
.vert{
  color: green;
  margin-bottom: 5px;
}
.rouge{
  color: red;
  margin-bottom: 5px;
  text-align:justify;
}
.bord{
  border:solid 1px;
}
.text{
  text-transform: uppercase;
  padding: 2px 2px 2px 2px;
  width:90px;
}
.bloc{
  margin-top: 30px;
  margin-bottom: 45px;
  text-align: justify;
  line-height: 2em;
}
.milieu{
  text-align: center;
  font-size: 25px;
}

.trait{
  text-align: center;
}
.trait1{
  text-align: center;
  border: solid 2px;
  padding: 3px 3px 3px 3px;
  margin-right:75px;
  margin-left:60px;
}
</style>

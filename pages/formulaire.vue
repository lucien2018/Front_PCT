<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <p class="text">Pour créer votre avis de permutation, veuillez s'il vous plait remplir le formulaire  avec les indormations averées </p>
        </div>

        <div class="col-md-8 permu">
            <form class="mt-5 form" method="post" >
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Nom & Prénom</label>
                <input type="text" class="form-control contour" name="name" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Nom de jeune de fille</label>
                <input type="text" class="form-control contour"  required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Date de naissance</label>
                <input type="date" class="form-control contour" name="" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Emploi</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Matricule</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Direction régionale</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Etablissement ou service</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
                <div class="col-md-6 form-group mb-5">
                <label for="" class="col-form-label">Discipline enseignée</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
              </div>
              <div class=" form-group mb-5">
                <label for="" class="col-form-label">Fonction exercée</label>
                <input type="text" class="form-control contour" name="" required>
                </div>
              <div class="row">
                <div class="col-md-12 form-group titre">
                <input type="submit" value="Créer avis de permutation" class="btn btn-primary rounded-0 py-2 px-4">
                <span class="submitting"></span>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.permu{
  margin-top:20px;
  border: solid 1px;
  border-radius: 10px;
}
.titre{
  text-align: center;
  font: bolder;
  text-decoration: underline;
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
text-align: justify;
margin-top: 20px;
font-family: 'Times New Roman', Times, serif;
font-size: 16px;
}
.col-form-label{
  font-family: 'Times New Roman', Times, serif;
  color: black;
}
</style>

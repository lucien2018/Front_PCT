<template>
  <div>
  <!-- Fixed navbar -->
    <div class="navbar navbar-inverse navbar-fixed-top headroom" >
		<div class="container">
			<div class="navbar-header">
				<!-- Button for smallest screens -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
				<a class="navbar-brand" href="index.html"><img src="/images/cote.png" alt="Progressus HTML5 template"></a>
			</div>
			<div class="navbar-collapse collapse">
				<ul class="nav navbar-nav pull-right">
					<li class=""><NuxtLink to="/">Accueil</NuxtLink></li>
					<li><NuxtLink to="/#lien">consulter avis</NuxtLink></li>
					<li><NuxtLink to="/CreationPermutation" class="creation">Créer avis</NuxtLink></li>
					<li><NuxtLink to="/contact" class="contact">Contact</NuxtLink></li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
	  </div>
	<!-- /.navbar -->


    <Nuxt />
    <footer id="footer" class="top-space">

		<div class="footer1">
			<div class="container">
				<div class="row">

					<div class="col-md-3 widget">
						<h3 class="widget-title">Contact</h3>
						<div class="widget-body">
							<p>+225 2398732378<br>
								<a href="#">permutation@men.edu.ci</a><br>
								<br>
								234 Hidden Pond Road, Ashland City, TN 37015
							</p>
						</div>
					</div>

					<div class="col-md-3 widget">
						<h3 class="widget-title">Suivez-nous</h3>
						<div class="widget-body">
							<p class="follow-me-icons">
								<a href=""><i class="fa fa-twitter fa-2"></i></a>
								<a href=""><i class="fa fa-dribbble fa-2"></i></a>
								<a href=""><i class="fa fa-github fa-2"></i></a>
								<a href=""><i class="fa fa-facebook fa-2"></i></a>
							</p>
						</div>
					</div>

					<div class="col-md-6 widget">
						<h3 class="widget-title">Mot du ministère</h3>
						<div class="widget-body">
							<p>Seul les enseignants remplissant un certains nombres de critère sont autorisés a faire une permutation </p>
              <p>vous pouvez consulter ces conditions en sur ce lien <a href="#"> https://Conditionsdepermutation</a>  </p>
              <p><NuxtLink to="/admin">Admin</NuxtLink></p>
						</div>
					</div>

				</div> <!-- /row of widgets -->
			</div>
		</div>

		<div class="footer2">
			<div class="container">
				<div class="row">

					<div class="widget">
						<div class="widget-body">
							<p style="text-align:center">
								Copyright &copy; 2021, Groupe DAS G1.
							</p>
						</div>
					</div>

				</div> <!-- /row of widgets -->
			</div>
		</div>

	</footer>
  </div>
</template>

<style scoped>


.icon-bar{
color: black
;}
</style>
<script>
export default {
 head: {
  script: [
    {
      src:'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
      body:true
    },
    {
      src:'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
      body:true
    },
    {
      src:'js/headroom.min.js',
      body:true
    },
    {
      src:'js/jQuery.headroom.min.js',
      body:true
    },
    {
      src:'js/template.js',
      body:true
    },
    {
      src:'js/html5shiv.js',
    },
    {
      src:'js/respond.min.js',
    },
  ],

 }
}
</script>


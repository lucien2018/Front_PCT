<template>
  <div>
  	<!-- Header -->
	<header id="head">
		<div class="container">
			<div class="row">
				<h1 class="lead">PLATFORME DU MINISTERE DE L'EDUCATION NATIONAL</h1>
        <br>
        <br>
				<p class="tagline" >Vous pouvez ici nous laisser vos <span style="color:orange; text-transform: uppercase;"> messages</span> ou <span style="color:orange; text-transform: uppercase;"> suggestions</span> </p>
			</div>
		</div>
	</header>
	<!-- /Header -->
      <div class="container">
        <div class="row">

          <!-- Article main content -->
          <article class="col-sm-9 maincontent">
            <header class="page-header">
              <h1 class="page-title">Contactez Nous</h1>
            </header>

            <p>
              vous pouvez ici nous laisser vos messages et ou suggestions. nous vous repondrons dans les plus bref delai
            </p>
            <br>
              <form>
                <div class="row">
                  <div class="col-sm-4">
                    <input class="form-control" type="text" placeholder="Nom">
                  </div>
                  <div class="col-sm-4">
                    <input class="form-control" type="text" placeholder="Email">
                  </div>
                  <div class="col-sm-4">
                    <input class="form-control" type="text" placeholder="Telephone">
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-sm-12">
                    <textarea placeholder="Type your message here..." class="form-control" rows="9"></textarea>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-sm-6 text-right">
                    <input class="btn btn-action" type="submit" value="Envoyer message">
                  </div>
                </div>
              </form>

          </article>
          <!-- /Article -->

          <!-- Sidebar -->
          <aside class="col-sm-3 sidebar sidebar-right">

            <div class="widget">
              <h4>Adresse</h4>
              <address>
               Cote d'Ivoire Abidjan Plateau
              </address>
              <h4>Contact</h4>
              <address>
                +2250101010101
              </address>
            </div>

          </aside>
          <!-- /Sidebar -->

        </div>

      <section class="container-full top-space">
        <div id="map"></div>
      </section>
      </div>
  </div>
</template>

<script>
export default {
 loading: true,
}
</script>

<style scoped>
#head {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url( /images/contact.png) no-repeat;
  background-size: cover;
  min-height:520px;
  text-align: center;
  padding-top:240px;
  color:white;
  font-family:Georgia, 'Times New Roman', Times, serif, monospace;
  font-weight:300; }
</style>

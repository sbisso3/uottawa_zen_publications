<?php global $language; ?>

<?php if ($language->language == 'en'): ?>
  <div id="main-banner">
    <a id="top" name="top"></a>

    <ul id="page-links">
      <li><a id="skip-to-content" href="#main-content"></a></li>
      <li><a id="skip-to-localnav" href="#local-nav"></a></li>
      <li><a <?php print uottawa_zen_publications_language_switcher_link($language->language, array('id' => 'ch-lang-url',)); ?> id="ch-lang-url" hreflang="fr" rel="alternate" lang="fr">Fran&ccedil;ais</a></li>
    </ul>
    
    <div id="main-branding">
      <div id="main-branding-logo">
        <a rel="home" href="http://www.uottawa.ca/welcome.html" title="Home">
        <img src="http://web5.uottawa.ca/assets-templates/img/uOttawa-logo.png" alt="University of Ottawa, Canada's University" height="53" width="130" /></a>
      </div>
      
      <div id="main-branding-tagline"></div>
    </div>

    <ul id="main-secondarynav">
      <li class="first"><a id="secondarynav-uozone" href="http://uozone.uottawa.ca/en/frontpage" title="uoZone: login to your secure information">uoZone</a></li>
      <li><a id="secondarynav-biblio" href="http://www.biblio.uottawa.ca/index-e.php">Library</a></li>
      <li><a id="secondarynav-programs" href="http://www.admission.uottawa.ca/Default.aspx?tabid=2566">Programs</a></li>
      <li id="secondarynav-webmail"><a href="http://www.uottawa.ca/email">Webmail</a></li>
      <li id="secondarynav-more"><h2>Quick Picks</h2>
        <ul id="quickpick">
        	<li><a href="http://www.uottawa.ca/search/">Employee Directory</a></li>
					<li class="new-group"><a href="https://web3.uottawa.ca/infoweb/logon/en.html">InfoWeb</a></li>
          <li><a href="http://www.uottawa.ca/maps/">Maps</a></li>
          <li><a href="http://www.maestro.uottawa.ca/indexEN.asp">Virtual Campus</a></li>
          <li><a href="http://www.biblio.uottawa.ca/index-e.php">Library</a></li>
          <li class="new-group"><a href="http://www.admission.uOttawa.ca/Default.aspx?tabid=2547&amp;source=qp">Campus Tours</a></li>
          <li><a href="http://www.registrar.uOttawa.ca/Default.aspx?tabid=2681">Undergraduate Programs</a></li>
          <li><a href="http://www.grad.uottawa.ca/Default.aspx?tabid=1727">Graduate Programs</a></li>
	        <li><a href="http://www.uOttawa.ca/loansandawards/">Financial Aid</a></li>
          <li><a href="http://www.financialresources.uottawa.ca/student/payment-university-fees-en.php">Payment of Fees</a></li>	
	        <li><a href="http://www.admission.uottawa.ca/Default.aspx?tabid=2671">Sessional Dates</a></li>
					<li class="new-group"><a href="http://www.academiccareers.uottawa.ca/">Academic Careers</a></li>
          <li><a href="http://www.emergencypreparedness.uottawa.ca/">Emergency Preparedness</a></li>
        </ul>
      </li>
    </ul>
    
    <form id="global-site-search" method="get" action="http://search.uottawa.ca/en/">
      <label for="global-site-search-words" id="global-site-search-label">Search the University of Ottawa Web site</label>
      <input id="global-site-search-words" name="q" type="text" placeholder="Search uOttawa.ca">
      <input value="utf-8" name="ie" type="hidden">
      <input title="Search uOttawa.ca" class="submit" id="global-site-search-submit" type="submit">
    </form>
  </div>
  
  <!-- Emergency Banner -->
  <script type="text/javascript" src="http://web5.uottawa.ca/emergency/banner/banner-en.js" charset="utf-8"></script>
<?php endif; ?>
  
<?php if ($language->language == 'fr'): ?>
  <div id="main-banner">
    <a id="top" name="top"></a>
    
    <ul id="page-links">
      <li><a id="skip-to-content" href="#main-content"></a></li>
      <li><a id="skip-to-localnav" href="#local-nav"></a></li>
      <li><a <?php print uottawa_zen_publications_language_switcher_link($language->language, array('id' => 'ch-lang-url',)); ?> id="ch-lang-url" hreflang="en" rel="alternate" lang="en">English</a></li>
    </ul>

    
    <div id="main-branding">
      <div id="main-branding-logo">
	      <a rel="home" href="http://www.uottawa.ca/bienvenue.html" title="Page d'accueil">
        <img src="http://  web5.uottawa.ca/assets-templates/img/uOttawa-logo.png" alt="L'Universit&eacute; d'Ottawa, L'Universit&eacute; canadienne" height="53" width="130" /></a>
      </div>

      <div id="main-branding-tagline"></div>
    </div>

    <ul id="main-secondarynav">
      <li class="first"><a id="secondarynav-uozone" href="http://uozone.uottawa.ca/fr/frontpage" title="uoZone: connexion à vos données sécurisés">uoZone</a></li>
      <li><a id="secondarynav-biblio" href="http://www.biblio.uottawa.ca/index-f.php">Biblioth&egrave;que</a></li>
      <li><a id="secondarynav-programs" href="http://www.admission.uottawa.ca/Default.aspx?tabid=2565">Programmes</a></li>
      <li><a id="secondarynav-webmail" href="http://www.uottawa.ca/courriel">Courriel Web</a></li>
      <li id="secondarynav-more"><h2>Acc&egrave;s rapide</h2>
        <ul id="quickpick">
          <li><a href="http://www.uottawa.ca/icone-recherche/">R&eacute;pertoire des employ&eacute;s</a></li>
          <li class="new-group"><a href="https://web3.uottawa.ca/infoweb/logon/fr.html">InfoWeb</a></li>
          <li><a href="http://www.uottawa.ca/cartes">Cartes</a></li>
          <li><a href="http://www.maestro.uottawa.ca/indexFR.asp">Campus virtuel</a></li>
          <li><a href="http://www.biblio.uottawa.ca/index-f.php">Biblioth&egrave;que</a></li>
          <li class="new-group"><a href="http://www.admission.uottawa.ca/Default.aspx?tabid=2548&amp;source=qp">Visites du campus</a></li>
          <li><a href="http://www.uottawa.ca/academic/info/regist/annuaires/index.html">&Eacute;tudes de premier cycle</a ></li>
          <li><a href="http://www.etudesup.uottawa.ca/Default.aspx?tabid=1726">&Eacute;tudes sup&eacute;rieures</a></li>
          <li><a href="http://www.uottawa.ca/student/guidefrancais/1section/bourses/">Aide financi&egrave;re</a></li>
          <li><a href="http://www.ressourcesfinancieres.uottawa.ca/etudiant/payment-university-fees-fr.php">Paiement des droits</a></li>
          <li><a href="http://www.admission.uottawa.ca/Default.aspx?tabid=2672">Calendrier universitaire</a></li>
          <li class="new-group"><a href="http://www.carrieresuniversitaires.uottawa.ca/">Recrutement facultaire</a></li>
          <li><a href="http://www.mesuresdurgence.uottawa.ca/">Mesures d'urgence</a></li>
        </ul>
      </li>
    </ul>
    
    <form id="global-site-search" method="get" action="http://search.uottawa.ca/fr/">
      <label for="global-site-search-words" id="global-site-search-label">Chercher le contenu du site Web de l'Université d'Ottawa</label>
      <input id="global-site-search-words" name="q" type="text" placeholder="Chercher sur uOttawa.ca">
      <input value="utf-8" name="ie" type="hidden">
      <input title="Chercher sur uOttawa.ca" class="submit" id="global-site-search-submit" type="submit">
    </form>
  </div>

  <!-- Emergency Banner  -->
  <script type="text/javascript" src="http://web5.uottawa.ca/emergency/banner/banner-fr.js" charset="utf-8"></script>
<?php endif; ?>
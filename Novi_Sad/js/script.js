$(document).ready(function(){
// *********************************************************************************************************
$('body').html('<div id="preloader"></div>');
$('body').append('<section id="naslovna"></section>');
$('#naslovna').append('<div id="nsl1"></div>');
$('#nsl1').addClass('naslovna-container').append('<div id="wow1"></div>');
$('#wow1').addClass('wow fadeIn').append('<div id="logo3"></div>');
$('#logo3').addClass('naslovna-logo').append('<img class="" src="img/logo1.png" alt="Novi Sad">');
$('#wow1').append('<h2>Dobro dosli <span>u grad Novi Sad</span></h2>');
$('#wow1 span').addClass('rotating');
$("#naslovna .rotating").Morphext({
  animation: "flipInX",
  separator: ",",
  speed: 3000
});
$('#wow1').append('<div id="act1"></div>');
$('#act1').addClass('actions').append('<a target="_blank" href="../Exit/exit.html"> E X I T </a><a target="_blank" href="../Kontakt/index.html">KONTAKT</a>');
$('#act1 a[href="../Exit/exit.html"]').addClass('btn-get-started');
$('#naslovna .btn-get-started').css('width','190px');
$('#act1 a[href="../Kontakt/index.html"]').addClass('btn-services');
$('#naslovna .btn-services').css('width','190px');

// *********************************************************************************************************

$('body').append('<header id="header2"></header>');
$('#header2').addClass('hd2').append('<div id="cont2"></div>');
$('#cont2').addClass('container').append('<div class="container" id="cont2">'+
                                         '<div id="logo" class="pull-left">'+
                                         ' <a href="#naslovna"><img src="img/logo1.png" alt="" title="" /></img></a>'+
                                         ' <span></span><nav id="nav-menu-container" class="nav7">'+
                                         ' <span></span><ul class="nav-menu" id="nav2">'+
                                         ' <li class="menu-active"><a href="#naslovna">Naslovna</a></li>'+
                                                        '<li><a href="#about">O Novom Sadu</a></li>'+
                                                        '<li><a href="#services">Sta posetiti</a></li>'+
                                                        '<li><a href="#galery">Galerija</a></li>'+
                                                        '<li><a href="#footer">Kontaktirajte nas</a></li>');


// **************************************************************************************************************


$('body').append('<section id="about"></section>');
$('#about').append('<div id="cn3">');
$('#cn3').addClass('container wow fadeInUp').append('<div id="row3"></div>');
$('#row3').addClass('row').append('<div id="col5"></div>');
$('#col5').append('<h3 class="section-title">"Samo jedna je shvaćaš, varoš u koju se vraćaš"</h3>'+
                  '<div class="section-title-divider"></div>'+
                  '<p class="section-description">Istorija Novog Sada"</p>');

$('#about').append('<div id="cn4">');
$('#cn4').addClass('container about-container wow fadeInUp').append('<div id="row4"></div>');
$('#row4').addClass('row').append('<div id="col6"></div>');
$('#col6').addClass('col-md-6 col-md-push-6 about-content').append('<h2 class="about-title" id="ab1">Novi Sad je poneo ime Srpska Atina</h2>'+
                                                                    '<p class="about-text">Novi Sad je najveći grad Autonomne Pokrajine Vojvodine i njen administrativni centar, posle Beograda drugi grad u Srbiji po broju stanovnika. Prema konačnim rezultatima popisa stanovništva iz 2011. godine, na administrativnoj teritoriji Grada Novog Sada je živelo 341.625 stanovnika, dok je u samom naselju Novi Sad živelo 250.439 stanovnika, a na urbanom području koje čini Grad Novi Sad 277.522 stanovnika</p>'+
                                                                    '<p class="about-text">Osnovan 1694. godine, Novi Sad je dugo vremena bio centar srpske kulture, zbog čega je dobio ime „Srpska Atina“. Danas je Novi Sad veliki industrijski i finansijski centar srpske ekonomije, univerzitetski grad i školski centar, kulturni, naučni, zdravstveni i politički centar Autonomne Pokrajine Vojvodine, grad domaćin mnogih međunarodnih i domaćih privrednih, kulturnih, naučnih i sportskih manifestacija, kao i grad muzeja, galerija, biblioteka i pozorišta.</p>'+
                                                                    '<p class="about-text">Grad leži na obalama reke Dunav, između 1.252. i 1.262. kilometra rečnog toka. Na levoj obali Dunava se nalazi ravničarski deo grada (Bačka), dok je na desnoj obali, na obroncima Fruške gore, smešten brdoviti deo grada (Srem). Nadmorska visina sa bačke strane je od 72 do 80 m, dok se sa sremske strane kreće između 250 i 350 metara. Kod Novog Sada se u Dunav (sa leve strane reke) uliva Mali bački kanal, koji je deo sistema kanala Dunav—Tisa—Dunav. Bački deo grada je smešten sa obe strane ovog kanala.</p>');

// ************************************************************************************************************************


$('body').append('<section id="services"></section>');
$('#services').addClass('container wow fadeInUp').append('<div id="row5"></div>');
$('#row5').addClass('row').append('<div class="col-md-12" id="col7"><?div>'+
                                  '<h3 class="section-title">Šta posetiti u Novom Sadu</h3>'+
                                  '<div class="section-title-divider"></div>'+
                                  '<p class="section-description">Evropska prestonica kulture 2021 <br>Omladinska prestonica Evrope 2019</p>');
$('#services').append('<div id="row6"></div>');
$('#row6').addClass('row').append('<div id="col8"></div>');
$('#col8').addClass('col-md-4 service-item').append('<h4 class="service-title"><a href="Fruska_Gora.html">Fruska Gora</a></h4>'+
                                                    '<p class="service-description" id="fr1">Fruška gora je za Vojvođane planina i pored toga što njen najviši vrh, Crveni čot dostiže visinu od samo 539 metara. Ova geološki veoma stara planina pruža se duž jugioistočne periferije Panonske nizije u dužini od 80 km. Svojim severnim delovima Fruška gora se blago spušta ka Dunavu. Najsevernija tačka joj je Petrovaradinska tvrđava.</p>');


$('#row6').addClass('row').append('<div id="col9"></div>');                                                   
$('#col9').addClass('col-md-4 service-item').append('<h4 class="service-title" id="fm"><a href="Fruskogorski_manastiri.html">Fruskogorski manastiri</a></h4>'+
                                                    '<p class="service-description" id="fm2">Među najznačajniju kulturnu baštinu Fruške gore ubrajamo srpske pravoslavne manastire: Krušedol, Grgeteg, Staro i Novo Hopovo, Vrdnik, Jazak, Velika Remeta, Mala Remeta, Beočin, Rakovac, Đipša, Privina Glava, Kuveždin, Petkovica, Bešenovo i Šišatovac.</p>');

$('#row6').addClass('row').append('<div id="col10"></div>');   
$('#col10').addClass('col-md-4 service-item').append('<h4 class="service-title"><a href="Petrovaradinska_tvrdjava.html">Petrovaradinska tvrđava</a></h4>'+
                                                     '<p class="service-description">Petrovaradinska tvrđava, kao Gibraltar na Dunavu, svojom monumentalnom arhitekturom, kompleksnom fortifikacijom i vojno-strateškim položajem, vekovima dominira nepredvidivim prostorom civilizacijskog razmeđa evropske istorije.</p><br>');                                               

$('#services').append('<div id="row7"></div>');                                                     
$('#row7').addClass('row').append('<div id="col11"></div>');
$('#col11').addClass('col-md-4 service-item').append('<h4 class="service-title"><a href="Pozorista.html">Pozorišta</a></h4>'+
                                                     '<p class="service-description">Fruška gora je za Vojvođane planina i pored toga što njen najviši vrh, Crveni čot dostiže visinu od samo 539 metara. Ova geološki veoma stara planina pruža se duž jugioistočne periferije Panonske nizije u dužini od 80 km. Svojim severnim delovima Fruška gora se blago spušta ka Dunavu. Najsevernija tačka joj je Petrovaradinska tvrđava.</p>');

$('#row7').addClass('row').append('<div id="col12"></div>');
$('#col12').addClass('col-md-4 service-item').append('<h4 class="service-title"><a href="Novi_Sad_na_Dunavu.html">Novi Sad grad na Dunavu</a></h4>'+
                                                     '<p class="service-description">Fruška gora je za Vojvođane planina i pored toga što njen najviši vrh, Crveni čot dostiže visinu od samo 539 metara. Ova geološki veoma stara planina pruža se duž jugioistočne periferije Panonske nizije u dužini od 80 km. Svojim severnim delovima Fruška gora se blago spušta ka Dunavu. Najsevernija tačka joj je Petrovaradinska tvrđava.</p>');

$('#row7').addClass('row').append('<div id="col13"></div>');
$('#col13').addClass('col-md-4 service-item').append('<h4 class="service-title"><a href="MuzejiIGalerije.html">Muzeji i Galerije</a></h4>'+
                                                     '<p class="service-description">Fruška gora je za Vojvođane planina i pored toga što njen najviši vrh, Crveni čot dostiže visinu od samo 539 metara. Ova geološki veoma stara planina pruža se duž jugioistočne periferije Panonske nizije u dužini od 80 km. Svojim severnim delovima Fruška gora se blago spušta ka Dunavu.</p>');

// ************************************************************************************************************************

$('body').append('<section id="subscribe"></section>');
$('#subscribe').addClass('sub3').append('<div id="sub1"></div>');
$('#sub1').addClass('row').append('<div id="sub2"></div>');
$('#sub2').addClass('col-md-8').append('<p class="subscribe-text">"Ima u grbu grada beli golub koji ne znači samo čistotu i mir, nego i krilatost. Neka vam je dobro jutro svi vi, krilati. Neka vam je dobro jutro svi vi, beli u sebi. Neka vam je dobro jutro vršnjaci svoje borbe, vršnjaci svoga roda, vršnjaci svojih ideala ..."<br>Miroslav Antić:"Pečat na srcu vremena"</p>');

// ***********************************************************************************************************************

$('body').append('<section id="galery"></section>');
$('#galery').addClass('container wow fadeInUp').append('<div id="gal"></div>');
$('#gal').addClass('row').append('<div class="col-md-12"></div>'+
                                 '<h3 class="section-title">FOTOGRAFIJE</h3>'+
                                 ' <div class="section-title-divider"></div>'+
                                 '<p class="section-description">Pratite sva aktuelna dešavanja u Novom Sadu i prvi saznajte koji nas događaji očekuju u narednom periodu.</p>');

$('#galery').append('<div id="gal3"></div>');
$('#gal3').addClass('row').append('<div id="gg1"></div>');
$('#gg1').addClass('col-md-3').append(' <a class="galery-item" style="background-image: url(img/1.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Petrovaradinska tvrdjava</h4>'+
                                       ' <span>Novi Sad</span>');

$('#galery').append('<div id="gal3"></div>');
$('#gal3').addClass('row').append('<div id="gg2"></div>');
$('#gg2').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/2.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Most Duga</h4>'+
                                      '<span>Novi Sad</span>');

$('#galery').append('<div id="gal3"></div>');     
$('#gal3').addClass('row').append('<div id="gg3"></div>');  
$('#gg3').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/3.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Sat na Petrovaradinskoj tvrdjavi</h4>'+
                                      '<span>Novi Sad</span>');                           

$('#galery').append('<div id="gal3"></div>');     
$('#gal3').addClass('row').append('<div id="gg4"></div>');  
$('#gg4').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/4.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Master Centar</h4>'+
                                      '<span>Novi Sad</span>');   

$('#galery').append('<div id="gal3"></div>');   
$('#gal3').addClass('row').append('<div id="gg5"></div>');
$('#gg5').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/5.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Crkva Imena Marijinog</h4>'+
                                      '<span>Novi Sad</span>'); 

$('#galery').append('<div id="gal3"></div>'); 
$('#gal3').addClass('row').append('<div id="gg6"></div>');
$('#gg6').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/6.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Dunavski park</h4>'+
                                      '<span>Novi Sad</span>');

$('#galery').append('<div id="gal3"></div>'); 
$('#gal3').addClass('row').append('<div id="gg7"></div>');
$('#gg7').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/7.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Kej zrtava racije</h4>'+
                                      '<span>Novi Sad</span>');

$('#galery').append('<div id="gal3"></div>'); 
$('#gal3').addClass('row').append('<div id="gg8"></div>');
$('#gg8').addClass('col-md-3').append('<a class="galery-item" style="background-image: url(img/8.jpg);" href="">'+
                                      '<div class="details">'+
                                      '<h4>Spens</h4>'+
                                      '<span>Novi Sad</span>');

// ***********************************************************************************************************************

$('body').append('<section id="footer"></section>');
$('#footer').addClass('ft2').append('<footer id="ft"></footer>');
$('#ft').addClass('footer-distributed').append('<div class="footer-left">'+
                                               '<h3><a href="img/12.png"></h3>'+
                                               '<img src="img/12.png"></img>'+
                                               '<br><p class="footer-company-name">Novi Sad &copy; 2018</p');


$('#ft').addClass('footer-distributed').append('<div id="ft4"></div>');
$('#ft4').addClass('footer-left').append('<div id="ft3"></div>');
$('#ft3').addClass('footer-icons').append('<a href="#"><i class="fa fa-facebook"></i></a>'+
                                          '<a href="#"><i class="fa fa-twitter"></i></a>'+
                                          '<a href="#"><i class="fa fa-linkedin"></i></a>'+
                                          '<a href="#"><i class="fa fa-github"></i></a>');


$('#ft').addClass('footer-distributed').append('<div id="ft5"></div>');
$('#ft5').addClass('footer-right').append('<p>Contact Us</p>'+
                                          '<form action="#" method="post">'+
                                          '<input type="text" name="email" placeholder="Email" />'+
                                          '<textarea name="message" placeholder="Message"></textarea>'+
                                          '<button>Send</button>');

('body').append('<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>');

  })




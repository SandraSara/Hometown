$(document).ready(function() {
    //*** header - navigation ***
    $('body').append('<header></header>');
    $('header').attr('id','top').append('<nav></nav>');
    $('header nav').addClass('navbar navbar-inverse navbar-fixed-top cbp-af-header').append('<div id="headnavdiv"></div>');
    $('#headnavdiv').addClass('container-fluid').append('<div id="navdiv1"></div>');
    $('#navdiv1').addClass('navbar-header').append('<button></button>');
    $('#navdiv1 button').addClass('navbar-toggle collapsed')
                .attr('data-toggle','collapse')
                .attr('data-target','#bs-example-navbar-collapse-1')
                .attr('aria-expanded','false')
                .append('<span>Toggle navigation</span>')
                .append('<span></span><span></span><span></span>');
    $('#navdiv1 button span').addClass('icon-bar');
    $('#navdiv1 button span:first-child').removeClass('icon-bar').addClass('sr-only');
    $('#navdiv1').append('<a><img/></a>');
    $('#navdiv1 a').attr('href','#top');
    $('#navdiv1 img').addClass('img-circle').attr('src','assets/img/logoExitimage.png');
    $('#headnavdiv').append('<div id="bs-example-navbar-collapse-1"></div>');
    $('#bs-example-navbar-collapse-1').addClass('collapse navbar-collapse').append('<ul></ul>');
    $('#bs-example-navbar-collapse-1 ul').addClass('nav navbar-nav navbar-right')
                .append('<li><a href="#top">Home</a></li>')
                .append('<li><a href="#about">About Us</a></li>')
                .append('<li><a href="#festivals">Festivals</a></li>')
                .append('<li><a href="#news">News</a></li>')
                .append('<li><a href="#contact">Contact Us</a></li>');

    //*** slika Home ***
    $('body').append('<div id="bodydiv"></div>');
    $('#bodydiv').addClass('container-fluid').append('<section id="section1"></section>');
    $('#section1').addClass('row title-row')
                .append('<div></div>')
                .append('<img/>')
                .append('<div></div>');
    $('#section1 div:first-child').addClass('fill-screen stellar-bg').attr('data-stellar-background-ratio','0.25')
                .css('background-image','url(assets/img/vatromet_exit_1.jpg)');
    $('#section1 img').addClass('img-responsive  title-image').attr('src','assets/img/Exit_logo.png');
    $('#section1 div:last-child').addClass('down-button').append('<a></a>');
    $('#section1 div:last-child a').addClass('btn').attr('href','#about')
                .append('<i></i>');
    $('#section1 div:last-child a i').addClass('fa fa-arrow-circle-down fa-4x').attr('aria-hidden','true');
    
    //*** tekst About ***
    $('#bodydiv').append('<section id="about"></section>');
    $('#about').addClass('row text-banner').append('<h1>EXIT FESTIVAL</h1>')
                .append('<p>EXIT je zvanično najbolji festival Evrope, objavljeno je na dodeli Evropskih festivalskih nagrada u Holandiji!'+
                'EXIT je pobedio u glavnoj kategoriji u konkurenciji sa vrtoglavih 350 festivala iz više od 35 zemalja, uz preko'+ 
                'milion glasova publike i mišljenje stručnog žirija sastavljenog od najeminentnijih ljudi svetske muzičke industrije.'+
                'Exitovi festivali bili su u finalu u čak šest kategorija, a sam EXIT u rekordne tri kategorije, uključujući i osvojenu'+
                'glavnu nagradu za najbolji veliki evropski festival, te najboljeg festivalskog organizatora u Evropi i nagradu "Take a'+
                'Stand" za društveni aktivizam!</p>'+
                '<p>EXIT je u konkurenciji za glavnu nagradu bio sa drugim evropskim festivalskim gigantima, kao što su Tomorrowland,'+
                'Sziget Festival, Lowlands, Wacken Open Air i mnogi drugi. Ovo je druga po redu šampionska titula koju je EXIT osvojio'+
                'na Evropskim festivalskim nagradama još od njihovog ustanovljenja 2010. godine, a svake godine je u najužem izboru za'+
                'najbolji evropski festival. EXIT je prethodno osvojio nagradu za najbolji veliki evropski festival za 2013. godinu, dok'+
                'je 2007. godine izglasan za najbolji evropski festival van Velike Britanije od strane Britanskih festivalskih nagrada.</p>'+
                '<p>EXIT tim ove godine predstavlja najveći festivalski poduhvat do sada, pod nazivom EXIT Freedom 2018, koji čine čak pet '+
                'festivala u pet zemalja. Predvodi ih zvanično najbolji evropski festival EXIT, a prvi na redu je Festival 84 na olimpijskoj '+
                'Jahorini. Slede Sea Star u Umagu i Revolution u Temišvaru kao uvertira za najveće okupljanje na mestu koje čuva titulu, '+
                'Petrovaradinskoj tvrdavi, dok je za samu završnicu leta rezervisan Sea Dance, koji je nagradu za najbolji'+
                'festival do 40.000 posetilaca dnevno osvojio pre tri godine.</p>');
    $('#about p').addClass('text-justify');

    //*** image ***
    $('#bodydiv').append('<section id="image1"></section>');
    $('#image1').addClass('row').append('<div></div>');
    $('#image1 div').addClass('fill-screen fiksirani-attachment').css('background-image','url(assets/img/exit-6.jpg)');
    
    //*** wow elementi Festivals ***
    $('#bodydiv').append('<section id="festivals"></section>');
    $('#festivals').addClass('row activity-section').append('<div id="fest1"></div>'+
                '<div id="fest2"></div>'+
                '<div id="fest3"></div>'+
                '<div id="fest4"></div>');
    $('#festivals div').addClass('activity-element col-md-3 wow flipInX');
    $('#fest1').append('<img/><h2>Festival 84</h2>'+
                '<p>Festival 84 premijerno se održava od 15. do 18. marta 2018. godine na više lokacija u okviru Olimpijskog centra Jahorina</p>');
    $('#fest1 img').attr('src','assets/img/84jahorina.png');
    $('#fest2').append('<img/><h2>Sea Star Festival</h2>'+
                '<p>Sea Star Festival je prvi put održan od 25. do 28. maja 2017. godine u Umagu u Hrvatskoj. Tradicija se nastavlja i 2018. godine</p>');
    $('#fest2 img').attr('src','assets/img/seastar_logo.png');
    $('#fest3').append('<img/><h2>Revolution Fest</h2>'+
                '<p>EXIT karavan stiže u junu 2018. godine i u Rumuniju u Temišvar, u okviru magične atmosfere Revolution festivala</p>');
    $('#fest3 img').attr('src','assets/img/revolusionlogo.png');
    $('#fest4').append('<img/><h2>Sea Dance Festival</h2>'+
                '<p>Sea Dance Festival je smešten u Budvi u Crnoj Gori. Termin održavanja festivala 2018. godine je posle 25. avgusta</p>');
    $('#fest4 img').attr('src','assets/img/sdf_logo.png');
    
    //*** caurosel images gallery ***
    $('#bodydiv').append('<section id="galerija"></section>');
    $('#galerija').addClass('row').append('<div id="carousel"></div>');
    $('#carousel').attr('data-ride','carousel').addClass('carousel slide').append('<ol></ol>');
    $('#carousel ol').addClass('carousel-indicators').append('<li data-slide-to="0"></li>'+
                '<li data-slide-to="1"></li>'+
                '<li data-slide-to="2"></li>'+
                '<li data-slide-to="3"></li>'+
                '<li data-slide-to="4"></li>');
    $('#carousel ol li').attr('data-target','#carousel');
    $('#carousel ol li:first-child').addClass('active');
    $('#carousel').append('<div id="wrapper" role="listbox">');
    $('#wrapper').addClass('carousel-inner').append('<div id="imggal1"></div>'+
                '<div id="imggal2"></div>'+
                '<div id="imggal3"></div>'+
                '<div id="imggal4"></div>'+
                '<div id="imggal5"></div>');
    $('#wrapper div').addClass('item');
    $('#imggal1').addClass('active').append('<img src="assets/img/jahorina0.png">'+
                '<div id="imggall1"></div>');
    $('#imggall1').addClass('carousel-caption').append('<h3>Festival 84</h3><p>Jahorina</p>');
    $('#imggal2').append('<img src="assets/img/jahorina.png">'+
                '<div id="imggall2"></div>');
    $('#imggall2').addClass('carousel-caption').append('<h3>Festival 84</h3><p>Jahorina</p>');
    $('#imggal3').append('<img src="assets/img/umag.png">'+
                '<div id="imggall3"></div>');
    $('#imggall3').addClass('carousel-caption').append('<h3>Sea Star Festival</h3><p>Umag</p>');
    $('#imggal4').append('<img src="assets/img/revolution.png">'+
                '<div id="imggall4"></div>');
    $('#imggall4').addClass('carousel-caption').append('<h3>Revolution Festival</h3><p>Temišvar</p>');
    $('#imggal5').append('<img src="assets/img/budva.png">'+
                '<div id="imggall5"></div>');
    $('#imggall5').addClass('carousel-caption').append('<h3>Sea Dance Festival</h3><p>Budva</p>');
    $('#carousel').append('<a id="contr1"></a><a id="contr2"></a>');
    $('#contr1').attr('href','#carousel').attr('role','button').attr('data-slide','prev')
                .addClass('left carousel-control').append('<span id="contr1span1"></span>'+
                '<span id="contr1span2">Previous</span>');
    $('#contr1span1').attr('aria-hidden','true').addClass('glyphicon glyphicon-chevron-left');
    $('#contr1span2').addClass('sr-only');
    $('#contr2').attr('href','#carousel').attr('role','button').attr('data-slide','next')
                .addClass('right carousel-control').append('<span id="contr2span1"></span>'+
                '<span id="contr2span2">Next</span>');
    $('#contr2span1').attr('aria-hidden','true').addClass('glyphicon glyphicon-chevron-right');
    $('#contr2span2').addClass('sr-only');
    
    //*** Vesti i vreme ***
    $('#bodydiv').append('<section id="news"></section>');
    $('#news').addClass('row text-vesti')
                .append('<h1>VESTI IZ SRBIJE</h1>'+
                '<div id="sat"></div><br>'+
                '<div id="vesti"></div>');
    $('#sat').attr({style:'color:#777;font-size:24px;font-weight:bold'});
    $('#vesti').addClass('vesti');
    
    var vesti = "";
    $.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?country=rs&apiKey=be566796228140c5833f4215726a2530',
    dataType: 'json'
    }).done(function(data, status, xhr) {
        for(var i = 0; i<data.articles.length ; i++){

            vesti = '<table><tr><td><img width="180px" alt="" id="newsimg" src="'+
            data.articles[i].urlToImage+'"></td><td valign="top"><p id="titl"><b>'+
            data.articles[i].title+'</b></p><p id="descr">'+
            data.articles[i].description+'</p></td><td valign="bottom"><a href="'+
            data.articles[i].url+'" target="_blank"><button type="submit">Opširnije</button></a></td></tr></table><hr>';
            
            $('#vesti').append(vesti);
            $('#vesti table td').css('border','10px solid #f0f0f0');
        } 
    }).fail(function(xhr, status, error) {
        console.log('Desila se greška: ' + status);
    });

    //*** image ***
    $('#bodydiv').append('<section id="image2"></section>');
    $('#image2').addClass('row').append('<div></div>');
    $('#image2 div').addClass('fill-screen fiksirani-attachment').css('background-image','url(assets/img/av-exit_3.jpg)');
    
    //*** Kontakt ***
    $('#bodydiv').append('<section id="contact"></section>');
    $('#contact').addClass('row contact-us wow shake').append('<h1>KONTAKT</h1>'+
                '<h3>Petra Kočića 15a. Novi Sad, Serbia</h3>'+
                '<p>ZA SVE INFORMACIJE PISITE NA:</p>'+
                '<p>answerme@exitfest.org</p>');
    $('body').append('<footer></footer>');
    $('footer').addClass('container-fluid').append('<h1>EXIT fest - <span><a>NOVI SAD</a></span></h1>');
    $('footer a').attr({href:'../Novi_Sad/home_town.html',target:'_blank'});
    
    otvoriReklamu('reklama.html','PROGRAM 2018','width=1290, height=250, left=50, top=450');
    ispisVremena();
})

var reklama;

function otvoriReklamu(URL, ime, parametri) {
    reklama = window.open(URL, ime, parametri);
    setTimeout('reklama.close()','2500');
}

function ispisVremena() {
    var $vreme = new Date();
    var godina = $vreme.getFullYear();
    var mesec = $vreme.getMonth();
    var dan = $vreme.getDate();
    var danUNedelji = $vreme.getDay();
    switch (danUNedelji) {
        case 0:
            danUNedelji = "nedelju";
            break;
        case 1:
            danUNedelji = "ponedeljak";
            break;
        case 2:
            danUNedelji = "utorak";
            break;
        case 3:
            danUNedelji = "sredu";
            break;
        case 4:
            danUNedelji = "četvrtak";
            break;
        case 5:
            danUNedelji = "petak";
            break;
        case 6:
            danUNedelji = "subotu";
    }
    switch (mesec) {
        case 0:
            mesec = "Januar";
            break;
        case 1:
            mesec = "Februar";
            break;
        case 2:
            mesec = "Mart";
            break;
        case 3:
            mesec = "April";
            break;
        case 4:
            mesec = "Maj";
            break;
        case 5:
            mesec = "Jun";
            break;
        case 6:
            mesec = "Jul";
            break;
        case 7:
            mesec = "Avgust";
            break;
        case 8:
            mesec = "Septembar";
            break;
        case 9:
            mesec = "Oktobar";
            break;
        case 10:
            mesec = "Novembar";
            break;
        case 11:
            mesec = "Decembar";
    }
    
    $('#sat').html(' za '+ danUNedelji +' '+ dan +'. '+ mesec +' '+ godina +' godine');
}

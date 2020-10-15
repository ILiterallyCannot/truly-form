$(function () {
    var form = $("#formId");
    var errorList = $('#errorMessages', form);
    // List of cities (Scraped from https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Finland)
    const cities = [
        'akaa',
        'alajärvi',
        'alavieska',
        'alavus',
        'asikkala',
        'askola',
        'aura',
        'brändö',
        'eckerö',
        'enonkoski',
        'enontekiö',
        'northern sami',
        'espoo',
        'eura',
        'eurajoki',
        'evijärvi',
        'finström',
        'forssa',
        'föglö',
        'geta',
        'haapajärvi',
        'haapavesi',
        'hailuoto',
        'halsua',
        'hamina',
        'hammarland',
        'hankasalmi',
        'hanko',
        'harjavalta',
        'hartola',
        'hattula',
        'hausjärvi',
        'heinola',
        'heinävesi',
        'helsinki',
        'hirvensalmi',
        'hollola',
        'honkajoki',
        'huittinen',
        'humppila',
        'hyrynsalmi',
        'hyvinkää',
        'hämeenkyrö',
        'hämeenlinna',
        'ii',
        'iisalmi',
        'iitti',
        'ikaalinen',
        'ilmajoki',
        'ilomantsi',
        'imatra',
        'inari',
        'inari sami',
        'skolt sami',
        'northern sami',
        'ingå',
        'isojoki',
        'isokyrö',
        'jakobstad',
        'janakkala',
        'joensuu',
        'jokioinen',
        'jomala',
        'joroinen',
        'joutsa',
        'juuka',
        'juupajoki',
        'juva',
        'jyväskylä',
        'jämijärvi',
        'jämsä',
        'järvenpää',
        'kaarina',
        'kaavi',
        'kajaani',
        'kalajoki',
        'kangasala',
        'kangasniemi',
        'kankaanpää',
        'kannonkoski',
        'kannus',
        'karijoki',
        'karkkila',
        'karstula',
        'karvia',
        'kaskinen',
        'kauhajoki',
        'kauhava',
        'kauniainen',
        'kaustinen',
        'keitele',
        'kemi',
        'kemijärvi',
        'keminmaa',
        'kempele',
        'kerava',
        'keuruu',
        'kihniö',
        'kimitoön',
        'kinnula',
        'kirkkonummi',
        'kitee',
        'kittilä',
        'kiuruvesi',
        'kivijärvi',
        'kokemäki',
        'kokkola',
        'kolari',
        'konnevesi',
        'kontiolahti',
        'korsholm',
        'korsnäs',
        'koski tl',
        'kotka',
        'kouvola',
        'kristinestad',
        'kronoby',
        'kuhmo',
        'kuhmoinen',
        'kumlinge',
        'kuopio',
        'kuortane',
        'kurikka',
        'kustavi',
        'kuusamo',
        'kyyjärvi',
        'kärkölä',
        'kärsämäki',
        'kökar',
        'lahti',
        'laihia',
        'laitila',
        'lapinjärvi',
        'lapinlahti',
        'lappajärvi',
        'lappeenranta',
        'lapua',
        'larsmo',
        'laukaa',
        'lemi',
        'lemland',
        'lempäälä',
        'leppävirta',
        'lestijärvi',
        'lieksa',
        'lieto',
        'liminka',
        'liperi',
        'lohja',
        'loimaa',
        'loppi',
        'loviisa',
        'luhanka',
        'lumijoki',
        'lumparland',
        'luumäki',
        'malax',
        'mariehamn',
        'marttila',
        'masku',
        'merijärvi',
        'merikarvia',
        'miehikkälä',
        'mikkeli',
        'muhos',
        'multia',
        'muonio',
        'muurame',
        'mynämäki',
        'myrskylä',
        'mäntsälä',
        'mänttä-vilppula',
        'mäntyharju',
        'naantali',
        'nakkila',
        'nivala',
        'nokia',
        'nousiainen',
        'nurmes',
        'nurmijärvi',
        'nykarleby',
        'närpes',
        'orimattila',
        'oripää',
        'orivesi',
        'oulainen',
        'oulu',
        'outokumpu',
        'padasjoki',
        'paimio',
        'paltamo',
        'pargas',
        'parikkala',
        'parkano',
        'pedersöre',
        'pelkosenniemi',
        'pello',
        'perho',
        'pertunmaa',
        'petäjävesi',
        'pieksämäki',
        'pielavesi',
        'pihtipudas',
        'pirkkala',
        'polvijärvi',
        'pomarkku',
        'pori',
        'pornainen',
        'porvoo',
        'posio',
        'pudasjärvi',
        'pukkila',
        'punkalaidun',
        'puolanka',
        'puumala',
        'pyhtää',
        'pyhäjoki',
        'pyhäjärvi',
        'pyhäntä',
        'pyhäranta',
        'pälkäne',
        'pöytyä',
        'raahe',
        'raisio',
        'rantasalmi',
        'ranua',
        'raseborg',
        'rauma',
        'rautalampi',
        'rautavaara',
        'rautjärvi',
        'reisjärvi',
        'riihimäki',
        'ristijärvi',
        'rovaniemi',
        'ruokolahti',
        'ruovesi',
        'rusko',
        'rääkkylä',
        'saarijärvi',
        'salla',
        'salo',
        'saltvik',
        'sastamala',
        'sauvo',
        'savitaipale',
        'savonlinna',
        'savukoski',
        'seinäjoki',
        'sievi',
        'siikainen',
        'siikajoki',
        'siikalatva',
        'siilinjärvi',
        'simo',
        'sipoo',
        'siuntio',
        'sodankylä',
        'northern sami',
        'soini',
        'somero',
        'sonkajärvi',
        'sotkamo',
        'sottunga',
        'sulkava',
        'sund',
        'suomussalmi',
        'suonenjoki',
        'sysmä',
        'säkylä',
        'taipalsaari',
        'taivalkoski',
        'taivassalo',
        'tammela',
        'tampere',
        'tervo',
        'tervola',
        'teuva',
        'tohmajärvi',
        'toholampi',
        'toivakka',
        'tornio',
        'turku',
        'tuusniemi',
        'tuusula',
        'tyrnävä',
        'ulvila',
        'urjala',
        'utajärvi',
        'utsjoki',
        'northern sami',
        'uurainen',
        'uusikaupunki',
        'vaala',
        'vaasa',
        'valkeakoski',
        'vantaa',
        'varkaus',
        'vehmaa',
        'vesanto',
        'vesilahti',
        'veteli',
        'vieremä',
        'vihti',
        'viitasaari',
        'vimpeli',
        'virolahti',
        'virrat',
        'vårdö',
        'vörå',
        'ylitornio',
        'ylivieska',
        'ylöjärvi',
        'ypäjä',
        'ähtäri',
        'äänekoski',
    ];

    $('#formId input').blur(function () {
        if (!this.value) {
            $(this).attr("placeholder", "This field is required!");
            $(this).addClass(".error")
        }
        else {
            $(this).removeClass(".error")
        }
    });

    $('#formCity').blur(function () {
        var cityLabel = $("#formCity").attr('name');
        var message = 'Check your spelling! The City MUST be in Finland!';
        if (jQuery.inArray($('#formCity').val().toLowerCase(), cities) != -1) {
            $(".cityError").remove();
        }
        else {
            $(".cityError").remove();
            $("#cityErrorBox").append('<li class="cityError error"><span>' + cityLabel + ': ' + '</span>' + message + '</li>');
        }
    });

    $('#formArea').blur(function () {
        var areaLabel = $("#formArea").attr('name');
        var message = 'Enter a NUMBER between 7 and 999!';
        var inputArea = $("#formArea").val()
        if ($.isNumeric(inputArea) && inputArea > 6 && inputArea < 999) {
            $(".areaError").remove();
        }
        else {
            $(".areaError").remove();
            $("#areaErrorBox").append('<li class="areaError error"><span>' + areaLabel + ': ' + '</span>' + message + '</li>');
        }
    });

    $('#formEmail').blur(function (e) {
        var emailLabel = $("#formEmail").attr('name');
        var message = 'Invalid Email Address!';
        var userinput = $("#formEmail").val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var gmailPattern = /(^\b[A-Z0-9._%-]+@gmail).*?$/i;
        if (gmailPattern.test(userinput)) {
            $("#formEmail").val("");
            console.log(userinput + " before");
            userinput = userinput.replace(/(^\b[A-Z0-9._%-]+@gmail).*?$/i, "$1.com");
            console.log(userinput + " after");
            $("#formEmail").val(userinput);
            $(".emailError").remove();
        }
        else if (pattern.test(userinput)) {
            $(".emailError").remove();
        }
        else {
            $(".emailError").remove();
            $("#emailErrorBox").append('<li class="emailError error"><span>' + emailLabel + ': ' + '</span>' + message + '</li>');
        }
    });

    $("#formId").submit(function (e) {
        e.preventDefault()
        var count = $(".error", form).length;
        console.log("Error messages: " + count)
        if(count === 0) {
            alert("Success!");   
        }
        else {
            alert("There are Invalid Fields!");
        }
        
    });
});
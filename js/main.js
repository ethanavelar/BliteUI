$(document).ready( function() {  
    $('#overlay').hide();
    
    $('img.round').click( function() {
        var getsource = $(this).attr("src");
        var target = event.target || event.srcElement;
        var id = target.id;
        if (id == 'one') {
            $('div#userHeader').css('background-image', 'url(https://lh3.googleusercontent.com/-SDKIkp26kNY/UcojL0T3pBI/AAAAAAAABkU/ktL4c0hdtXE/s928-fcrop64=1,00001495ffffecb3/%25C2%25A9%2BBrian%2BMatiash_20110102-IMG_8104-Edit.jpg)');
            document.getElementById('name').innerHTML = "Axel Blaze";
            $("#profile").attr("src", getsource);
            document.getElementById('about').innerHTML = "I am Axel also known as Shahryaar Syed, I make these icons because I adore Material Design. I am obsessed with Android® Lollipop. I thank all the people who helped me in this project. In fact they are now a part of JABE Devs. Thank you Brody Over, Ethan Taylor, Adrien Zier Joaquin Jimenez, and last but definitely not least Aroon Visu.";
        
        } else if (id == 'two') {
            $('div#userHeader').css('background-image', 'url(https://lh5.googleusercontent.com/-A95QUrnHuDQ/VTmgX2lA6zI/AAAAAAAAC3M/6s50u_X4FO8/w505-h898-no/Sketch234185012.png)');
            $("#profile").attr("src", getsource);
            document.getElementById('name').innerHTML = "Joaquin Jimenez";
        } else if(id == 'three') {
            console.log('Member: Ethan Taylor');
            $('div#userHeader').css('background-image', 'url(https://lh4.googleusercontent.com/-dfM55gR917A/VPKTWkqgaUI/AAAAAAAAGvk/pe4ieo5bb9c/w1212-h907-no/mountains.jpg)');
            $("#profile").attr("src", getsource);
            document.getElementById('name').innerHTML = "Ethan Taylor";
            document.getElementById('about').innerHTML = "Hello! I'm Ethan Taylor, a web developer/designer for this project.";
        } else if(id == 'four') {
            
            $('div#userHeader').css('background-image', 'url(https://lh3.googleusercontent.com/-Fvp26Z8SJ34/VUFiA93e7rI/AAAAAAAAcxQ/o1I3Dc8aUKI/w1537-h898-no/2015-04-29.jpg)');
            $("#profile").attr("src", getsource);
            document.getElementById('name').innerHTML = "Adrien Zier";
        
        } else if (id == 'five') {
            $('div#userHeader').css('background-image', 'url(https://lh5.googleusercontent.com/-ck9vpQTVnbg/VMVVl5MQhbI/AAAAAAAAKxw/CRDz4nDQAyk/w688-h276-no/2015%2B-%2B1)');
            $("#profile").attr("src", getsource);
            document.getElementById('name').innerHTML = "Aroon Visu";
        } else if(id == 'six') {
            $('div#userHeader').css('background-image', 'url(https://lh3.googleusercontent.com/-4IbGr8b42r0/VSG2j_e4EeI/AAAAAAAAIf8/l4LOrpE314Q/w1134-h907-no/9133eedf-2914-42c0-b885-ae4b124f37d7)');
            $("#profile").attr("src", getsource);
            document.getElementById('name').innerHTML = "Brody Over";
        }
        
        $('#overlay').fadeToggle();
        
        $('#closeOverlay').click(function() {
            $('#overlay').fadeOut();
        });
    });
    
});
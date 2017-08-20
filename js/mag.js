function chatka_maga()
{


    $("#dialog").fadeIn(0);
        $("#odpowiedzi").fadeIn(0);
zdarzenie_hide();

if(bandyci_pokonani==1)
{
$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');
}

alchemik.play();
music_ambient.stop();


$("#miasto").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#zlecenie_slot").fadeOut(0);
$("#tekst").fadeIn(500);
$("#cala_mapa").fadeOut(0);
$("#lokacja").fadeIn(0);
$("#miasto").fadeIn(500);
$("#tlo_test").fadeIn(0);

$("#medytacja").fadeIn(0);



document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('tlo_test').style.backgroundImage = "url('mag_tower.jpg')";
cmentarz1.stop();
cmentarz1.play();
document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";

document.getElementById("lokacja").onclick = function() {
$("#odpowiedzi").transition({scale:1,opacity:1}, 800, 'ease');        
$("#dialog").transition({scale:1,opacity:1}, 800, 'ease');
$("#okno_teren").transition({ scale:0,opacity:0}, 600, 'ease');
rozmowa();

};

document.getElementById("miasto").onclick = function() {
$("#okno_teren").transition({ scale:0,opacity:0}, 600, 'ease');

mapa();
};

    document.getElementById("medytacja").style.color="yellow";  
    
    
document.getElementById("tekst").innerHTML = "Witaj";
document.getElementById("lokacja").innerHTML ='<i class="icon-lightbulb"></i>'+ "Rozmowa"; 
 document.getElementById("medytacja").innerHTML ='<i class="icon-lightbulb"></i>'+ "Sklep alchemiczny";    
document.getElementById("miasto").innerHTML ='<i class="icon-address"></i>'+  " Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none"; 
document.getElementById("miasto").style.borderStyle = "none"; 
document.getElementById("miasto").style.borderBottom = "solid"; 
document.getElementById("medytacja").style.borderStyle = "none"; 
document.getElementById("medytacja").style.borderBottom = "solid"; 

       document.getElementById("medytacja").onclick = function(){
sklep_alchemiczny_pokaz();

}; 
    
    
    

if(bandyci_pokonani==0)
{
zdarzenie_pokaz();
$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
document.getElementById('zdarzenie').style.backgroundImage = "url('mag_tower2.jpg')";  
document.getElementById("zdarzenie_info").innerHTML = "Na drzwiach wisi kartka: <br> <spam style='color:yellow';> Nie ma mnie, jak wrócę to będę</spam>  ";
document.getElementById("zdarzenie_open").innerHTML = "Brak";
document.getElementById("zdarzenie_quit").innerHTML = "Zamknij";
document.getElementById("zdarzenie_open").style.color="dimgrey";         
document.getElementById("zdarzenie_open").style.marginTop = "100px"; 
document.getElementById("zdarzenie_quit").style.marginTop = "100px"; 
document.getElementById("zdarzenie_open").onclick = function(){
not_allowed();
};
document.getElementById("zdarzenie_quit").onclick = function(){
zlecenie_sfx.play();
zdarzenie_zanik();
document.getElementById("zdarzenie_open").style.color="green";  
}; 

    
    
    
    
}



}




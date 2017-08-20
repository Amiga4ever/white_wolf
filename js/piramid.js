
function piramida()
{
    po_walce=5;
     aktualny_poziom = piramida_poziom;
    
        
      $("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
 $("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');

    kto_atakuje();
    music_ambient.stop();
    $("#cala_mapa").fadeOut(0);
    $("#tlo_test").fadeIn(0);
        $("#miasto").fadeOut(0);


    $("#zlecenie_slot").fadeOut(0);
    $("#exra_slot").fadeOut(0);
    $("#medytacja").fadeOut(0);
    $("#zlecenie_slot").fadeOut(0);
    $("#piramida_level").fadeIn(0);

    $("#okno_teren").fadeIn(500);
    $("#tekst").fadeIn(500);
    $("#lokacja").fadeIn(500);
    $("#miasto").fadeIn(500);
    document.getElementById("okno_teren").style.zIndex = "5";
    piramida_active=1;
    mob_hp =  piramida_poziom*2+8;

    min_1 = piramida_poziom+1; 
    max_2 =  min_1 + piramida_poziom+2;
    if(min_1>5)
    min_1 = 5;
    if(max_2>10)
    max_2 =9;


    
    document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
    document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " "  + "-" + " " + max_2;
   document.getElementById("lokacja").style.pointerEvents = 'auto'; 
  typ_tla=13;
  $("#tlo_test").fadeIn(0);

  $("#cala_mapa").fadeOut(0);
  $("#okno_teren").fadeIn(100);
  document.getElementById("lokacja").style.pointerEvents = 'auto';
  document.getElementById('tlo_test').style.backgroundImage = "url('piramida_inside.jpg')";
  cmentarz1.stop();
  cmentarz1.play();
  document.getElementById("lokacja").style.color = "green";
  document.getElementById("miasto").style.color = "white";
  document.getElementById("lokacja").onclick = function() {piramida_walka()};
  document.getElementById("miasto").onclick = function() {mapa()};
  document.getElementById("tekst").innerHTML = "Piramida poziom " + piramida_poziom;
  document.getElementById("lokacja").innerHTML ='<i class="icon-login"></i>'+ " Zejdź niżej";
  document.getElementById("miasto").innerHTML ='<i class="icon-address"></i>'+  " Wyjdź";
     document.getElementById("lokacja").style.borderStyle = "none"; 
    document.getElementById("miasto").style.borderStyle = "none"; 
    document.getElementById("miasto").style.borderBottom = "solid"; 


  if(piramida_poziom==12)
{

document.getElementById("tekst").innerHTML = "Przed Tobą skrzynia";
document.getElementById("lokacja").innerHTML ='<i class="icon-key"></i>'+ " Otwórz";
document.getElementById("lokacja").onclick = function() {piramida_skarb()};
     document.getElementById("lokacja").style.borderStyle = "none"; 
}
    
 
   
    
}



function piramida_walka()
{
    




document.getElementById("lokacja").style.pointerEvents = 'none'; 

if(temp_poziom==aktualny_poziom)
{
losuj_potwora(mob_hp,temp_mob_name,monster_immune);
}
else
{
losuj_potwora(mob_hp,"none");
zakres_ataku_potwora(min_1,max_2);
} 
    
temp_poziom = piramida_poziom;

if(piramida_poziom == 11) {
typ_tla=7;
}



document.getElementById("tlo_test").className="fight";
$("#tekst").fadeOut(1000);
$("#lokacja").fadeOut(1000);
$("#miasto").fadeOut(1000);
walk1.play();
battle_sfx.play(); 
setTimeout(walka2, 2000);
}


function piramida_skarb()
{
    po_walce=0;
$("#okno_teren").fadeOut(0);  
document.getElementById('zdarzenie').style.backgroundImage = "url('treasure.jpg')";
piramida_nagroda=1;
skarb_check(15);
document.getElementById("zdarzenie_quit").onclick = function() {zdarzenie_zanik()};
zdarzenie_pokaz();
typ_tla=0;
piramida_poziom=0;
document.getElementById("lokacja").style.borderStyle = "solid"; 

}

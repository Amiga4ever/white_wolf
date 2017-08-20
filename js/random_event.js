function random_event()
{
wylacz_drogi();
var zdarzenie =  Math.floor(Math.random()*3)+1;

if(kierunek==2)
zdarzenie=2;

if(zdarzenie==2)
{
kroki_stop();
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

setTimeout(random_event3, 1500);
}
else
setTimeout(sprawdz_kierunki_aktywne, 500);
}



function random_event3()
{
    
 
    
    
document.getElementById("zdarzenie_info2").innerHTML = "";
document.getElementById("zdarzenie_info3").innerHTML = "";
document.getElementById("zdarzenie_open").innerHTML = "Sprawdź"
document.getElementById("zdarzenie_info").style.fontSize = "26px";
document.getElementById("zdarzenie_info").className = "flash3";
document.getElementById('strona_novigard').style.backgroundImage = "url('xx.jpg')";
document.getElementById("zdarzenie_info").style.color = "white";

jaki_skarb_event = Math.floor(Math.random()*6);
document.getElementById("zdarzenie_open").style.color = "green";
if((kierunek==0)||(kierunek==7))
jaki_skarb_event=4;

if(kierunek==2)
jaki_skarb_event=4;

if((kierunek==123)||(kierunek==81))
{
typ_tla=5;
    jaki_skarb_event=4;
}


    
if(jaki_skarb_event==0)
{
var liczba = Math.floor(Math.random()*2)+level_amount+1;

  if(liczba>3)
      liczba=3;
    
    
ilosc_potworow = liczba;
ilosc_potworow_legowisko = liczba;    
  document.getElementById('strona_novigard').style.backgroundImage = "url('tlo_walki.jpg')";

 zdarzenie_hide();
     
       document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
document.getElementById('zdarzenie').style.backgroundImage = "url('new.jpg')";
document.getElementById("zdarzenie_info").innerHTML = "Natrafiasz na legowisko potworów";
document.getElementById("zdarzenie_open").onclick = function() {
document.getElementById('strona_novigard').style.backgroundImage = "url('legowisko.jpg')";



po_walce=7;
   
legowisko=1;
    
losuj_potwora();
zakres_ataku_potwora();
    
document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " "  + "-" + " " + max_2;
zdarzenie_zanik();

fight.play();
battle_sfx.play();
typ_tla=15;
walka2();
};

document.getElementById("zdarzenie_quit").onclick = function() {zdarzenie_zanik()};
document.getElementById("zdarzenie_open").innerHTML = "Zaatakuj";
document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";

zdarzenie_pokaz();
}


if(jaki_skarb_event==1)
{
   zdarzenie_hide();  
document.getElementById('zdarzenie').style.backgroundImage = "url('loot1.jpg')";
skarb_nr = Math.floor(Math.random()*13);
document.getElementById("zdarzenie_info").innerHTML = "Natrafiasz na " + skarb[skarb_nr];
    document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";
document.getElementById("zdarzenie_open").onclick = function() {

var value;    
var liczba = Math.floor(Math.random()*7)+1;
if(liczba==1)
value= 0;
if(liczba==2)
value=4;
if(liczba==3)
value=5;
if(liczba==4)
value=6;
if(liczba==5)
value=8;
if(liczba==6)
value=9;
if(liczba==7)
value=10;
skarb_check(value)

};
document.getElementById("zdarzenie_quit").onclick = function() {zdarzenie_zanik()};
zdarzenie_pokaz();
}

if(jaki_skarb_event==2)
{
    zdarzenie_hide();
document.getElementById('zdarzenie').style.backgroundImage = "url('loot3.jpg')";
document.getElementById("zdarzenie_info").innerHTML = "Natrafiasz na skrzynię";
document.getElementById("zdarzenie_open").onclick = function() {skrzynia()};
document.getElementById("zdarzenie_quit").onclick = function() {zdarzenie_zanik()};
document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";
zdarzenie_pokaz();
}

    
if(jaki_skarb_event==3)
{
zdarzenie_hide();
liczba_poziomow = Math.floor(Math.random()*2)+level_amount+1;
      if(liczba_poziomow>3)
      liczba_poziomow=3;
liczba_poziomow2=liczba_poziomow;

 document.getElementById('strona_novigard').style.backgroundImage = "url('grota.jpg')";
document.getElementById('zdarzenie').style.backgroundImage = "url('grota_info.jpg')";
document.getElementById("zdarzenie_info").innerHTML = "Natrafiasz na grotę potworów";
document.getElementById("zdarzenie_open").onclick = function() {
document.getElementById('strona_novigard').style.backgroundImage = "url('grota.jpg')";
grota=1;
    po_walce=8;
losuj_potwora();
zakres_ataku_potwora();
    zdarzenie_zanik();
fight.play();
battle_sfx.play();
typ_tla=16;
       
document.getElementById("enemy_amount").innerHTML = "Poziom groty: " +aktualny_poziom_groty+"/"+liczba_poziomow2;
    
walka2();
};

   document.getElementById("zdarzenie_quit").onclick = function() {zdarzenie_zanik()};
document.getElementById("zdarzenie_open").innerHTML = "Wejdź";
document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";
zdarzenie_pokaz(); 
    

}
    
    


    
    
    
    
    
    
if(jaki_skarb_event>3)
{
    document.getElementById('strona_novigard').style.backgroundImage = "url('tlo_walki.jpg')";

     
fight.play();
setTimeout(walka, 500);
}
}


function grota_walka()
{ 

    
    document.getElementById("tlo_test").className = "fight_over";
          $("#tlo_test").fadeIn(0);
          document.getElementById("tlo_test").className="fight";
        document.getElementById('tlo_test').style.backgroundImage = "url('grota.jpg')";


 
    kroki();
   
     setTimeout(grota_walka2, 2000);
}
                
                
                
   function grota_walka2()
    {
losuj_potwora();
zakres_ataku_potwora();


battle_sfx.play();
typ_tla=16;

document.getElementById("tlo_test").className = "fight_over";
document.getElementById("enemy_amount").innerHTML = "Poziom groty: " +aktualny_poziom_groty+"/"+liczba_poziomow2;
walka2();

}







function po_evencie()
{
  
if(kierunek==4)
$("#player").transition({ y: -43, x: -150},2000,'linear');
 
if((kierunek==60)||(kierunek==6))
$("#player").transition({ y: 82, x: -63},1200,'linear');

if(kierunek==7)
{
$("#player").transition({ y: 100, x: 80},1000,'linear');
miasto_odwiedzone = 2;
}

if(kierunek==45)
$("#player").transition({ y: 0, x: 0},2200,'linear');


if(kierunek==65)
$("#player").transition({ y: 0, x: 0},2200,'linear');


if(kierunek==3)
$("#player").transition({ y: -78, x: -12},2200,'linear');

if(kierunek==34)
$("#player").transition({ y: -43, x: -150},2200,'linear');


if(kierunek==5)
$("#player").transition({ y: 0, x: 0},2200,'linear');
    

if(kierunek==76)
$("#player").transition({ y: 82, x: -63},1200,'linear');

if(kierunek==1)           
$("#player").transition({ y: -164, x: 193},3000,'linear');

if(kierunek==201)
$("#player").transition({ y: -164, x: 193},1000,'linear');










sprawdz_kierunki_aktywne();

}


function opacity(value)
{
$("#strona_novigard").transition({ opacity: 0 },0);
    setTimeout(value, 0);
    
}



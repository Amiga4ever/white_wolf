function nowa_gra()
{
     
            level_amount =1;
            xp_amount = 0;
            xp_req = 45;
            life_amount  =20;
            life_max = 20;
            mana_amount = 0;
            manal_max = 3;
            points_amount  =0;
            magic_amount = 1;
            strenght_amount = 1;
            gold_amount = 10;
            skladniki_amount = 0;
            herbs_amount = 0;
            skory_amount = 0;
            runy_amount = 0;  
  
  
}


function zanik_obiektow()
{

if(quest_wykonany_nr==1)
{
$("#arrow").fadeOut(0);
}

if(quest_wykonany_nr==2)
{

$("#arrow2").fadeOut(0);
}


if((blob_completed==1)&&(gif_zoom_out==0))
{
$("#blob").fadeOut(0);      
}
if(quest_wykonany_nr==3)        
$("#arrow3").fadeOut(0);

if((quest_wykonany_nr==4) &&(misja!=5))       
$("#arrow4").fadeOut(0);


if(rycerz_pokonany==1)
$("#rycerz").fadeOut(0);

if((spider_dead==1)&&(gif_zoom_out==0))
{
$("#spider").fadeOut(0);
}

if((golem_pokonany==1)&&(gif_zoom_out==0))
{
$("#golem").fadeOut(0); 
}

if(grobowiec_completed==1)
$("#krypta_poziom").fadeIn(0);

if(krypta_skarb_done==1)
{
$("#krypta_poziom").fadeOut(0);
$("#nagrobek").fadeOut(0);
}

    if(piramida_poziom>1)
    $("#piramida_level").fadeIn(0);
    
    
    
    
    
if(piramida_nagroda==1)
$("#piramida_level").fadeOut(0);


if(glejt==1)
$("#soldier").fadeOut(0);


if(cave_completed==1)
$("#jaskinia_level").fadeIn(0);      

if(cave_skarb==1)
$("#jaskinia_level").fadeOut(0);  


if(misja==6)
{
$("#arrow5").fadeOut(0);
$("#arrow_city").fadeOut(0); 
}
if(rat_pokonany==1)
  $("#rat").fadeOut(0);   


    
if(misja_mag==1)
$("#mag").fadeIn(0);  

if(misja_mag>1)
$("#mag").fadeOut(0); 

if(ognista_kula==2)
$("#goblin").fadeOut(0);   

if(sand_cave_poziom>0)
$("#sand_cave_level").fadeIn(0);  
    

       
if(skorpion_pokonany==1)
$("#skorpion").fadeOut(0);   
    
          
if(bat_pokonany==1)
$("#rycerz").fadeOut(0);   

if(tower_poziom>0)
$("#tower_poziom_info").fadeIn(0); 

if(tower_nagroda==1)
$("#tower_poziom_info").fadeOut(0);


if(gargulec_pokonany==1)
$("#gorgol").fadeOut(0);

if(explosion_21==1)
document.getElementById("gif21").style.backgroundImage = "url('')";  

if(ognista_kula==2)
document.getElementById("gif13").style.backgroundImage = "url('')";  
    
    
if(sand_cave_completed==1)
$("#sand_cave_level").fadeOut(0);


if((quest_wykonany_nr==3)&&(misja==4))
{
$("#arrow4").fadeIn(0);
$("#bandit").fadeIn(0);           
$("#arrow4").transition({y:80, x: 400},3000,'ease') 

}

if(bandyci_pokonani==1)
{
document.getElementById('cala_mapa').style.backgroundImage = "url('mapa_new_skrot.jpg')";
$("#bandit").fadeOut(0);  
$("#dym").fadeIn(0); 
$("#mag_out").fadeOut(0); 
}


if(misja==7)
{
$("#arrow4").fadeIn(0);
$("#arrow4").transition({ y: 160, x: 430},0,'ease'); 
}

if(nawiedzony_dom_wykonany==1)
$("#arrow4").fadeOut(0);


if(misja==6)
{
$("#arrow4").fadeIn(0);
$("#gorgol").fadeIn(0);           
$("#arrow4").transition({ y: 50, x: 453},0,'ease')

}
    if(gargulec_pokonany==1)
    $("#gorgol").fadeOut(0);   
    
    
  if(mag_pokonany==1)
      $("#mag").fadeOut(0);
    
    
    if(mag_pokonany2==1)
      $("#mag2").fadeOut(0);
    
    
     if(mag_pokonany3==1)
      $("#mag3").fadeOut(0);
    
    
    

}





function pole_gracza(nazwa="player",wartosc="nic")
{
nazwa = nazwa;
if(wartosc=="pytanie")
   document.getElementById(nazwa).style.backgroundImage = "url('pytanie.gif')"; 
if(wartosc=="nic")
   document.getElementById(nazwa).style.backgroundImage = "url('gif.gif')";  
}

function aktywne(nazwa,status)
{
document.getElementById(nazwa).style.pointerEvents = status; 
}

function ppl()
{

kierunek_test("player","pytanie")


}





function extra()
{


 
    
    
  
if((rycerz_pokonany==1)&&(quest_wykonany_nr<5))
    {
    quest_wykonany_nr=5;
    misja_zadanie_wykonane=1;
    }
    
var check =  isNaN(skorpion_pokonany);
if(check==true)
skorpion_pokonany=0;

var check =  isNaN(sand_cave_poziom);
if(check==true)
sand_cave_poziom=0;

var check =  isNaN(ognista_kula);
if(check==true)
ognista_kula=0;




var check =  isNaN(miasto_nr3);
if(check==true)
miasto_nr3=0;

var check =  isNaN(xp_copy);
if(check==true)
xp_copy=0;



var check =  isNaN(explosion_21);
if(check==true)
explosion_21=0;


var check =  isNaN(gargulec_pokonany);
if(check==true)
gargulec_pokonany=0;


var check =  isNaN(sand_cave_completed);
if(check==true)
sand_cave_completed=0;




var check =  isNaN(jaskolka_upgrade);
if(check==true)
jaskolka_upgrade=0;



var check =  isNaN(wilga_upgrade);
if(check==true)
wilga_upgrade=0;




var check =  isNaN(grom_upgrade);
if(check==true)
grom_upgrade=0;





var check =  isNaN(mikstura_upgrade);
if(check==true)
mikstura_upgrade=0;



var check =  isNaN(nowy_atak2);
if(check==true)
nowy_atak2=0;

var check =  isNaN(nowy_atak_min2);
if(check==true)
nowy_atak_min2=0;



var check =  isNaN(extra_mikstura);
if(check==true)
extra_mikstura=0;


var check =  isNaN(nawiedzony_dom_wykonany);
if(check==true)
nawiedzony_dom_wykonany=0;

    
var check =  isNaN(kiedy_nowy_towar4);
if(check==true)
kiedy_nowy_towar4=15;

    
    
       
var check =  isNaN(cecha_broni_nadana);
if(check==true)
cecha_broni_nadana=0;

    var check =  isNaN(atk_tower);
if(check==true)
atk_tower=1;

    
    
    var check =  isNaN(hp_tower);
if(check==true)
hp_tower=5;

       
     var check =  isNaN(mag_pokonany);
if(check==true)
mag_pokonany=0;

         var check =  isNaN(mag_pokonany2);
if(check==true)
mag_pokonany2=0;

           var check =  isNaN(mag_pokonany3);
if(check==true)
mag_pokonany3=0;

                  var check =  isNaN(mathea_end);
if(check==true)
mathea_end=0;
    
    
    
 var check =  isNaN(alzur_pokonany);
if(check==true)
alzur_pokonany=0;

          
 var check =  isNaN(mana_zamtuz);
if(check==true)
mana_zamtuz=0; 


       var check =  isNaN(graveyard_skonczony);
if(check==true)
graveyard_skonczony=0; 


       


       
    if(nazwa_szkoly==undefined)
        nazwa_szkoly="Brak szkoły";
    
    
    
    
    
if(cecha_broni_nazwa==undefined)
cecha_broni_nazwa=" ";

let kolor = cecha_broni_nazwa.fontcolor("yellow"); 
            
document.getElementById("weapon_info").innerHTML = nazwa_posiadanej_broni + ", "+ kolor;
    
 dane_zbroi_do_kupna();
    
$("#info_pop").transition({ scale:0,opacity:0}, 0, 'ease');

    



    
}







function chmury_ruch1()
{
$("#chmura1").transition({x:0}, 0, 'linear')
             .transition({x:1600}, 111000, 'linear');
}


function chmury_ruch2()
{
$("#chmura2").transition({x:0}, 0, 'linear')
.transition({x:1400}, 90000, 'linear');

}


function chmury_ruch3()
{
$("#chmura3").transition({x:0}, 0, 'linear')
.transition({x:2100}, 70000, 'linear');
}









function renderText() {
	  let ctx = document.querySelector('canvas').getContext('2d');
    ctx.font = `48px "${FONT_NAME}"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Waka Waka', 150, 50);
}





function renderText() {
	  let ctx = document.querySelector('canvas').getContext('2d');
    ctx.font = `48px "${FONT_NAME}"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(' waka', 150, 50);
}
function zdarzenie_hide()
{


    document.getElementById("zdarzenie_info").innerHTML = "  ";
    document.getElementById("zdarzenie_info2").innerHTML = "  ";
    document.getElementById("zdarzenie_info3").innerHTML = "  ";
}




        
function t1()
{

$('#developer_okno').fadeOut(0);
        secret_unlock++;

        if(secret_unlock==6)
        {
      nazwa_szkoly="Brak szkoły";
developer_pokaz();


        }
        else if (secret_unlock==7)
        {
        secret_unlock=0;

        }
    
    
    
}


function t2()

{
	$('#developer_okno').fadeOut(0);

bandyci_pokonani=1;
	bariera_odkryta=1;
	runy_amount=10;
	artefacts++;
	sell.play();
	
	
	
}

function t3()
{
$('#developer_okno').fadeOut(0);
graveyard_skonczony=1;
}
function t4()
{
$('#developer_okno').fadeOut(0);
chatka_maga();
}

function t5()
{
bariera_odkryta=1;
}





function plyn()
{

if(devs==0)
{
wylacz_drogi();
sail.play();
$("#ship").transition({x: 200,y:-50},6000,'linear');
setTimeout(rozmowa_start,7000);
}
else
{
$("#player").transition({scale:1, opacity:1},2500,'ease');   

//kierunek=5;
sprawdz_kierunki_aktywne();

}

}

function xp_check()
{
    
       if((level_amount==4)&&(xp_amount<395) )
    {

            xp_amount=250;
    
    }
    
    
   if((level_amount==5)&&(xp_amount<395) )
    {

            xp_amount=600;
    
    }
    
       if((level_amount==6)&&(xp_req==1195) )
    {
        
             xp_amount = xp_copy;
        if(xp_amount<895)
            xp_amount=900;
    
    }
    
           if((level_amount==7)&&(xp_req==1525)) 
    {
        
             xp_amount = xp_copy;
        if(xp_amount<1195)
            xp_amount=1000;
    
    }
      document.getElementById('xp').innerHTML = "XP:" + " " + xp_amount + "/" + xp_req;
}



function zbroja_z_cechami()
{
     
    
     var wartosc = cecha_wartosc + " ";
        var kolor = wartosc.fontcolor("yellow");
    
    
if(nazwa_cechy =="sila")
{
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi + ", " + "<spam style='color:yellow';>Siła +1</spam>";
}
    
if(nazwa_cechy =="zycie")
{
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi + ", " + "<spam style='color:yellow';>Życie +</spam>"  + kolor;
}
    
if(nazwa_cechy =="mana")
{
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi + ", " + "<spam style='color:yellow';>Koncentracja +</spam>"+  kolor;
}
if(nazwa_cechy =="magia")
{
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi + ", " + "<spam style='color:yellow';>Magia +1</spam>";

}



}

   
function enable_inventory()
{
document.getElementById("medytacja_menu").style.pointerEvents="auto";
document.getElementById("medytacja_menu").onclick = function() {medytacja_pokaz()};  
document.getElementById("info").style.pointerEvents="auto";
document.getElementById("info").onclick = function() {inventory_pokaz()}; 
}

    
             









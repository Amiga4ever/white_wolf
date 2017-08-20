function arrow_check() {
if ((zadanie_aktywne == 0) || (misja_zadanie_wykonane == 1)) {
$("#arrow_city").fadeIn(0);
$("#arrow5").fadeIn(0);
} else {
$("#arrow5").fadeOut(0);
$("#arrow_city").fadeOut(0);
}

if (misja == 6)
$("#arrow_city").fadeOut(0);

}




function changes_show() {

if(klik_zmiany==0)
{
$("#osoby").fadeOut(0);
document.getElementById('play4').play();
$("#changes_list").fadeIn(400);
klik_zmiany=1;
}
else
{
$("#osoby").fadeOut(0);    
document.getElementById('play4').play();
$("#changes_list").fadeOut(400);          
klik_zmiany=0;
}
}







function credits_show() {




if(klik==0){
$("#osoby").fadeIn(500);
document.getElementById('play4').play();
$("#changes_list").fadeOut(0);
$("#changes_button").fadeOut(0);
klik=1;
}
else
{
$("#changes_list").fadeOut(0);
$("#osoby").fadeOut(500);
document.getElementById('play4').play();

klik=0;
}


}







function potion_check() {
if (potion2 == 0) {
document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +10 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
if(mikstura_upgrade==1)
document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +15 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
document.getElementById("potion_walka").style.color = "dimgrey";
document.getElementById("potion_walka").onclick = function () {
not_allowed()
};
} else {

document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +10 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
if(mikstura_upgrade==1)
document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +15 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
document.getElementById("potion_walka").style.color = "coral";
document.getElementById("potion_walka").onclick = function () {
potion_use()
};
}


if (life_amount == life_max) {
document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +10 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
if(mikstura_upgrade==1)
document.getElementById("potion_walka").innerHTML = '<spam style="color:white;"> +15 </spam>' + '<i style="color:red;" class="icon-heart"></i>' + '<spam style="color:green;"> stan: </spam>' + '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount;
document.getElementById("potion_walka").style.color = "dimgrey";
document.getElementById("potion_walka").onclick = function () {
not_allowed()
};
}





}

function potion_use() {
potion2--;
heal.play();
if(mikstura_upgrade==0)
life_amount = life_amount + 10;
else
life_amount = life_amount + 15;
if (life_amount > life_max)
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
document.getElementById("potion_walka").innerHTML = "+10 leczenie " + potion2 + "/" + potion_amount;
potion_check();

}



function wyjscie() {

$("#okno2").fadeIn(500);
}




function wyjscie2() {
navigator.app.exitApp();
}





function exit_from_game2()

{


window.location.href = "index.html";


}


function nie_wychodz2()

{



$("#okno2").fadeOut(500);


setTimeout(nie_wychodz3, 500);

}



function nie_wychodz3()

{

$("#okno").fadeIn(1);




}






function inventory_window2()

{

window.location.href = "inventory.html";



}

function informacje() {
document.getElementById("kowal_class1_2").innerHTML = "gfgf";

}



function sprzedaj_skladniki() {
sell.stop();
sell.play();
gold_amount = gold_amount + 3;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
skladniki_amount--;
alchemkik_sklep1();
}


function sprzedaj_skory() {
sell.stop();
sell.play();
gold_amount = gold_amount + 5;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
skory_amount--;
alchemkik_sklep1();
}



function sprzedaj_ziola() {
sell.stop();
sell.play();
gold_amount = gold_amount + 3;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
ilosc_ziol++;
herbs_amount--;
alchemkik_sklep1();
}


function sprawdz_stan() {

document.getElementById("potion_do_kupienia_ilosc").innerHTML = "Masz: " + potion2 + "/" + potion_amount;




if ((gold_amount >= 4) && (ilosc_ziol > 0)) {
document.getElementById("ziola_kup").style.color = "deeppink";
document.getElementById("ziola_kup").onclick = function () {
kup_ziola()
};
document.getElementById("ziola_do_kupienia_cena").style.color = "white";
document.getElementById("ziola_do_kupienia_ilosc").style.color = "orange";
} else {
document.getElementById("ziola_kup").style.color = "dimgrey";
document.getElementById("ziola_kup").onclick = function () {
kolor_unable_to_buy1()
};
}


if (herbs_amount < 1) {
document.getElementById("ziola_sprzedaj").style.color = "dimgrey";
document.getElementById("ziola_sprzedaj").onclick = function () {
kolor_unable_to_buy2()
};
} else {
document.getElementById("ziola_sprzedaj").style.color = "green";
document.getElementById("ziola_sprzedaj").onclick = function () {
sprzedaj_ziola()
};
document.getElementById("ziola_do_sprzedania_ilosc").style.color = "orange";
}

if (skladniki_amount < 1) {
document.getElementById("skladniki_sprzedaj").style.color = "dimgrey";
document.getElementById("skladniki_sprzedaj").onclick = function () {
kolor_unable_to_buy3()
};
} else {
document.getElementById("skladniki_sprzedaj").style.color = "green";
document.getElementById("skladniki_sprzedaj").onclick = function () {
sprzedaj_skladniki()
};
document.getElementById("skladniki_do_sprzedania_ilosc").style.color = "orange";
}

if (skory_amount < 1) {
document.getElementById("skory_sprzedaj").style.color = "dimgrey";
document.getElementById("skory_sprzedaj").onclick = function () {
kolor_unable_to_buy4()
};
} else {
document.getElementById("skory_sprzedaj").style.color = "green";
document.getElementById("skory_sprzedaj").onclick = function () {
sprzedaj_skory()
};
document.getElementById("skory_do_sprzedania_ilosc").style.color = "orange";
}


if(mikstura_upgrade==0)
{
var cena_potiona=10;
document.getElementById("potion_do_kupienia_cena").innerHTML = "Cena: 10";  
}

else
{
var cena_potiona=15; 
document.getElementById("potion_do_kupienia_cena").innerHTML = "Cena: 15";    
}



if (potion2 == potion_amount) {
document.getElementById("potion_kup").style.color = "dimgrey";
document.getElementById("potion_kup").onclick = function () {
kolor_unable_to_buy_potion_full()
};
} else if ((potion2 < potion_amount) && (gold_amount >= cena_potiona)) {
document.getElementById("potion_kup").style.pointerEvents = 'auto';
document.getElementById("potion_kup").style.color = "deeppink";
document.getElementById("potion_kup").onclick = function () {
kup_potiony()
};
} else {
document.getElementById("potion_kup").style.color = "dimgrey";
document.getElementById("potion_kup").onclick = function () {
kolor_unable_to_buy_potion()
};

}


}

function kup_potiony() {
potion2++;

if(mikstura_upgrade==0)
gold_amount = gold_amount - 10;
else
gold_amount = gold_amount - 15;   



document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
document.getElementById("potion_do_kupienia_ilosc").innerHTML = "Masz: " + potion2 + "/" + potion_amount;
buy.stop();
buy.play();
sprawdz_stan();

}

function kolor_unable_to_buy_potion() {

document.getElementById("potion_do_kupienia_cena").style.color = "red";
}

function kolor_unable_to_buy_potion_full() {
disabled.play();
document.getElementById("potion_do_kupienia_ilosc").style.color = "red";
}


function kolor_unable_to_buy1() {

disabled.play();

if (gold_amount < 5)
document.getElementById("ziola_do_kupienia_cena").style.color = "red";

if (ilosc_ziol < 1)
document.getElementById("ziola_do_kupienia_ilosc").style.color = "red";

}

function kolor_unable_to_buy2() {

disabled.play();


document.getElementById("ziola_do_sprzedania_ilosc").style.color = "red";


}

function kolor_unable_to_buy3() {

disabled.play();
document.getElementById("skladniki_do_sprzedania_ilosc").style.color = "red";


}

function kolor_unable_to_buy4() {

disabled.play();
document.getElementById("skory_do_sprzedania_ilosc").style.color = "red";


}






function leczenie_cena() {

if (life_amount < life_max) 
{
ileleczyc = life_max - life_amount;
cenaleczenia = ileleczyc;
cenaleczenia = cenaleczenia / 3 + extra_leczenie;
var zaokraglone = Math.round(cenaleczenia);
cenaleczenia = zaokraglone;

if(cenaleczenia>10)
cenaleczenia=9+level_amount;


if ((life_amount < life_max)&&(cenaleczenia==0))
cenaleczenia=1;


}
}



function leczenie_buy() {

life_check();
life_amount = life_max;
heal.play();
gold_amount = gold_amount - cenaleczenia;
document.getElementById("life").innerHTML = "";
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
sprawdz_czy_stac_na_leczenie();
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: " + cenaleczenia + " " + "złota";

document.getElementById("okno_ulecz").style.color = "dimgrey";
document.getElementById("okno_ulecz").onclick = function () {
unable_to_heal()
};
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: --";
if (plec_typ == 1)
document.getElementById("okno_leczenie_info").innerHTML = "W pełni wyleczony";
if (plec_typ == 2)
document.getElementById("okno_leczenie_info").innerHTML = "W pełni wyleczona";



}


function sprawdz_czy_stac_na_leczenie() {
document.getElementById("new_leczenie").style.width = "450px";
document.getElementById("new_leczenie").style.height = "250px";
document.getElementById("new_leczenie").style.marginLeft = "380px";
document.getElementById("okno_leczenie_info").innerHTML = "Leczenie";
document.getElementById("okno_leczenie_info").style.color = "cadetblue";

if (cenaleczenia > gold_amount) {
document.getElementById("okno_ulecz").style.color = "dimgrey";
document.getElementById("okno_ulecz").onclick = function () {
unable_to_heal()
};
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: " + cenaleczenia + " " + "złota";

} else {
document.getElementById("okno_ulecz").style.color = "green";
document.getElementById("okno_ulecz").onclick = function () {
leczenie_buy()
};
document.getElementById("okno_leczenie_cena").style.color = "yellow";
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: " + cenaleczenia + " " + "złota";

}

if ((life_amount == life_max) || (life_amount > life_max)) {
document.getElementById("okno_ulecz").style.color = "dimgrey";
document.getElementById("okno_ulecz").onclick = function () {
unable_to_heal()
};
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: --";
}



}


function unable_to_heal() {
if (cenaleczenia > gold_amount) {

document.getElementById("okno_ulecz").style.color = "dimgrey";
document.getElementById("okno_leczenie_cena").style.color = "red";
}

if ((life_amount == life_max) || (life_amount > life_max)) {
document.getElementById("okno_leczenie_info").innerHTML = "Nie wymagasz leczenia";
document.getElementById("okno_leczenie_info").style.color = "red";
document.getElementById("okno_leczenie_cena").innerHTML = "Cena: --";
}
disabled.play();
}






function kup_ziola() {

buy.play();
gold_amount = gold_amount - 4;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

ilosc_ziol = ilosc_ziol - 1;
herbs_amount++;
alchemkik_sklep1();


}


function alchemkik_sklep() {
document.getElementById("new_alchemik_sklep").style.marginTop = "185px";
document.getElementById("new_alchemik_sklep").style.marginLeft = "300px";
document.getElementById("new_alchemik_sklep").style.backgroundImage = "url('alchemik2.jpg')";
document.getElementById("ziola_do_kupienia").style.color = "green";
document.getElementById("ziola_do_sprzedania").style.color = "green";
document.getElementById("skladniki_do_sprzedania").style.color = "yellow";
document.getElementById("skory_do_sprzedania").style.color = "orange";



klik.play();
alchemik.play();


document.getElementById("strona_novigard").style.backgroundImage = "url('alchemik.jpg')";


$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');



document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").style.color = "coral";
document.getElementById("medytacja").style.color = "cadetblue";
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById("medytacja").style.pointerEvents = 'auto';
document.getElementById("miasto").style.pointerEvents = 'auto';
document.getElementById("zadanie_zamknij").onclick = function () {
zadania_zanik()
};
document.getElementById("zadanie_zamknij").style.color = "white";
document.getElementById("lokacja").onclick = function () {
alchemik_sklep_pokaz()
};
document.getElementById("miasto").onclick = function () {
$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
alchemik.stop();
wroc2()
};
document.getElementById("medytacja").onclick = function () {
leczenie_sklep_pokaz()
};



document.getElementById("lokacja").innerHTML = "Kup/ Sprzedaj";

document.getElementById("medytacja").innerHTML = "Leczenie " + '<i style="color:red";" class="icon-heart"></i>';
document.getElementById("miasto").innerHTML = "Powrót";


$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#miasto").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);





$("#medytacja").fadeIn(10);
$("#lokacja").fadeIn(10);
$("#miasto").fadeIn(10);


}







function alchemkik_sklep1() {



kosci_sfx.stop();
klik.play();
leczenie_cena();
sprawdz_stan();
//document.getElementById("kowal_class5_1").innerHTML = "CENA:" + " " + cenaleczenia;

document.getElementById("skladniki_do_sprzedania_ilosc").innerHTML = "Masz:" + " " + skladniki_amount;
document.getElementById("skory_do_sprzedania_ilosc").innerHTML = "Masz:" + " " + skory_amount;
document.getElementById("ziola_do_sprzedania_ilosc").innerHTML = "Masz:" + " " + herbs_amount;

document.getElementById("ziola_do_kupienia_ilosc").innerHTML = "Ilość:" + " " + ilosc_ziol;
document.getElementById("ziola_do_sprzedania_wartosc").style.color = "white";
document.getElementById("skladniki_do_sprzedania_wartosc").style.color = "white";
document.getElementById("skory_do_sprzedania_wartosc").style.color = "white";
document.getElementById("ziola_do_kupienia_cena").style.color = "white";
}


function wybor_misji1()
{
if(miasto_nr3==1)
{

wyzima_zadania();

}
else

wybor_misji();

}



function wybor_misji() {





document.getElementById("strona_novigard").style.backgroundImage = "url('zlecenia.jpg')";
$("#okno_teren").fadeIn(0);
$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');








document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").style.color = "coral";
document.getElementById("medytacja").style.color = "cadetblue";
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById("miasto").style.pointerEvents = 'auto';

document.getElementById("zadanie_zamknij").onclick = function () {
zadania_zanik()
};
document.getElementById("zadanie_zamknij").style.color = "white";


document.getElementById("lokacja").onclick = function () {
zapytanie()
};
document.getElementById("miasto").onclick = function () {


$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
wroc2()
};
document.getElementById("medytacja").onclick = function () {
zlecenie_pokaz()
};


document.getElementById("tekst").innerHTML = "Tablica ogłoszeń";
document.getElementById("lokacja").innerHTML = "Tablica ogłoszeń";


document.getElementById("medytacja").innerHTML = '<i style="color:red;"class="icon-flash"></i>' + " Zlecenia wiedźmińskie" +" "+ nr_zlecenia+"/"+pozostalo;


document.getElementById("miasto").innerHTML = "Powrót";


$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#miasto").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);




$("#tekst").fadeIn(10);
$("#medytacja").fadeIn(10);
$("#lokacja").fadeIn(10);
$("#miasto").fadeIn(10);




if ((quest_wykonany_nr == 0) && (misja == 0))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Problem z kryptą";
else if ((quest_wykonany_nr == 1) && (misja == 1))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Problemy z dostawą";
else if ((quest_wykonany_nr == 2) && (misja == 2))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Przysługa dla alchemika";
else if ((quest_wykonany_nr == 3) && (misja == 3))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Bandycki problem";

else if ((quest_wykonany_nr == 4) && (misja == 4))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Upadły rycerz";

else if ((quest_wykonany_nr == 5) && (misja == 5))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Morderczy gargulec";

else if ((quest_wykonany_nr == 6) && (misja == 6))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Nawiedzony dom";


else if ((quest_wykonany_nr == 7) && (misja == 7)&&(mathea_end==1))
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Nieumarła trójca";






else if((misja == 9))
{
misja_zadanie_wykonane = 0;
zadanie_aktywne = 0;
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Brak więcej zadań";
document.getElementById("lokacja").onclick = function () {
not_allowed()
};
}




rodzaj_zadania();

zadanie_zwykle_status();



if (zlecenie_aktywne_2 == 1) {
document.getElementById("medytacja").style.color = "dimgrey";
document.getElementById("medytacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("medytacja").innerHTML = "Zlecenia realizowane";
} else {
document.getElementById("medytacja").onclick = function () {
zlecenie_pokaz()
};
document.getElementById("medytacja").style.color = "cadetblue";
document.getElementById("medytacja").style.pointerEvents = 'auto';

}

if (misja_zadanie_wykonane == 1) {
document.getElementById("lokacja").onclick = function () {
zadania_pokaz()
};
document.getElementById("lokacja").style.color = "green";
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById("lokacja").innerHTML = "Zlecenie wykonane";
}


if (miasto_nr2 == 1) {
document.getElementById("lokacja").innerHTML = "Polowanie na potwory";
document.getElementById("lokacja").onclick = function () {
zadania_new_pokaz()
};
document.getElementById("lokacja").style.color = "coral";
if (tier_1 == 8) {
document.getElementById("lokacja").innerHTML = "Zadanie wykonane";
document.getElementById("lokacja").style.color = "dimgrey";
document.getElementById("lokacja").onclick = function () {
not_allowed()
};

}

}
if(nr_zlecenia>5)
{
document.getElementById("medytacja").innerHTML = '<i style="color:red;"class="icon-flash"></i>' + "Brak więcej zleceń"; 
document.getElementById("medytacja").style.color = "dimgrey";
document.getElementById("medytacja").onclick = function () {
not_allowed();
};



}


if(zlecenie_completed==1)
{
$('#arrow_city_zlecenie').fadeIn(0); 

}


}







function zlecenie_okno() {


level_amount_req = 2 + extra_level;
zadanie_gold = 30 + extra_gold_za_zadanie;
zadanie_xp = 5 + extra_xp_za_zadanie;
gold_do_wyplaty = zadanie_gold;
xp_do_wyplaty = zadanie_xp;



document.getElementById("zlecenie_button").innerHTML = "Przyjmij";
document.getElementById("zlecenie_button").style.color = "green";
document.getElementById("okno_zlecenie_mob").innerHTML = mob_zlecenie[nazwa_potwora_do_zlecenia];

klik.play();

document.getElementById("okno_zlecenie_nagroda").innerHTML = "Nagroda:" + " " + gold_do_wyplaty + "&nbsp" + "złota, i" + "&nbsp" + xp_do_wyplaty + "&nbsp" + "XP";

document.getElementById("okno_zlecenie_mob2").style.color = "white";


if (level_amount < level_amount_req) {
document.getElementById("zlecenie_button").style.color = "dimgrey";
document.getElementById("zlecenie_button").onclick = function () {
za_niski_lvl()
};
document.getElementById("okno_zlecenie_info").style.color = "red";
document.getElementById("okno_zlecenie_info").innerHTML = "Zlecenie Wiedźmińskie";
document.getElementById("okno_zlecenie_mob2").innerHTML = "(wymagany poziom" + " " + level_amount_req + ")";

} else {
document.getElementById("zlecenie_button").style.color = "green";
document.getElementById("zlecenie_button").onclick = function () {
przyjmij_zlecenie()
};
document.getElementById("okno_zlecenie_info").style.color = "green";
document.getElementById("okno_zlecenie_info").innerHTML = "Zlecenie Wiedźmińskie";
document.getElementById("okno_zlecenie_mob2").innerHTML = "";
}

if (zlecenie_completed == 1)
zadanie_wykonane();

}



function za_niski_lvl() {

disabled.play();
document.getElementById("okno_zlecenie_mob2").style.color = "red";
}




function zadanie_wykonane() {

document.getElementById("zlecenie_button").style.color = "green";
document.getElementById("zlecenie_button").onclick = function () {
zaplata_za_zlecenie()
};
document.getElementById("okno_zlecenie_mob").innerHTML = zlecenie_typ2;

document.getElementById("zlecenie_button").innerHTML = "Odbierz";
klik.play();
document.getElementById("okno_zlecenie_info").style.color = "green";
document.getElementById("okno_zlecenie_info").innerHTML = "Zlecenie Wiedźmińskie wykonane";

}


function zaplata_za_zlecenie() {
$('#arrow_city_zlecenie').fadeOut(0); 
nr_zlecenia++;

zlecenie_typ = "BRAK";
zlecenie_status = "NIEDOSTĘPNE";
zlecenie_typ2 = zlecenie_typ.fontcolor("white");
zlecenie_status2 = zlecenie_status.fontcolor("red");
document.getElementById("zlecenie").innerHTML = "Zlecenie:" + "&nbsp &nbsp &nbsp" + zlecenie_typ2 + "&nbsp &nbsp &nbsp &nbsp" + "Status:" + "&nbsp &nbsp &nbsp" + zlecenie_status2;

buy.play();
gold_amount = gold_amount + gold_do_wyplaty;
xp_amount = xp_amount + xp_do_wyplaty;
document.getElementById('xp').innerHTML = "XP:" + " " + xp_amount + "/" + xp_req;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

nazwa_potwora_do_zlecenia = Math.floor(Math.random() * 12);
zlecenie_completed = 0;

if(nr_zlecenia>5)
{
document.getElementById("medytacja").innerHTML = '<i style="color:red;"class="icon-flash"></i>' + "Brak więcej zleceń"; 
document.getElementById("medytacja").style.color = "dimgrey";
document.getElementById("medytacja").onclick = function () {
not_allowed();
};



}




zlecenie_zanik();
nowy_poziom_miasto();
}





function wroc2() {

document.getElementById("medytacja").className = "flash0";
arrow_check();


$("#loot0").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto_kowal").fadeOut(0);

document.getElementById("miasto").style.pointerEvents = 'auto';
document.getElementById("tekst").style.color = "white";
klik.play();


document.getElementById("medytacja").style.color = "cadetblue";
document.getElementById("miasto").onclick = function () {
novigard()
};

document.getElementById("miasto").style.pointerEvents = 'auto';
kowal_sfx.stop();

tawerna_sfx.stop();

zlotnik_shop.stop();

zamtuz_sfx.stop();

setTimeout(wroc, 100);

}


function zlecenie_gif() {

if (gdzie_zlecenie_nr == 1) {
document.getElementById('gif1').style.backgroundImage = "url('zlecenie.gif')";
gdzie_zlecenie = 1;
$("#gif1").fadeIn(0);
} else if (gdzie_zlecenie_nr == 2) {
document.getElementById('gif3').style.backgroundImage = "url('zlecenie.gif')";
gdzie_zlecenie = 3;
$("#gif3").fadeIn(0);
} else if (gdzie_zlecenie_nr == 3) {
document.getElementById('gif5').style.backgroundImage = "url('zlecenie.gif')";
gdzie_zlecenie = 5;
$("#gif5").fadeIn(0);
} else if (gdzie_zlecenie_nr == 4) {
document.getElementById('gif6').style.backgroundImage = "url('zlecenie.gif')";
gdzie_zlecenie = 6;
$("#gif6").fadeIn(0);
}
}




function przyjmij_zlecenie() {

gdzie_zlecenie_nr = Math.floor(Math.random() * 4) + 1;
zlecenie_completed = 0;
zlecenie_gif();

var liczba = Math.floor(Math.random() * 8) + 1;
if (liczba <= 4)
enemy_resistant = "sword";
if (liczba >=5)
enemy_resistant = "magic";



zlecenie_resistant = enemy_resistant;


zabity_potwor_ze_zlecenia = 0;
zlecenie_aktywne_2 = 1;
zlecenie_typ = mob_zlecenie[nazwa_potwora_do_zlecenia];
zlecenie_typ2 = zlecenie_typ.fontcolor("white");
zlecenie_status = "NIEWYKONANE";
zlecenie_status2 = zlecenie_status.fontcolor("red");

zlecenie_name_temp = mob_zlecenie[nazwa_potwora_do_zlecenia];

mob_hp = 50 + mob_hp_extra;
mob_hp_extra = mob_hp_extra + 15;


if(nr_zlecenia==1)  
{
atak_moba_min = 4;
atak_moba_max = 8;
}

if(nr_zlecenia==2)
{
atak_moba_min = 4;
atak_moba_max =   10;
}

if(nr_zlecenia==3)
{
atak_moba_min = 4;
atak_moba_max =  12;
}

if(nr_zlecenia==4)
{
atak_moba_min = 5;
atak_moba_max =    12;
}

if(nr_zlecenia==5)
{
atak_moba_min = 6;
atak_moba_max = 12;

}




min_1 = atak_moba_min;
max_2 = atak_moba_max;

energia_zlecenie = mob_hp;
energia_zlecenie2 = mob_hp;

zlecenie_min = min_1;
zlecenie_max = max_2;

document.getElementById("zlecenie").innerHTML = "Zlecenie:" + "&nbsp &nbsp &nbsp" + zlecenie_typ2 + "&nbsp &nbsp &nbsp &nbsp" + "Status:" + "&nbsp &nbsp &nbsp" + zlecenie_status2;

zlecenie_sfx.play();

wybor_misji();
zlecenie_zanik();
}




function kroki() {


var liczba1 = Math.floor(Math.random() * 3) + 1;
if (liczba1 == 1)
walk1.play();
if (liczba1 == 2)
walk2.play();
if (liczba1 == 3)
walk3.play();
}



function kroki_stop() {
walk3.stop();
walk2.stop();
walk1.stop();


}




function trafienie() {


var liczba2 = Math.floor(Math.random() * 5) + 1;
if (liczba2 == 1) {
if (odglos_obrony == 1)
armor_hit.play();
else
trafienie1.play();
}

if (liczba2 == 2) {
if (odglos_obrony == 1)
armor_hit.play();
else
trafienie2.play();
}

if (liczba2 == 3) {
if (odglos_obrony == 1)
armor_hit.play();
else
trafienie3.play();
}

if (liczba2 == 4) {
if (odglos_obrony == 1)
armor_hit.play();
else
trafienie4.play();
}

if (liczba2 == 5) {
if (odglos_obrony == 1)
armor_hit.play();
else
trafienie5.play();
}
navigator.vibrate(200);
red_screen();

}

function trafienie_potwora() {


if ((cios_krytyczny == 1) && (cios_mieczem == 1))
critical.play();

if((znak_critical_hit==1)&&(atak_znakiem_check==1))
critical.play();


if(bandyci_aktywni==1)
trafienie();
else
{

var liczba3 = Math.floor(Math.random() * 6) + 1;
if (liczba3 == 1)
monster1.play();
if (liczba3 == 2)
monster2.play();
if (liczba3 == 3)
monster3.play();
if (liczba3 == 4)
monster4.play();
if (liczba3 == 5)
monster5.play();
if (liczba3 == 6)
monster6.play();
}

}


function zakres_ataku_potwora(min, max) {




if (zlecenie_aktywne == 0) {

if (min == undefined) {
atak_moba_min = Math.floor(Math.random() * level_amount) + 2;
min = atak_moba_min;
}

if (max == undefined) {
atak_moba_max = level_amount + 2;
max = Math.floor(Math.random() * atak_moba_max) + 3;
}
min_1 = min;
max_2 = max;

}





if ((min_1 > max_2) || (min_1 == max_2))
max_2 = min_1 + 2;
/*
if(walka_nr3==1)
{
min_1 = 1;
max_2 = 2;
walka_nr3 =0;
}
else if(walka_nr4==1)
{
min_1 = 1;
max_2 = 3;
walka_nr4 =0;
}
*/


document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;


}


function obliczanie_ataku_potwora() {




monster_hit = Math.floor(Math.random() * max_2) + min_1;
if (monster_hit > max_2)
monster_hit = max_2;

if (zlecenie_aktywne == 1) {
monster_hit = Math.floor(Math.random() * zlecenie_max) + zlecenie_min;

if (monster_hit > zlecenie_max)
monster_hit = zlecenie_max;
}






oblicz_obrona_w_walce();
monster_hit = monster_hit - redukcja_obrazen;
if (monster_hit < 1)
monster_hit = 1;




}

function obliczanie_atakiem_miecza() {

//miecz_znak();
miecz_hit = Math.floor(Math.random() * miecz_do) + miecz_od;

szansa_na_krytyczne = Math.floor(Math.random() * 100) + 1;

if (miecz_hit > miecz_do)
miecz_hit = miecz_do;


critic_amount = Math.floor(Math.random() * miecz_do) +2;





cios_krytyczny = 0;

if (obecny1 == "Furii") {
if ((szansa_na_krytyczne > 0) && (szansa_na_krytyczne <= ring_1_value))
cios_krytyczny = 1;
}




if (obecny2 == "Furii") {
if ((szansa_na_krytyczne > 0) && (szansa_na_krytyczne <= ring_2_value))
cios_krytyczny = 1;
}









}


function obliczanie_atakiem_znak() {
//miecz_znak();
znak_hit = Math.floor(Math.random() * znak_do) + znak_od;
znak_critical_hit=0;

if (znak_hit > znak_do)
znak_hit = znak_do;


if(znak_critical==1)
{
var ile_crit = Math.floor(Math.random()*100)+1;

if(ile_crit<15)
{
znak_hit_x =  Math.floor((znak_do + znak_od)/3);

znak_hit = znak_hit + znak_hit_x;
znak_critical_hit =1;
}



}

}







function zgon() {

if (life_amount <= 0) {


$("#panel_walki").transition({ scale:0,opacity:0}, 3500, 'ease');
$("#info").fadeOut(2000);
setTimeout(sgon2, 2000);
}



}


function life_check()

{
if (life_amount <= life_max / 3)
{
document.getElementById("life").className = "flash7";
heart.stop();
heart.play();
}
else
{
heart.stop();
document.getElementById("life").className = "flash8";
}
}



function sgon2() {


battle_sfx.stop();
boss.stop();
$("#koniec").fadeIn(1000);
$("#koniec").fadeOut(4000);
setTimeout(exit_from_game2, 4000);


}

function zgon_potwora() {



pudlo = 0;

if (mob_hp > 0) 
{
if ((grom == 0) && (atak_znakiem_check == 0) &&(mana_amount<manal_max))
mana_amount++;
else if (grom==1)
half_mana = half_mana+0.5;

if ((puszczyk == 1)&&(atak_znakiem_check==0)&&(mana_amount<manal_max)) 
{
mana_amount++;
if ((mana_amount > manal_max)&&(mana_zamtuz==0))
mana_amount = manal_max;
}



}



if((half_mana==1)&&(mana_amount<manal_max))
{
mana_amount++;
half_mana=0;
}


if (mana_amount > mana_koszt) {

document.getElementById("atak_znakiem").style.color = "deepskyblue";

} else {

document.getElementById("atak_znakiem").style.color = "dimgrey";

}

if ((mana_amount > manal_max)&&(mana_zamtuz==0))
mana_amount = manal_max;

document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;

atak_znakiem_check = 0;

if (mob_hp <= 0) {
bleeding=0;
$("#status_specjalny").transition({scale:0, opacity:0},500,'ease');
document.getElementById("enemy_name").className = "flash0";
$("#enemy_name").transition({scale:0, opacity: 0},1000,'linear');
half_mana=0;

battle_active = 0;

document.getElementById("player").style.zIndex = "205";
$("#player").transition({ scale:1}, 100);

if (typ_tla == 1) {
blob_completed = 1;
tekst_nr = 1;
typ_tla = 0;
misja_zadanie_wykonane = 1;
quest_wykonany_nr = 2;
zlecenie2_sfx.play();
$("#player").transition({
y: -140,
x: 22
}, 200);
gif_zoom_out = 1;
nazwa_gifa = "blob";
document.getElementById(nazwa_gifa).className = "fight_over";
} else if (typ_tla == 2) {
tekst_nr = 5;
typ_tla = 0;
golem_pokonany = 1;
zlecenie2_sfx.play();
gif_zoom_out = 1;
nazwa_gifa = "golem";
document.getElementById(nazwa_gifa).className = "fight_over";
} else if (typ_tla == 3) {

grobowiec_completed = 1;
zadanie_lochy = 0;
misja_zadanie_wykonane = 1;
tekst_nr = 9;
quest_wykonany_nr = 1;
$("#krypta_poziom").fadeIn(0);
typ_tla = 0;
zlecenie2_sfx.play();
grobowiec_aktywny = 0;
} else if (typ_tla == 7) {
tekst_nr = 1;
quest_wykonany_nr = 5;
misja_zadanie_wykonane = 1;
rycerz_pokonany = 1;

$("#33_level").fadeIn(0);



} else if (typ_tla == 9) {
spider_dead = 1;
zlecenie2_sfx.play();
typ_tla = 0;
gif_zoom_out = 1;
nazwa_gifa = "spider";
document.getElementById(nazwa_gifa).className = "fight_over";
} else if (typ_tla == 14) {
rat_pokonany = 1;
gif_zoom_out = 1;
nazwa_gifa = "rat";
document.getElementById(nazwa_gifa).className = "fight_over";
}
else if (typ_tla == 17) {
misja_mag = 2;
gif_zoom_out = 1;
nazwa_gifa = "mag";
document.getElementById(nazwa_gifa).className = "fight_over";
}
else if (typ_tla == 18) {
skorpion_pokonany=1;  
gif_zoom_out = 1;
nazwa_gifa = "skorpion";
document.getElementById(nazwa_gifa).className = "fight_over";
document.getElementById('player').style.backgroundImage = "url('pytanie.gif')";     
document.getElementById("player").style.pointerEvents = 'auto';  
document.getElementById("player").onclick = function() {sand_cave()}; 
}

else if (typ_tla == 20) {
bat_pokonany=1; 
gif_zoom_out = 1;
nazwa_gifa = "rycerz";
document.getElementById(nazwa_gifa).className = "fight_over";
}


else if (typ_tla == 21) {

gif_zoom_out = 1;
nazwa_gifa = "gorgol";
document.getElementById(nazwa_gifa).className = "fight_over";
misja_zadanie_wykonane = 1;
quest_wykonany_nr = 6;
gargulec_pokonany=1;

$("#arrow4").fadeOut(0);
}


else if (typ_tla == 23) {
gif_zoom_out = 1;
nazwa_gifa = "mag";
document.getElementById(nazwa_gifa).className = "fight_over";
mag_pokonany=1;
extra_skarb=1;    
max_wartosc=3;
min_wartosc=2;
rodzaj_skarbu="runy";
document.getElementById('zdarzenie').style.backgroundImage = "url('sand_skarb.jpg')";
typ_tla=0;
}


else if (typ_tla == 24) {
gif_zoom_out = 1;
nazwa_gifa = "mag2";
document.getElementById(nazwa_gifa).className = "fight_over";
mag_pokonany2=1;
extra_skarb=1; 
max_wartosc=10;
min_wartosc=15;
rodzaj_skarbu="zloto";
document.getElementById('zdarzenie').style.backgroundImage = "url('sand_skarb.jpg')";
typ_tla=0;
}


else if (typ_tla == 25) {
gif_zoom_out = 1;
nazwa_gifa = "mag3";
document.getElementById(nazwa_gifa).className = "fight_over";
mag_pokonany3=1;
extra_skarb=1;    
max_wartosc=10;
min_wartosc=15;
rodzaj_skarbu="zloto"; 
document.getElementById('zdarzenie').style.backgroundImage = "url('sand_skarb.jpg')";
typ_tla=0;
}



else if (typ_tla == 26) {
gif_zoom_out = 1;
nazwa_gifa = "alzur";
document.getElementById(nazwa_gifa).className = "fight_over";
alzur_pokonany=1;

typ_tla=0;
}






if (grave_aktywny == 1) {
zabite_moby1++;
document.getElementById('zabicia').innerHTML = zabite_moby1;
}


if((mag_pokonany==1)&&(mag_pokonany2==1)&&(mag_pokonany3==1))
{
misja_zadanie_wykonane = 1;
quest_wykonany_nr = 8;
}

zanik_obiektow();

document.getElementById('player').style.backgroundImage = "url('gif.gif')";
energia_bosa = 0;

wlacz_drogi();


/*        if((grobowiec==1)||(grobowiec==2)||(grobowiec==3)||(grobowiec==4)||(grobowiec==6))
document.getElementById('strona_novigard').style.backgroundImage = "url('dungeon2.jpg')";

else
document.getElementById('strona_novigard').style.backgroundImage = "url('gra.jpg')";  */


if (typ_tla == 4)
grobowiec_poziom++;

if (jaskinia_aktywna == 1)
jaskinia_poziom++;

if (plec_typ == 1)
losuj_dziwki();
else if (plec_typ == 2)
losuj_samca();
if (zamtuz_sila_bonus == 1) {
eliksir_inny_walki_amount--;
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + " " + eliksir_inny_walki_amount;
}
if (eliksir_inny_walki_amount == 0) {
strenght_amount = strenght_amount - temp_sila;
temp_sila = 0;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;;
document.getElementById("inny_info").innerHTML = "--";
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + "--";
zamtuz_sila_bonus = 0;
}

if (zamtuz_sila_bonus_minus == 1) {
eliksir_inny_walki_amount--;
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + " " + eliksir_inny_walki_amount;
}
if (eliksir_inny_walki_amount == 0) {
strenght_amount = strenght_amount + temp_sila;
temp_sila = 0;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;;
document.getElementById("inny_info").innerHTML = "--";
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + "--";
zamtuz_sila_bonus_minus = 0;
}









kiedy_nowy_towar--; //kowal
if (kiedy_nowy_towar == 0) {
kiedy_nowy_towar = 10;
dane_miecza_do_kupna();
miecz_kupiony = 0;
miecz_wylosowany=0;
}

kiedy_nowy_towar2--; //płatnerz
if (kiedy_nowy_towar2 == 0) {
kiedy_nowy_towar2 = 10;
dane_zbroi_do_kupna();
zbroja_kupiona = 0;
}

kiedy_nowy_towar3--; //złotnik
if (kiedy_nowy_towar3 == 0) {
kiedy_nowy_towar3 = 10;
losuj_pierscien = 1;
}

kiedy_nowy_towar4--;
if(kiedy_nowy_towar4==0)
{
kiedy_nowy_towar4=15; 
kupiec_start = 0;
}







xp_received_calc();

document.getElementById("ucieczka").style.pointerEvents = 'none';
if (zlecenie_aktywne == 1) {

ilosc_ziol = Math.floor(Math.random() * 5) + 2; //dodanie ziol do sklepu alchemika
zlecenie_completed = 1;
zlecenie_aktywne_2 = 0;
$("#atakuj").fadeOut(0);
zlecenie_gif();
gdzie_zlecenie_nr = 0;
gdzie_zlecenie = 0;

document.getElementById("zlecenia").style.color = "yellowgreen";
document.getElementById("zlecenia").style.pointerEvents = 'auto';

document.getElementById("miasto").innerHTML = "Novigrad";
document.getElementById("miasto").style.color = "yellow";
$("#okno_teren").fadeOut(0);


zlecenie_status = "WYKONANE, ODBIERZ NAGRODĘ";
zlecenie_status2 = zlecenie_status.fontcolor("green");
extra_level++;
extra_gold_za_zadanie = extra_gold_za_zadanie + 10;
extra_xp_za_zadanie = extra_xp_za_zadanie + 5;
kupno_miecza_max_add++;


document.getElementById("zlecenie").innerHTML = "Zlecenie:" + "&nbsp &nbsp &nbsp" + zlecenie_typ2 + "&nbsp &nbsp &nbsp &nbsp" + "Status:" + "&nbsp &nbsp &nbsp" + zlecenie_status2;
document.getElementById('gif1').style.backgroundImage = "url('zleceniex.gif')";
document.getElementById('gif3').style.backgroundImage = "url('zleceniex.gif')";
document.getElementById('gif5').style.backgroundImage = "url('zleceniex.gif')";
document.getElementById('gif6').style.backgroundImage = "url('zleceniex.gif')";




}
if(bandyci_aktywni==0)
mob_dead_sfx();

setTimeout(hide_hud, 2000);


$("#loot1").fadeOut(0);
$("#loot2").fadeOut(0);
$("#loot3").fadeOut(0);
$("#loot4").fadeOut(0);
$("#loot5").fadeOut(0);
$("#loots").fadeIn(0);

odjecie_czasu_trwania_eliksiru();







if((flawless == 0)&&(po_walce==0))
mana_amount--;


if (((obecny1 == "Koncentracji") || (obecny2 == "Koncentracji")) && (flawless == 0))
mana_amount++;

if (mana_amount < 0)
mana_amount = 0;

if ((mana_amount > manal_max)&&(mana_zamtuz==0))
mana_amount = mana_max;


if (mana_amount < manal_max)
	mana_zamtuz=0;



document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;

if (grobowiec_completed == 1) {
$("#atakuj").fadeTo(1000, 0);

document.getElementById("atakuj").style.pointerEvents = 'none';
}



setTimeout(loot1, 2500);
}






}


function hide_hud()
{
$("#panel_walki").fadeOut(600);
$("#panel_walki").transition({ scale:0,opacity:0}, 1500, 'ease');
}



function odjecie_czasu_trwania_eliksiru() {
eliksir_walki_amount--;
document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;

if (elixir_obrony_aktywny == 1) {
ile_walk_zaliczonych4++;
eliksir_inny_walki_amount--;
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + " " + eliksir_inny_walki_amount;
}





if (eliksir_walki_amount <= 0) {

grom_plus_min=0;
grom_plus = 0;
grom = 0;
eliksir_walki_amount = 0;
puszczyk=0;
document.getElementById("eliksir_info").innerHTML = "--";
document.getElementById("eliksir_walki").innerHTML = "Ilość walk:--";
document.getElementById("eliksir").innerHTML = "Eliksir:";


if (wilga_dodana == 1) {

obrona_temp = obrona_temp - wilga_obrona;
document.getElementById("armour_bonus").innerHTML = obrona_temp;
wilga = 0;
wilga_dodana = 0;
wilga_obrona=0;
}









}

if (ile_walk_zaliczonych4 == 3) {
obrona_temp = obrona_temp - bonus_do_obrony;
document.getElementById("armour_bonus").innerHTML = "Obrona:" + "&nbsp" + obrona_temp;
bonus_do_obrony = 0;
elixir_obrony_aktywny = 0;
document.getElementById("inny_info").innerHTML = "--";
document.getElementById("inny_walki").innerHTML = "Ilość walk: --";
}


}



function xp_received_calc() {




if (xp_value == 0)
xp_received  =  Math.floor((mob_hp_xp / 5) + level_amount);

else
xp_received = xp_value;

if (enemy_resistant != "none")
xp_received = xp_received + 1;


if ((jaki_pierscien1 == "Szkolenia") || (jaki_pierscien2 == "Szkolenia")) {
xp_received_extra = xp_received * (extra_xp_ring_amount / 100);

var xp_2 = Math.ceil(xp_received_extra);
xp_temp = xp_2;
xp_received = xp_received + xp_2;

}


xp_value = 0;


}

function gold_received_calc() {
gold_received = Math.floor(Math.random() * 5) + 1;
gold_received = gold_received + level_amount*1.5;
gold_received = Math.round(gold_received);
gold_temp = gold_received;


if ((jaki_pierscien1 == "Bogactwa") || (jaki_pierscien2 == "Bogactwa")) {

gold_received_extra = (gold_received * extra_gold_ring_amount) / 100;
zaokraglone3 = Math.ceil(Math.round(gold_received_extra));


gold_received = gold_received + zaokraglone3;

}



}


function kupiec() {


document.getElementById("zlecenie_slot").style.borderStyle = "solid";
music_ambient.stop();

$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');

$("#cala_mapa").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno_teren").fadeIn(0);


$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');



klik.stop();

document.getElementById('strona_novigard').style.backgroundImage = "url('kupiec.jpg')";


wiatr.stop();

kupiec_music.play();



ty_wynik = 0;
przeciwnik_wynik = 0;
koniec_kosci = 0;

$("#sklepik").fadeOut(0);

$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);

$("#miasto").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#tekst").fadeIn(0);
$("#lokacja").fadeIn(0);

if (nagroda_specjalna_wzieta == 1)
$("#medytacja").fadeOut(0);
else
$("#medytacja").fadeIn(0);


document.getElementById("medytacja").style.pointerEvents = 'auto';
document.getElementById("miasto").style.pointerEvents = 'auto';



$("#miasto").fadeIn(0);
$("#zlecenie_slot").fadeIn(500);
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);





document.getElementById("lokacja").style.color = "green";
document.getElementById("lokacja").style.pointerEvents = 'auto';

document.getElementById("medytacja").style.color = "yellow";

document.getElementById("zlecenie_slot").style.pointerEvents = 'auto';
document.getElementById("medytacja").style.pointerEvents = 'auto';
document.getElementById("exra_slot").style.color = "white";
document.getElementById("miasto").style.color = "coral";
document.getElementById("lokacja").onclick = function () {
kupiec_sklep()
};

document.getElementById("zlecenie_slot").onclick = function () {

document.getElementById("medytacja").className = "flash0";
$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');

$("#cala_mapa").transition({ scale:1,opacity:1}, 1000, 'ease');

mapa()
};

document.getElementById("miasto").onclick = function () {
leczenie_sklep_pokaz()
};

document.getElementById("medytacja").style.borderStyle = "solid";
document.getElementById("miasto").style.borderStyle = "solid";



document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Handel";
document.getElementById("medytacja").innerHTML = '<i class="icon-beer"></i>' + " Graj w kości (10 złota)";
document.getElementById("miasto").innerHTML = '<i style="color:red;"class="icon-beaker"></i>' + " Usługi lecznicze";
document.getElementById("zlecenie_slot").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("zlecenie_slot").style.color = "white";

document.getElementById("zlecenie_slot").style.borderStyle = "none";
document.getElementById("zlecenie_slot").style.borderBottom = "solid";




if ((nagroda_specjalna == 1) && (kupiec_kosci == 1) && (nagroda_specjalna_wzieta == 0))
{
nagroda_specjalna_loot();
document.getElementById("medytacja").className = "flash";
document.getElementById("medytacja").style.borderStyle = "none";
}




if (nagroda_specjalna ==0) {
document.getElementById("lokacja").style.color = "green";
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById("lokacja").innerHTML = "Handel";
document.getElementById("tekst").innerHTML = "Wygraj w kości,a otrzymasz pas na 2 mikstury leczenia oraz nagrodę specjalną.";
if (nagroda_specjalna_wzieta == 1)
document.getElementById("tekst").innerHTML = "Witaj!";
}

if ((gold_amount < 10) && (nagroda_specjalna == 0)) {

document.getElementById("medytacja").style.color = "dimgrey";
document.getElementById("medytacja").onclick = function () {
not_allowed()
};
}

if ((gold_amount >= 10) && (nagroda_specjalna == 0)) {
document.getElementById("medytacja").style.color = "yellow";
document.getElementById("medytacja").style.pointerEvents = 'auto';
document.getElementById("medytacja").onclick = function () {
specjalne_kosci=1;
gra_w_kosci()
};
}


if(nagroda_specjalna_wzieta ==1)
document.getElementById("tekst").innerHTML = "Witaj w moich progach";




}



function kupiec_sklep() {

$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#sklepik").transition({ scale:0,opacity:0}, 0, 'ease');
$("#sklepik").fadeIn(0);
$("#sklepik").transition({ scale:1,opacity:1}, 1000, 'ease');





klik.play();


$("#towar5").fadeOut(0);
$("#towar5_cena").fadeOut(0);
$("#towar5_ilosc").fadeOut(0);

if (kupiec_start == 0) {
ilosc1a = Math.floor(Math.random() * 5) + 1;
ilosc1b = Math.floor(Math.random() * 3) + 1;

ilosc2a = Math.floor(Math.random() * 5) + 1;
ilosc2b = Math.floor(Math.random() * 10) + 10;

ilosc3a = Math.floor(Math.random() * 5) + 1;
ilosc3b = Math.floor(Math.random() * 3) + 2;

ilosc4a = Math.floor(Math.random() * 5) + 1;
ilosc4b = Math.floor(Math.random() * 10) + 5;
kupiec_start = 1;
}

kupiec_sklepik_check();
co_jest_w_sklepiku();
document.getElementById("sklepik_wyjscie").onclick = function () {

$("#sklepik").transition({ scale:0,opacity:0}, 1000, 'ease');
klik.play();
kupiec();
};

document.getElementById("towar1").onclick = function () {
kup_towar1()
};
document.getElementById("towar2").onclick = function () {
kup_towar2()
};
document.getElementById("towar3").onclick = function () {
kup_towar3()
};
document.getElementById("towar4").onclick = function () {
kup_towar4()
};



}



function co_jest_w_sklepiku() {
document.getElementById("sklepik_tekst").innerHTML = "Co Cie interesuje?";

document.getElementById("towar1").innerHTML = "Zioła";
document.getElementById("towar1").style.borderStyle = "solid";
document.getElementById("towar1_ilosc").innerHTML = "Ilość: " + ilosc1a;
document.getElementById("towar1_cena").innerHTML = "Cena: " + ilosc1b;

document.getElementById("towar2").innerHTML = "Runy";
document.getElementById("towar2").style.borderStyle = "solid";
document.getElementById("towar2_ilosc").innerHTML = "Ilość: " + ilosc2a;
document.getElementById("towar2_cena").innerHTML = "Cena: " + ilosc2b;

document.getElementById("towar3").innerHTML = "Składniki";
document.getElementById("towar3").style.borderStyle = "solid";
document.getElementById("towar3_ilosc").innerHTML = "Ilość: " + ilosc3a;
document.getElementById("towar3_cena").innerHTML = "Cena: " + ilosc3b;

document.getElementById("towar4").innerHTML = "Skóry";
document.getElementById("towar4").style.borderStyle = "solid";
document.getElementById("towar4_ilosc").innerHTML = "Ilość: " + ilosc4a;
document.getElementById("towar4_cena").innerHTML = "Cena: " + ilosc4b;


}



function kup_towar1() {
sell.play();
ilosc1a--;

gold_amount = gold_amount - ilosc1b;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
herbs_amount++;
document.getElementById("herbs").innerHTML = "Zioła:" + " " + herbs_amount;
kupiec_sklepik_check();
co_jest_w_sklepiku();
}

function kup_towar2() {
sell.play();
ilosc2a--;

gold_amount = gold_amount - ilosc2b;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
runy_amount++;
document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
kupiec_sklepik_check();
co_jest_w_sklepiku();
}

function kup_towar3() {
sell.play();
ilosc3a--;

gold_amount = gold_amount - ilosc3b;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
skladniki_amount++;
document.getElementById("items").innerHTML = "Składniki:" + " " + skladniki_amount;
co_jest_w_sklepiku();
kupiec_sklepik_check();


}

function kup_towar4() {
sell.play();
ilosc4a--;

gold_amount = gold_amount - ilosc4b;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
skory_amount++;
document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
kupiec_sklepik_check();
co_jest_w_sklepiku();
}









function kupiec_sklepik_check() {

if (ilosc1b > gold_amount) {
document.getElementById("towar1_cena").style.color = "red";

document.getElementById("towar1").style.pointerEvents = 'none';
} else {
document.getElementById("towar1_cena").style.color = "green";

document.getElementById("towar1").style.pointerEvents = 'auto';
}



if (ilosc1a == 0) {
document.getElementById("towar1_ilosc").style.color = "red";

document.getElementById("towar1").style.pointerEvents = 'none';
document.getElementById("towar1").style.color = "dimgrey";

} else {
document.getElementById("towar1_ilosc").style.color = "green";
document.getElementById("towar1").style.color = "forestgreen";
document.getElementById("towar1").style.pointerEvents = 'auto';

}





if ((ilosc1b > gold_amount) || (ilosc1a == 0))
document.getElementById("towar1").style.pointerEvents = 'none';
else
document.getElementById("towar1").style.pointerEvents = 'auto';





if (ilosc2b > gold_amount) {
document.getElementById("towar2_cena").style.color = "red";

document.getElementById("towar2").style.pointerEvents = 'none';
} else {
document.getElementById("towar2_cena").style.color = "darkturquoise";

document.getElementById("towar2").style.pointerEvents = 'auto';
}

if (ilosc2a == 0) {
document.getElementById("towar2_ilosc").style.color = "red";
document.getElementById("towar2").style.color = "dimgrey";
document.getElementById("towar2").style.pointerEvents = 'none';

} else {
document.getElementById("towar2_ilosc").style.color = "darkturquoise";
document.getElementById("towar2").style.color = "darkturquoise";
document.getElementById("towar2").style.pointerEvents = 'auto';

}



if ((ilosc2b > gold_amount) || (ilosc2a == 0))
document.getElementById("towar2").style.pointerEvents = 'none';
else
document.getElementById("towar2").style.pointerEvents = 'auto';












if (ilosc3b > gold_amount) {
document.getElementById("towar3_cena").style.color = "red";

document.getElementById("towar3").style.pointerEvents = 'none';
} 
else 

{
document.getElementById("towar3_cena").style.color = "orange";

document.getElementById("towar3").style.pointerEvents = 'auto';
}

if (ilosc3a == 0) 
{
document.getElementById("towar3_ilosc").style.color = "red";
document.getElementById("towar3").style.color = "dimgrey";
document.getElementById("towar3").style.pointerEvents = 'none';

} else 
{
document.getElementById("towar3_ilosc").style.color = "orange";
document.getElementById("towar3").style.color = "orange";
document.getElementById("towar3").style.pointerEvents = 'auto';

}






if ((ilosc3b > gold_amount) || (ilosc3a == 0))
document.getElementById("towar3").style.pointerEvents = 'none';
else
document.getElementById("towar3").style.pointerEvents = 'auto';





if (ilosc4b > gold_amount) {
document.getElementById("towar4_cena").style.color = "red";

document.getElementById("towar4").style.pointerEvents = 'none';
} else {
document.getElementById("towar4_cena").style.color = "yellow";

document.getElementById("towar4").style.pointerEvents = 'auto';
}

if (ilosc4a == 0) {
document.getElementById("towar4_ilosc").style.color = "red";
document.getElementById("towar4").style.color = "dimgrey";
document.getElementById("towar4").style.pointerEvents = 'none';

} else {
document.getElementById("towar4_ilosc").style.color = "yellow";
document.getElementById("towar4").style.color = "yellow";
document.getElementById("towar4").style.pointerEvents = 'auto';

}


if ((ilosc4b > gold_amount) || (ilosc4a == 0))
document.getElementById("towar4").style.pointerEvents = 'none';
else
document.getElementById("towar4").style.pointerEvents = 'auto';






}










function nagroda_specjalna_loot() {

nagroda_specjalna_wzieta = 1;
if(potion_amount<2)
potion_amount++;
var szansa = Math.floor(Math.random() * 2) + 1;

var ilosc2 = Math.floor(Math.random() * 3) + 2;
var ilosc1 = Math.floor(Math.random() * 3) + 2;
var liczba4 = Math.floor(Math.random() * 2) + 1;
var liczba3 = Math.floor(Math.random() * 3) + 3;
document.getElementById("medytacja").style.borderStyle = "none";

if (liczba4 == 1) {
pick.play();
document.getElementById("medytacja").style.borderBottom = "solid";
document.getElementById("medytacja").innerHTML = "Zdobyto " + ilosc1 + " runy";
runy_amount = runy_amount + ilosc1;
document.getElementById("medytacja").style.pointerEvents = 'none';
}

if (liczba4 == 2) {
pick.play();
document.getElementById("medytacja").innerHTML = "Zdobyto " + liczba3 + " skóry";
skory_amount = skory_amount + liczba3;
document.getElementById("medytacja").style.pointerEvents = 'none';
}


document.getElementById("medytacja").className = "flash";



}








function gra_w_kosci()

{
gold_amount = gold_amount - 10;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
document.getElementById("exra_slot").onclick = function () {
rzutx5()
};
kupiec_kosci = 1;
za_ile_gra = 0;

grajx5();

}




function loot1() {

battle_sfx.stop();
boss.stop();


if ((zlecenie_completed == 1) && (zlecenie_aktywne == 1)) // po zazbiciu potwora ze zlecenia pokaz informacje
{
zlecenie_aktywne = 0;
zlecenie2_sfx.play();
$("#loot0").fadeIn(200);
}

xp_sfx.play();
document.getElementById("loot1").innerHTML = "Zdobyto" + " " + xp_received + " " + "doświadczenia";
$("#loot1").fadeIn(200);
xp_amount = xp_amount + xp_received;
document.getElementById("xp").innerHTML = "XP:" + " " + xp_amount + "/" + xp_req;

if ((jaki_pierscien1 == "Szkolenia") || (jaki_pierscien2 == "Szkolenia"))
document.getElementById("loot1").innerHTML = "Zdobyto "  + xp_received + " pkt doświadczenia + " +xp_temp + " za pierścień";
var gold_chance = Math.floor(Math.random() * 4);
if (gold_chance < 3)
setTimeout(loot2, 1200);
else
setTimeout(loot3, 1200);

}

function loot2() {
document.getElementById("ucieczka").style.pointerEvents = 'auto';
gold_received_calc();
buy.play();

document.getElementById("loot2").innerHTML = "Zdobyto" + " " + gold_received + " " + "złota";
if ((jaki_pierscien1 == "Bogactwa") || (jaki_pierscien2 == "Bogactwa"))
document.getElementById("loot2").innerHTML = "Zdobyto " + gold_temp +" złota + "+ zaokraglone3 + "  za pierścień"; 


$("#loot2").fadeIn(200);
gold_amount = gold_amount + gold_received;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

document.getElementById("loot2").style.color = "yellow";
setTimeout(loot3, 1200);
}

function loot3(value) {

var szansa = Math.floor(Math.random() * 4);

if (grobowiec_completed == 1)
szansa = 1;

if(value==1)
szansa=1;







if (szansa < 2) 
{


$("#loot3").fadeIn(200);
var ilosc1 = Math.floor(Math.random() * 1) + 1;
var liczba4 = Math.floor(Math.random() * 3) + 1;
if (life_amount < life_max)
liczba4 = Math.floor(Math.random() * 5) + 1;



if((liczba4==2)&&(bandyci_aktywni==1))
setTimeout(loot3(1), 0);




if ((liczba4 == 4) && (life_max - life_amount) > 5)
liczba4 = 2;

if (liczba4 == 1) {
pick.play();

document.getElementById("loot3").innerHTML = "Zdobyto zioło";

document.getElementById("loot3").style.color = "green";
herbs_amount = herbs_amount + ilosc1;
}

if (liczba4 == 2) {
pick.play();

document.getElementById("loot3").innerHTML = "Zdobyto składnik";

skladniki_amount = skladniki_amount + ilosc1;

document.getElementById("loot3").style.color = "orange";
}

if (liczba4 == 3) {
pick.play();

document.getElementById("loot3").innerHTML = "Zdobyto  skórę";

document.getElementById("loot3").style.color = "yellow";
skory_amount = skory_amount + ilosc1;
}

if (liczba4>=4) {
var ile_zycia = life_max - life_amount;
pick.play();
if (life_amount + 5 <= life_max)
document.getElementById("loot3").innerHTML = "Zdobyto zioła lecznicze +5" + '<i style="color:red";" class="icon-heart"></i>';
else
document.getElementById("loot3").innerHTML = "Zdobyto zioła lecznicze +" + ile_zycia + '<i style="color:red";" class="icon-heart"></i>';
heal.play();
document.getElementById("loot3").style.color = "coral";
if (life_amount + 5 <= life_max)
life_amount = life_amount + 5;
else
life_amount = life_amount + ile_zycia;
if (life_amount > life_max)
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}






}
nowy_poziom();

}

function koniec_Walki()

{
var leczenie_po_walce = life_max / 4;
var leczenie_po_walce1 = Math.round(leczenie_po_walce);
if (life_amount < leczenie_po_walce)
life_amount = leczenie_po_walce1;

dziwka_zaliczona = 0;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;


document.getElementById("atak_mieczem").style.pointerEvents = 'auto';
$("#loots").fadeOut(200);
$("#loot0").fadeOut(200);


kierunek_po_walce();





}






function mob_dead_sfx() {
var liczba4 = Math.floor(Math.random() * 3) + 1;
if (liczba4 == 1)
mob_dead1.play();
if (liczba4 == 2)
mob_dead2.play();
if (liczba4 == 3)
mob_dead3.play();
dead_monsters++;
document.getElementById("kill_counter").innerHTML = "Zabite potwory::" + " " + dead_monsters;

}


function czy_pudlo() {

if((cecha_broni_nazwa =="Precyzja")&&(celnosc==1))
var liczba = Math.floor(Math.random() * 12) + 1;

else if(cecha_broni_nazwa =="Precyzja")
var liczba = Math.floor(Math.random() * 11) + 1;

else if(celnosc==1)
var liczba = Math.floor(Math.random() * 8) + 1;
else
var liczba = Math.floor(Math.random() * 7) + 1;

if (liczba == 1)
pudlo = 1;
else
pudlo = 0;


if(stun==1)
	pudlo = 0;

}


function czy_pudlo_potwora() {


if(unik==1)
var liczba = Math.floor(Math.random() * 6) + 1;
else  if(unik==2)
var liczba = Math.floor(Math.random() * 8) + 1;
else
var liczba = Math.floor(Math.random() * 7) + 1;

if (liczba == 1)
pudlo = 1;
else
pudlo = 0;

}




function miecz_hit_sfx() {
var liczba3 = Math.floor(Math.random() * 3) + 1;



if (liczba3 == 1)
miecz_hit1.play();
if (liczba3 == 2)
miecz_hit2.play();
if (liczba3 == 3)
miecz_hit3.play();
if (liczba3 == 4)
miecz_hit4.play();
if (liczba3 == 5)
miecz_hit5.play();
if (liczba3 == 6)
miecz_hit6.play();

}






function mob_hit_sfx() {
var liczba3 = Math.floor(Math.random() * 3) + 1;
if (liczba3 == 1)
mob_hit1.play();
if (liczba3 == 2)
mob_hit2.play();
if (liczba3 == 3)
mob_hit3.play();
if (liczba3 == 4)
mob_hit4.play();
if (liczba3 == 5)
mob_hit5.play();


if(bandyci_aktywni==1)
miecz_hit_sfx();



}



function skrzynia() {
kroki_stop();
document.getElementById("zdarzenie_open").style.color = "dimgrey";
document.getElementById("zdarzenie_open").onclick = function () {
za_malo_zlota()
};
document.getElementById("zdarzenie_quit").onclick = function () {
za_malo_zlota()
};
chest_sfx.play();
document.getElementById("zdarzenie_info").innerHTML = "Otwierasz skrzynię....";


setTimeout(skrzynia2, 1500);
}

function skrzynia2() {


ilosc1 = 0;
ilosc2 = 0;


ilosc1 = Math.floor(Math.random() * 2) + 1;


ilosc2 = Math.floor(Math.random() * 5) + 3;




var liczba4 = Math.floor(Math.random() * 5) + 1;

if (liczba4 == 1) {
pick.play();
document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " zioła";
herbs_amount = herbs_amount + ilosc1;

document.getElementById("zdarzenie_info").style.color = "green";
}

if (liczba4 == 2) {
inventory.play();
document.getElementById("zdarzenie_info").innerHTML = "Znaleziono sterte śmieci";
document.getElementById("zdarzenie_info").style.color = "white";
}

if (liczba4 == 3) {
trafienie1.play();
document.getElementById("zdarzenie_info").innerHTML = "Pułapka...";
var ile_odjac = Math.floor(Math.random() * 5) + 1;
life_amount = life_amount - ile_odjac;
if (life_amount <= 0)
life_amount = 1;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
document.getElementById("zdarzenie_info").style.color = "red";
document.getElementById("blood").style.backgroundImage = "url('blood1.png')";
document.getElementById("blood").innerHTML = "-" + ile_odjac;
pos1 = Math.floor(Math.random() * 430) + 1;
pos3 = Math.floor(Math.random() * 330) + 1;
document.getElementById('blood').style.left = pos1 + "px";
document.getElementById('blood').style.top = pos3 + "px";
$("#blood").fadeIn(0);
document.getElementById("blood").style.display = "block";
document.getElementById("blood").innerHTML = ile_odjac;
setTimeout(zanik_krwi, 1500);

}
if (liczba4 == 4) {
inventory.play();
if (ilosc1 == 1)
document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " skórę";
else
document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " skóry";
skory_amount = skory_amount + ilosc1;
document.getElementById("zdarzenie_info").style.color = "yellow";

}
if (liczba4 == 5) {

ilosc2 = ilosc2 + level_amount*1.5;
ilosc2 = Math.round(gold_received);



pick.play();
document.getElementById("zdarzenie_info").innerHTML = "Znaleziono złoto w ilości" + " " + ilosc2;
gold_amount = gold_amount + ilosc2;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

document.getElementById("zdarzenie_info").style.color = "yellow";


}

document.getElementById("zdarzenie_open").style.color = "dimgrey";
document.getElementById("zdarzenie_quit").onclick = function () {
zdarzenie_zanik()
};


}











function zanik_krwi() {

$("#blood").fadeOut(400);
}





function nowy_poziom() {



if (xp_amount >= xp_req) {

$("#loot4").fadeIn(200);


if(level_amount==1)      
var ile = 30*level_amount + 130;   
else
var ile = 30*level_amount + 180;




xp_req = xp_req + ile;

level_amount++;

life_amount = life_max;




document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;





document.getElementById("loot4").innerHTML = "Zdobyto" + " " + level_amount + " " + "poziom!";
poziom.play();
document.getElementById("level").innerHTML = "Poziom:" + " " + level_amount;



document.getElementById('xp').innerHTML = "XP:" + " " + xp_amount + "/" + xp_req;
points_amount = points_amount + 5;
document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;

setTimeout(rozdziel_punkty, 4000);
} else
setTimeout(koniec_Walki, 2000);

}

function nowy_poziom_miasto() {



if (xp_amount >= xp_req) {

if(level_amount==1)      
var ile = 30*level_amount + 130;   
else
var ile = 30*level_amount + 170;

xp_req = xp_req + ile;




level_amount++;
life_amount = life_max;

obrona_extra_level_min = obrona_extra_level_min + 1;
obrona_extra_level_max = obrona_extra_level_max + 1;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
poziom.play();
document.getElementById("level").innerHTML = "Poziom:" + " " + level_amount;






document.getElementById('xp').innerHTML = "XP:" + " " + xp_amount + "/" + xp_req;
points_amount = points_amount + 5;
document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;
sprawdz_punkty();
setTimeout(level_up_pokaz, 1000);
setTimeout(rozdziel_punkty2, 1000);
}


}


/*
function spawn()
{

//losuj_potwora(90,'dupa','magic');
//zakres_ataku_potwora();
tower();

}
*/

function losuj_potwora(hp, name, immune, xp) {

mob_hp = hp;

enemy_resistant = immune;

if ((name == undefined) || (name == "none")) {
mob_name = Math.floor(Math.random() * 37);
name = mob[mob_name];
}

if ((hp == undefined) || (hp == "none")) {
mob_hp = Math.floor(Math.random() * 6) + 3;
mob_hp = mob_hp + (level_amount * 3);   

if(level_amount>2)
{
mob_hp = Math.floor(Math.random() * 5) + 5;
mob_hp = mob_hp + (level_amount * 4);   


}
if(level_amount>4)
{
mob_hp = Math.floor(Math.random() * 5) + 5;
mob_hp = mob_hp + (level_amount * 5);   


}



}









document.getElementById("enemy_name").innerHTML = name;

if (energia_bosa == 1)
mob_hp = energia_zlecenie;







if (immune == undefined) {
var liczba = Math.floor(Math.random() * 6) + 1;
if (liczba <= 4)
enemy_resistant = "none";
if (liczba == 4)
enemy_resistant = "sword";
if (liczba == 5)
enemy_resistant = "magic";


}

if (hp == undefined) {
if ((walka_nr == 1) && (kierunek != 8) && (kierunek != 20)) {
mob_hp = 2;
walka_nr = 2;
enemy_resistant = "none";
} else if ((walka_nr == 2) && (kierunek != 8) && (kierunek != 20)) {
mob_hp = 3;
walka_nr = 3;
enemy_resistant = "none";
} else if ((walka_nr == 3) && (kierunek != 8) && (kierunek != 20)) {
mob_hp = 4;
walka_nr = 4;
enemy_resistant = "none";
} else if ((walka_nr == 4) && (kierunek != 8) && (kierunek != 20)) {
mob_hp = 5;
walka_nr = 5;
enemy_resistant = "none";
}
}
if (xp == undefined)
mob_hp_xp = mob_hp;
else
mob_hp_xp = xp;


/*
if (tower_temp_lvl != tower_poziom) {
temp_mob_name = name;
tower_immune = enemy_resistant;
}


if (piramida_temp_lvl != piramida_poziom) {
temp_mob_name = name;
tower_immune = enemy_resistant;
}

if (sand_cave_poziom_temp != sand_cave_poziom) {
temp_mob_name = name;
sand_immune = enemy_resistant;
}

*/

if(temp_poziom!=aktualny_poziom)
{
temp_mob_name = name;
monster_immune = enemy_resistant;  

}





document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
if (enemy_resistant == "none")
document.getElementById("enemy_name").innerHTML = name;
if (enemy_resistant == "magic")
document.getElementById("enemy_name").innerHTML = name + " " + magia_def1;
if (enemy_resistant == "sword")
document.getElementById("enemy_name").innerHTML = name + " " + cios_def1;
}


/*
function resistance()
{
var liczba =  Math.floor(Math.random()*6)+1;
if(liczba<=4)
enemy_resistant = "none";
if(liczba==4)
enemy_resistant = "sword";
if(liczba==5)
enemy_resistant = "magic";
}
*/






function rozdziel_punkty() {

sprawdz_punkty();

$("#loots").fadeOut(500);
$("#loot1").fadeOut(0);
$("#loot2").fadeOut(0);
$("#loot3").fadeOut(0);
$("#loot4").fadeOut(0);
$("#loot5").fadeOut(0);



document.getElementById('strona_novigard').style.backgroundImage = "url('graaawylacz_dr.jpg')";
kierunek_po_walce();
setTimeout(level_up_pokaz, 200);
}






function rozdziel_punkty2() {

if (points_amount > 1)
document.getElementById("lvl_up_info1").innerHTML = "Rozdziel" + "&nbsp" + points_amount + " punkty doświadczenia";
if (points_amount == 1)
document.getElementById("lvl_up_info1").innerHTML = "Rozdziel" + "&nbsp" + points_amount + " punkt doświadczenia";
if (points_amount > 4)
document.getElementById("lvl_up_info1").innerHTML = "Rozdziel" + "&nbsp" + points_amount + " punktów doświadczenia";

document.getElementById("zycie_up1").innerHTML = "Życie +5" + "&nbsp &nbsp" + "(koszt" + " " + koszt_zycie + ")";
document.getElementById("magia_up1").innerHTML = "Magia +1" + "&nbsp &nbsp" + "(koszt" + " " + koszt_magia + ")";
document.getElementById("sila_up1").innerHTML = "Siła  +1" + "&nbsp &nbsp" + "(koszt" + " " + koszt_sila + ")";
document.getElementById("mana_up1").innerHTML = "Mana  +2" + "&nbsp &nbsp" + "(koszt" + " " + koszt_mana + ")";

}

function zycie_plus() {
if (points_amount >= koszt_zycie) {

klik2.play();
life_max = life_max + 5;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
points_amount = points_amount - 2;
document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;
sprawdz_punkty();
}
}




function magia_plus() {
if (points_amount >= koszt_magia) {

klik2.play();
magic_amount = magic_amount + 1;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
points_amount = points_amount - koszt_magia;
koszt_magia++;
document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;
sprawdz_punkty();
document.getElementById("magia_up1").innerHTML = "Magia +1" + "&nbsp &nbsp" + "(koszt" + " " + koszt_magia + ")";
}
}


function sila_plus() {
if (points_amount >= koszt_sila) {

klik2.play();
strenght_amount = strenght_amount + 1;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
points_amount = points_amount - koszt_sila;
koszt_sila=2;

if(strenght_amount>4)
koszt_sila=3;

document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;
sprawdz_punkty();
document.getElementById("sila_up1").innerHTML = "Siła  +1" + "&nbsp &nbsp" + "(koszt" + " " + koszt_sila + ")";
}
}


function mana_plus() {
if (points_amount >= koszt_mana) {

klik2.play();
manal_max = manal_max + 2;

document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
points_amount = points_amount - 2;
document.getElementById("points").innerHTML = "Punkty:" + " " + points_amount;
sprawdz_punkty();
}
}



function sprawdz_punkty() {

if (points_amount < koszt_magia) {
document.getElementById("magia_add").style.color = "dimgrey";
document.getElementById("magia_add").onclick = function () {
za_malo_zlota()
};
document.getElementById("magia_up1").style.color = "dimgrey";
} else {
document.getElementById("magia_add").style.color = "turquoise";
document.getElementById("magia_add").onclick = function () {
magia_plus()
};
document.getElementById("magia_up1").style.color = "turquoise";
}

if (points_amount < koszt_sila) {
document.getElementById("sila_add").style.color = "dimgrey";
document.getElementById("sila_add").onclick = function () {
za_malo_zlota()
};
document.getElementById("sila_up1").style.color = "dimgrey";
} else {
document.getElementById("sila_add").style.color = "forestgreen";
document.getElementById("sila_add").onclick = function () {
sila_plus()
};
document.getElementById("sila_up1").style.color = "forestgreen";
}

if (points_amount < 2) {
document.getElementById("zycie_add").style.color = "dimgrey";
document.getElementById("zycie_add").onclick = function () {
za_malo_zlota()
};
document.getElementById("zycie_up1").style.color = "dimgrey";

document.getElementById("mana_add").style.color = "dimgrey";
document.getElementById("mana_add").onclick = function () {
za_malo_zlota()
};
document.getElementById("mana_up1").style.color = "dimgrey";
} else {
document.getElementById("zycie_add").style.color = "coral";
document.getElementById("zycie_add").onclick = function () {
zycie_plus()
};
document.getElementById("zycie_up1").style.color = "coral";
document.getElementById("mana_add").style.color = "deepskyblue";
document.getElementById("mana_add").onclick = function () {
mana_plus()
};
document.getElementById("mana_up1").style.color = "deepskyblue";
}




if (points_amount > 1)
document.getElementById("lvl_up_info1").innerHTML = "Rozdziel" + "&nbsp" + points_amount + " punkty doświadczenia";
if (points_amount == 1)
document.getElementById("lvl_up_info1").innerHTML = "Pozostał tylko 1 punkt.";
if (points_amount > 4)
document.getElementById("lvl_up_info1").innerHTML = "Rozdziel" + "&nbsp" + points_amount + " punktów doświadczenia";
if (points_amount == 0)
document.getElementById("lvl_up_info1").innerHTML = "Nie posiadasz więcej punktów.";



}

function wyjdz() {
klik.play();
$("#level_up").fadeOut(500);

ilosc_ziol = Math.floor(Math.random() * 5) + 2;


setTimeout(level_color, 1000);
}


function level_color() {






document.getElementById("zycie_up").style.color = "coral";
document.getElementById("magia_up").style.color = "turquoise";
document.getElementById("sila_up").style.color = "forestgreen";
document.getElementById("mana_up").style.color = "deepskyblue";
document.getElementById("points_up").style.color = "orange";




}



function miecz_znak() {

znak_od = parseFloat(level_amount) + parseFloat(1) + parseFloat(magic_amount) + parseFloat(magic_bonus);
znak_do = parseFloat(level_amount) + parseFloat(5) + parseFloat(magic_amount) + parseFloat(magic_bonus);

miecz_od = parseFloat(min_atak) + parseFloat(sila_bonus);

miecz_do = parseFloat(max_atak) + parseFloat(strenght_amount)  + parseFloat(sila_bonus);

miecz_od = miecz_od +grom_plus_min;
miecz_do = miecz_do + grom_plus;
if(miecz_od==0)
miecz_od=1;
document.getElementById("atak_mieczem_info").innerHTML = miecz_od + " " + "-" + " " + miecz_do;
// document.getElementById("atak_znakiem_info").innerHTML = znak_od + " " + "-" + " " + znak_do;
document.getElementById("attack_info").innerHTML = miecz_od + " " + "-" + " " + miecz_do;
document.getElementById("znak_info").innerHTML = znak_od + " " + "-" + " " + znak_do;




document.getElementById("weapon_dmg").innerHTML = min_atak + " " + "-" + " " + max_atak;


}
//herbs_amount + "&nbsp &nbsp &nbsp" + "SKŁADNIKI:" + " " + skladniki_amount  ;

function jaskolka_add() {

herbs_amount = herbs_amount - 3;
skladniki_amount = skladniki_amount - 3;
jaskolka_amount++;
eliksir_sfx.play();

ekwipunek_check_color();

brak_skladnikow1();
tworzenie_mikstur_check();
}

function puszczyk_add() {
herbs_amount = herbs_amount - 3;
skladniki_amount = skladniki_amount - 3;
eliksir_sfx.play();

puszczyk_amount++;
ekwipunek_check_color();

brak_skladnikow1();
tworzenie_mikstur_check();
}

function wilga_add() {

wilga_amount++;
herbs_amount = herbs_amount - 2;
skladniki_amount = skladniki_amount - 3;
eliksir_sfx.play();

ekwipunek_check_color();

brak_skladnikow1();
tworzenie_mikstur_check();
}

function grom_add() {
herbs_amount = herbs_amount - 2;
skladniki_amount = skladniki_amount - 3;
grom_amount++;
eliksir_sfx.play();

ekwipunek_check_color();

brak_skladnikow1();
tworzenie_mikstur_check();

}







function opis_eliksirow2() {

$("#medytacja_okno").fadeIn(300);
klik.play();

}






function tworzenie_mikstur_check() {
if ((herbs_amount < 3) || (skladniki_amount < 3)) {
document.getElementById("tworz_jaskolka").style.color = "dimgrey";
document.getElementById("tworz_jaskolka").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("tworz_jaskolka").style.color = "cornflowerblue";
document.getElementById("tworz_jaskolka").onclick = function () {
jaskolka_add()
tworzenie_eliksirow_zanik();
};
}

if ((herbs_amount < 3) || (skladniki_amount < 3)) {
document.getElementById("tworz_puszczyk").style.color = "dimgrey";
document.getElementById("tworz_puszczyk").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("tworz_puszczyk").style.color = "cornflowerblue";
document.getElementById("tworz_puszczyk").onclick = function () {
puszczyk_add()
tworzenie_eliksirow_zanik();
};
}

if ((herbs_amount < 2) || (skladniki_amount < 3)) {
document.getElementById("tworz_wilga").style.color = "dimgrey";
document.getElementById("tworz_wilga").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("tworz_wilga").style.color = "cornflowerblue";
document.getElementById("tworz_wilga").onclick = function () {
wilga_add()
tworzenie_eliksirow_zanik();
}
}

if ((herbs_amount < 2) || (skladniki_amount < 3)) {
document.getElementById("tworz_grom").style.color = "dimgrey";
document.getElementById("tworz_grom").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("tworz_grom").style.color = "cornflowerblue";
document.getElementById("tworz_grom").onclick = function () {
grom_add()
tworzenie_eliksirow_zanik();
}

}
}






function brak_skladnikow1() {

if (herbs_amount < 3)
document.getElementById("jaskolka_ziola").style.color = "red";
else
document.getElementById("jaskolka_ziola").style.color = "green";


if (skladniki_amount < 2)
document.getElementById("jaskolka_skladniki").style.color = "red";
else
document.getElementById("jaskolka_skladniki").style.color = "orange";


if (herbs_amount < 3)
document.getElementById("puszczyk_ziola").style.color = "red";
else
document.getElementById("puszczyk_ziola").style.color = "green";



if (skladniki_amount < 3)
document.getElementById("puszczyk_skladniki").style.color = "red";
else
document.getElementById("puszczyk_skladniki").style.color = "orange";


if (herbs_amount < 2)
document.getElementById("wilga_ziola").style.color = "red";
else
document.getElementById("wilga_ziola").style.color = "green";

if (skladniki_amount < 3)
document.getElementById("wilga_skladniki").style.color = "red";
else
document.getElementById("wilga_skladniki").style.color = "orange";

if (herbs_amount < 4)
document.getElementById("grom_ziola").style.color = "red";
else
document.getElementById("grom_ziola").style.color = "green";

if (skladniki_amount < 3)
document.getElementById("grom_skladniki").style.color = "red";
else
document.getElementById("grom_skladniki").style.color = "orange";



}








function ucieczka_fail() {


pos1 = Math.floor(Math.random() * 430) + 1;

pos3 = Math.floor(Math.random() * 330) + 1;


document.getElementById('blood').style.left = pos1 + "px";

document.getElementById('blood').style.top = pos3 + "px";

var krew = Math.floor(Math.random() * 2) + 1;

if (krew == 1)
document.getElementById("blood").style.backgroundImage = "url('blood.png')";
if (krew == 2)
document.getElementById("blood").style.backgroundImage = "url('blood2.png')";

$("#blood").fadeIn(900);
document.getElementById("blood").style.display = "block";
document.getElementById("blood").innerHTML = "-" + level_amount;
trafienie();

life_amount = life_amount - level_amount;





document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}



function ekwipunek_check_color() {
if (herbs_amount < 2)
plecak_herbs_2 = plecak_herbs.fontcolor("red");
if (herbs_amount > 1)
plecak_herbs_2 = plecak_herbs.fontcolor("green");

if (skladniki_amount < 3) {
plecak_skladniki2 = plecak_skladniki.fontcolor("red");

}
if (skladniki_amount > 2) {
plecak_skladniki2 = plecak_skladniki.fontcolor("orange");

}



}




function jaskolka_use() {


heal.play();
jaskolka_amount--;

ile_elixirow_na_stanie();

eliksir_walki_amount = 3;
if(jaskolka_upgrade==0)
document.getElementById("eliksir_info").innerHTML = "Regeneruje  życie (1 + poziom postaci)";
else
document.getElementById("eliksir_info").innerHTML = "Regeneruje  życie (2 + poziom postaci)";   
document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
jaskolka = 1;
puszczyk = 0;
wilga = 0;
grom = 0;
document.getElementById("eliksir").innerHTML = "Eliksir: Jaskółka";
picie_eliksirow_zanik();
}

function puszczyk_use() {

heal.play();
puszczyk_amount--;
ile_elixirow_na_stanie();


eliksir_walki_amount = 3;
document.getElementById("eliksir_info").innerHTML = "Regeneruje koncentrację o 2 na turę";
document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
jaskolka = 0;
puszczyk = 1;
wilga = 0;
grom = 0;

document.getElementById("eliksir").innerHTML = "Eliksir: Puszczyk";
picie_eliksirow_zanik();
}

function wilga_use() {

heal.play();
wilga_amount--;
ile_elixirow_na_stanie();

document.getElementById("eliksir").innerHTML = "Eliksir: Wilga";
eliksir_walki_amount = 3;
if(wilga_upgrade==0)
document.getElementById("eliksir_info").innerHTML = "Obrona + 5 i redukcja obrażenia o 30%";
else
document.getElementById("eliksir_info").innerHTML = "Obrona + 10 i redukcja obrażenia o 30%";    
document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
jaskolka = 0;
puszczyk = 0;
wilga = 1;
grom = 0;
if(wilga_upgrade==0)
wilga_obrona = 5;
else
wilga_obrona = 10;

if (wilga_dodana == 0) {
obrona_temp = obrona_temp + wilga_obrona;
wilga_dodana = 1;
}

document.getElementById("armour_bonus").innerHTML = obrona_temp;
picie_eliksirow_zanik();








}

function grom_use() {

heal.play();
grom_amount--;
ile_elixirow_na_stanie();
document.getElementById("eliksir").innerHTML = "Eliksir: Grom";

eliksir_walki_amount = 3;
if(grom_upgrade==0)
{   
var nowy_atak_min   =  miecz_od +1;  
var nowy_atak = miecz_do + 1 + level_amount;

nowy_atak2=nowy_atak;
nowy_atak_min2=nowy_atak_min;   
}
else
{    
var nowy_atak = miecz_do + 2 + level_amount;  
var nowy_atak_min = miecz_od + 2;  

nowy_atak2=nowy_atak;
nowy_atak_min2=nowy_atak_min;   
}



document.getElementById("eliksir_info").innerHTML = "Atak " + nowy_atak_min + " - " + nowy_atak +", blokuje o 50% wzrost "+ '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>';


document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
jaskolka = 0;
puszczyk = 0;
wilga = 0;
grom = 1;
eliksir_check_battle();
picie_eliksirow_zanik();
}


function eliksir_check_battle() {
if (eliksir_walki_amount > 0) {

if (jaskolka == 1) {

var ile=0;    
if(jaskolka_upgrade==0)
{    
life_amount = life_amount + 1 + level_amount;
ile =    1 +level_amount;
}
else
{   
ile = 2 + level_amount;
life_amount = life_amount + 3 + level_amount;
}

if (life_amount > life_max)
life_amount = life_max;


$("#zycie_restore").transition({scale:1, opacity:1},0,'ease');
$("#zycie_restore").transition({scale:0, opacity:0},4000,'ease');
document.getElementById("zycie_restore").innerHTML ="+"+'<i style="color:red" ; class="icon-heart"></i>' + ile;




}

if (grom == 1) {
if(grom_upgrade==0)
{
grom_plus = level_amount+1; 
grom_plus_min = 1;    
}
else
{
grom_plus = level_amount+2; 
grom_plus_min = 2;       

}   
}

document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
if (life_amount > life_max)
life_amount = life_max
if (mana_amount > manal_max)
mana_amount = manal_max;
}

if (eliksir_walki_amount <= 0)
{
grom_plus = 0;
grom_plus_minus=0;    

}
}


function dane_miecza_do_kupna() 

{
if(miecz_wylosowany==0)
{
min_atak_new = level_amount;

max_atak_new = Math.floor(Math.random() * 2) + level_amount+1;              


if(min_atak_new==max_atak_new)
max_atak_new++;



if((min_atak==1)&&(max_atak==2))
{
min_atak_new = 1;
max_atak_new =3;                   
}



miecz_do_kupienia =  Math.floor(Math.random() * 23) ;   
miecz_wylosowany=1;
}




}


function kowal_sklep() {
dane_miecza_do_kupna();
var x1 = 2 * min_atak_new + 10;
var y1 = max_atak_new * 3;
var z1 = max_atak_new * min_atak_new;
var z2 = z1;
cen_miecza = x1 + y1 + z2;
kiedy_nowy_towar = kiedy_nowy_towar - ile_walk_zaliczonych2;
document.getElementById("tekst").innerHTML = "Nowy towar po" + "&nbsp" + kiedy_nowy_towar + "&nbsp" + "walkach";
document.getElementById("okno_nazwa_broni").style.color = "dodgerblue";
document.getElementById("okno_nazwa_broni").innerHTML = miecze[miecz_do_kupienia];
document.getElementById("okno_bron_cena").innerHTML = "Cena:" + " " + cen_miecza + " " + "złota";
document.getElementById("okno_bron_dmg").innerHTML = "Atak:" + " " + min_atak_new + " " + "-" + " " + max_atak_new;
document.getElementById("okno_wartosc_obcenej_broni").innerHTML = "Wartośc obecnej broni: "+"<br>" + weapon_sell_value + " złota";



if (gold_amount < (cen_miecza - weapon_sell_value)) {
document.getElementById("bron_kup").style.color = "dimgrey";
document.getElementById("bron_kup").onclick = function () {
za_malo_zlota_na_miecz()
};
} else {
document.getElementById("bron_kup").style.color = "green";
document.getElementById("bron_kup").onclick = function () {
kup_miecz()
};
}

if (miecz_kupiony == 1) {
document.getElementById("okno_nazwa_broni").innerHTML = "Chwilowy brak towaru";
document.getElementById("okno_nazwa_broni").style.color = "dimgrey";
document.getElementById("okno_bron_cena").innerHTML = "Cena: --";
document.getElementById("okno_bron_dmg").innerHTML = "Atak: --";
document.getElementById("bron_kup").style.color = "dimgrey";
document.getElementById("bron_kup").style.color = "dimgrey";
document.getElementById("bron_kup").onclick = function () {
za_malo_zlota()
};
}

if ((miecz_kupiony == 0) && (gold_amount > cen_miecza)) {
document.getElementById("okno_nazwa_broni").style.color = "dodgerblue";
document.getElementById("bron_kup").style.pointerEvents = 'auto';
}

}






function za_malo_zlota() {

disabled.play();

}


function za_malo_zlota_na_miecz() {

var brakuje = cen_miecza - gold_amount - weapon_sell_value;
disabled.play();
document.getElementById("okno_bron_cena").style.color = "red";
document.getElementById("okno_bron_cena").innerHTML = "Brakuje: " + brakuje + " złota";

}


function kup_miecz() {
co_jest_ulepszane_check = 0;
ulepszenie_obecne = 0;
wymagane_runy = 2;
nazwa_posiadanej_broni = miecze[miecz_do_kupienia];
document.getElementById("weapon_info").innerHTML = nazwa_posiadanej_broni;

gold_amount = gold_amount - cen_miecza + weapon_sell_value;
weapon_sell_value = Math.round(cen_miecza / 3);

var nadwyzka = parseInt(weapon_sell_value) - parseInt(cen_miecza);
if (nadwyzka > 0)
gold_amount = gold_amount + nadwyzka;





document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
document.getElementById("weapon").innerHTML = "Miecz (wartość " + weapon_sell_value + ")";
play2.play();
min_atak = min_atak_new;
max_atak = max_atak_new;
miecz_od = min_atak + strenght_amount + sila_bonus;
miecz_do = max_atak + strenght_amount  + sila_bonus;
miecz_od = miecz_od + grom_plus_min;
miecz_do = miecz_do + grom_plus;
document.getElementById("atak_mieczem_info").innerHTML = miecz_od + " " + "-" + " " + miecz_do;
document.getElementById("atak_znakiem_info").innerHTML = znak_od + " " + "-" + " " + znak_do;
document.getElementById("attack_info").innerHTML = miecz_od + " " + "-" + " " + miecz_do;
miecz_kupiony = 1;

bron_posiadana++;


document.getElementById("kowal_ulepsz").innerHTML ="Ulepsz bron";
document.getElementById("kowal_ulepsz").className = "flash0";
document.getElementById("kowal_ulepsz").style.color ="deeppink";
document.getElementById("kowal_ulepsz").onclick = function () {
ulepszenie_broni_pokaz()
};


document.getElementById("okno_ulepszenie_nr").className = "flash0";
cecha_broni_nazwa ="none";
cecha_broni_nadana=0;

kowal_sklep();


}



function kowal_wybor() {

miecz_znak();
dane_miecza_do_kupna();
$("#miasto_kowal").transition({ scale:0,opacity:0}, 0, 'ease');
$("#miasto_kowal").fadeIn(0);
$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#miasto_kowal").transition({ scale:1,opacity:1}, 1000, 'ease');





document.getElementById("okno_ulepszenie_nr").style.color = "green";
document.getElementById("okno_ulepszenie_wymagania").style.color = "yellow";
document.getElementById("okno_bron_cena").style.color = "yellow";
document.getElementById("strona_novigard").style.backgroundImage = "url('kowal.jpg')";


kiedy_nowy_towar = kiedy_nowy_towar - ile_walk_zaliczonych2;
klik.play();
kowal_sfx.stop();
kowal_sfx.play();
kosci_sfx.stop();



document.getElementById("kowal_wyjdz").onclick = function () {

$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#miasto_kowal").transition({ scale:0,opacity:0}, 1000, 'ease');
wroc2();

};



$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#miasto").fadeOut(0);



if (ulepszenie_obecne == ulepszenie_max) 
{
document.getElementById("kowal_ulepsz").innerHTML ="Nadaj specjalną cech3ę";
document.getElementById("kowal_ulepsz").className = "flash2a";
document.getElementById("kowal_ulepsz").onclick = function () {
miecz_specjalny()
};


}
else
{
document.getElementById("kowal_ulepsz").innerHTML ="Ulepsz bron";
document.getElementById("kowal_ulepsz").className = "flash0";
document.getElementById("kowal_ulepsz").onclick = function () {
ulepszenie_broni_pokaz()
};
}



if(cecha_broni_nadana==1)
{
document.getElementById("kowal_ulepsz").innerHTML ="Nadaj specjalną cechę";
document.getElementById("kowal_ulepsz").className = "flash0";
document.getElementById("kowal_ulepsz").style.color ="dimgrey";
document.getElementById("kowal_ulepsz").className = "press";
document.getElementById("kowal_ulepsz").onclick = function () {
not_allowed()
};
}






}


function ulepsz_bron() {

document.getElementById("okno_ulepszenie_nr").style.color = "green";

if (ulepszenie_obecne == 0) {
var wartosc = min_atak + 1;
document.getElementById("ulepsz_button").innerHTML = "--> " + wartosc + "-" + max_atak;
upgrade_gold = wartosc + max_atak;
wymagane_runy = 1;
}


if (ulepszenie_obecne == 1) {
var wartosc = max_atak + 1;
document.getElementById("ulepsz_button").innerHTML = "--> " + min_atak + "-" + wartosc;
upgrade_gold = min_atak + wartosc;
wymagane_runy = 2;
}


if (ulepszenie_obecne == 2) {
var wartosc = max_atak + 1;
document.getElementById("ulepsz_button").innerHTML = "--> " + min_atak + "-" + wartosc;
upgrade_gold = min_atak + wartosc;
wymagane_runy = 3;
}





if (co_jest_ulepszane_check == 0)
co_jest_ulepszane = nazwa_posiadanej_broni;

if (co_jest_ulepszane != nazwa_posiadanej_broni) {
ulepszenie_obecne = 0;
}



document.getElementById("ulepsz_button").style.color = "green";
document.getElementById("ulepsz_button").onclick = function () {
ulepszenie()
};

klik.play();


document.getElementById("okno_nazwa_broni_posiadanej").innerHTML = nazwa_posiadanej_broni + "<br>" + min_atak + " " + "-" + " " + max_atak;
document.getElementById("okno_ulepszenie_nr").innerHTML = "Ulepszenie:" + " " + ulepszenie_obecne + "/" + ulepszenie_max;
// document.getElementById("ulepsz_button").innerHTML = "Ulepsz:" + "&nbsp" +  "(" + wymagane_runy + " " + "runy,"+ "&nbsp" + upgrade_gold + " złota)";
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy + " " + "runy," + "&nbsp" + upgrade_gold + " złota)";


if ((upgrade_gold > gold_amount) || (wymagane_runy > runy_amount)) {
document.getElementById("ulepsz_button").style.color = "dimgrey";
document.getElementById("ulepsz_button").onclick = function () {
brak_run_lub_zlota()
};

// brak_run_lub_zlota();
} else {
document.getElementById("ulepsz_button").style.color = "green";
document.getElementById("ulepsz_button").onclick = function () {
ulepszenie()
};

}

if (ulepszenie_obecne == ulepszenie_max) 
{
document.getElementById("ulepsz_button").style.color = "dimgrey";
document.getElementById("okno_ulepszenie_nr").style.color = "deeppink";
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Wymaga: --";
document.getElementById("okno_ulepszenie_nr").innerHTML = "Pełne ulepszenie";
document.getElementById("okno_ulepszenie_nr").style.color = "deeppink";
document.getElementById("ulepsz_button").innerHTML = "--";
document.getElementById("ulepsz_button").onclick = function () {
not_allowed()
};
document.getElementById("kowal_ulepsz").innerHTML ="Nadaj specjalną cechę";
document.getElementById("kowal_ulepsz").className = "flash2a";
document.getElementById("kowal_ulepsz").style.color ="deeppink";
document.getElementById("kowal_ulepsz").onclick = function () {
miecz_specjalny()
};        
}
else
{
document.getElementById("kowal_ulepsz").innerHTML ="Ulepsz bron";
document.getElementById("kowal_ulepsz").className = "flash0";
document.getElementById("kowal_ulepsz").style.color ="deeppink";
document.getElementById("kowal_ulepsz").onclick = function () {
ulepszenie_broni_pokaz()
};

}

}


function miecz_specjalny()
{



ulepszenie_broni_pokaz();
zlecenie_sfx.play();
wymagane_runy=2;
upgrade_gold=10;
document.getElementById("okno_nazwa_broni_posiadanej").innerHTML = nazwa_posiadanej_broni + "&nbsp" + "<br>"+ min_atak + " " + "-" + " " + max_atak;
document.getElementById("okno_ulepszenie_nr").innerHTML = "Nadawanie losowej cechy specjalnej";
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy + " " + "runy," + "&nbsp" + upgrade_gold + " złota)";
document.getElementById("ulepsz_button").innerHTML ="Nadaj cechę";


if ((upgrade_gold > gold_amount) || (wymagane_runy > runy_amount)) {
document.getElementById("ulepsz_button").style.color = "dimgrey";
document.getElementById("ulepsz_button").onclick = function () {
brak_run_lub_zlota()
};

// brak_run_lub_zlota();
} else {
document.getElementById("ulepsz_button").style.color = "green";
document.getElementById("ulepsz_button").onclick = function () {
losuj_ceche_miecza()
};

}

}


function losuj_ceche_miecza()
{

weapon_sell_value = weapon_sell_value +15;
document.getElementById("weapon").innerHTML = "Miecz (wartość " + weapon_sell_value + ")";

let cecha = Math.floor(Math.random() * 4) + 1;


if(cecha==1)
{
cecha_broni_nazwa ="Krwawienie";
document.getElementById("okno_ulepszenie_nr").innerHTML = "Krwawienie - 12% szansy na spowodowanie krawienia";
}

if(cecha==2)
{
cecha_broni_nazwa ="Wampiryzm";  
document.getElementById("okno_ulepszenie_nr").innerHTML = "Wampiryzm - 12% szansy na odzyskanie 10% życia";
}




if(cecha==3)
{
cecha_broni_nazwa ="Ogłuszenie"; 
document.getElementById("okno_ulepszenie_nr").innerHTML = "Ogłuszenie - 12% szansy na ogłuszenie przeciwnika na 1 ture";
}

if(cecha==4)
{
cecha_broni_nazwa ="Precyzja";  
document.getElementById("okno_ulepszenie_nr").innerHTML = "Precyzja - szansa na trafienie wzrasta z 84% do 91%";
}  



magic_runes.play();
document.getElementById("okno_ulepszenie_nr").className = "flash2a";
document.getElementById("ulepsz_button").innerHTML ="--";
document.getElementById("ulepsz_button").style.color ="dimgrey";

document.getElementById("ulepsz_button").onclick = function () {
not_allowed()
};



cecha_broni_nadana=1;

document.getElementById("kowal_ulepsz").innerHTML ="Nadaj specjalną cechę";
document.getElementById("kowal_ulepsz").className = "flash0";
document.getElementById("kowal_ulepsz").className = "press";
document.getElementById("kowal_ulepsz").style.color ="dimgrey";

document.getElementById("kowal_ulepsz").onclick = function () {
not_allowed()
};
runy_amount = runy_amount - 2;
document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;



let kolor = cecha_broni_nazwa.fontcolor("yellow"); 

document.getElementById("weapon_info").innerHTML = nazwa_posiadanej_broni + ", "+ kolor;

}







function ulepszenie() {

co_jest_ulepszane_check = 1;


if (ulepszenie_obecne == 0)
min_atak = min_atak + 1;


if (ulepszenie_obecne == 1) {
max_atak = max_atak + 1;
}


if (ulepszenie_obecne == 2) {
max_atak = max_atak + 1;
}



ulepszenie_obecne++;



document.getElementById("medytacja").innerHTML = "Ulepszenie:" + " " + ulepszenie_obecne + "/" + ulepszenie_max;
document.getElementById("zlecenie_slot").innerHTML = "Ulepsz:" + "&nbsp" + "(" + wymagane_runy + " " + "runy," + "&nbsp" + upgrade_gold + " złota)";
document.getElementById("weapon_dmg").innerHTML = min_atak + " " + "-" + " " + max_atak;
document.getElementById("lokacja").innerHTML = nazwa_posiadanej_broni + "&nbsp" + min_atak + " " + "-" + " " + max_atak;
document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
document.getElementById("miasto").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy + " " + "runy," + "&nbsp" + upgrade_gold + " złota)";

if (ulepszenie_obecne == ulepszenie_max)
play2.play();
else
sword_upgrade.play();
klik.play();
weapon_sell_value = Math.round(weapon_sell_value + (upgrade_gold / 3));
runy_amount = runy_amount - wymagane_runy;

gold_amount = gold_amount - upgrade_gold;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
ulepsz_bron();
}




function brak_run_lub_zlota() {

var ile_brakuje_run = 0;
var ile_brakuje_zlota = 0;


za_malo_zlota();
if (wymagane_runy > runy_amount) {
ile_brakuje_run = wymagane_runy - runy_amount;
document.getElementById("okno_ulepszenie_wymagania").style.color = "red";
if (ile_brakuje_run == 1)
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_run + "&nbsp" + "runy";
else
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_run + "&nbsp" + "run";
}

if (upgrade_gold > gold_amount) {
ile_brakuje_zlota = upgrade_gold - gold_amount;
document.getElementById("okno_ulepszenie_wymagania").style.color = "red";
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota";
}
if ((upgrade_gold > gold_amount) && (wymagane_runy > runy_amount)) {
document.getElementById("okno_ulepszenie_wymagania").style.color = "red";
if (ile_brakuje_run == 1)
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_run + "&nbsp" + "runy";
else
document.getElementById("okno_ulepszenie_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_run + "&nbsp" + "run";
}








}








function tawerna(music) {




document.getElementById("strona_novigard").style.backgroundImage = "url('tawerna.jpg')";

$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(300);


$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');

kupiec_kosci = 0;
koniec_kosci = 0;
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);



$("#tekst").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);
$("#tekst").fadeIn(0);
$("#tekst").fadeIn(0);
$("#lokacja").fadeIn(0);


$("#exra_slot").fadeIn(0);

$("#zlecenie_slot").fadeOut(0);
new_city.stop();
kosci_sfx.stop();

klik.play();

if(music!=undefined)
{
tawerna_sfx.stop();    
tawerna_sfx.play();
}



document.getElementById("lokacja").style.borderBottom = "solid";
document.getElementById("medytacja").style.borderBottom = "solid";



document.getElementById("exra_slot").style.color = "white";

document.getElementById("lokacja").style.color = "green";



document.getElementById("medytacja").style.color = "deepskyblue";


document.getElementById("miasto").style.color = "coral";


document.getElementById("zlecenie_slot").style.borderStyle = "solid";

if (plec_typ == 1)
document.getElementById("tekst").innerHTML = "Witaj w tawernie Wiedźminie";

if (plec_typ == 2)
document.getElementById("tekst").innerHTML = "Witaj w tawernie Wiedźminko";
document.getElementById("lokacja").innerHTML = "Graj w kości";


document.getElementById("exra_slot").innerHTML = "Powrót";

document.getElementById("lokacja").onclick = function () {
tawerna2()
};


document.getElementById("exra_slot").onclick = function () {

$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
new_city.play();
wroc2()
};










document.getElementById("lokacja").style.pointerEvents = 'auto';

}

function tawerna2() {




document.getElementById("strona_novigard").style.backgroundImage = "url('tawerna.jpg')";


$("#okno_teren").transition({ scale:1,opacity:1}, 800, 'ease');




kupiec_kosci = 0;
koniec_kosci = 0;
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);

check_gold_kosci();


$("#tekst").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);
$("#tekst").fadeIn(0);
$("#tekst").fadeIn(0);
$("#lokacja").fadeIn(0);
$("#medytacja").fadeIn(0);
$("#miasto").fadeIn(0);
$("#exra_slot").fadeIn(0);

$("#zlecenie_slot").fadeOut(0);

kosci_sfx.stop();

klik.play();



document.getElementById("exra_slot").style.color = "white";

document.getElementById("lokacja").style.color = "green";

document.getElementById("lokacja").style.borderStyle = "none";
document.getElementById("medytacja").style.borderStyle = "none";
document.getElementById("miasto").style.borderStyle = "none";

document.getElementById("lokacja").style.borderBottom = "solid";
document.getElementById("medytacja").style.borderBottom = "solid";
document.getElementById("miasto").style.borderBottom = "solid";


document.getElementById("medytacja").style.color = "deepskyblue";


document.getElementById("miasto").style.color = "coral";

document.getElementById("miasto").style.pointerEvents = "auto";
document.getElementById("lokacja").style.pointerEvents = "auto";
document.getElementById("medytacja").style.pointerEvents = "auto";


document.getElementById("tekst").innerHTML = "Witaj w tawernie";
document.getElementById("lokacja").innerHTML = "Graj w kości - za 5 złota";
document.getElementById("medytacja").innerHTML = "Graj w kości - za 10 złota";
document.getElementById("miasto").innerHTML = "Graj w kości - za 15 złota";
document.getElementById("exra_slot").innerHTML = "Powrót";

document.getElementById("lokacja").onclick = function () {
za5()
};
document.getElementById("medytacja").onclick = function () {
za10()
};
document.getElementById("miasto").onclick = function () {
za15()
};
document.getElementById("exra_slot").onclick = function () {


tawerna();
};
check_gold_kosci();





}


function check_gold_kosci() {





ty_wynik = 0;
przeciwnik_wynik = 0;
if (gold_amount < 15) {
document.getElementById("miasto").innerHTML = "Graj w kości - za 15 złota";
document.getElementById("miasto").onclick = function () {
za_malo_zlota()
};
document.getElementById("miasto").style.color = "dimgrey";
} else {
document.getElementById("miasto").innerHTML = "Graj w kości - za 15 złota";
document.getElementById("miasto").onclick = function () {
za15()
};
document.getElementById("miasto").style.color = "coral";
}


if (gold_amount < 10) {
document.getElementById("medytacja").innerHTML = "Graj w kości - za 10 złota";
document.getElementById("medytacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("medytacja").style.color = "dimgrey";
} else {
document.getElementById("medytacja").innerHTML = "Graj w kości - za 10 złota";
document.getElementById("medytacja").onclick = function () {
za10()
};
document.getElementById("medytacja").style.color = "deepskyblue";
}



if (gold_amount < 5) {
document.getElementById("lokacja").innerHTML = "Graj w kości - za 5 złota";
document.getElementById("lokacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("lokacja").style.color = "dimgrey";
} else {
document.getElementById("lokacja").innerHTML = "Graj w kości - za 5 złota";
document.getElementById("lokacja").onclick = function () {
za5()
};
document.getElementById("lokacja").style.color = "green"
}



}

function za5() {
za_ile_gra = 5;





grajx5();
}

function za10() {
za_ile_gra = 10;
grajx5();
}

function za15() {
za_ile_gra = 15;
grajx5();
}






function grajx5() {

klik.play();
buy.play();
gold_amount = gold_amount - za_ile_gra;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
check_gold_kosci();
$("#tekst").fadeOut(0);
$("#tekst").fadeIn(500);

$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);
document.getElementById("tekst").innerHTML = "TY:" + "&nbsp" + ty_wynik + "&nbsp" + "&nbsp" + "&nbsp" + "Przeciwnik:" + "&nbsp" + przeciwnik_wynik;
setTimeout(rzutx5, 2000);


}

function grajx10() {
klik.play();
buy.play();
gold_amount = gold_amount - 10;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
check_gold_kosci();
setTimeout(rzutx10, 2000);
$("#tekst").fadeOut(0);
$("#okno_teren").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);

}

function grajx15() {
klik.play();
buy.play();
gold_amount = gold_amount - 15;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
check_gold_kosci();
setTimeout(rzutx15, 2000);
$("#tekst").fadeOut(0);
$("#okno_teren").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);





}


function rzutx5() {
document.getElementById("medytacja").style.pointerEvents = 'none';
document.getElementById("miasto").style.pointerEvents = 'none';
document.getElementById("zlecenie_slot").style.pointerEvents = 'none';
document.getElementById("medytacja").style.color = "deepskyblue";
document.getElementById("miasto").style.color = "coral";

$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);

$("#miasto").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);




var gracz_nr1 = Math.floor(Math.random() * 12) + 1;
document.getElementById("tekst").innerHTML = "TY:" + "&nbsp" + ty_wynik + "&nbsp" + "&nbsp" + "&nbsp" + "Przeciwnik:" + "&nbsp" + przeciwnik_wynik;
gracz = gracz_nr1;

$("#kosci1").fadeIn(500);
kosci_sfx.play();
$("#medytacja").fadeIn(500);
document.getElementById("medytacja").style.borderStyle = "none";
if(plec_typ==1)
document.getElementById("medytacja").innerHTML = "Wyrzuciłeś:" + " " + gracz_nr1;
else
document.getElementById("medytacja").innerHTML = "Wyrzuciłaś:" + " " + gracz_nr1;  

$("#okno_teren").fadeIn(500);
$("#tekst").fadeIn(500);

setTimeout(rzutx5b, 1000);
}

function rzutx5b() {

var przeciwnik_nr1 = Math.floor(Math.random() * 12) + 1;

przeciwnik = przeciwnik_nr1;

$("#kosci2").fadeIn(500);
kosci_sfx.play();
$("#miasto").fadeIn(500);
document.getElementById("miasto").style.borderStyle = "none";
document.getElementById("miasto").innerHTML = "Przeciwnik:" + " " + przeciwnik_nr1;

$("#okno_teren").fadeIn(500);
$("#tekst").fadeIn(500);



setTimeout(rzutx5c, 1000);
}


function rzutx5c() {
$("#zlecenie_slot").fadeIn(500);


if (przeciwnik < gracz) {
document.getElementById("zlecenie_slot").style.borderStyle = "none";
document.getElementById("zlecenie_slot").style.borderBottom = "solid";
document.getElementById("zlecenie_slot").innerHTML = "Zdobywasz punkt!";
document.getElementById("zlecenie_slot").style.color = "green";

ty_wynik++;
}
if (przeciwnik > gracz) {
document.getElementById("zlecenie_slot").style.borderStyle = "none";
document.getElementById("zlecenie_slot").style.borderBottom = "solid";
document.getElementById("zlecenie_slot").innerHTML = "Przeciwnik zyskuje punkt";
document.getElementById("zlecenie_slot").style.color = "red";

przeciwnik_wynik++;
}
if (przeciwnik == gracz) {
document.getElementById("zlecenie_slot").style.borderBottom = "solid";
document.getElementById("zlecenie_slot").style.color = "yellow";
document.getElementById("zlecenie_slot").innerHTML = "Remis";
document.getElementById("zlecenie_slot").style.borderStyle = "none";

}


document.getElementById("tekst").innerHTML = "TY:" + "&nbsp" + ty_wynik + "&nbsp" + "&nbsp" + "&nbsp" + "Przeciwnik:" + "&nbsp" + przeciwnik_wynik;



if ((ty_wynik > 2) || (przeciwnik_wynik > 2)) {
if (ty_wynik > przeciwnik_wynik) {

document.getElementById("tekst").innerHTML = "Wygrywasz grę!";
gold_amount = gold_amount + za_ile_gra * 2;
zlecenie2_sfx.play();
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
if(specjalne_kosci==1)
{
nagroda_specjalna = 1;
nagroda_specjalna2 = 1;
}
} 
else 
{
lost.play();
if(plec_typ==1)
document.getElementById("tekst").innerHTML = "Przegrałeś grę!";
else
document.getElementById("tekst").innerHTML = "Przegrałaś grę!"; 
specjalne_kosci=0;
nagroda_specjalna = 0;
kosci_rzucone = 1;
}
koniec_kosci = 1;

}

setTimeout(rzutx5d, 1000);
}


function rzutx5d() {
$("#exra_slot").fadeIn(500);

document.getElementById("exra_slot").innerHTML = "Wykonaj rzut..";
document.getElementById("exra_slot").onclick = function () {
rzutx5()
};




if (koniec_kosci === 1) {

document.getElementById("exra_slot").innerHTML = "Powrót";
document.getElementById("exra_slot").onclick = function () {
tawerna();
};

if (kupiec_kosci == 1) {
document.getElementById("exra_slot").onclick = function () {
kupiec()
};

}

if (jaskinia_aktywna == 1) {
document.getElementById("exra_slot").onclick = function () {
cave()
};
jaskinia_kosci = 1;

}



}


}

function rzutx10()

{
$("#kosci1").fadeIn(500);
kosci_sfx.play();

}


function rzutx15()

{
$("#kosci1").fadeIn(500);
kosci_sfx.play();

}


function dane_zbroi_do_kupna() {



if(level_amount==1)
nowa_zbroja_def=3;

if(level_amount==2)
nowa_zbroja_def = Math.floor(Math.random() * 4) + level_amount+3;   

if(level_amount==3)
nowa_zbroja_def = Math.floor(Math.random() * 5) + level_amount+4;  

if(level_amount>3)
nowa_zbroja_def = Math.floor(Math.random() * 6) + level_amount+5;  

}

function magiczna_zbroja() {

zbroja_magiczna_do_kupienia = Math.floor(Math.random() * 14);
zbroja_magiczna_obrona = Math.floor(Math.random() * 6) + 8;
zbroja_magiczna_zycie = Math.floor(Math.random() * 5) + 10;
nazwa_magicznej_zbroi = zbroja[zbroja_magiczna_do_kupienia];
schemat = 1;
}




function platnerz() {



$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);

$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');


$('#strona_novigard').css({'background': 'url(zbrojownia.jpg) fixed', 'background-size': '100% 100%'});

//document.getElementById("strona_novigard").style.backgroundImage = "url('zbrojownia.jpg')";

document.getElementById("zlecenie_slot").style.pointerEvents = 'auto';
document.getElementById("lokacja").style.pointerEvents = 'auto';

document.getElementById("okno_ulepszenie_zbroi_nr").color = "green";

kosci_sfx.stop();
$("#tekst").fadeOut(0);

$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);



$("#lokacja").fadeIn(0);
$("#medytacja").fadeIn(0);
$("#miasto").fadeIn(0);
$("#zlecenie_slot").fadeIn(0);


$("#extra_slot").fadeOut(0);



document.getElementById("medytacja").style.pointerEvents = 'auto';
kosci_sfx.stop();
kowal_sfx.stop();
klik.play();
kowal_sfx.play();

document.getElementById("zlecenie_slot").style.color = "white";
document.getElementById("lokacja").style.color = "green";
document.getElementById("medytacja").style.color = "deepskyblue";
document.getElementById("miasto").style.color = "coral";

document.getElementById("lokacja").innerHTML = "Kup zbroję";
document.getElementById("medytacja").innerHTML = "Ulepsz zbroję";
document.getElementById("miasto").innerHTML = "Stwórz ze schematu";
document.getElementById("zlecenie_slot").innerHTML = "Powrót";
document.getElementById("lokacja").onclick = function () {
kup_zbroi_pokaz()
};
document.getElementById("medytacja").onclick = function () {
upgrade_zbroi_pokaz()
};
document.getElementById("miasto").onclick = function () {
kup_zbroi_magiczna_pokaz()
};
document.getElementById("zlecenie_slot").onclick = function () {

$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
wroc2()
};



if (schemat == 0) {
document.getElementById("miasto").onclick = function () {
za_malo_zlota()
};
document.getElementById("miasto").style.color = "dimgrey";
} else {
document.getElementById("miasto").onclick = function () {
kup_zbroi_magiczna_pokaz()
};
document.getElementById("miasto").style.color = "coral";
}




if (zbroja_kupiona == 1) {
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
document.getElementById("okno_zbroja_obrona").innerHTML = "Obrona: --";
document.getElementById("okno_zbroja_wymagania").innerHTML = "Wymaga: --";
document.getElementById("okno_nazwa_zbroi").innerHTML = "Chwilowy brak towaru";
document.getElementById("kup_zbroje_button").onclick = function () {
za_malo_zlota()
};
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
$("#okno_wartosc_obecnej_zbroi").fadeOut(0);

} else {
document.getElementById("kup_zbroje_button").style.color = "green";
document.getElementById("kup_zbroje_button").onclick = function () {
kup_zbroje2()
};
document.getElementById("okno_zbroja_wymagania").style.color = "green";

}

document.getElementById("medytacja").className = "flash0";
document.getElementById("okno_ulepszenie_zbroi_nr").className = "flash0";
if ((ulepszenie_obecne2 == ulepszenie_max)&&(zbroja_magiczna_aktywna!=1))
{        document.getElementById("medytacja").className = "flash2a";
document.getElementById("medytacja").innerHTML = "Nadaj właściwości magiczne";

document.getElementById("medytacja").onclick = function () {
upgrade_zbroi_pokaz()
zbroja_extra_bonus()
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Nadanie losowej cechy magicznej";
};


}

if( cecha_na_zbroi==1)
{
document.getElementById("medytacja").style.color = "dimgrey";
document.getElementById("medytacja").className = "flash0";
document.getElementById("medytacja").className = "press";
document.getElementById("medytacja").onclick = function () {
not_allowed()  

};
}





}







function zbroja_extra_bonus() 
{



upgrade_zbroja_gold = 10;    
wymagane_runy_do_zbroi=2;

document.getElementById("ulepsz_zbroje_button").innerHTML = "Nadaj cechę";
document.getElementById("okno_ulepszenie_zbroi_wymagania").style.color = "yellow";
document.getElementById("okno_ulepszenie_zbroi_nr").style.color = "green";

klik.play();




document.getElementById("okno_nazwa_zbroi_posiadanej").innerHTML = nazwa_posiadanej_zbroi + ":" + "&nbsp" + obrona_temp;




document.getElementById("okno_ulepszenie_zbroi_nr").style.color ="green";
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy_do_zbroi + " " + "runy," + "&nbsp" + upgrade_zbroja_gold + " złota)";

document.getElementById("ulepsz_zbroje_button").onclick = function () {
nadaj_ceche()
};


if(cecha_na_zbroi==1)
{
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
not_allowed()  
};
}
else
{
document.getElementById("ulepsz_zbroje_button").style.color = "green";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
nadaj_ceche()
};
}





if((upgrade_zbroja_gold > gold_amount) || (wymagane_runy_do_zbroi > runy_amount)) 
{
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
brak_run_lub_zlota2()
};

} 
else 
{
document.getElementById("ulepsz_zbroje_button").style.color = "green";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
nadaj_ceche()
};
}
if(cecha_na_zbroi==1)
{
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
not_allowed()  
};
}



}








function nadaj_ceche()
{



runy_amount = runy_amount - wymagane_runy_do_zbroi;
gold_amount = gold_amount - upgrade_zbroja_gold;

document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

armour_sell_value = armour_sell_value+15;
document.getElementById("okno_wartosc_obecnej_zbroi").innerHTML = "Wartośc obecnej zbroi: " + armour_sell_value + " złota";

// Math.floor(Math.random() * 3) + level_amount+1;   

var cecha =   Math.floor(Math.random() * 5) + 1;   
var zycie =  Math.floor(Math.random() * 5) + 5;   
var obrona = Math.floor(Math.random() * 3) + 4;   
var mana =  Math.floor(Math.random() * 2) + 2;   




if(cecha==1)
{
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Siła +1";
nazwa_cechy ="sila";
strenght_amount++;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
}


if(cecha==2)
{  
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Magia +1";   
nazwa_cechy ="magia";
magic_amount++;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
}

if(cecha==3)
{
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Dodatkowa Obrona +" + obrona;   
nazwa_cechy ="obrona";
obrona_temp = obrona_temp +obrona;
}

if(cecha==4)
{
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Wielkość koncentracji +" +mana;   
nazwa_cechy ="mana";
cecha_wartosc   = mana;
manal_max = manal_max + mana;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}


if(cecha==5)
{
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Wielkość życia +" +zycie;  
nazwa_cechy ="zycie";
cecha_wartosc = zycie;
life_max = life_max + zycie;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}

magic_runes.play();
cecha_na_zbroi=1;
zbroja_extra_bonus(); 



}











function odejmij_ceche()
{

if(nazwa_cechy =="sila")
{
strenght_amount--;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount; 
}
if(nazwa_cechy =="zycie")
{

life_max = life_max - cecha_wartosc;

document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;


}
if(nazwa_cechy =="mana")
{

manal_max = manal_max - cecha_wartosc;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max; 
}
if(nazwa_cechy =="magia")
{  
magic_amount--;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;  
}

nazwa_cechy="none";
cecha_na_zbroi=0;
cecha_wartosc=0;

}










function zbroja_ze_schematu() {


cena_zbroi_magic = 4 * zbroja_magiczna_obrona;
ile_skor = zbroja_magiczna_obrona / 2;

ile_skor = Math.round(ile_skor);





document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "yellow";
document.getElementById("okno_nazwa_zbroi_magicznej").style.color = "deeppink";


document.getElementById("okno_nazwa_zbroi_magicznej").innerHTML = nazwa_magicznej_zbroi;

document.getElementById("okno_zbroja_magiczna_info").innerHTML = "Obrona:" + "&nbsp" + zbroja_magiczna_obrona + "<br>"+ "Życie: " + "+ " + zbroja_magiczna_zycie;
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Wymaga:" + " " + cena_zbroi_magic + "&nbsp" + "złota, i" + "&nbsp" + ile_skor + "&nbsp" + "skóry";



document.getElementById("kup_zbroje_button_magic").onclick = function () {
kup_zbroje_magiczna()
};
klik.play();






if ((cena_zbroi_magic > gold_amount) || (ile_skor > skory_amount)) {
document.getElementById("kup_zbroje_button_magic").onclick = function () {
brak_skor_lub_zlota()
};
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
} else {
document.getElementById("kup_zbroje_button_magic").style.color = "green";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
kup_zbroje_magiczna()
};

}

}





function kup_zbroje_magiczna() {
odejmij_ceche();
if (zbroja_magiczna_aktywna == 1) {
life_max = life_max - zbroja_magiczna_zycie2;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}




co_jest_ulepszane_check2 = 0;
ulepszenie_obecne2 = 0;
wymagane_runy_do_zbroi = 1;
nazwa_posiadanej_zbroi = nazwa_magicznej_zbroi + " " + ",życie +" + " " + zbroja_magiczna_zycie;
nazwa_posiadanej_zbroi_magic = nazwa_magicznej_zbroi;
document.getElementById("armour_info").innerHTML = nazwa_magicznej_zbroi + " " + "życie +" + " " + zbroja_magiczna_zycie;
document.getElementById("armour_bonus").innerHTML = zbroja_magiczna_obrona;
gold_amount = gold_amount - cena_zbroi_magic;


skory_amount = skory_amount -  ile_skor;

document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;


document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};


zbroja_sfx.play();


document.getElementById("okno_nazwa_zbroi_magicznej").style.color = "dimgrey";
document.getElementById("okno_zbroja_magiczna_info").style.color = "dimgrey";
document.getElementById("okno_zbroja_wymagania").style.color = "dimgrey";

document.getElementById("okno_nazwa_zbroi_magicznej").innerHTML = "Zbroja stworzona";
document.getElementById("okno_zbroja_magiczna_info").innerHTML = "Obrona: --";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Wymaga: --";
document.getElementById("kup_zbroje_button").innerHTML = "Stwórz";


life_max = life_max + zbroja_magiczna_zycie;
zbroja_magiczna_zycie2 = zbroja_magiczna_zycie;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
zbroja_magiczna_aktywna = 1;

schemat = 0;

obrona_temp = zbroja_magiczna_obrona;

if(wilga_dodana==1)
obrona_temp = obrona_temp + wilga_obrona;



platnerz();


}






















function kup_zbroje() {


cena_zbroi = 4 * nowa_zbroja_def;
ile_skor_potrzeba = nowa_zbroja_def / 2;

if(level_amount>1)
ile_skor_potrzeba = nowa_zbroja_def -1;

ile_skor_potrzeba = Math.round(ile_skor_potrzeba);

$("#tekst").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeOut(0);


$("#okno_wartosc_obecnej_zbroi").fadeIn(0);

document.getElementById("okno_zbroja_wymagania").style.color = "yellow";
document.getElementById("okno_zbroja_obrona").style.color = "green";

document.getElementById("okno_nazwa_zbroi").innerHTML = zbroja[zbroja_do_kupienia];
document.getElementById("okno_wartosc_obecnej_zbroi").innerHTML = "Wartośc obecnej zbroi: " + "<br>" +armour_sell_value + " złota";


document.getElementById("okno_zbroja_obrona").innerHTML = "Obrona:" + "&nbsp" + nowa_zbroja_def;


if (ile_skor_potrzeba == 1)
document.getElementById("okno_zbroja_wymagania").innerHTML = "Cena:" + " " + cena_zbroi + "&nbsp" + "złota, i" + "&nbsp" + ile_skor_potrzeba + "&nbsp" + "skóra";
else
document.getElementById("okno_zbroja_wymagania").innerHTML = "Cena:" + " " + cena_zbroi + "&nbsp" + "złota, i" + "&nbsp" + ile_skor_potrzeba + "&nbsp" + "skóry";
klik.play();





$("#medytacja").fadeIn(0);
$("#lokacja").fadeIn(0);
$("#miasto").fadeIn(0);



var kwota_dostepna = parseInt(gold_amount) + parseInt(armour_sell_value);


if (cena_zbroi > kwota_dostepna) {
document.getElementById("kup_zbroje_button").onclick = function () {
kupno_zbroi_brak_zasobow()
};
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
} else if (ile_skor_potrzeba > skory_amount) {
document.getElementById("kup_zbroje_button").onclick = function () {
kupno_zbroi_brak_zasobow()
};
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
} else {
document.getElementById("kup_zbroje_button").style.color = "green";
document.getElementById("kup_zbroje_button").onclick = function () {
kup_zbroje2()
};
}


if (zbroja_kupiona == 1) {
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
document.getElementById("okno_zbroja_obrona").innerHTML = "Obrona: --";
document.getElementById("okno_zbroja_wymagania").innerHTML = "Wymaga: --";
document.getElementById("okno_nazwa_zbroi").innerHTML = "Chwilowy brak towaru";
document.getElementById("kup_zbroje_button").onclick = function () {
za_malo_zlota()
};
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
document.getElementById("okno_wartosc_obecnej_zbroi").innerHTML = "Wartośc obecnej zbroi: " + armour_sell_value + " złota";
}



}

function kup_zbroje2() {

odejmij_ceche();
var kwota_finalna = parseInt(cena_zbroi) - parseInt(armour_sell_value);

co_jest_ulepszane_check2 = 0;
ulepszenie_obecne2 = 0;
wymagane_runy_do_zbroi = 1;
nazwa_posiadanej_zbroi = zbroja[zbroja_do_kupienia];
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi;
document.getElementById("armour_bonus").innerHTML = nowa_zbroja_def;


zbroja_posiadana++;

gold_amount = gold_amount - kwota_finalna;
skory_amount = skory_amount -  ile_skor_potrzeba;

document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
var nadwyzka = parseInt(armour_sell_value) - parseInt(cena_zbroi);
if (nadwyzka > 0)
gold_amount = gold_amount + nadwyzka;




armour_sell_value = Math.round(cena_zbroi / 3);
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
skory_amount = skory_amount - ile_skor;
document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
document.getElementById("lokacja").style.color = "dimgrey";
zbroja_sfx.play();


document.getElementById("armour").innerHTML = "Zbroja (wartość " + armour_sell_value + ")";

zbroja_kupiona = 1;

if (zbroja_magiczna_aktywna == 1) {
life_max = life_max - zbroja_magiczna_zycie2;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
zbroja_magiczna_aktywna = 0;
}

obrona_temp = nowa_zbroja_def + obrona_extra;
if(wilga_dodana==1)
obrona_temp = obrona_temp + wilga_obrona;




if (zbroja_kupiona == 1) {
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
document.getElementById("okno_zbroja_obrona").innerHTML = "Obrona: --";
document.getElementById("okno_zbroja_wymagania").innerHTML = "Wymaga: --";
document.getElementById("okno_nazwa_zbroi").innerHTML = "Chwilowy brak towaru";
document.getElementById("kup_zbroje_button").onclick = function () {
za_malo_zlota()
};
document.getElementById("kup_zbroje_button").style.color = "dimgrey";
document.getElementById("okno_wartosc_obecnej_zbroi").innerHTML = "Wartośc obecnej zbroi: " + armour_sell_value + " złota";

}





}




function kupno_zbroi_brak_zasobow() {
disabled.play();

var kwota_dostepna = parseInt(gold_amount) + parseInt(armour_sell_value);
var ile_zlota = cena_zbroi - armour_sell_value - gold_amount;
var ile_skor = ile_skor_potrzeba - skory_amount;



if (cena_zbroi > kwota_dostepna) {
document.getElementById("okno_zbroja_wymagania").innerHTML = "Brakuje: " + ile_zlota + " złota";
document.getElementById("okno_zbroja_wymagania").style.color = "red";
}
if (ile_skor_potrzeba > skory_amount) {
if (ile_skor_potrzeba == 1)
document.getElementById("okno_zbroja_wymagania").innerHTML = "Brakuje: " + ile_skor + " skóry";
else
document.getElementById("okno_zbroja_wymagania").innerHTML = "Brakuje: " + ile_skor + " skór";

document.getElementById("okno_zbroja_wymagania").style.color = "red";
}
if ((cena_zbroi > kwota_dostepna) && (ile_skor_potrzeba > skory_amount)) {
if (ile_skor_potrzeba == 1)
document.getElementById("okno_zbroja_wymagania").innerHTML = "Brakuje: " + ile_zlota + " złota i " + ile_skor + " skóry";
else
document.getElementById("okno_zbroja_wymagania").innerHTML = "Brakuje: " + ile_zlota + " złota i " + ile_skor + " skór";
document.getElementById("okno_zbroja_wymagania").style.color = "red";
}
}




function ulepsz_zbroje() ////
{

if (co_jest_ulepszane_check2 == 0)
co_jest_ulepszane2 = nazwa_posiadanej_zbroi;


if (co_jest_ulepszane2 != nazwa_posiadanej_zbroi) {
upgrade_zbroja_gold = 10;
ulepszenie_obecne_zbroi = 0;
wymagane_runy_do_zbroi = 1;
}



if (ulepszenie_obecne2 == 0) 
{    
document.getElementById("ulepsz_zbroje_button").innerHTML = "Ulepsz +1";
}

if (ulepszenie_obecne2 == 1) 
{
if (zbroja_magiczna_aktywna == 1)
document.getElementById("ulepsz_zbroje_button").innerHTML = "Ulepsz +2";
else 
document.getElementById("ulepsz_zbroje_button").innerHTML = "Ulepsz +1";     

}

if(ulepszenie_obecne2 == 2) 
document.getElementById("ulepsz_zbroje_button").innerHTML = "Ulepsz +2";



document.getElementById("okno_ulepszenie_zbroi_wymagania").style.color = "yellow";
document.getElementById("okno_ulepszenie_zbroi_nr").style.color = "green";


klik.play();


document.getElementById("okno_nazwa_zbroi_posiadanej").innerHTML = nazwa_posiadanej_zbroi + ":" + "&nbsp" + obrona_temp;

if (zbroja_magiczna_aktywna == 1)
document.getElementById("okno_nazwa_zbroi_posiadanej").innerHTML = nazwa_posiadanej_zbroi_magic + ":" + "&nbsp" + zbroja_magiczna_obrona;

document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Ulepszenie:" + " " + ulepszenie_obecne2 + "/" + ulepszenie_max;
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy_do_zbroi + " " + "runy," + "&nbsp" + upgrade_zbroja_gold + " złota)";

document.getElementById("ulepsz_zbroje_button").onclick = function () {
ulepsz_zbroje2()
};

if ((upgrade_zbroja_gold > gold_amount) || (wymagane_runy_do_zbroi > runy_amount)) {
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
brak_run_lub_zlota2()
};

} else {
document.getElementById("ulepsz_zbroje_button").style.color = "green";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
ulepsz_zbroje2()
};
}

if (ulepszenie_obecne2 == ulepszenie_max) {
document.getElementById("okno_ulepszenie_zbroi_nr").style.color = "deeppink";
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
za_malo_zlota()
};
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Pełne ulepszenie";
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Wymaga: --";
document.getElementById("ulepsz_zbroje_button").innerHTML = "--";

}





}

function ulepsz_zbroje2() {

co_jest_ulepszane_check2 = 1;




if (zbroja_magiczna_aktywna == 1)
upgrade_zbroja_gold = upgrade_zbroja_gold + 5;

klik.play();
zbroja_upgrade_sfx.play();

runy_amount = runy_amount - wymagane_runy_do_zbroi;
gold_amount = gold_amount - upgrade_zbroja_gold;

document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
document.getElementById("armour").innerHTML = "Zbroja (wartość " + armour_sell_value + ")";


wymagane_runy_do_zbroi = 2;
armour_sell_value = armour_sell_value + 5;
upgrade_zbroja_gold = upgrade_zbroja_gold + 4;







zbroja_obrona = obrona_temp;


if (ulepszenie_obecne2 == 0) 
{    
if (zbroja_magiczna_aktywna == 1)
zbroja_magiczna_obrona++;
else 
zbroja_obrona++;
}

if (ulepszenie_obecne2 == 1) 
{
if (zbroja_magiczna_aktywna == 1)
{
zbroja_magiczna_obrona++;        
zbroja_magiczna_obrona++;
}
else 
zbroja_obrona++;
}

if(ulepszenie_obecne2 == 2) 
{
if (zbroja_magiczna_aktywna == 1)
{
zbroja_magiczna_obrona++;        
zbroja_magiczna_obrona++;
}
else 
{
zbroja_obrona++;        
zbroja_obrona++;
}
}


ulepszenie_obecne2++;



if (zbroja_magiczna_aktywna == 1)
{
life_max = life_max -zbroja_magiczna_zycie;


zbroja_magiczna_zycie = zbroja_magiczna_zycie +2;


obrona_temp = zbroja_magiczna_obrona +obrona_extra

life_max = life_max + zbroja_magiczna_zycie;
zbroja_magiczna_zycie2 = zbroja_magiczna_zycie;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}
else
obrona_temp = zbroja_obrona;



if (ulepszenie_obecne2 == 3)
document.getElementById("ulepsz_zbroje_button").innerHTML = "--";

document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Ulepszenie:" + " " + ulepszenie_obecne2 + "/" + ulepszenie_max;
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Wymaga" + "&nbsp" + "(" + wymagane_runy_do_zbroi + " " + "runy," + "&nbsp" + upgrade_zbroja_gold + " złota)";

if (zbroja_magiczna_aktywna == 1)
document.getElementById("okno_nazwa_zbroi_posiadanej").innerHTML = nazwa_posiadanej_zbroi_magic + ":" + "&nbsp" + zbroja_magiczna_obrona;
else
document.getElementById("okno_nazwa_zbroi_posiadanej").innerHTML = nazwa_posiadanej_zbroi + ":" + "&nbsp" + zbroja_obrona;
document.getElementById("armour_info").innerHTML = nazwa_posiadanej_zbroi;
document.getElementById("armour_bonus").innerHTML = zbroja_obrona;
document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;



if (ulepszenie_obecne2 == ulepszenie_max) {
document.getElementById("okno_ulepszenie_zbroi_nr").style.color = "deeppink";

document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
za_malo_zlota()
};
document.getElementById("okno_ulepszenie_zbroi_nr").innerHTML = "Pełne ulepszenie";
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Wymaga: --";

play2.play();

} else if ((upgrade_zbroja_gold > gold_amount) || (wymagane_runy_do_zbroi > runy_amount)) {
document.getElementById("ulepsz_zbroje_button").style.color = "dimgrey";
document.getElementById("ulepsz_zbroje_button").onclick = function () {
brak_run_lub_zlota2()
};

} else
zbroja_upgrade_sfx.play();



ulepsz_zbroje();

}


function schemat_zbroja() ////
{


}






function brak_skor_lub_zlota() {

var ile_zlota_do_zbroi = 0;
var ile_brakuje_skor = 0;



if (ile_skor > skory_amount) {
ile_brakuje_skor = ile_skor - skory_amount;

if (ile_brakuje_skor < 2) {
document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "red";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_skor + "&nbsp" + "skóry";
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "red";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_skor + "&nbsp" + "skór";
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};
}
}


if (cena_zbroi_magic > gold_amount) {
ile_zlota_do_zbroi = cena_zbroi_magic - gold_amount;
document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "red";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_zlota_do_zbroi + "&nbsp" + "złota";
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};
}


if ((cena_zbroi_magic > gold_amount) && (ile_skor > skory_amount)) {

if (ile_brakuje_skor < 2) {
document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "red";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_zlota_do_zbroi + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_skor + "&nbsp" + "skóry";
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("okno_zbroja_magiczna_wymagania").style.color = "red";
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_zlota_do_zbroi + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_skor + "&nbsp" + "skór";
document.getElementById("kup_zbroje_button_magic").style.color = "dimgrey";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
za_malo_zlota()
};
}
}





if ((ile_skor < skory_amount) && (cena_zbroi_magic < gold_amount)) {
document.getElementById("kup_zbroje_button_magic").style.color = "green";
document.getElementById("okno_zbroja_wymagania").style.color = "yellow";
document.getElementById("kup_zbroje_button_magic").onclick = function () {
kup_zbroje_magiczna()
};
document.getElementById("okno_zbroja_magiczna_wymagania").innerHTML = "Wymaga:" + " " + cena_zbroi_magic + "&nbsp" + "złota, i" + "&nbsp" + ile_skor + "&nbsp" + "skóry";
}



}








function brak_run_lub_zlota2() {

var ile_brakuje_run = 0;
var ile_brakuje_zlota = 0;

disabled.play();

if (wymagane_runy_do_zbroi > runy_amount) {
ile_brakuje_run = wymagane_runy_do_zbroi - runy_amount;
document.getElementById("okno_ulepszenie_zbroi_wymagania").style.color = "red";
if (ile_brakuje_run < 2)
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_run + "&nbsp" + "runy";
else

document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_run + "&nbsp" + "run";

}

if (upgrade_zbroja_gold > gold_amount) {
ile_brakuje_zlota = upgrade_zbroja_gold - gold_amount;
document.getElementById("okno_ulepszenie_zbroi_wymagania").style.color = "red";
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota";

}

if ((upgrade_zbroja_gold > gold_amount) && (wymagane_runy_do_zbroi > runy_amount)) {
document.getElementById("okno_ulepszenie_zbroi_wymagania").style.color = "red";
if (ile_brakuje_run == 1)
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_run + "&nbsp" + "runy";
else
document.getElementById("okno_ulepszenie_zbroi_wymagania").innerHTML = "Brakuje" + "&nbsp" + ile_brakuje_zlota + "&nbsp" + "złota, i" + "&nbsp" + ile_brakuje_run + "&nbsp" + "run";


}

}




function oblicz_obrona_w_walce() {
if (obrona_temp >= 2) {
redukcja_obrazen = obrona_temp / 2;
odglos_obrony = 1;
}


var redukcja_zaokraglenie = Math.round(redukcja_obrazen);
redukcja_obrazen = redukcja_zaokraglenie;

var szansa_na_obrone = Math.floor(Math.random() * 6);

if (wilga == 1)
{
var redukcja = Math.floor(monster_hit * 0.3);
monster_hit = monster_hit - redukcja;

}

if ((szansa_na_obrone == 1) || (szansa_na_obrone == 3) || (szansa_na_obrone == 5)) {
redukcja_obrazen = 0;
odglos_obrony = 0;
}


}




function zlotnik() {

$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');

$("#okno_teren").fadeIn(300);
document.getElementById("strona_novigard").style.backgroundImage = "url('zlotnik.jpg')";


$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');





document.getElementById("lokacja").style.color = "green";

$("#kupowanie_pierscieni").fadeOut(0);
$("#tekst").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#miasto").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#miasto").fadeIn(0);


$("#medytacja").fadeIn(0);

$("#medytacja").fadeIn(0);

$("#medytacja").fadeIn(0);
$("#miasto").fadeIn(0);
$("#lokacja").fadeIn(0);

$("#nr1").fadeIn(0);
$("#nr1_cena").fadeIn(0);
$("#nr2").fadeIn(0);
$("#nr2_cena").fadeIn(0);
$("#nr3").fadeIn(0);
$("#nr3_cena").fadeIn(0);
$("#nr1").fadeTo(0, 1);
$("#nr2_cena").fadeTo(0, 1);
$("#nr1_cena").fadeTo(0, 1);
$("#nr2").fadeTo(0, 1);


document.getElementById("pytanie_o_kupno").innerHTML = "Który pierścień chcesz Kupić?";

document.getElementById("lokacja").style.pointerEvents = 'auto';

document.getElementById("miasto").style.color = "yellow";

document.getElementById("zlecenie_slot").style.pointerEvents = 'auto';
kosci_sfx.stop();

klik.play();
zlotnik_shop.play();
new_city.stop();


document.getElementById("miasto").style.color = "white";



document.getElementById("lokacja").innerHTML = "Kup pierścień";
document.getElementById("medytacja").innerHTML = "Sprzedaj pierścień";
document.getElementById("miasto").innerHTML = "Powrót";
document.getElementById("lokacja").onclick = function () {
rimg_pokaz()
};
document.getElementById("miasto").onclick = function () {

$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
zlotnik_shop.stop();
new_city.play();
wroc2()
};
document.getElementById("medytacja").onclick = function () {
sell_pokaz()
};



if ((ring_1_aktywny == 0) && (ring_2_aktywny == 0)) {

document.getElementById("medytacja").onclick = function () {
za_malo_zlota()
};

document.getElementById("medytacja").style.color = "dimgrey";
} else {

document.getElementById("medytacja").style.color = "yellow";
document.getElementById("medytacja").onclick = function () {
sell_pokaz()
};
}




}

function odblokuj_sprzedz() {
if ((ring_1_aktywny == 0) && (ring_2_aktywny == 0)) {

document.getElementById("medytacja").onclick = function () {
za_malo_zlota()
};

document.getElementById("medytacja").style.color = "dimgrey";
} else {

document.getElementById("medytacja").style.color = "yellow";
document.getElementById("medytacja").onclick = function () {
sell_pokaz()
};
}


}



function sprzedaj_pierscien() {




var wartosc_sprzedazy1 = cena_1_na_odsprzedanie / 2;
var wartosc_sprzedazy2 = cena_2_na_odsprzedanie / 2;

zaokraglone1 = Math.round(wartosc_sprzedazy1);
zaokraglone2 = Math.round(wartosc_sprzedazy2);

//ring_1_name_kolor = ring_1_name.fontcolor("green");
//ring_2_name_kolor = ring_2_name.fontcolor("green");



if (ring_1_aktywny == 0) {
$("#ring_1_sell_info").fadeTo(0, 0);
$("#ring_1_sell_zysk").fadeTo(0, 0);
$("#ring_1_sell").fadeTo(0, 0);

} else {
$("#ring_1_sell_info").fadeTo(0, 1);
$("#ring_1_sell_zysk").fadeTo(0, 1);
$("#ring_1_sell").fadeTo(0, 1);
document.getElementById("ring_1_sell").style.pointerEvents = 'auto';
}


if (ring_2_aktywny == 0) {
$("#ring_2_sell_info").fadeTo(0, 0);
$("#ring_2_sell_zysk").fadeTo(0, 0);
$("#ring_2_sell").fadeTo(0, 0);

} else {
$("#ring_2_sell_info").fadeTo(0, 1);
$("#ring_2_sell_zysk").fadeTo(0, 1);
$("#ring_2_sell").fadeTo(0, 1);
document.getElementById("ring_2_sell").style.pointerEvents = 'auto';
}




document.getElementById("ring_1_sell_info").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
document.getElementById("ring_1_sell_zysk").innerHTML = "Wartość: " + zaokraglone1;
document.getElementById("ring_2_sell_info").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
document.getElementById("ring_2_sell_zysk").innerHTML = "Wartość: " + zaokraglone2;


document.getElementById("ring_1_sell").onclick = function () {
sell_1()
};
document.getElementById("ring_2_sell").onclick = function () {
sell_2()
};

if (sprzedaj_i_kup == 1) {

document.getElementById("pytanie_o_kupno").innerHTML = "Najpierw musisz jakiś sprzedać";
} else
document.getElementById("pytanie_o_kupno").innerHTML = "Który pierścień chcesz sprzedać?";

}


function sell_1() {
sell.play();
gold_amount = gold_amount + zaokraglone1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

$("#ring_1_sell_info").fadeTo(1000, 0);
$("#ring_1_sell_zysk").fadeTo(1000, 0);
$("#ring_1_sell").fadeTo(1000, 0);


document.getElementById("ring_1_sell").style.pointerEvents = 'none';
pierscien1_bonus_check();
ring_1_aktywny = 0;
jaki_pierscien1 = "";
bonus1_dodany = 0;
document.getElementById("ring_info").innerHTML = "Brak pierścienia";
obecny1 = "";
sprzedaj_i_kup = 0;


}


function sell_2() {
sell.play();
gold_amount = gold_amount + zaokraglone2;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;


$("#ring_2_sell_info").fadeTo(1000, 0);
$("#ring_2_sell_zysk").fadeTo(1000, 0);
$("#ring_2_sell").fadeTo(1000, 0);

document.getElementById("ring_2_sell").style.pointerEvents = 'none';
pierscien2_bonus_check();
ring_2_aktywny = 0;
jaki_pierscien2 = "";
document.getElementById("ring_info2").innerHTML = "Brak pierścienia";
bonus2_dodany = 0
obecny2 = "";
sprzedaj_i_kup = 0;
}





function kup_pierscien() {

if (losuj_pierscien == 1) 
{
losuj_pierscien = 0;

ring_1_nr = Math.floor(Math.random() * 6);


do {
ring_2_nr = Math.floor(Math.random() * 6);

}
while (ring_1_nr == ring_2_nr)


do {
ring_3_nr = Math.floor(Math.random() * 6);

}
while ((ring_3_nr == ring_1_nr) || (ring_3_nr == ring_2_nr))




ring_1_opis = ring_opis[ring_1_nr];
ring_2_opis = ring_opis[ring_2_nr];
ring_3_opis = ring_opis[ring_3_nr];


ring_1 = ring[ring_1_nr];
ring_1_kolor = ring_1.fontcolor("dodgerblue");

ring_2 = ring[ring_2_nr];
ring_2_kolor = ring_2.fontcolor("rebeccapurple");

ring3 = ring[ring_3_nr];
ring_3_kolor = ring3.fontcolor("forestgreen");



losowanie_wartosci_pierscienia();

}


document.getElementById("ring_1_cena").style.color = "yellow";
document.getElementById("ring_2_cena").style.color = "yellow";
document.getElementById("ring_3_cena").style.color = "yellow";

// document.getElementById("pytanie_o_kupno").style.color = "coral";
//  document.getElementById("pytanie_o_kupno").innerHTML =  "Nowy towar po" + "&nbsp" + kiedy_nowy_towar3 + "&nbsp" +"walkach";

document.getElementById("ring_1").innerHTML = ring_1_kolor + "&nbsp" + ring_1_opis + "&nbsp" + ring_value0 + "&nbsp" + reszta;
document.getElementById("ring_1_cena").innerHTML = "Cena: " + ring_1_cena;

document.getElementById("ring_2").innerHTML = ring_2_kolor + "&nbsp" + ring_2_opis + "&nbsp" + ring_value1 + "&nbsp" + reszta2;
document.getElementById("ring_2_cena").innerHTML = "Cena: " + ring_2_cena;

document.getElementById("ring_3").innerHTML = ring_3_kolor + "&nbsp" + ring_3_opis + "&nbsp" + ring_value2 + "&nbsp" + reszta3;
document.getElementById("ring_3_cena").innerHTML = "Cena: " + ring_3_cena;


document.getElementById("ring_1_kup").onclick = function () {
zaplac_za_pierscien1()
};
document.getElementById("ring_2_kup").onclick = function () {
zaplac_za_pierscien2()
};
document.getElementById("ring_3_kup").onclick = function () {
zaplac_za_pierscien3()
};

if ((ring_2_aktywny == 1) && (ring_1_aktywny == 1))
sprzedaz_wymagana();

taki_sam_ring();
// sprawdz_czy_stac_na_pierscien();


}





function taki_sam_ring() {
sprzedaz_wymagana();

if ((jaki_pierscien1 == ring[ring_1_nr]) || (jaki_pierscien2 == ring[ring_1_nr])) {
document.getElementById("ring_1_kup").onclick = function () {
za_malo_zlota()
};
document.getElementById("ring_1_kup").style.color = "dimgrey";
document.getElementById("ring_1").style.color = "dimgrey";
document.getElementById("ring_1_cena").innerHTML = "Cena: --";
document.getElementById("ring_1").innerHTML = "--";
} else {
document.getElementById("ring_1_kup").onclick = function () {
zaplac_za_pierscien1()
};
document.getElementById("ring_1_kup").style.color = "green";
document.getElementById("ring_1").style.color = "dodgerblue";
document.getElementById("ring_1_cena").innerHTML = "Cena: " + ring_1_cena;
document.getElementById("ring_1").innerHTML = ring_1_kolor + "&nbsp" + ring_1_opis + "&nbsp" + ring_value0 + "&nbsp" + reszta;
}


if ((jaki_pierscien1 == ring[ring_2_nr]) || (jaki_pierscien2 == ring[ring_2_nr])) {
document.getElementById("ring_2_kup").onclick = function () {
za_malo_zlota()
};
document.getElementById("ring_2_kup").style.color = "dimgrey";
document.getElementById("ring_2").style.color = "dimgrey";
document.getElementById("ring_2_cena").innerHTML = "Cena: --";
document.getElementById("ring_2").innerHTML = "--";
} else {
document.getElementById("ring_2_kup").onclick = function () {
zaplac_za_pierscien2()
};
document.getElementById("ring_2_kup").style.color = "green";
document.getElementById("ring_2").style.color = "rebeccapurple";
document.getElementById("ring_2_cena").innerHTML = "Cena: " + ring_2_cena;
document.getElementById("ring_2").innerHTML = ring_2_kolor + "&nbsp" + ring_2_opis + "&nbsp" + ring_value1 + "&nbsp" + reszta2;
}


if ((jaki_pierscien1 == ring[ring_3_nr]) || (jaki_pierscien2 == ring[ring_3_nr])) {
document.getElementById("ring_3_kup").onclick = function () {
za_malo_zlota()
};
document.getElementById("ring_3_kup").style.color = "dimgrey";
document.getElementById("ring_3").style.color = "dimgrey";
document.getElementById("ring_3_cena").innerHTML = "Cena: --";
document.getElementById("ring_3").innerHTML = "--";
} else {
document.getElementById("ring_3_kup").onclick = function () {
zaplac_za_pierscien3()
};
document.getElementById("ring_3_kup").style.color = "green";
document.getElementById("ring_3").style.color = "forestgreen";
document.getElementById("ring_3_cena").innerHTML = "Cena: " + ring_3_cena;
document.getElementById("ring_3").innerHTML = ring_3_kolor + "&nbsp" + ring_3_opis + "&nbsp" + ring_value2 + "&nbsp" + reszta3;
}






if ((jaki_pierscien1 != ring[ring_1_nr]) && (jaki_pierscien2 != ring[ring_1_nr])) {
if (ring_1_cena > gold_amount) {
document.getElementById("ring_1_kup").style.color = "dimgrey";
document.getElementById("ring_1_kup").onclick = function () {
ring_1_brak_zlota()
};
} else {
document.getElementById("ring_1_kup").style.color = "green";
document.getElementById("ring_1_kup").onclick = function () {
zaplac_za_pierscien1()
};
}
}



if ((jaki_pierscien1 != ring[ring_2_nr]) && (jaki_pierscien2 != ring[ring_2_nr])) {
if (ring_2_cena > gold_amount) {
document.getElementById("ring_2_kup").style.color = "dimgrey";
document.getElementById("ring_2_kup").onclick = function () {
ring_2_brak_zlota()
};
} else {
document.getElementById("ring_2_kup").style.color = "green";
document.getElementById("ring_2_kup").onclick = function () {
zaplac_za_pierscien2()
};
}


}


if ((jaki_pierscien1 != ring[ring_3_nr]) && (jaki_pierscien2 != ring[ring_3_nr])) {
if (ring_3_cena > gold_amount) {
document.getElementById("ring_3_kup").style.color = "dimgrey";
document.getElementById("ring_3_kup").onclick = function () {
ring_3_brak_zlota()
};
} else {
document.getElementById("ring_3_kup").style.color = "green";
document.getElementById("ring_3_kup").onclick = function () {
zaplac_za_pierscien3()
};
}




}


}


function sprzedaz_wymagana() {

if ((ring_2_aktywny == 1) && (ring_1_aktywny == 1)) {
document.getElementById("ring_1_kup").onclick = function () {
aktywuj_sprzedaz()
};
document.getElementById("ring_2_kup").onclick = function () {
aktywuj_sprzedaz()
};
document.getElementById("ring_3_kup").onclick = function () {
aktywuj_sprzedaz()
};
}

}



function aktywuj_sprzedaz() {
ring_zanik();

document.getElementById("ktory_ring").innerHTML = "Najpierw musisz jakiś sprzedać";
setTimeout(sell_pokaz, 800);


}




function ring_1_brak_zlota() {
disabled.play();

var brakuje = ring_1_cena - gold_amount;
document.getElementById("ring_1_cena").style.color = "red";
document.getElementById("ring_1_cena").innerHTML = "Brakuje " + brakuje + " złota";


}

function ring_2_brak_zlota() {
disabled.play();
var brakuje = ring_2_cena - gold_amount;
document.getElementById("ring_2_cena").style.color = "red";
document.getElementById("ring_2_cena").innerHTML = "Brakuje " + brakuje + " złota";


ring_1_cena
}

function ring_3_brak_zlota() {
disabled.play();

var brakuje = ring_3_cena - gold_amount;
document.getElementById("ring_3_cena").style.color = "red";
document.getElementById("ring_3_cena").innerHTML = "Brakuje " + brakuje + " złota";

ring_1_cena
}







function sprawdz_czy_stac_na_pierscien() {

if (ring_1_cena > gold_amount) {

document.getElementById("nr1_cena").style.color = "red";
document.getElementById("nr1_cena").style.pointerEvents = 'none';
} else {

document.getElementById("nr1_cena").style.color = "dodgerblue";
document.getElementById("nr1_cena").style.pointerEvents = 'auto';

}

if (ring_2_cena > gold_amount) {

document.getElementById("nr2_cena").style.color = "red";
document.getElementById("nr2_cena").style.pointerEvents = 'none';
} else {

document.getElementById("nr2_cena").style.color = "rebeccapurple";
document.getElementById("nr2_cena").style.pointerEvents = 'auto';

}

if (ring_3_cena > gold_amount) {

document.getElementById("nr3_cena").style.color = "red";
document.getElementById("nr3_cena").style.pointerEvents = 'none';
} else {

document.getElementById("nr3_cena").style.color = "forestgreen";
document.getElementById("nr3_cena").style.pointerEvents = 'auto';
}

document.getElementById("nr1_cena").innerHTML = "Cena: " + ring_1_cena;
document.getElementById("nr2_cena").innerHTML = "Cena: " + ring_2_cena;
document.getElementById("nr3_cena").innerHTML = "Cena: " + ring_3_cena;

}


function losowanie_wartosci_pierscienia() {


if (ring_1_nr == 0) {
reszta = "";
ring_value0 = 2;
ring_1_cena = 60;
if (level_amount > 3) {
ring_value0 = 3;
ring_1_cena = 90;
}

}

if (ring_1_nr == 1) {
reszta = "";
ring_value0 = 3;
ring_1_cena = 50;
if (level_amount > 2) {
ring_value0 = 5;
ring_1_cena = 60;
}
if (level_amount > 3) {
ring_value0 = 7;
ring_1_cena = 70;
}
}

if (ring_1_nr == 2) {
reszta = "";
ring_value0 = 1;
ring_1_cena = 60;
if (level_amount > 3) {
ring_value0 = 2;
ring_1_cena = 100;
}
}

if (ring_1_nr == 3) {
ring_value0 = 20;
reszta = "%";
ring_1_cena = 50;
if (level_amount > 2) {
ring_value0 = 30;
ring_1_cena = 70;
}
if (level_amount > 4) {
ring_value0 = 40;
ring_1_cena = 80;
}
}

if (ring_1_nr == 4) {
reszta = "";
ring_value0 = Math.floor(Math.random() * 6) + 10;
ring_1_cena = 40 + ring_value0;
if (level_amount > 4) {
ring_value0 = Math.floor(Math.random() * 6) + 15;
ring_1_cena = 60 + ring_value0;
}
}

if (ring_1_nr == 5) {
reszta = "%";
ring_value0 = Math.floor(Math.random() * 6) + 10;
ring_1_cena = 60 + ring_value0;
if (level_amount > 2) {
ring_value0 = Math.floor(Math.random() * 5) + 16;
ring_1_cena = 70 + ring_value0;
}
if (level_amount > 4) {
ring_value0 = Math.floor(Math.random() * 10) + 21;
ring_1_cena = 80 + ring_value0;
}
}





if (ring_2_nr == 0) {
reszta2 = "";
ring_value1 = 2;
ring_2_cena = 60;
if (level_amount > 3)
ring_value1 = 3;
ring_2_cena = 90;
}

if (ring_2_nr == 1) {
reszta2 = "";
ring_value1 = 3;
ring_2_cena = 50;
if (level_amount > 2) {
ring_2_cena = 60;
ring_value1 = 5;
}
if (level_amount > 3) {
ring_value1 = 7;
ring_2_cena = 70;
}
}

if (ring_2_nr == 2) {
reszta2 = "";
ring_value1 = 1;
ring_2_cena = 60;
if (level_amount > 3) {
ring_value1 = 2;
ring_2_cena = 100;
}
}

if (ring_2_nr == 3) {
ring_value1 = 20;
reszta2 = "%";
ring_2_cena = 50;
if (level_amount > 2) {
ring_value1 = 30;
ring_2_cena = 70;
}
if (level_amount > 4) {
ring_value1 = 40;
ring_2_cena = 80;
}
}

if (ring_2_nr == 4) {
reszta2 = "";
ring_value1 = Math.floor(Math.random() * 6) + 10;
ring_2_cena = 40 + ring_value1;
if (level_amount > 4) {
ring_value1 = Math.floor(Math.random() * 6) + 15;
ring_2_cena = 60 + ring_value1;
}
}

if (ring_2_nr == 5) {
reszta2 = "%";
ring_value1 = Math.floor(Math.random() * 6) + 10;
ring_2_cena = 60 + ring_value1;
if (level_amount > 2) {
ring_value1 = Math.floor(Math.random() * 5) + 16;
ring_2_cena = 70 + ring_value1;
}
if (level_amount > 4) {
ring_value1 = Math.floor(Math.random() * 10) + 21;
ring_2_cena = 80 + ring_value1;
}
}








if (ring_3_nr == 0) {
reszta3 = "";
ring_value2 = 2;
ring_3_cena = 60;
if (level_amount > 3)
ring_value2 = 3;
ring_3_cena = 90;
}

if (ring_3_nr == 1) {
reszta3 = "";
ring_value2 = 3;
ring_3_cena = 50;
if (level_amount > 2) {
ring_value2 = 5;
ring_3_cena = 60;
}
if (level_amount > 3) {
ring_value2 = 7;
ring_3_cena = 70;
}
}

if (ring_3_nr == 2) {
reszta3 = "";
ring_value2 = 1;
ring_3_cena = 60;
if (level_amount > 3) {
ring_3_cena = 100;
ring_value2 = 2;
}
}

if (ring_3_nr == 3) {
ring_value2 = 20;
reszta3 = "%";
ring_3_cena = 50;
if (level_amount > 2) {
ring_value2 = 30;
ring_3_cena = 60 + ring_value2;
}
if (level_amount > 4) {
ring_value2 = 40;
ring_3_cena = 80;
}
}

if (ring_3_nr == 4) {
reszta3 = "";
ring_value2 = Math.floor(Math.random() * 6) + 10;
ring_3_cena = 40 + ring_value2;
if (level_amount > 4) {
ring_value2 = Math.floor(Math.random() * 6) + 15;
ring_3_cena = 60 + ring_value2;
}
}

if (ring_3_nr == 5) {
reszta3 = "%";
ring_value2 = Math.floor(Math.random() * 6) + 10;
ring_3_cena = 60 + ring_value2;
if (level_amount > 2) {
ring_value2 = Math.floor(Math.random() * 5) + 16;
ring_3_cena = 70 + ring_value2;
}
if (level_amount > 4) {
ring_value2 = Math.floor(Math.random() * 10) + 21;
ring_3_cena = 80 + ring_value2;
}
}







}




function zaplac_za_pierscien1() {

if (ring_1_aktywny == 0) {
buy.play();
ring_1_name = ring[ring_1_nr];
ring_1_name_kolor = ring_1_name.fontcolor("purple");
ring_1_info = ring_1_opis;
ring_1_value = ring_value0;
ring_1_symbol = reszta;
document.getElementById("ring_info").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
ring_1_aktywny = 1;
jaki_pierscien1 = ring[ring_1_nr];
gold_amount = gold_amount - ring_1_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
pierscien1_bonus_check();
pierscien1_bonus_add();
cena_1_na_odsprzedanie = ring_1_cena;
taki_sam_ring();
//  sprawdz_wlasciwosci_pierscieni();
document.getElementById("ring_1_sell").style.pointerEvents = 'auto';
$("#ring_1_sell_info").fadeTo(0, 1);
$("#ring_1_sell_zysk").fadeTo(0, 1);
$("#ring_1_sell").fadeTo(0, 1);



} else if (ring_2_aktywny == 0) {
buy.play();
ring_2_name = ring[ring_1_nr];
ring_2_name_kolor = ring_2_name.fontcolor("purple");
ring_2_info = ring_1_opis;
ring_2_value = ring_value0;
ring_2_symbol = reszta;
document.getElementById("ring_info2").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
ring_2_aktywny = 1;
gold_amount = gold_amount - ring_1_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
jaki_pierscien2 = ring[ring_1_nr];
pierscien2_bonus_check();
pierscien2_bonus_add();
cena_2_na_odsprzedanie = ring_1_cena;
taki_sam_ring();
sprawdz_wlasciwosci_pierscieni();
document.getElementById("ring_2_sell").style.pointerEvents = 'auto';
$("#ring_2_sell_info").fadeTo(0, 1);
$("#ring_2_sell_zysk").fadeTo(0, 1);
$("#ring_2_sell").fadeTo(0, 1);
} else {
nr_pierscienia_do_kupienia = 1;
$("#kupowanie_pierscieni").fadeOut(0);
sprzedaj_i_kup = 1;
sprzedaj_pierscien();
klik.play();
document.getElementById("pierwszy").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
document.getElementById("drugi").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
}

if ((ring_2_aktywny == 1) && (ring_1_aktywny == 1))
sprzedaz_wymagana();

}



function zaplac_za_pierscien2() {

if (ring_1_aktywny == 0) {
buy.play();
ring_1_name = ring[ring_2_nr];
ring_1_name_kolor = ring_1_name.fontcolor("purple");
ring_1_info = ring_2_opis;
ring_1_value = ring_value1;
ring_1_symbol = reszta2;
document.getElementById("ring_info").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
ring_1_aktywny = 1;
gold_amount = gold_amount - ring_2_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
jaki_pierscien1 = ring[ring_2_nr];
pierscien1_bonus_check();
pierscien1_bonus_add();
cena_1_na_odsprzedanie = ring_2_cena;
taki_sam_ring();

document.getElementById("ring_1_sell").style.pointerEvents = 'auto';
$("#ring_1_sell_info").fadeTo(0, 1);
$("#ring_1_sell_zysk").fadeTo(0, 1);
$("#ring_1_sell").fadeTo(0, 1);
} else if (ring_2_aktywny == 0) {
buy.play();
ring_2_name = ring[ring_2_nr];
ring_2_name_kolor = ring_2_name.fontcolor("purple");
ring_2_info = ring_2_opis;
ring_2_value = ring_value1;
ring_2_symbol = reszta2;
document.getElementById("ring_info2").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
ring_2_aktywny = 1;
gold_amount = gold_amount - ring_2_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
jaki_pierscien2 = ring[ring_2_nr];
pierscien2_bonus_check();
pierscien2_bonus_add();
cena_2_na_odsprzedanie = ring_2_cena;
taki_sam_ring();

document.getElementById("ring_2_sell").style.pointerEvents = 'auto';
$("#ring_2_sell_info").fadeTo(0, 1);
$("#ring_2_sell_zysk").fadeTo(0, 1);
$("#ring_2_sell").fadeTo(0, 1);
} else {
nr_pierscienia_do_kupienia = 2;
$("#kupowanie_pierscieni").fadeOut(0);
klik.play();
document.getElementById("pierwszy").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
document.getElementById("drugi").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
sprzedaj_i_kup = 1;
sprzedaj_pierscien();
}


if ((ring_2_aktywny == 1) && (ring_1_aktywny == 1))
sprzedaz_wymagana();

}


function zaplac_za_pierscien3() {

if (ring_1_aktywny == 0) {
buy.play();
ring_1_name = ring[ring_3_nr];
ring_1_name_kolor = ring_1_name.fontcolor("purple");
ring_1_info = ring_3_opis;
ring_1_value = ring_value2;
ring_1_symbol = reszta3;
document.getElementById("ring_info").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
ring_1_aktywny = 1;
gold_amount = gold_amount - ring_3_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
jaki_pierscien1 = ring[ring_3_nr];
pierscien1_bonus_check();
pierscien1_bonus_add();
cena_1_na_odsprzedanie = ring_3_cena;
taki_sam_ring();

document.getElementById("ring_1_sell").style.pointerEvents = 'auto';
$("#ring_1_sell_info").fadeTo(0, 1);
$("#ring_1_sell_zysk").fadeTo(0, 1);
$("#ring_1_sell").fadeTo(0, 1);
} else if (ring_2_aktywny == 0) {
buy.play();
ring_2_name = ring[ring_3_nr];
ring_2_name_kolor = ring_2_name.fontcolor("purple");
ring_2_info = ring_3_opis;
ring_2_value = ring_value2;
ring_2_symbol = reszta3;
document.getElementById("ring_info2").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
ring_2_aktywny = 1;
gold_amount = gold_amount - ring_3_cena;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
jaki_pierscien2 = ring[ring_3_nr];
pierscien2_bonus_check();
pierscien2_bonus_add();
cena_2_na_odsprzedanie = ring_3_cena;
taki_sam_ring();

document.getElementById("ring_2_sell").style.pointerEvents = 'auto';
$("#ring_2_sell_info").fadeTo(0, 1);
$("#ring_2_sell_zysk").fadeTo(0, 1);
$("#ring_2_sell").fadeTo(0, 1);
} else {
nr_pierscienia_do_kupienia = 3;
$("#kupowanie_pierscieni").fadeOut(0);
klik.play();
document.getElementById("pierwszy").style.pointerEvents = 'auto';
document.getElementById("drugi").style.pointerEvents = 'auto';
document.getElementById("pierwszy").innerHTML = ring_1_name_kolor + "&nbsp" + ring_1_info + "&nbsp" + ring_1_value + "&nbsp" + ring_1_symbol;
document.getElementById("drugi").innerHTML = ring_2_name_kolor + "&nbsp" + ring_2_info + "&nbsp" + ring_2_value + "&nbsp" + ring_2_symbol;
sprzedaj_i_kup = 1;
sprzedaj_pierscien();
}


if ((ring_2_aktywny == 1) && (ring_1_aktywny == 1))
sprzedaz_wymagana();

}




function pierscien1_bonus_check() {
if (obecny1 == "Siły") {
strenght_amount = strenght_amount - ring_1_value;
bonus1_dodany = 0;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
}



if (obecny1 == "Magii") {
magic_amount = magic_amount - ring_1_value;
znak_critical=0;
bonus1_dodany = 0;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
}

if (obecny1 == "Bogactwa") {
extra_gold_ring = 0;
extra_gold_ring_amount = 0;
bonus1_dodany = 0;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
}

if (obecny1 == "Życia") {
life_max = life_max - extra_life;
bonus1_dodany = 0;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max; 

}

if (obecny1 == "Koncentracji") {
manal_max = manal_max - extra_mana;
bonus1_dodany = 0;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}



if (obecny1 == "Furii") {
furia_amount = 0;
furia = 0;
bonus1_dodany = 0;
document.getElementById("attack").innerHTML = "Atak:";
}
}



function pierscien1_bonus_add() {
if ((jaki_pierscien1 == "Siły") && (bonus1_dodany == 0)) {
strenght_amount = strenght_amount + ring_1_value;
bonus1_dodany = 1;
obecny1 = "Siły";
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
}



if ((jaki_pierscien1 == "Magii") && (bonus1_dodany == 0)) {
magic_amount = magic_amount + ring_1_value;
znak_critical=1;
bonus1_dodany = 1;
obecny1 = "Magii";
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
}

if ((jaki_pierscien1 == "Bogactwa") && (bonus1_dodany == 0)) {
extra_gold_ring = 1;
extra_gold_ring_amount = ring_1_value;
bonus1_dodany = 1;
obecny1 = "Bogactwa";
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
}

if ((jaki_pierscien1 == "Życia") && (bonus1_dodany == 0)) {

extra_life = ring_1_value;
life_max = life_max + extra_life;
bonus1_dodany = 1;

obecny1 = "Życia";
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}

if ((jaki_pierscien1 == "Koncentracji") && (bonus1_dodany == 0)) {
extra_mana = ring_1_value;
manal_max = manal_max + extra_mana;
bonus1_dodany = 1;
obecny1 = "Koncentracji";
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}


if ((jaki_pierscien1 == "Furii") && (bonus1_dodany == 0)) {
furia = 1;
furia_amount = ring_1_value;
bonus1_dodany = 1;
obecny1 = "Furii";
document.getElementById('attack').innerHTML = "Atak:" + "&nbsp" + "(furia" + "&nbsp" + ring_1_value + "%)";
}
}



function pierscien2_bonus_check() {

if (obecny2 == "Siły") {
strenght_amount = strenght_amount - ring_2_value;
bonus2_dodany = 0;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
}



if (obecny2 == "Magii") {
magic_amount = magic_amount - ring_2_value;
znak_critical=0;
bonus2_dodany = 0;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
}

if (obecny2 == "Bogactwa") {
extra_gold_ring = 0;
extra_gold_ring_amount = 0;
bonus2_dodany = 0;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
}

if (obecny2 == "Życia") {
life_max = life_max - extra_life;
bonus2_dodany = 0;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}

if (obecny2 == "Koncentracji") {
manal_max = manal_max - extra_mana;
bonus2_dodany = 0;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}



if (obecny2 == "Furii") {
furia_amount = 0;
furia = 0;
bonus2_dodany = 0;
document.getElementById("attack").innerHTML = "Atak:";
}
}




function pierscien2_bonus_add() {

if ((jaki_pierscien2 == "Siły") && (bonus2_dodany == 0)) {
strenght_amount = strenght_amount + ring_2_value;
bonus2_dodany = 1;
obecny2 = "Siły";
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
}


if ((jaki_pierscien2 == "Magii") && (bonus2_dodany == 0)) {
magic_amount = magic_amount + ring_2_value;
znak_critical=1;
bonus2_dodany = 1;
obecny2 = "Magii";
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
}

if ((jaki_pierscien2 == "Bogactwa") && (bonus2_dodany == 0)) {
extra_gold_ring = 1;
extra_gold_ring_amount = ring_2_value;
bonus2_dodany = 1;
obecny2 = "Bogactwa";
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
}

if ((jaki_pierscien2 == "Życia") && (bonus2_dodany == 0)) {
extra_life = ring_2_value;
life_max = life_max + extra_life;
bonus2_dodany = 1;
obecny2 = "Życia";
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}

if ((jaki_pierscien2 == "Koncentracji") && (bonus2_dodany == 0) && (save_loaded == 0)) {
extra_mana = ring_2_value;
manal_max = manal_max + extra_mana;
bonus2_dodany = 1;
obecny2 = "Koncentracji";
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}



if ((jaki_pierscien2 == "Furii") && (bonus2_dodany == 0)) {
furia = 1;
furia_amount = ring_2_value;
bonus2_dodany = 1;
obecny2 = "Furii";
document.getElementById('attack').innerHTML = "Atak:" + "&nbsp" + "(furia" + "&nbsp" + furia_amount + "%)";
}
}









function losuj_dziwki() {


jaki_numer = Math.floor(Math.random() * 10);
jaki_opis = Math.floor(Math.random() * 23);

jaki_numer2 = Math.floor(Math.random() * 10);
jaki_opis2 = Math.floor(Math.random() * 23);

jaki_numer3 = Math.floor(Math.random() * 10);
jaki_opis3 = Math.floor(Math.random() * 23);

}


function losuj_samca() {


jaki_numer = Math.floor(Math.random() * 10);
jaki_opis = Math.floor(Math.random() * 16);

jaki_numer2 = Math.floor(Math.random() * 10);
jaki_opis2 = Math.floor(Math.random() * 16);

jaki_numer3 = Math.floor(Math.random() * 10);
jaki_opis3 = Math.floor(Math.random() * 16);

}





function zamtuz() {



document.getElementById("strona_novigard").style.backgroundImage = "url('zamtuz.jpg')";


$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');

$("#okno_teren").fadeIn(0);

$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#okno3").transition({ scale:0,opacity:0}, 1000, 'ease');

kiedy_nowy_towar = kiedy_nowy_towar - ile_walk_zaliczonych2;
klik.play();
zamtuz_sfx.play();
kosci_sfx.stop();

document.getElementById("zlecenie_slot").style.color = "white";
document.getElementById("zlecenie_slot").style.pointerEvents = 'auto';


document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById("medytacja").style.pointerEvents = 'auto';
document.getElementById("miasto").style.pointerEvents = 'auto';



document.getElementById("tekst").style.width = "400px";
document.getElementById("tekst").innerHTML = "Zamtuz - 'Chętne Uda'" + "&nbsp" + "&nbsp" + "cena za usługę 10 złota";




if (plec_typ == 1) {
document.getElementById("lokacja").innerHTML = opis_dziwki[jaki_opis] + "&nbsp" + dziwka[jaki_numer];
document.getElementById("medytacja").innerHTML = opis_dziwki[jaki_opis2] + "&nbsp" + dziwka[jaki_numer2];
document.getElementById("miasto").innerHTML = opis_dziwki[jaki_opis3] + "&nbsp" + dziwka[jaki_numer3];
} else if (plec_typ == 2) {
document.getElementById("lokacja").innerHTML = opis_samca[jaki_opis] + "&nbsp" + samiec[jaki_numer];
document.getElementById("medytacja").innerHTML = opis_samca[jaki_opis2] + "&nbsp" + samiec[jaki_numer2];
document.getElementById("miasto").innerHTML = opis_samca[jaki_opis3] + "&nbsp" + samiec[jaki_numer3];
}

document.getElementById("zlecenie_slot").innerHTML = "Powrót";
document.getElementById("lokacja").onclick = function () {
usluga()
};
document.getElementById("medytacja").onclick = function () {
usluga()
};
document.getElementById("miasto").onclick = function () {
usluga()
};
document.getElementById("zlecenie_slot").onclick = function () {

$("#okno3").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#okno_teren").transition({ scale:0,opacity:0}, 1000, 'ease');
wroc2()
};




$("#tekst").fadeIn(0);


$("#tekst").fadeIn(0);
$("#lokacja").fadeIn(0);
$("#medytacja").fadeIn(0);
$("#miasto").fadeIn(0);
$("#zlecenie_slot").fadeIn(0);

$("#exra_slot").fadeOut(0);
$("#miasto").fadeIn(0);




if (gold_amount < 12) {

document.getElementById("miasto").style.color = "dimgrey";
document.getElementById("miasto").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("miasto").onclick = function () {
usluga()
};
document.getElementById("miasto").style.color = "yellow";

}

if (gold_amount < 12) {
document.getElementById("medytacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("medytacja").style.color = "dimgrey";

} else {
document.getElementById("medytacja").onclick = function () {
usluga()
};
document.getElementById("medytacja").style.color = "deepskyblue";

}

if (gold_amount < 12) {
document.getElementById("lokacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("lokacja").style.color = "dimgrey";

} else {
document.getElementById("lokacja").onclick = function () {
usluga()
};
document.getElementById("lokacja").style.color = "violet";

}


if (plec_typ == 1) {


if (gold_amount < 12)
document.getElementById("tekst").innerHTML = "Zamtuz - 'Chętne Uda'" + "&nbsp" + "&nbsp" + "wróć z 10 sztukami złota";
else
document.getElementById("tekst").innerHTML = "Zamtuz - 'Chętne Uda'" + "&nbsp" + "&nbsp" + "cena za usługę 10 złota";
}

if (plec_typ == 2) {


if (gold_amount < 12)
document.getElementById("tekst").innerHTML = "Zamtuz - 'Twarda pała'" + "&nbsp" + "&nbsp" + "wróć z 10 sztukami złota";
else
document.getElementById("tekst").innerHTML = "Zamtuz - 'Twarda Pała'" + "&nbsp" + "&nbsp" + "cena za usługę 10 złota";
}



}


function usluga() {

document.getElementById("lokacja").style.pointerEvents = 'none';
document.getElementById("medytacja").style.pointerEvents = 'none';
document.getElementById("miasto").style.pointerEvents = 'none';
dziwka_zaliczona = 1;
sell.play();
gold_amount = gold_amount - 10;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

$("#tekst").fadeOut(1000);
$("#lokacja").fadeOut(1000);
$("#medytacja").fadeOut(1000);
$("#miasto").fadeOut(1000);
$("#zlecenie_slot").fadeOut(1000);




sex.play();
setTimeout(usluga_bonus, 2500);

}

function usluga_bonus() {
document.getElementById("tekst").innerHTML = "Zamtuz - 'Chętne Uda'" + "&nbsp" + "&nbsp" + "zapraszamy ponownie!";
zlecenie2_sfx.play();
$("#miasto").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#tekst").fadeIn(200);
$("#lokacja").fadeIn(200);
$("#zlecenie_slot").fadeIn(200);


sex.stop();


var numer = Math.floor(Math.random() * 6) + 1;

numer=5;


if (numer == 1) {
if (plec_typ == 1)
document.getElementById("lokacja").innerHTML = "Panna była wymagająca...Twoja energia nieznacznie spadła";
else
document.getElementById("lokacja").innerHTML = "Zostałaś ostro wydupczona...Twoja energia nieznacznie spadła";
life_amount = life_amount - 5;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
if (life_amount <= 0)
life_amount = 1;
}

if (numer == 2) {
document.getElementById("lokacja").innerHTML = "To było przyjemne doznanie...Twoja energia znacząco wzrosła";
life_amount = life_amount + 5;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
}

if (numer == 3) {
document.getElementById("lokacja").innerHTML = "Czujesz się jak młody Bóg...Twoja siła chwilowo wzrosła";


if (elixir_obrony_aktywny == 1) {
obrona_temp = obrona_temp - bonus_do_obrony;
document.getElementById("armour_bonus").innerHTML = "Obrona:" + "&nbsp" + obrona_temp;
bonus_do_obrony = 0;
elixir_obrony_aktywny = 0;
}
eliksir_inny_walki_amount = 3;
temp_sila = 1;
strenght_amount = strenght_amount + temp_sila;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
document.getElementById("inny_info").innerHTML = "Chwilowe zwiększenie siły";
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + " " + eliksir_inny_walki_amount;
zamtuz_sila_bonus = 1;
}


if (numer == 4) {
if (plec_typ == 1)
document.getElementById("lokacja").innerHTML = "Niewiasta wyssała z Ciebie ostatnie soki....Twoja siła chwilowo spadła";
else
document.getElementById("lokacja").innerHTML = "Ledwo możesz chodzić....Twoja siła chwilowo spadła";
eliksir_inny_walki_amount = 2;
temp_sila = 1;
strenght_amount = strenght_amount - temp_sila;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
document.getElementById("inny_info").innerHTML = "Chwilowe zmniejszenie siły";
document.getElementById("inny_walki").innerHTML = "Ilość walk:" + " " + eliksir_inny_walki_amount;
zamtuz_sila_bonus_minus = 1;
}

if (numer == 5) {
document.getElementById("lokacja").innerHTML = "Czujesz wzmocnienie mentalne...Twoja koncentracja wzrosła";
mana_amount = mana_amount + 5;
mana_zamtuz = 1;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}

if (numer == 6) {
document.getElementById("lokacja").innerHTML = "Czujesz osłabienie mentalne...Twoja koncentracja spadła";
mana_amount = 0;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
}


}




function sprawdz_kierunek_do_eventu() {




$("#player").transition({ y: 41, x: -7},2200);


if (kierunek == 4)
$("#player").transition({
y: -43,
x: -150
}, 2000);


if (kierunek == 6)
$("#player").transition({
y: 82,
x: -63
}, 1200);

if (kierunek == 7)
$("#player").transition({
y: 100,
x: 80
}, 800);

if (kierunek == 45)
$("#player").transition({
y: 0,
x: 0
}, 2200);

if (kierunek == 76) {
$("#player").transition({
y: 90,
x: -30
}, 1000);
$("#player").transition({
y: 82,
x: -63
}, 1200);
}

if (kierunek == 65)
$("#player").transition({
y: 0,
x: 0
}, 2200);

if (kierunek == 3)
$("#player").transition({
y: -78,
x: -12
}, 2200);

if (kierunek == 34)
$("#player").transition({
y: -43,
x: -150
}, 2200);

if (kierunek == 5)
$("#player").transition({
y: 0,
x: 0
}, 2200);





if (jaki_skarb_event == 3) {
if (kierunek == 4)
$("#player").transition({
y: -43,
x: -150
}, 2000);


if (kierunek == 6) {
$("#player").transition({
y: 21,
x: 7
}, 1200);
$("#player").transition({
y: 41,
x: -7
}, 1200);
$("#player").transition({
y: 82,
x: -63
}, 1200);
}

if (kierunek == 7)
$("#player").transition({
y: 100,
x: 80
}, 800);

if (kierunek == 45)
$("#player").transition({
y: 0,
x: 0
}, 2200);

if (kierunek == 76) {
$("#player").transition({
y: 90,
x: -30
}, 1000);
$("#player").transition({
y: 82,
x: -63
}, 1200);
}

if (kierunek == 65)
$("#player").transition({
y: 0,
x: 0
}, 2200);

if (kierunek == 3)
$("#player").transition({
y: -78,
x: -12
}, 2200);

if (kierunek == 34)
$("#player").transition({
y: -43,
x: -150
}, 2200);

if (kierunek == 5)
$("#player").transition({
y: 0,
x: 0
}, 2200);



}

}

function zlecenie_check() {

if ((kierunek == 1) || (kierunek == 201))
kierunek_sprawdzony = 1;

if (kierunek == 2)
kierunek_sprawdzony = 2;

if ((kierunek == 3) || (kierunek == 30) || (kierunek == 23))
kierunek_sprawdzony = 3;

if ((kierunek == 5) || (kierunek == 65))
kierunek_sprawdzony = 5;

if ((kierunek == 6) || (kierunek == 76))
kierunek_sprawdzony = 6;

}


function zlecenie_check_gif() {



if (kierunek_sprawdzony == gdzie_zlecenie) {
document.getElementById('player').style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").onclick = function () {
zlecenie_walka()
}

} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}


}





function kupiec_event() {

if ((kupiec_wykonane == 0) && (kierunek == 0)) {
tekst_nr = 2;

pokaz_informacje();

}


if ((kupiec_wykonane == 1) && (kierunek == 0)) {
document.getElementById("player").style.pointerEvents = 'auto';

document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";

document.getElementById("player").onclick = function () {
kupiec()
};

} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";

document.getElementById("player").style.pointerEvents = 'none';
}


}


function wieza() {

if (wieza_klucz == 0){
tekst_nr = 4;
document.getElementById('info_pop').style.backgroundImage = "url('wieza.jpg')";
pokaz_informacje();

}

if (wieza_klucz == 1) {

document.getElementById("player").style.pointerEvents = 'auto';

document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";


tower();


} 


}







function miasto_event() {
if ((kierunek == 7) || (kierunek == 87)) {

document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";

if (plec_typ == 1)
document.getElementById("uda").innerHTML = "'CHĘTNE UDA'";

else if (plec == 2)
document.getElementById("uda").innerHTML = "'TWARDA PAŁA'";



document.getElementById("player").onclick = function () {

ppl_zoom_out();
};

} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';

}
}

function miasto_event2() {
if ((kierunek == 9) || (kierunek == 109)) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
ppl_zoom_out();
};
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}
}

function grave() {
if (kierunek == 11) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
graveyard()
};
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}
}



function eventy() {
if (kierunek == 7) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
droga3()
};
} else if (((kierunek == 4) || (kierunek == 34)) && (grobowiec_completed == 0) && (misja == 1)) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
cmentarz()
};
document.getElementById("atakuj").style.pointerEvents = 'auto';
} else if (kierunek == 0) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
kupiec()
};
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

if ((kierunek == 81) && (misja == 3)) {
document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
jaskinia()
};
}

if (ucieczka_aktywna == 1)
wylacz_drogi();

}


function walka_na_20() {

if (kierunek == 20) {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('rat').className = "fight";
fight.play();
typ_tla = 14;
document.getElementById("rat").style.zIndex = 1700;
xp_value = 6;
document.getElementById("enemy_name").className = "flash7";
losuj_potwora(40, "Zmutowany szczur", "magic");
zakres_ataku_potwora(3, 10);
boss.play();
setTimeout(walka2, 1000);
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}
function bandyci_walka() {

if ((misja==4)&&(bandyci_pokonani==0))
{
po_walce=9;
document.getElementById("bandit").style.zIndex = 1700;
bandyci_aktywni=1;
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('bandit').className = "fight";
fight.play();


document.getElementById("enemy_amount").innerHTML = "Ilość bandytów: " + pozostalych_bandytow;
xp_value = 3;
var hp =  Math.floor(Math.random() * 10) + 10;
losuj_potwora(hp, "Bandyta", "sword");
zakres_ataku_potwora(3, 8);
battle_sfx.play();
setTimeout(walka2, 1000);
} else {
kierunek==123;
sprawdz_kierunki_aktywne();
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}
function mag_walka() {

if (misja_mag == 1) {
document.getElementById("mag").style.zIndex = 1700;

magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('mag').className = "fight";
fight.play();
typ_tla = 17;
ilosc_potworow=5;
document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
xp_value = 10;

losuj_potwora(120, "Alzur", "magic");
zakres_ataku_potwora(5, 15);
boss.play();
setTimeout(walka2, 1000);
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}


function waklka_na_8() {

if (kierunek == 8) {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('golem').className = "fight";
fight.play();
setTimeout(walka2, 1000);
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}

function walka_na_10() {

if (kierunek == 10) {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
document.getElementById("spider").style.zIndex = 4700;
document.getElementById('spider').className = "fight";
fight.play();
setTimeout(walka2, 1000);
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}


function walka_na_26() {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
document.getElementById("mag").style.zIndex = 4700;
document.getElementById('mag').className = "fight";
document.getElementById("enemy_name").className = "flash2a";
xp_value = 10; 
typ_tla = 23;
losuj_potwora(100, "~Nieumarły Czarodziej~", "magic");
zakres_ataku_potwora(5, 12);
boss.play();
fight.play();
setTimeout(walka2, 1000);
}




function walka_na_27() {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
document.getElementById("mag2").style.zIndex = 4700;
document.getElementById('mag2').className = "fight";
document.getElementById("enemy_name").className = "flash2a";
xp_value = 10; 
typ_tla = 24;
losuj_potwora(110, "~Nieumarły nekromanta~", "magic");
zakres_ataku_potwora(3, 12);
boss.play();
fight.play();
setTimeout(walka2, 1000);
}





function walka_na_19() {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
document.getElementById("mag3").style.zIndex = 4700;
document.getElementById('mag3').className = "fight";
document.getElementById("enemy_name").className = "flash2a";
xp_value = 10; 
typ_tla = 25;
losuj_potwora(130, "~Nieumarły kapłan~", "magic");
zakres_ataku_potwora(4, 10);
boss.play();
fight.play();
setTimeout(walka2, 1000);
}





function walka_na_24() {
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
document.getElementById("alzur").style.zIndex = 4700;
document.getElementById('alzur').className = "fight";
document.getElementById("enemy_name").className = "flash2a";
xp_value = 10; 
typ_tla = 26;
losuj_potwora(170, "~ALZUR~", "magic");
zakres_ataku_potwora(5, 15);
boss.play();
fight.play();
setTimeout(walka2, 1000);
}







function walka_na_15() 
{

document.getElementById("skorpion").style.zIndex = 700;
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('skorpion').className = "fight";
typ_tla = 18;
losuj_potwora(80, "Zmutowany skorpion", "magic");
zakres_ataku_potwora(5, 15);
boss.play();
setTimeout(walka2, 1000);

}

function walka_na_18() 
{
document.getElementById("gorgol").style.zIndex = 1700;

magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";

document.getElementById('gorgol').className = "fight";
typ_tla = 21;
losuj_potwora(80, "Gargulec", "magic");
zakres_ataku_potwora(5, 15);
boss.play();
setTimeout(walka2, 1000);

}

function jaskinia_wejscie() {

if ((quest_wykonany_nr == 2) && (misja == 3)) {

document.getElementById("player").style.pointerEvents = 'auto';
document.getElementById("gif81").style.pointerEvents = 'auto';
document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
document.getElementById("player").onclick = function () {
cave()
};
document.getElementById("gif81").onclick = function () {
cave()
};

} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';

}

}


function waklka_na_2() {

if ((kierunek == 2) && (blob_completed == 0) && (misja == 2)) {

magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
$("#player").stop(300);
document.getElementById('blob').className = "fight";
fight.play();
setTimeout(walka2, 1000);
} else {
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}


function waklka_na_22() {

if ((kierunek == 22) && (bat_pokonany == 0)) 
{
document.getElementById("player").style.pointerEvents = 'none';
document.getElementById("gif22").style.pointerEvents = 'none';
document.getElementById("rycerz").style.zIndex = 9000;
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
$("#player").stop(300);
document.getElementById('rycerz').className = "fight";
document.getElementById("enemy_name").className = "flash7";
losuj_potwora(70, "Zmutowany nietoperz", "magic");
zakres_ataku_potwora(5, 10);
boss.play();
xp_value=10;
typ_tla=20;    
document.getElementById('strona_novigard').style.backgroundImage = "url('bat.jpg')";
setTimeout(walka2, 1000);
} else 
{
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("player").style.pointerEvents = 'none';
}

}







function golem() {
kroki_stop();
magic2.play();
document.getElementById('player').style.backgroundImage = "url('gif_event.gif')";
$("#player").stop(300);
setTimeout(walka, 1500);

}



function wylacz_drogi()

{
document.getElementById("player").style.pointerEvents = 'none';
document.getElementById("gif0").style.pointerEvents = 'none';
document.getElementById("gif1").style.pointerEvents = 'none';
document.getElementById("gif2").style.pointerEvents = 'none';
document.getElementById("gif3").style.pointerEvents = 'none';
document.getElementById("gif4").style.pointerEvents = 'none';
document.getElementById("gif5").style.pointerEvents = 'none';
document.getElementById("gif6").style.pointerEvents = 'none';
document.getElementById("gif7").style.pointerEvents = 'none';
document.getElementById("gif8").style.pointerEvents = 'none';
document.getElementById("gif9").style.pointerEvents = 'none';
document.getElementById("gif10").style.pointerEvents = 'none';
document.getElementById("gif11").style.pointerEvents = 'none';
document.getElementById("gif12").style.pointerEvents = 'none';
document.getElementById("gif81").style.pointerEvents = 'none';
document.getElementById("golem").style.pointerEvents = 'none';
document.getElementById("golem").style.pointerEvents = 'none';
document.getElementById("spider").style.pointerEvents = 'none';
document.getElementById("rat").style.pointerEvents = 'none';
document.getElementById("gif20").style.pointerEvents = 'none';
document.getElementById("player").style.backgroundImage = "url('gif.gif')";
document.getElementById("gif13").style.pointerEvents = 'none';
document.getElementById("gif14").style.pointerEvents = 'none';
document.getElementById("gif15").style.pointerEvents = 'none';
document.getElementById("gif16").style.pointerEvents = 'none';
document.getElementById("gif17").style.pointerEvents = 'none';
document.getElementById("gif18").style.pointerEvents = 'none';
document.getElementById("gif19").style.pointerEvents = 'none';
document.getElementById("gif24").style.pointerEvents = 'none';







}


function wlacz_drogi() {
document.getElementById("gif0").style.pointerEvents = 'auto';
document.getElementById("gif1").style.pointerEvents = 'auto';
document.getElementById("gif2").style.pointerEvents = 'auto';
document.getElementById("gif3").style.pointerEvents = 'auto';
document.getElementById("gif4").style.pointerEvents = 'auto';
document.getElementById("gif5").style.pointerEvents = 'auto';
document.getElementById("gif6").style.pointerEvents = 'auto';
document.getElementById("gif7").style.pointerEvents = 'auto';
document.getElementById("gif8").style.pointerEvents = 'auto';
document.getElementById("gif9").style.pointerEvents = 'auto';
document.getElementById("gif10").style.pointerEvents = 'auto';
document.getElementById("gif11").style.pointerEvents = 'auto';
document.getElementById("gif12").style.pointerEvents = 'auto';

document.getElementById("gif13").style.pointerEvents = 'auto';
document.getElementById("gif14").style.pointerEvents = 'auto';
document.getElementById("gif15").style.pointerEvents = 'auto';
document.getElementById("gif16").style.pointerEvents = 'auto';
document.getElementById("gif17").style.pointerEvents = 'auto';
document.getElementById("gif18").style.pointerEvents = 'auto';
document.getElementById("gif19").style.pointerEvents = 'auto';
document.getElementById("gif24").style.pointerEvents = 'auto';








}


function cmentarz() {
po_walce=1;
document.getElementById("okno_teren").style.opacity = "1";

losuj_potwora();
enemy_resistant = "none";
document.getElementById("enemy_name").innerHTML = mob[mob_name];





mob_hp = 0;
min_1 = 0;
max_2 = 0;

if (grobowiec_poziom == 0) 
{
atak_grobowiec = 1;
hp_grobowiec = 1;
}

hp_grobowiec++


atak_grobowiec++;

typ_tla = 4;


grobowiec_aktywny = 1;

mob_hp = hp_grobowiec;
min_1 = 1;
max_2 =  max_2+ atak_grobowiec;
document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;


document.getElementById("zlecenie_slot").style.pointerEvents = 'auto';


$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');



$("#cala_mapa").fadeOut(0);

document.getElementById("lokacja").style.pointerEvents = 'auto';






wiatr.stop();

cmentarz1.play();

$("#tlo_test").fadeIn(0);
document.getElementById('tlo_test').style.backgroundImage = "url('dungeon3.jpg')";
music_ambient.stop();
$("#sklepik").fadeOut(0);
$("#okno_teren").fadeOut(0);
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#miasto").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);

$("#okno_teren").fadeIn(500);
$("#tekst").fadeIn(500);
$("#lokacja").fadeIn(500);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeIn(500);

document.getElementById("okno_teren").style.zIndex = "10";
document.getElementById("medytacja").style.color = "yellow";
document.getElementById("lokacja").style.color = "green";


if ((skrot_zamkniety == 1) && (grobowiec_completed == 0) && (grobowiec_poziom == 0)) {
$("#medytacja").fadeIn(0);
document.getElementById("medytacja").innerHTML = '<i class="icon-login"></i>' + "Zejdź do Krypty";
document.getElementById("medytacja").onclick = function () {
skrot()
};
document.getElementById("medytacja").style.color = "yellow";
document.getElementById("medytacja").style.borderStyle = "none";

}

document.getElementById("lokacja").onclick = function () {
grobowiec_walka()
};
document.getElementById("zlecenie_slot").onclick = function () {
mapa()
};
document.getElementById("tekst").innerHTML = "Grobowiec poziom " + grobowiec_poziom;
document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Zejdź niżej ";
document.getElementById("zlecenie_slot").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("zlecenie_slot").style.color = "white";
document.getElementById("lokacja").style.borderStyle = "none";


document.getElementById("zlecenie_slot").style.borderStyle = "none";
document.getElementById("miasto").style.borderStyle = "solid";
document.getElementById("zlecenie_slot").style.borderBottom = "solid";


if (grobowiec_poziom == 11) {
xp_value=7;
min_1 = miecz_od;
max_2 = miecz_do;

if(mroczne_resist!=undefined)
enemy_resistant=mroczne_resist;
else
enemy_resistant=undefined;  

zakres_ataku_potwora(min_1, max_2);
document.getElementById("enemy_name").className = "flash7";
losuj_potwora(life_amount, "~ Mroczne odbicie ~",enemy_resistant);

if(mroczne_resist==undefined)
mroczne_resist = enemy_resistant;




}

$("#okno_teren").transition({ opacity:1}, 0, 'ease');

if ((grobowiec_poziom == 5) && (grobowiec_completed == 0)) {
if (skrot_zamkniety == 0) {

informacja = 1;
skrot_zamkniety = 1;
}
$("#tlo_test").fadeIn(0);
$("#medytacja").fadeOut(0);
document.getElementById("tlo_test").className = "fight_over";
document.getElementById('tlo_test').style.backgroundImage = "url('tomb.jpg')";
document.getElementById("tekst").innerHTML = "Przed Tobą krypta";
document.getElementById("lokacja").innerHTML = '<i style="color:yellow;" class="icon-lightbulb"></i>' + " Sprawdź kryptę";
document.getElementById("lokacja").style.borderStyle = "none";
krypta_reached = 1;
}

if (grobowiec_poziom == 12) {
document.getElementById('strona_novigard').style.backgroundImage = "url('tomb.jpg')";
document.getElementById("tekst").innerHTML = "Przed Tobą skrzynia";
document.getElementById("lokacja").innerHTML = '<i class="icon-key"></i>' + " Otwórz";
document.getElementById("lokacja").onclick = function () {
krypta_skarb()
};
document.getElementById("lokacja").style.borderStyle = "none";
}



}


function krypta_skarb() {
po_walce=0;
zdarzenie_hide();
document.getElementById('strona_novigard').style.backgroundImage = "url('dungeon3.jpg')";
grobowiec_skrzynia = 1;
document.getElementById('zdarzenie').style.backgroundImage = "url('zlecenie_art.jpg')";
skarb_check(12);
document.getElementById("zdarzenie_quit").onclick = function () {
zdarzenie_zanik()
};
$("#tekst").fadeOut(100);
$("#lokacja").fadeOut(100);
grobowiec_poziom = 11;

document.getElementById('zdarzenie').style.backgroundImage = "url('grota_skarb.jpg')";
document.getElementById("zdarzenie_info").style.color = "yellow";
document.getElementById("zdarzenie_info2").innerHTML = " ";

document.getElementById("zdarzenie_open").style.color = "dimgrey";
document.getElementById("zdarzenie_open").innerHTML = "--";
krypta_skarb_done = 1;
$("#tlo_test").fadeOut(0);
chest_sfx.play();
zdarzenie_pokaz();
typ_tla = 0;
$("#krypta_poziom").fadeOut(0);
$("#nagrobek").fadeOut(0);
grobowiec_poziom = 0;
grobowiec_aktywny = 0;
cmentarz1.stop();
document.getElementById("lokacja").style.borderStyle = "solid";
document.getElementById("medytacja").style.borderStyle = "solid";
}




function grobowiec_zamkniety() {
krata1.play();
document.getElementById("tekst").innerHTML = "Zamknięte z drugiej strony";
document.getElementById("medytacja").innerHTML = "Zamknięte...";
document.getElementById("medytacja").style.color = "dimgrey";

}

function skrot() {
document.getElementById("tlo_test").className = "fight";
$("#zlecenie_slot").fadeOut(1000);
$("#lokacja").fadeOut(1000);
$("#tekst").fadeOut(1000);
$("#medytacja").fadeOut(1000);
cmentarz1.stop();
grobowiec_poziom = 5;
lochy.play();
setTimeout(cmentarz, 2000);

}




function grobowiec_walka() {

if ((grobowiec_poziom == 5) && (grobowiec_completed == 0)) {
cela.play();
typ_tla = 3;
$("#okno_teren").fadeOut(500);
setTimeout(walka2, 1000);
} else {
document.getElementById("tlo_test").className = "fight";
$("#zlecenie_slot").fadeOut(1000);
$("#lokacja").fadeOut(1000);
$("#tekst").fadeOut(1000);
$("#medytacja").fadeOut(1000);
document.getElementById("lokacja").style.pointerEvents = 'none';
document.getElementById("tekst").innerHTML = "Schodzisz na dół";
cmentarz1.stop();
lochy.play();
battle_sfx.play();
document.getElementById('strona_novigard').style.backgroundImage = "url('dungeon3.jpg')";
setTimeout(walka2, 2000);
}

}


function grobowiec_otwarty() {


krata2.play();
skrot_zamkniety = 1;
document.getElementById("medytacja").innerHTML = "Skrót odblokowany";
document.getElementById("medytacja").onclick = function () {
cmentarz1()
};


}



function cmentarz1() {


grobowiec_poziom = 0;
$("#okno_teren").fadeOut(2000);
document.getElementById("tekst").innerHTML = "Wracasz na górę skrótem";
cmentarz1.stop();
lochy.play();
setTimeout(cmentarz, 2000);
}







function pop_close() {

$("#info_pop").transition({ scale:0, opacity:0}, 1000, 'ease');
$("#info_pop_close").transition({ scale:0, opacity:0}, 1000, 'ease');
klik.play();

}

function pokaz_informacje() 

{
klik.play();

document.getElementById("info_pop_text").style.color = "white";

if (tekst_nr == 1) {
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";





document.getElementById("info_pop_text").innerHTML = "Przeciwnik został zabity. Wróć do miasta po nagrodę";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');

$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');




$("#arrow5").fadeIn(0);
}

if (tekst_nr == 2) {
document.getElementById('info_pop').style.backgroundImage = "url('kupiec2.jpg')";
door_locked.play();

document.getElementById("info_pop_text").innerHTML = "Zamknięte, wygląda że nikogo nie ma w domu";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}

if (tekst_nr == 3) {
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";
zlecenie_sfx.play();

document.getElementById("info_pop_text").innerHTML = "Dostawa dla kupca z północy została wznowiona.";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

$("#dom").fadeIn(400);
}

if (tekst_nr == 4) {
door_locked.play();

document.getElementById("info_pop_text").innerHTML = "Zniszczona wieża jest zamknięta";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}



if (tekst_nr == 6) {
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";

document.getElementById("info_pop_text").innerHTML = "Opuszczona wieża  znajduje się na północy";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

$("#arrow5").fadeIn(0);
}


if (tekst_nr == 7) {

document.getElementById('info_pop').style.backgroundImage = "url('pole_silowe.jpg')";
disabled.play();
bariera_odkryta=1;
document.getElementById("info_pop_text").innerHTML = "Jakaś magiczna bariera nie pozwala Ci przejść.";


$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}



if (tekst_nr == 8) {
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";
disabled.play();
document.getElementById("info_pop_text").innerHTML = "Skrót do krypty został odblokowany";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}


if (tekst_nr == 9) {
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";

document.getElementById("info_pop_text").innerHTML = "Krypta została oczyszczona. Wróć do miasta po nagrodę";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

$("#arrow5").fadeIn(0);
}

if (tekst_nr == 10) {
zlecenie_sfx.play();
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";

document.getElementById("info_pop_text").innerHTML = "Misja wykonana. Wróć do miasta po nagrodę";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}

if (tekst_nr == 11) {
zlecenie_sfx.play();
document.getElementById('info_pop').style.backgroundImage = "url('zlecenie_art.jpg')";

if (plec_typ == 1)
document.getElementById("info_pop_text").innerHTML = "Naciśnij górną częśc ekranu by otworzyć panel postaci.</br></br>  Stan gry natomiast możesz zapisać z poziomu Medytacji.";
if (plec_typ == 2)
document.getElementById("info_pop_text").innerHTML = "Naciśnij górną częśc ekranu by otworzyć panel postaci. </br> </br> <spam style='color:yellow';>Stan gry </spam> natomiast możesz zapisać z poziomu Medytacji.";

$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');

}


if (tekst_nr == 12) {
zlecenie_sfx.play();
document.getElementById('info_pop').style.backgroundImage = "url('pole_silowe.jpg')";


document.getElementById("info_pop_text").innerHTML = "Pole siłowe skutecznie blokuje dostęp do Wyzimy.";
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
wylacz_drogi();
kroki();
kierunek=10;

sprawdz_kierunki_aktywne();

$("#player").transition({ y: -8, x: 426},4000,'ease');

}

if (tekst_nr == 13) {
zlecenie_sfx.play();
document.getElementById('info_pop').style.backgroundImage = "url('pole_silowe.jpg')";
bariera_odkryta=1;

document.getElementById("info_pop_text").innerHTML = "Pole siłowe skutecznie blokuje dostęp do Piramidy.";
$("#info_pop_close").transition({ scale:1,opacity:1}, 1000, 'ease');
$("#info_pop").transition({ scale:1,opacity:1}, 1000, 'ease');
wylacz_drogi();
kroki();
kierunek=2;

sprawdz_kierunki_aktywne();

$("#player").transition({ y: -140, x: 22},2000,'ease');

}





tekst_nr = 0;



}


function kupno_broni_zanik() {
document.getElementById("cala_mapa").style.opacity = "1";
$("#okno_kup_bron1").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound == 1) {
slide.play();
$("#okno_kup_bron1").fadeOut(0);
}
}

function kupno_broni_pokaz() {
kowal_sklep();
$("#okno_kup_bron1").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";
$("#okno_kup_bron1").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();

sound = 1;
}

function level_up_zanik() {
document.getElementById("cala_mapa").style.opacity = "1";
$("#level_up1").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound1 == 1) {
zlecenie2_sfx.play();
$("#level_up1").fadeOut(0);
sprawdz_kierunki_aktywne();
}
}

function level_up_pokaz() {

wylacz_drogi();
rozdziel_punkty2();
$("#level_up1").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";

$("#level_up1").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();

sound1 = 1;
}


function sklep_alchemiczny_pokaz()
{

sklepik_mathea_check();
$("#sklep_alchemiczny").transition({ scale:1,opacity:1}, 1000, 'ease');
slide.play();
}

function sklep_alchemiczny_zanik()
{


$("#sklep_alchemiczny").transition({ scale:0,opacity:0}, 1000, 'ease');
slide.play();
}





function zdarzenie_zanik() {
zlecenie_okno1.stop();


$("#zdarzenie").transition({ scale:0,opacity:0}, 800, 'ease');
$("#buttony_do_zdarzenia").transition({ scale:0,opacity:0}, 500, 'ease');


mapa();

}
function zdarzenie_zanik_x() {

$("#zdarzenie").transition({ scale:0,opacity:0}, 800, 'ease');
$("#buttony_do_zdarzenia").transition({ scale:0,opacity:0}, 500, 'ease'); 
}


function zdarzenie_zanik2() {

$("#zdarzenie").transition({ scale:0,opacity:0}, 500, 'ease');
$("#buttony_do_zdarzenia").transition({ scale:0,opacity:0}, 500, 'ease');
if (sound2 == 1) {
slide.play();

idz_dalej();
mapa();
}
}


function zdarzenie_zanik3() {
zlecenie_okno1.stop();
music_ambient.stop();

$("#zdarzenie").transition({ scale:0,opacity:0}, 500, 'ease');

$("#buttony_do_zdarzenia").transition({ scale:0,opacity:0}, 500, 'ease');


zlecenie_check_gif();
slide.play();



}






function zdarzenie_pokaz() {


inventory_zanik();
medytacja_zanik();
$("#new_medytacja_okno_tworz").transition({ scale:0, opacity:0 }, 500, 'ease');
$("#new_opis_mikstur").transition({ scale:0,opacity:0}, 500, 'ease');
$("#new_medytacja_okno_pij").transition({ scale: 0,opacity:0 }, 400, 'linear');

$("#zdarzenie").transition({ scale:1,opacity:1}, 800, 'ease');
$("#buttony_do_zdarzenia").transition({ scale:1,opacity:1}, 800, 'ease');


slide.play();

sound2 = 1;
}


function zoom() {


$("#strona_novigard").transition({
width: '1300px',
height: '750px',
opacity: '0.4'
}, "fast");
$("#strona_novigard").transition({
width: '1400px',
height: '850px',
opacity: '0.4'
}, "fast");
$("#strona_novigard").transition({
width: '1500px',
height: '950px',
opacity: '0.4'
}, "fast");
$("#strona_novigard").transition({
width: '1600px',
height: '1050px',
opacity: '0.4'
}, "fast");

}

function ulepszenie_broni_zanik() {
document.getElementById("cala_mapa").style.opacity = "1";

$("#okno_ulepsz_bron").transition({ scale:0, opacity:0 }, 500, 'ease');

if (sound3 == 1) {
slide.play();
$("#okno_ulepsz_bron").fadeOut(0);

}
}

function ulepszenie_broni_pokaz() {
ulepsz_bron();
$("#okno_ulepsz_bron").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";
$("#okno_ulepsz_bron").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();

sound3 = 1;
}


function medytacja_zanik() {


$("#new_medytacja_okno_tworz").transition({ scale:0, opacity:0 }, 0, 'ease');
$("#new_medytacja_okno_pij").transition({ scale: 0,opacity:0 }, 0, 'linear');
$("#new_opis_mikstur").transition({ scale:0,opacity:0}, 0, 'ease');
$("#new_medytacja_okno").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound4 == 1) {
slide.play();
klik.play();

}

}

function medytacja_pokaz() {

document.getElementById("new_medytacja_okno").style.backgroundImage = "url('medytacja_new.jpg')";

$("#new_medytacja_okno").fadeIn(0);

opis_eliksirow_check();

$("#new_medytacja_okno").transition({ scale:1,opacity:1}, 500, 'ease');


klik.play();
slide.play();
document.getElementById("potion_info").style.color = "coral";
document.getElementById("potion_info").innerHTML = '<i style="color:yellow;" class="icon-beaker"></i>' + potion2 + "/" + potion_amount + " mikstur leczniczych";
sound4 = 1;
document.getElementById("new_medytacja_zapisz").innerHTML ="Zapisz grę - 5 złota";
document.getElementById("new_medytacja_zapisz").style.color ="white";
document.getElementById("new_medytacja_zapisz").style.pointerEvents="auto";
}





function inventory_zanik() {

document.getElementById("cala_mapa").style.opacity = "1";


$("#strona_inv").transition({ y:-800}, 1000, 'ease');



if (sound5 == 1) {
slide.play();
$("#strona_inv").fadeOut(0);
}

}

function inventory_pokaz() {


$("#strona_inv").fadeIn(0);




$("#strona_inv").transition({ y:0}, 1000, 'ease');



slide.play();
inventory_box();
sound5 = 1;
}


function ring_zanik() {
odblokuj_sprzedz();
document.getElementById("cala_mapa").style.opacity = "1";
$("#new_kup_pierscien").transition({ scale:0,opacity:0 }, 500, 'ease');

if (sound6 == 1) {
slide.play();
$("#new_kup_pierscien").fadeOut(0);

}


}

function rimg_pokaz() {
kup_pierscien();
$("#new_kup_pierscien").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";

$("#new_kup_pierscien").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();

sound6 = 1;
}


function sell_zanik() {
odblokuj_sprzedz();
document.getElementById("cala_mapa").style.opacity = "1";
$("#new_sell_pierscien").transition({ scale:0,opacity:0 }, 500, 'ease');

if (sound7 == 1) {
slide.play();
$("#new_sell_pierscien").fadeOut(0);

}
}

function sell_pokaz() {
sprzedaj_pierscien();
$("#new_sell_pierscien").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";

$("#new_sell_pierscien").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();


sound7 = 1;
}



function upgrade_zbroi_zanik() {


document.getElementById("cala_mapa").style.opacity = "1";
$("#okno_ulepsz_zbroje").transition({ scale:0,opacity:0 }, 500, 'ease');
if (sound8 == 1) {
slide.play();
$("#okno_ulepsz_zbroje").fadeOut(0);
platnerz();

}

}

function upgrade_zbroi_pokaz() {
ulepsz_zbroje();
$("#okno_ulepsz_zbroje").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";


$("#okno_ulepsz_zbroje").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();

sound8 = 1;
}



function kup_zbroi_zanik() {

document.getElementById("cala_mapa").style.opacity = "1";
$("#okno_kup_zbroje").transition({ scale:0,opacity:0 }, 500, 'ease');

if (sound9 == 1) {
slide.play();
$("#okno_kup_zbroje").fadeOut(0);

platnerz();

}

}

function kup_zbroi_pokaz() {
kup_zbroje();
$("#okno_kup_zbroje").fadeIn(0);
document.getElementById("cala_mapa").style.opacity = "0.4";

$("#okno_kup_zbroje").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();

sound9 = 1;
}


function kup_zbroi_magiczna_zanik() {


slide.play();
$("#okno_kup_zbroje_magiczna").transition({ scale:0,opacity:0 }, 800, 'ease');



}

function kup_zbroi_magiczna_pokaz() {



zbroja_ze_schematu();

$("#okno_kup_zbroje_magiczna").transition({ scale:1,opacity:1 }, 800, 'ease');
//$("#okno_kup_zbroje_magiczna").fadeIn(0);


slide.play();


}




function zadania_zanik() {

$("#okno_zadania").transition({ scale:0 ,opacity:0}, 500, 'ease');

if (sound10 == 1) {
slide.play();
$("#okno_zadania").fadeOut(0);

}
}

function zadania_pokaz() {

$("#okno_zadania").fadeIn(0);
$("#okno_zadania").transition({ scale:1,opacity:1 }, 500, 'ease');

slide.play();

sound10 = 1;
}


function zadania_new_zanik() {

$("#polowanie_zadanie").transition({ scale:0,opacity:0 }, 500, 'ease');

if (sound10 == 1) {
slide.play();

wybor_misji();
}

}

function zadania_new_pokaz() {

$("#okno_teren").transition({ scale:0,opacity:0 }, 550, 'ease');

$("#polowanie_zadanie").transition({ scale:1,opacity:1 }, 500, 'ease');


slide.play();
polowanie();
sound10 = 1;

}






function tworzenie_eliksirow_zanik() {

$("#new_medytacja_okno_tworz").transition({ scale:0, opacity:0 }, 500, 'ease');
if (sound11 == 1) {
slide.play();
$("#new_medytacja_okno_tworz").fadeOut(0);
sound11=0;
}
}

function tworzenie_eliksirow_pokaz() {
document.getElementById("jaskolka_elix2").style.width = "580px";
document.getElementById("new_medytacja_okno_tworz").style.backgroundImage = "url('medytacja_new.jpg')";

document.getElementById("jaskolka_elix").style.color = "dodgerblue";
document.getElementById("puszczyk_elix").style.color = "rebeccapurple";
document.getElementById("wilga_elix").style.color = "forestgreen";
document.getElementById("grom_elix").style.color = "deeppink";
brak_skladnikow1();
tworzenie_mikstur_check();
$("#new_medytacja_okno_tworz").fadeIn(0);



$("#new_medytacja_okno_tworz").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();

sound11 = 1;
}


function opis_mikstur_pokaz() {

document.getElementById("new_opis_mikstur").style.backgroundImage = "url('medytacja_new.jpg')";

document.getElementById("jaskolka_elix1").style.color = "dodgerblue";
document.getElementById("puszczyk_elix1").style.color = "rebeccapurple";
document.getElementById("wilga_elix1").style.color = "forestgreen";
document.getElementById("grom_elixaa").style.color = "deeppink";

document.getElementById("jaskolka_ziolax").style.color = "dodgerblue";

document.getElementById("puszczyk_ziolax").style.color = "rebeccapurple";

document.getElementById("wilga_ziolax").style.color = "forestgreen";

document.getElementById("grom_ziolaaa").style.color = "deeppink";






$("#new_opis_mikstur").fadeIn(0);
$("#new_opis_mikstur").transition({ scale:1,opacity:1}, 500, 'ease');
slide.play();

sound15 = 1;
}



function opis_mikstur_zanik() {


$("#new_opis_mikstur").transition({ scale:0,opacity:0}, 500, 'ease');
if (sound15 == 1) {
slide.play();
$("#new_opis_mikstur").fadeOut(0);

}
}






function picie_eliksirow_zanik() {


$("#new_medytacja_okno_pij").transition({ scale: 0,opacity:0 }, 400, 'linear');

if (sound12 == 1) {
slide.play();
$("#new_medytacja_okno_pij").fadeOut(0);

}
}

function picie_eliksirow_pokaz() {



document.getElementById("new_medytacja_okno_pij").style.backgroundImage = "url('medytacja_new.jpg')";
ile_elixirow_na_stanie();
document.getElementById("jaskolka_nazwa").style.color = "dodgerblue";
document.getElementById("puszczyk_nazwa").style.color = "rebeccapurple";
document.getElementById("wilga_nazwa").style.color = "forestgreen";
document.getElementById("grom_nazwa").style.color = "deeppink";
document.getElementById("jaskolka_nazwa").style.marginLeft = "90px";
document.getElementById("puszczyk_nazwa").style.marginLeft = "90px";
document.getElementById("wilga_nazwa").style.marginLeft = "90px";
document.getElementById("grom_nazwa").style.marginLeft = "90px";
document.getElementById("ring_exit").style.marginLeft = "10px";

document.getElementById("jaskolka_elix").style.color = "dodgerblue";
document.getElementById("puszczyk_elix").style.color = "rebeccapurple";
document.getElementById("wilga_elix").style.color = "forestgreen";
document.getElementById("grom_elix").style.color = "deeppink";


$("#new_medytacja_okno_pij").fadeIn(0);
$("#new_medytacja_okno_pij").transition({ scale: 1,opacity:1 }, 500, 'ease');
slide.play();

sound12 = 1;
}


function ile_elixirow_na_stanie() {
document.getElementById("jaskolka_stan").innerHTML = "Ilość:" + "&nbsp" + "x" + jaskolka_amount;
document.getElementById("puszczyk_stan").innerHTML = "Ilość:" + "&nbsp" + "x" + puszczyk_amount;
document.getElementById("wilga_stan").innerHTML = "Ilość:" + "&nbsp" + "x" + wilga_amount;
document.getElementById("grom_stan").innerHTML = "Ilość:" + "&nbsp" + "x" + grom_amount;







if (jaskolka_amount < 1) {
document.getElementById("pij_jaskolka").style.color = "dimgrey";
document.getElementById("pij_jaskolka").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("pij_jaskolka").style.color = "cornflowerblue";
document.getElementById("pij_jaskolka").onclick = function () {
jaskolka_use()
};
}

if (puszczyk_amount < 1) {
document.getElementById("pij_puszczyk").style.color = "dimgrey";
document.getElementById("pij_puszczyk").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("pij_puszczyk").style.color = "cornflowerblue";
document.getElementById("pij_puszczyk").onclick = function () {
puszczyk_use()
};
}

if (wilga_amount < 1) {
document.getElementById("pij_wilga").style.color = "dimgrey";
document.getElementById("pij_wilga").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("pij_wilga").style.color = "cornflowerblue";
document.getElementById("pij_wilga").onclick = function () {
wilga_use()
};
}

if (grom_amount < 1) {
document.getElementById("pij_grom").style.color = "dimgrey";
document.getElementById("pij_grom").onclick = function () {
za_malo_zlota()
};
} else {
document.getElementById("pij_grom").style.color = "cornflowerblue";
document.getElementById("pij_grom").onclick = function () {
grom_use()
};
}
}




function zlecenie_zanik() {

$("#okno_zlecenie_new").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound13 == 1) {
slide.play();
$("#okno_zlecenie_new").fadeOut(0);

}
}

function zlecenie_pokaz() {
sprawdz_kierunki_aktywne();

document.getElementById("okno_zlecenie_mob").style.color = "deeppink";
zlecenie_okno();
$("#okno_zlecenie_new").fadeIn(0);
$("#okno_zlecenie_new").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();

sound13 = 1;
}



function alchemik_sklep_zanik() {

$("#new_alchemik_sklep").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound14 == 1) {
slide.play();
$("#new_alchemik_sklep").fadeOut(0);

}
}

function alchemik_sklep_pokaz() {

document.getElementById("new_alchemik_sklep").style.marginTop = "150px";

alchemkik_sklep1();
$("#new_alchemik_sklep").fadeIn(0);

$("#new_alchemik_sklep").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();


sound14 = 1;
}

function developer_pokaz() {



$("#developer_okno").fadeIn(0);
$("#developer_okno").transition({
left: 0,
opacity: '1'
}, "fast");
slide.play();


}


function developer_zanik() {



dev_active();
$("#developer_okno").transition({
left: 400,
opacity: '0.5'
}, "fast");
slide.play();
$("#developer_okno").fadeOut(0);


}



function leczenie_sklep_zanik() {


$("#new_leczenie").transition({ scale:0,opacity:0}, 500, 'ease');

if (sound16 == 1) {
slide.play();
$("#new_leczenie").fadeOut(0);

}
}

function leczenie_sklep_pokaz() {


leczenie_cena();
sprawdz_czy_stac_na_leczenie();
$("#new_leczenie").fadeIn(0);
$("#new_leczenie").transition({ scale:1,opacity:1}, 500, 'ease');

slide.play();

sound16 = 1;
}


function imie_zanik() {
plec.play();
$("#podaj_imie").transition({ scale:0,opacity:0}, 1000, 'ease');
$("#podaj_imie").fadeOut(0);

$("#szkoly").transition({ scale:1,opacity:1}, 1000, 'ease');




}



function cave() {
po_walce=2;
document.getElementById("okno_teren").className = "fight_over";

$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');


aktualny_poziom = jaskinia_poziom;

$("#cala_mapa").fadeOut(0);
$("#tlo_test").fadeIn(0);


document.getElementById("okno_teren").style.zIndex = "5";
if (cave_completed == 0) {
jaskinia_aktywna = 1;
mob_hp = cave_hp;
min_1 = cave_attack;
max_2 = 2 + cave_attack;
losuj_potwora(mob_hp, "none");
zakres_ataku_potwora(min_1, max_2);
document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;
}



if (cave_completed == 1) {
jaskinia_aktywna = 1;
mob_hp = cave_hp;
min_1 = cave_attack;
max_2 = 3 + cave_attack;

document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;



if(temp_poziom==aktualny_poziom)
{
losuj_potwora(mob_hp,temp_mob_name,monster_immune);
zakres_ataku_potwora(min_1, max_2);    
}
else
{
losuj_potwora(mob_hp);
zakres_ataku_potwora(min_1, max_2);
} 

temp_poziom = jaskinia_poziom;




}


music_ambient.stop();
wiatr.stop();
typ_tla = 5;


document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('tlo_test').style.backgroundImage = "url('cave.jpg')";



cave_sfx.stop();
cave_sfx.play();
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);
document.getElementById("miasto").style.pointerEvents = "auto";

$("#tekst").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#miasto").fadeOut(0);
$("#okno_teren").fadeIn(500);
$("#tekst").fadeIn(500);
$("#lokacja").fadeIn(500);
$("#miasto").fadeIn(500);

document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").onclick = function () {
jaskinia_walka()
};
document.getElementById("miasto").onclick = function () {
mapa()
};
document.getElementById("tekst").innerHTML = "Jaskinia poziom " + jaskinia_poziom;
document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Idź w głąb";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none";
document.getElementById("miasto").style.borderStyle = "none";
document.getElementById("miasto").style.borderBottom = "solid";



if ((jaskinia_poziom == 4) && (cave_completed == 0)) {
typ_tla = 6;
document.getElementById("tekst").innerHTML = "Jaskinia poziom " + jaskinia_poziom;
document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Idź w głąb";
document.getElementById("lokacja").style.borderStyle = "none";
}


if ((jaskinia_poziom == 5) && (cave_completed == 0)) {
cave_sfx.stop();
cave_krasnolud.stop();
cave_krasnolud.play();
document.getElementById("lokacja").style.color = "yellow";
document.getElementById("lokacja").onclick = function () {
document.getElementById("medytacja").className = "flash0";
jaskinia_misja();
};
document.getElementById("miasto").onclick = function () {
document.getElementById("medytacja").className = "flash0";
mapa();
};
document.getElementById("tekst").innerHTML = "Grota krasnoluda";
document.getElementById("lokacja").innerHTML = '<i class="icon-lightbulb"></i>' + " Przekaż paczkę";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none";
document.getElementById("medytacja").style.borderStyle = "none";
document.getElementById("medytacja").style.borderStyle = "none";

if ((jaskinia_kosci == 0) && (cave_reward == 0) && (gold_amount < 10)) {
document.getElementById("medytacja").onclick = function () {
not_allowed()
};
document.getElementById("medytacja").style.color = "dimgrey";
}

if ((jaskinia_kosci == 0) && (cave_reward == 0) && (gold_amount >= 10)) {
$("#medytacja").fadeIn(0);
document.getElementById("medytacja").innerHTML = '<i class="icon-beer"></i>' + " Graj w kości (10 złota)";
document.getElementById("medytacja").onclick = function () {
specjalne_kosci=1;
gra_w_kosci()
};
document.getElementById("medytacja").style.color = "green";
} 

if((jaskinia_kosci == 1) && (nagroda_specjalna2 == 1)) 
{
$("#medytacja").fadeIn(0);
nagroda_specjalna_loot();
document.getElementById("medytacja").style.pointerEvents = 'none';
document.getElementById("medytacja").style.borderStyle = "none";
cave_reward = 1;
document.getElementById("miasto").onclick = function () {
mapa()
};
document.getElementById("miasto").style.pointerEvents = 'auto';
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);
} else if 
(jaskinia_kosci == 1) {
$("#medytacja").fadeOut(0);
document.getElementById("miasto").onclick = function () {
document.getElementById("medytacja").className = "flash0";
mapa();
};
document.getElementById("miasto").style.pointerEvents = 'auto';
$("#kosci1").fadeOut(0);
$("#kosci2").fadeOut(0);
}

}



if (jaskinia_poziom == 12) {
document.getElementById('strona_novigard').style.backgroundImage = "url('cave.jpg')";
document.getElementById("tekst").innerHTML = "Przed Tobą skrzynia";
document.getElementById("lokacja").innerHTML = '<i class="icon-key"></i>' + " Otwórz";
document.getElementById("lokacja").onclick = function () {
cave_skarb_func()
};
document.getElementById("lokacja").style.borderStyle = "none";
}



}





function cave_skarb_func() {
po_walce=0;
zdarzenie_hide();
cave_skarb = 1;
document.getElementById('zdarzenie').style.backgroundImage = "url('zlecenie_art.jpg')";
skarb_check(13);
document.getElementById("zdarzenie_quit").onclick = function () {
zdarzenie_zanik()
};
$("#tekst").fadeOut(100);
$("#lokacja").fadeOut(100);

document.getElementById('zdarzenie').style.backgroundImage = "url('grota_skarb.jpg')";
document.getElementById("zdarzenie_info").style.color = "yellow";
document.getElementById("zdarzenie_info2").innerHTML = " ";

document.getElementById("zdarzenie_open").style.color = "dimgrey";
document.getElementById("zdarzenie_open").innerHTML = "--";
$("#tlo_test").fadeOut(0);
$("#miasto").fadeOut(0);
$("#okno_teren").fadeOut(0);
chest_sfx.play();
zdarzenie_pokaz();
typ_tla = 0;
$("#jaskinia_level").fadeOut(0);
jaskinia_poziom = 0;
jaskinia_aktywna = 0;
tekst_nr = 6;
document.getElementById("medytacja").style.borderStyle = "solid";
document.getElementById("lokacja").style.borderStyle = "solid";
}


function jaskinia_walka() {
document.getElementById("tlo_test").className = "fight";

$("#tekst").fadeOut(1000);
$("#lokacja").fadeOut(1000);
$("#miasto").fadeOut(1000);

document.getElementById("tekst").innerHTML = "Idziesz głębiej";
walk1.play();
boss.play();

if (jaskinia_poziom == 11) {
xp_value = 7;
document.getElementById("enemy_name").className = "flash7";
losuj_potwora(40, "~ Trol jaskiniowy ~","sword");
min_1 = 2;
max_2 = 8;

}




setTimeout(walka2, 2000);

}

function jaskinia_misja() {
pick.play();
document.getElementById("lokacja").onclick = function () {
za_malo_zlota()
};
document.getElementById("miasto").onclick = function () {
mapa()
};
document.getElementById("tekst").innerHTML = "Grota krasnoluda";
document.getElementById("lokacja").style.color = "dimgrey";
document.getElementById("lokacja").innerHTML = "Zadanie wykonane";
document.getElementById("miasto").innerHTML = "Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none";
cave_completed = 1;
cave_reached = 1;
quest_wykonany_nr = 3;
misja_zadanie_wykonane = 1;
$("#arrow3").fadeOut(0);
tekst_nr = 10;
wieza_klucz = 1;
cave_hp = 10;
cave_attack = 1;
$("#jaskinia_level").fadeIn(0);

}


function graveyard() {

po_walce=3;
$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');

kto_atakuje();
grave_aktywny = 1;
music_ambient.stop();
grave_poziom++;


mob_hp = 2;
min_1 = 1;
max_2 = 1;

mob_hp = mob_hp + hp_grave;
max_2 = max_2 + atak_grave;
min_1 = max_2 - 5;
if (min_1 <= 0)
min_1 = 1;
typ_tla = 8;

losuj_potwora(mob_hp, "none");


if(max_2>10)
max_2=10;
if(min_1>5)
min_1=5;


zakres_ataku_potwora(min_1, max_2);

document.getElementById("enemy_amount").innerHTML = "Pokonani: " + " " + zabite_moby1;







$("#cala_mapa").fadeOut(0);

document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('okno_teren').style.backgroundImage = "url('x.jpg')";
document.getElementById('strona_novigard').style.backgroundImage = "url('grave.jpg')";



wiatr.stop();
document.getElementById('cmentarz').currentTime = 0;

cmentarz1.play();

$("#okno_teren").fadeOut(0);
$("#tekst").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#okno_teren").fadeIn(100)
$("#lokacja").fadeOut(0)
$("#medytacja").fadeOut(0)
$("#zlecenie_slot").fadeOut(0)
$("#miasto").fadeOut(0)

$("#tekst").fadeIn(500);
$("#lokacja").fadeIn(500);
$("#miasto").fadeIn(500);

document.getElementById("lokacja").style.pointerEvents = "auto";
document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").onclick = function () {
grave_walka()
};
document.getElementById("miasto").onclick = function () {
ilosc_potworow=1;
document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
mapa()
};

document.getElementById("tekst").innerHTML = "Cmentarz";
document.getElementById("lokacja").innerHTML = '<i style="color:red;" class="icon-flash"></i>' + " Zapoluj na potwory";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Wróć na szlak";

document.getElementById("miasto").style.borderStyle = "none";
document.getElementById("miasto").style.borderBottom = "solid";


if(zabite_moby1==28)
    {
$("#lokacja").fadeOut(0);
graveyard_skonczony=1;
    }


}


function grave_walka() {
xp_value = 3;
document.getElementById("lokacja").style.pointerEvents = "none";
$("#lokacja").fadeOut(800);
$("#miasto").fadeOut(800);
document.getElementById("tekst").innerHTML = "Medalion drży...";
spell.play();
walk1.play();
battle_sfx.play();
setTimeout(walka2, 1500);

}


function tower() {
po_walce=4;
aktualny_poziom = tower_poziom;



if (tower_poziom == 7)
atk_tower = atk_tower - 3;
$("#okno_teren").transition({ scale:0,opacity:0}, 0, 'ease');
$("#okno_teren").fadeIn(0);
$("#okno_teren").transition({ scale:1,opacity:1}, 1000, 'ease');


$("#cala_mapa").fadeOut(0);
$("#tlo_test").fadeIn(0);

$("#okno_teren").fadeIn(500);
$("#tekst").fadeIn(500);
$("#lokacja").fadeIn(500);
$("#miasto").fadeIn(500);

document.getElementById("okno_teren").style.zIndex = "5";
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#medytacja").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);


tekst_nr = 0;
music_ambient.stop();
tower_active = 1;
typ_tla = 10;

if (tower_poziom == 0) {
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('tlo_test').style.backgroundImage = "url('tower.jpg')";
wiatr.stop();
document.getElementById('cmentarz').currentTime = 0;
cmentarz1.play();
document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").onclick = function () {
tower_1_fight()
};
document.getElementById("miasto").onclick = function () {
mapa()
};
document.getElementById("tekst").innerHTML = "Zrujnowana wieża";
document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Wejdź do środka";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Zawróć";
document.getElementById("miasto").style.borderStyle = "none";
document.getElementById("miasto").style.borderBottom = "solid";
}



if (tower_poziom >= 1) {
typ_tla = 12;
$("#tlo_test").fadeIn(0);
$("#strona_novigard").fadeIn(500);
$("#cala_mapa").fadeOut(0);
$("#okno_teren").fadeIn(100);
document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('tlo_test').style.backgroundImage = "url('tower_stairs.jpg')";
cmentarz1.stop();
cmentarz1.play();
document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").onclick = function () {
tower_levels()
};
document.getElementById("miasto").onclick = function () {
mapa()
};
document.getElementById("tekst").innerHTML = "Wieża poziom " + tower_poziom;
document.getElementById("lokacja").innerHTML = '<i class="icon-login"></i>' + " Zejdź w dół";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none";
}





if (tower_poziom == 10)
tower_room();

}


function tower_1_fight() {
$("#tower_poziom_info").fadeIn(0);
typ_tla = 12;
$("#okno_teren").fadeOut(2000);
document.getElementById("tekst").innerHTML = "Medalion drży...";
spell.play();
walk1.play();
losuj_potwora(50, '~Magiczny strażnik~', 'magic');
zakres_ataku_potwora(2, 9);
boss.play();
setTimeout(walka2, 2000);
}




function tower_levels() {


$("#tower_poziom_info").fadeIn(0);

tower_active = 1;
mob_hp = hp_tower;
max_2 = 2 + atk_tower;
min_1 = max_2 - 6;

if (min_1 <= 0)
min_1 = 1;



if(temp_poziom==aktualny_poziom)
{
losuj_potwora(mob_hp,temp_mob_name,monster_immune);
zakres_ataku_potwora(min_1, max_2);    
}
else
{
losuj_potwora(mob_hp);
zakres_ataku_potwora(min_1, max_2);
} 

temp_poziom = tower_poziom;






if(tower_poziom == 9) {
xp_value = 10;
document.getElementById("enemy_name").className = "flash7";
losuj_potwora(60, "~ Ognisty chochlik~", "magic");
xp_value = 8;
min_1 = 3;
max_2 = 10;
zakres_ataku_potwora(min_1,max_2);

}





typ_tla = 12;
document.getElementById("tlo_test").className = "fight";
$("#tekst").fadeOut(0);
$("#lokacja").fadeOut(0);
$("#miasto").fadeOut(0);
walk1.play();
battle_sfx.play();
setTimeout(walka2, 2000);

}





function tower_room() {



music_ambient.stop();


$("#strona_novigard").fadeOut(0);
$("#strona_novigard").fadeIn(500);
$("#cala_mapa").fadeOut(0);

document.getElementById("lokacja").style.pointerEvents = 'auto';
document.getElementById('okno_teren').style.backgroundImage = "url('x.jpg')";
document.getElementById('strona_novigard').style.backgroundImage = "url('tower_inside.jpg')";


wiatr.stop();
document.getElementById('cmentarz').currentTime = 0;
cmentarz1.play();


$("#okno_teren").fadeOut(0);
$("#tekst").fadeOut(0);
$("#zlecenie_slot").fadeOut(0);
$("#exra_slot").fadeOut(0);
$("#okno_teren").fadeIn(100)
$("#lokacja").fadeOut(0)
$("#medytacja").fadeOut(0)
$("#zlecenie_slot").fadeOut(0)

$("#tekst").fadeIn(100);
$("#lokacja").fadeIn(100);
$("#miasto").fadeIn(100);


document.getElementById("lokacja").style.color = "green";
document.getElementById("miasto").style.color = "white";
document.getElementById("lokacja").onclick = function () {
tower_skarb()
};
document.getElementById("miasto").onclick = function () {
mapa()
};

document.getElementById("tekst").innerHTML = "Pomieszczenie alchemika";
document.getElementById("lokacja").innerHTML = '<i class="icon-lightbulb"></i>' + " Przeszukaj";
document.getElementById("miasto").innerHTML = '<i class="icon-address"></i>' + " Wyjdź";
document.getElementById("lokacja").style.borderStyle = "none";




}

function tower_skarb() {
po_walce=0;
$("#okno_teren").fadeOut(0);
document.getElementById('zdarzenie').style.backgroundImage = "url('library.jpg')";
tower_nagroda = 1;
skarb_check(11);
document.getElementById("zdarzenie_quit").onclick = function () {
zdarzenie_zanik()
};
zdarzenie_pokaz();
wieza_klucz = 2;
typ_tla = 0;
tower_poziom = 0;
$("#x_gif3").fadeIn(200);
mapa();

document.getElementById("lokacja").style.borderStyle = "solid";
}


function red_screen() {
document.getElementById("strona_novigard").style.borderColor = "red";
document.getElementById("level").className = "ramka_statystyk2";
document.getElementById("xp").className = "ramka_statystyk2";
document.getElementById("life").className = "ramka_statystyk2";
document.getElementById("mana").className = "ramka_statystyk2";
document.getElementById("points").className = "ramka_statystyk2";
document.getElementById("magic").className = "ramka_statystyk2";
document.getElementById("strenght").className = "ramka_statystyk2";
document.getElementById("gold").className = "ramka_statystyk2";
document.getElementById("eliksir").className = "ramka_statystyk2";
document.getElementById("eliksir_info").className = "ramka_statystyk2";
document.getElementById("eliksir_walki").className = "ramka_statystyk2";
document.getElementById("inny_eliksir").className = "ramka_statystyk2";
document.getElementById("inny_info").className = "ramka_statystyk2";
document.getElementById("inny_walki").className = "ramka_statystyk2";




setTimeout(red_screen2, 110);



}

function red_screen2() {
document.getElementById("strona_novigard").style.borderColor = "grey";
document.getElementById("level").className = "ramka_statystyk";
document.getElementById("xp").className = "ramka_statystyk";
document.getElementById("life").className = "ramka_statystyk";
document.getElementById("mana").className = "ramka_statystyk";
document.getElementById("points").className = "ramka_statystyk";
document.getElementById("magic").className = "ramka_statystyk";
document.getElementById("strenght").className = "ramka_statystyk";
document.getElementById("gold").className = "ramka_statystyk";
document.getElementById("eliksir").className = "ramka_statystyk";
document.getElementById("eliksir_info").className = "ramka_statystyk";
document.getElementById("eliksir_walki").className = "ramka_statystyk";
document.getElementById("inny_eliksir").className = "ramka_statystyk";
document.getElementById("inny_info").className = "ramka_statystyk";
document.getElementById("inny_walki").className = "ramka_statystyk";
}



function znak_boost()
{
var boost_min=0;
var boost_max=0;





if((mana_amount>1)&&(boost==1))
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*0.6);
boost_max= Math.round(znak_do*0.6);
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=2;
boost=2;
document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "2" +'<spam style="color:green;"> Moc: 60% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}


if((mana_amount>=3)&&(boost==2))
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*0.6);
boost_max= Math.round(znak_do*0.6);
mana_koszt=3;
znak_od = znak_od_copy;
znak_do = znak_do_copy;
boost=3;
document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "3" +'<spam style="color:yellow;"> Moc: 100% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}


if((mana_amount>3)&&(boost==3))
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*1.2);  
boost_max= Math.round(znak_do*1.2);   
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=4;
boost=4;
document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "4" +'<spam style="color:orange;"> Moc: 120% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}

if((mana_amount>4)&&(boost==4))
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*1.4);
boost_max= Math.round(znak_do*1.4);
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=5;
boost=4;
document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "5" +'<spam style="color:red;"> Moc: 140% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}


if(mana_amount==0)
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*0.6);
boost_max= Math.round(znak_do*0.6);
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=2;
boost=2;
document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "2" +'<spam style="color:green;"> Moc: 60% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

} 


}


function boost_plus()
{


klik.play();
boost++;



if(boost>=4)
boost=4;
znak_boost2();
}

function boost_minus()
{
klik.play();
boost--; 

if(boost<=1)
boost=1;
znak_boost2();

}

function znak_boost2()
{
var boost_min=0;
var boost_max=0;





if(boost==1)
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*0.6);
boost_max= Math.round(znak_do*0.6);
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=2;

document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "2" +'<spam style="color:green;"> Moc: 60% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}


if(boost==2)
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*0.6);
boost_max= Math.round(znak_do*0.6);
mana_koszt=3;
znak_od = znak_od_copy;
znak_do = znak_do_copy;

document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "3" +'<spam style="color:yellow;"> Moc: 100% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}


if(boost==3)
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*1.2);  
boost_max= Math.round(znak_do*1.2);   
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=4;

document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "4" +'<spam style="color:orange;"> Moc: 120% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}

if(boost==4)
{
znak_od = znak_od_copy;
znak_do = znak_do_copy;    
boost_min = Math.round(znak_od*1.4);
boost_max= Math.round(znak_do*1.4);
znak_od = boost_min;
znak_do = boost_max;
mana_koszt=5;

document.getElementById("atak_znakiem_info").innerHTML ='<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + "5" +'<spam style="color:red;"> Moc: 140% </spam>'+"&nbsp"+  znak_od + " " + "-" + " " + znak_do;

}



if (mana_amount >= mana_koszt) {
document.getElementById("atak_znakiem").style.color = "deepskyblue";
document.getElementById("atak_znakiem").style.pointerEvents = 'auto';
document.getElementById("atak_znakiem").onclick = function() {
atakuj_znakiem()
};
} else {
document.getElementById("atak_znakiem").style.color = "dimgrey";
document.getElementById("atak_znakiem").style.pointerEvents = 'auto';
document.getElementById("atak_znakiem").onclick = function() {
brak_many()
};
}

}




function fireball_hit()
{
if(ognista_kula==1)
{
fireball.play();
$("#fireball").transition({ y: 315, x: 600},4000, 'linear')
.transition({opacity:0},100, 'linear')
setTimeout(boom,4000);
ognista_kula=2;


}


}



function boom()
{
$("#explosion").transition({ opacity:1},0, 'linear')
$("#explosion").transition({ opacity:0},2000, 'linear');
explosion.play();
document.getElementById("gif13").style.backgroundImage = "url('')";  
$("#explosion").fadeOut(1000); 
$("#fireball").fadeOut(1000); 
} 


function wyzima_pole()
{
tekst_nr=12;
pokaz_informacje();    



}




function opis_eliksirow_check()
{



if(jaskolka_upgrade==0)
document.getElementById("jaskolka_ziolax").innerHTML =" - regeneruje życie (1 + poziom postaci)";
else
document.getElementById("jaskolka_ziolax").innerHTML =" - regeneruje życie (2 + poziom postaci)";



if(wilga_upgrade==0)
document.getElementById("wilga_ziolax").innerHTML =" - zwiększa obronę o 5 oraz redukuje obrażenia o 30%";
else
document.getElementById("wilga_ziolax").innerHTML =" - zwiększa obronę o 10 oraz redukuje obrażenia o 30%";



if(grom_upgrade==0)
document.getElementById("grom_ziolaaa").innerHTML ="- atak minimalny +1 i maksymalny (1 + lvl) ,blokuje o 50% wzrost " + '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>';
else
document.getElementById("grom_ziolaaa").innerHTML ="- atak minimalny +2 i maksymalny (2 + lvl) ,blokuje o 50% wzrost "+ '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>';   




}



function sklepik_mathea_check()
{




if(gold_amount<50)
{
document.getElementById("zakup1").style.color="dimgrey";
document.getElementById("zakup2").style.color="dimgrey";
document.getElementById("zakup3").style.color="dimgrey";
document.getElementById("zakup1").onclick = function() {
document.getElementById("cena_sklepik_1").style.color="red";
not_allowed()};
document.getElementById("zakup2").onclick = function() {
document.getElementById("cena_sklepik_2").style.color="red";
not_allowed()};
document.getElementById("zakup3").onclick = function() {
document.getElementById("cena_sklepik_3").style.color="red";
not_allowed()};

}
else
{
document.getElementById("zakup1").style.color="green";
document.getElementById("zakup2").style.color="green";
document.getElementById("zakup3").style.color="green";
document.getElementById("zakup4").style.color="green";
document.getElementById("cena_sklepik_1").style.color="yellow";
document.getElementById("cena_sklepik_3").style.color="yellow";
document.getElementById("cena_sklepik_4").style.color="yellow";
document.getElementById("cena_sklepik_5").style.color="yellow";
document.getElementById("zakup1").onclick = function() {recepta_1()};
document.getElementById("zakup2").onclick = function() {recepta_2()};
document.getElementById("zakup3").onclick = function() {recepta_3()};
}

if(gold_amount<100)
{
document.getElementById("zakup4").onclick = function() {
document.getElementById("cena_sklepik_4").style.color="red";
not_allowed()};      
document.getElementById("zakup4").style.color="dimgrey";
}
else{
document.getElementById("cena_sklepik_4").style.color="yellow";    
document.getElementById("zakup4").onclick = function() {

recepta_4()}; 
document.getElementById("zakup4").style.color="green";

}

if(gold_amount<60)
{
document.getElementById("zakup5").onclick = function() {
document.getElementById("cena_sklepik_5").style.color="red";
not_allowed()};      
document.getElementById("zakup5").style.color="dimgrey";
}
else{
document.getElementById("cena_sklepik_5").style.color="yellow";
document.getElementById("zakup5").onclick = function() {

recepta_5()}; 
document.getElementById("zakup5").style.color="green";

}
upgrade_recept_check();
}


function recepta_1()
{
gold_amount = gold_amount -50;
sell.play();
jaskolka_upgrade=1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
sklepik_mathea_check();
}


function recepta_2()
{
gold_amount = gold_amount -50;
sell.play();
grom_upgrade=1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
sklepik_mathea_check();
}

function recepta_3()
{
gold_amount = gold_amount -50;
sell.play();
wilga_upgrade=1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
sklepik_mathea_check();
}

function recepta_4()
{
gold_amount = gold_amount -100;
potion_amount++;
sell.play();
extra_mikstura=1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
sklepik_mathea_check();
}

function recepta_5()
{
gold_amount = gold_amount -60;
sell.play();
mikstura_upgrade=1;
document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
sklepik_mathea_check();
}



function upgrade_recept_check()
{
if(jaskolka_upgrade==1)
{
document.getElementById("zakup1").style.color="dimgrey";
document.getElementById("zakup1").innerHTML = "Kupiono";
document.getElementById("cena_sklepik_1").innerHTML = "-- złota";
document.getElementById("cena_sklepik_1").style.color="yellow";
document.getElementById("zakup1").onclick = function() {not_allowed()};
}

if(grom_upgrade==1)
{
document.getElementById("zakup2").style.color="dimgrey";
document.getElementById("zakup2").innerHTML = "Kupiono";
document.getElementById("cena_sklepik_2").innerHTML = "-- złota";
document.getElementById("cena_sklepik_2").style.color="yellow";
document.getElementById("zakup2").onclick = function() {not_allowed()};
}

if(wilga_upgrade==1)
{
document.getElementById("zakup3").style.color="dimgrey";
document.getElementById("zakup3").innerHTML = "Kupiono";
document.getElementById("cena_sklepik_3").innerHTML = "-- złota";
document.getElementById("cena_sklepik_3").style.color="yellow";
document.getElementById("zakup3").onclick = function() {not_allowed()};
}
if(extra_mikstura==1)
{
document.getElementById("zakup4").style.color="dimgrey";
document.getElementById("zakup4").innerHTML = "Kupiono";
document.getElementById("cena_sklepik_4").innerHTML = "-- złota";
document.getElementById("cena_sklepik_4").style.color="yellow";
document.getElementById("zakup4").onclick = function() {not_allowed()};
}
if(mikstura_upgrade==1)
{
document.getElementById("zakup5").style.color="dimgrey";
document.getElementById("zakup5").innerHTML = "Kupiono";
document.getElementById("cena_sklepik_5").innerHTML = "-- złota";
document.getElementById("cena_sklepik_5").style.color="yellow";
document.getElementById("zakup5").onclick = function() {not_allowed()};
}

}

function nawiedzony_dom()
{

if(nawiedzony_dom_aktywny==0)
ilosc_potworow=6;
po_walce=10;
nawiedzony_dom_aktywny=1;
mob_hp = Math.floor(Math.random() * 10) + 10;
mob_hp = mob_hp + (level_amount * 4); 
document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
losuj_potwora(mob_hp, "Zjawa", "magic");
zakres_ataku_potwora();
fight.play();
battle_sfx.play();
typ_tla=22;
walka2();


}

function wilk()
{
nazwa_szkoly ="Szkoła wilka";
szkola_kolor = nazwa_szkoly.fontcolor("rebeccapurple");  
document.getElementById("cech").innerHTML ="Wilk";   
document.getElementById("cech").style.color= "rebeccapurple";
strenght_amount++;
document.getElementById("strenght").innerHTML = "Siła:" + " " + strenght_amount;
manal_max--;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
celnosc=1; 
$("#szkoly").transition({ scale:0,opacity:0}, 1000, 'ease');  
poziom.play();  
if(odczyt==0)  
{    
$("#cala_mapa").fadeOut(0);
document.getElementById("cala_mapa").style.opacity = "1";
$("#cala_mapa").fadeIn(2000); 
setTimeout(plyn, 1500);
}
}
function kot()
{
nazwa_szkoly ="Szkoła kota"; 
szkola_kolor = nazwa_szkoly.fontcolor("dodgerblue");   
document.getElementById("cech").innerHTML ="Kot";   
document.getElementById("cech").style.color= "dodgerblue";
unik=1;
life_max= life_max-2;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
manal_max++;
document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
$("#szkoly").transition({ scale:0,opacity:0}, 1000, 'ease');  
poziom.play();
if(odczyt==0)   
{    
$("#cala_mapa").fadeOut(0);
document.getElementById("cala_mapa").style.opacity = "1";
$("#cala_mapa").fadeIn(2000);    
setTimeout(plyn, 1500);   
}
}
function gryf()
{
nazwa_szkoly ="Szkoła gryfa";
szkola_kolor = nazwa_szkoly.fontcolor("forestgreen");      
document.getElementById("cech").innerHTML ="Gryf";   
document.getElementById("cech").style.color= "forestgreen";
magic_amount++;
document.getElementById("magic").innerHTML = "Magia:" + " " + magic_amount;
life_max= life_max-2;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
obrona_extra = 1;
obrona_temp = obrona_temp +obrona_extra;
document.getElementById("armour_bonus").innerHTML = obrona_temp;
$("#szkoly").transition({ scale:0,opacity:0}, 1000, 'ease');  
poziom.play(); 
if(odczyt==0)  
{    
$("#cala_mapa").fadeOut(0);
document.getElementById("cala_mapa").style.opacity = "1";
$("#cala_mapa").fadeIn(2000);     
setTimeout(plyn, 1500);
}
}
function niedzwiedz()
{
nazwa_szkoly ="Szkoła niedźwiedzia";
szkola_kolor = nazwa_szkoly.fontcolor("deeppink");      
document.getElementById("cech").innerHTML ="Niedźwiedź"; 
document.getElementById("cech").style.color= "deeppink";
life_max= life_max+5;
life_amount = life_max;
document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max; 
obrona_extra = 2;
unik=2;
obrona_temp = obrona_temp +obrona_extra;
document.getElementById("armour_bonus").innerHTML = obrona_temp;
$("#szkoly").transition({ scale:0,opacity:0}, 1000, 'ease');  
poziom.play();    
if(odczyt==0)  
{
$("#cala_mapa").fadeOut(0);
document.getElementById("cala_mapa").style.opacity = "1";
$("#cala_mapa").fadeIn(2000);     
setTimeout(plyn, 1500);   
}
}

function jaka_szkola()
{

if(nazwa_szkoly =="Szkoła niedźwiedzia")
{
szkola_kolor = nazwa_szkoly.fontcolor("deeppink");      
document.getElementById("cech").innerHTML ="Niedźwiedź"; 
document.getElementById("cech").style.color= "deeppink";
}   
else if(nazwa_szkoly =="Szkoła gryfa")
{
szkola_kolor = nazwa_szkoly.fontcolor("forestgreen");      
document.getElementById("cech").innerHTML ="Gryf";   
document.getElementById("cech").style.color= "forestgreen";
}
else if(nazwa_szkoly =="Szkoła kota")
{
szkola_kolor = nazwa_szkoly.fontcolor("dodgerblue");   
document.getElementById("cech").innerHTML ="Kot";   
document.getElementById("cech").style.color= "dodgerblue";
}   
else if(nazwa_szkoly =="Szkoła wilka")
{
szkola_kolor = nazwa_szkoly.fontcolor("rebeccapurple");  
document.getElementById("cech").innerHTML ="Wilk";   
document.getElementById("cech").style.color= "rebeccapurple";  
}
else
document.getElementById("cech").innerHTML ="Brak szkoły";   
}






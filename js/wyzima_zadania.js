        function wyzima_zadania() 
        {



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


        document.getElementById("tekst").innerHTML = "Wyzima";
        document.getElementById("lokacja").innerHTML = "Wyzima";


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




        if ((quest_wykonany_nr == 4) && (misja == 5))
        document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + "Dostawa drewna";
        else if ((quest_wykonany_nr == 1) && (misja == 1))
        document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Problemy z dostawą";
        else if ((quest_wykonany_nr == 2) && (misja == 2))
        document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Przysługa dla alchemika";
        else if ((quest_wykonany_nr == 3) && (misja == 3))
        document.getElementById("lokacja").innerHTML = '<i style="color:yellow;"class="icon-lightbulb"></i>' + " Upadły rycerz";


        if ((quest_wykonany_nr == 8) || (misja == 10)) {
        document.getElementById("lokacja").innerHTML = "Brak nowych zadań";
        document.getElementById("lokacja").onclick = function () {
        not_allowed()
        };
        document.getElementById("lokacja").style.color = "dimgrey";
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



        if(nr_zlecenia>10)
        {
        document.getElementById("medytacja").innerHTML = '<i style="color:red;"class="icon-flash"></i>' + "Brak więcej zleceń"; 
        document.getElementById("medytacja").style.color = "dimgrey";
        document.getElementById("medytacja").onclick = function () {
        not_allowed();
        };



        }


        }




        function zadanie_zwykle_status() {

        document.getElementById("okno_zadania_status").style.color = "red";
        klik.play();

        if (zadanie_aktywne == 1) {
        document.getElementById("lokacja").onclick = function () {
        za_malo_zlota()
        };
        document.getElementById("lokacja").innerHTML = "Zadanie wzięte";
        document.getElementById("lokacja").style.color = "dimgrey";
        }


        if (misja_zadanie_wykonane == 1) {
        document.getElementById("lokacja").style.pointerEvents = 'auto';
        document.getElementById("lokacja").innerHTML = "Zlecenie wiedźmińskie wykonane";
        document.getElementById("lokacja").style.color = "green";


        document.getElementById("zadanie_zamknij").style.color = "dimgrey";
        document.getElementById("zadanie_zamknij").onclick = function () {
        za_malo_zlota()
        };

        document.getElementById("zadanie_button").innerHTML = "Odbierz";
        document.getElementById("okno_zadania_status").style.color = "green";
        document.getElementById("okno_zadania_status").innerHTML = "Wykonane";
        document.getElementById("zadanie_button").style.color = "green";
        document.getElementById("zadanie_button").style.pointerEvents = "auto";

        if (quest_wykonany_nr == 5)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 25 złota i 2 runy";    
        document.getElementById("okno_zadania_info").innerHTML = "Dostawa drewna została przywrócona";
        }
        if (quest_wykonany_nr == 2)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 5 ziół";
        document.getElementById("okno_zadania_info").innerHTML = "Bagna zostały oczyszczone.";
        }
        if (quest_wykonany_nr == 3)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 35 złota i 5 skór";
        document.getElementById("okno_zadania_info").innerHTML = "Przesyłka dostarczona.";
        }
        if (quest_wykonany_nr == 4)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 40 złota, 3 skóry i 3 runy";
        document.getElementById("okno_zadania_info").innerHTML = "Rycerz wyeliminowany.";
        }




        document.getElementById("zadanie_button").onclick = function () {
        odbieranie_nagrody()
        };

        }

        }


        function rodzaj_zadania() {
        document.getElementById("zadanie_button").innerHTML = "Przyjmij";

        if ((quest_wykonany_nr == 4) && (misja == 5)) {
        document.getElementById("okno_zadania_info").innerHTML = "Mamy problem z dostawą drewna z północy. Przeklęty Gargulec pustoszy okolice.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 35 złota i 2 runy";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        } else if ((quest_wykonany_nr == 1) && (misja == 1)) {

        document.getElementById("okno_zadania_info").innerHTML = "Potwór z bagien blokuje dalsze dostawy towaru dla kupca z północy.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 5 ziół";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        } else if (quest_wykonany_nr == 2) {
        document.getElementById("okno_zadania_info").innerHTML = "Dostarcz wiadomość alchemikowi. Znajdziesz go na 6 poziomie w jaskini.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 35 złota i 5 skór";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        } else if (quest_wykonany_nr == 3) {
        document.getElementById("okno_zadania_info").innerHTML = "Pozbądź sie Upadłego Rycerza z rejonu piramid.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 40 złota, 3 skóry i 3 runy";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        } else if (quest_wykonany_nr == 4) {
        document.getElementById("okno_zadania_info").innerHTML = "Brak obecnie nowych zadań";
        document.getElementById("okno_zadania_nagroda").innerHTML = "--";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "--";
        document.getElementById("zadanie_button").style.pointerEvents = 'none';
        document.getElementById("zadanie_button").style.color = "dimgrey";
        $("#arrow5").fadeOut(0);
        $("#arrow_city").fadeOut(0);



        }


        }


        function zapytanie() {

        document.getElementById("zadanie_button").onclick = function () {
        przyjmij_zadanie()
        };
        zadania_pokaz();

        }




        function przyjmij_zadanie()

        {
        if ((quest_wykonany_nr == 4) && (misja == 5)) {
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
             $("#arrow").fadeIn(0); 
             $("#arrow").transition({ y: -133, x: 543},0,'ease')
        misja = 6;
        } else if ((quest_wykonany_nr == 5) && (misja == 6)) {
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        $("#blob").fadeIn(0);
        $("#arrow2").fadeIn(0);
        misja = 2;
        } else if ((quest_wykonany_nr == 2) && (misja == 2)) {
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        $("#arrow3").fadeIn(0);
        misja = 3;
        } else if ((quest_wykonany_nr == 3) && (misja == 3)) {
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        $("#soldier").fadeOut(0);

        misja = 4;
        $("#arrow4").fadeIn(0);
        }


        $("#arrow5").fadeOut(0);
        arrow_check();

        }






        function odbieranie_nagrody() {

        if ((quest_wykonany_nr == 4) && (misja == 5)) {
        gold_amount = gold_amount + 25;
        runy_amount = runy_amount + 2;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        pick.play();
        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;

     
        } else if ((quest_wykonany_nr == 2) && (misja == 2)) {
        gold_amount = gold_amount + 30;
        herbs_amount = herbs_amount + 5;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("herbs").innerHTML = "Zioła:" + " " + herbs_amount;
        pick.play();
        kupiec_wykonane = 1;
        tekst_nr = 3;
        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;
        $("#blob").fadeOut(0);
        $("#arrow2").fadeOut(0);
        } else if ((quest_wykonany_nr == 3) && (misja == 3)) {
        gold_amount = gold_amount + 35;
        skory_amount = skory_amount + 5;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
        pick.play();

        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;

        } else if ((quest_wykonany_nr == 4) && (misja == 4)) {
        gold_amount = gold_amount + 40;
        skory_amount = skory_amount + 3;
        runy_amount = runy_amount + 3;

        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
        document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        pick.play();

        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;
        misja = 5;

        }





        zadania_zanik();
        wybor_misji();
        }

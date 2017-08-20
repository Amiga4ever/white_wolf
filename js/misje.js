
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

        if (quest_wykonany_nr == 1)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 25 złota i 2 runy";    
        document.getElementById("okno_zadania_info").innerHTML = "Krypta została oczyszczona.";
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
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 20 złota i 3 runy";
        document.getElementById("okno_zadania_info").innerHTML = "Bandyci wyelimonowani.";
        }
        if (quest_wykonany_nr == 5)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 40 złota, 3 skóry i 3 runy";
        document.getElementById("okno_zadania_info").innerHTML = "Rycerz wyeliminowany.";
        }
            
            
            
            
            
        if (quest_wykonany_nr == 6)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 3 runy";
        document.getElementById("okno_zadania_info").innerHTML = "Gargulec zabity";
        }

       if (quest_wykonany_nr == 7)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 3 skladniki";
        document.getElementById("okno_zadania_info").innerHTML = "Dom oczyszczony";
        }
            
            
            
             if (quest_wykonany_nr == 8)
        {
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 20 złota i 4 skladniki";
        document.getElementById("okno_zadania_info").innerHTML = "Trójca wyeliminowana";
        }
            
            
            
            
            
        document.getElementById("zadanie_button").onclick = function () {
        odbieranie_nagrody()
        };

        }

        }


        function rodzaj_zadania() {





        document.getElementById("zadanie_button").innerHTML = "Przyjmij";

        if ((quest_wykonany_nr == 0) && (misja == 0)) {
        document.getElementById("okno_zadania_info").innerHTML = "Coraz więcej ludzi ginie w okolicach grobowca. Oczyść nawiedzoną kryptę.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 25 złota i 2 runy";
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
        document.getElementById("okno_zadania_info").innerHTML = "Grupa bandytów sprawia poważne problemy adeptce magii. Za rozwiązanie problemu oferuje nagrodę";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 20 złota, 3 runy";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
            
                       
        } else if (quest_wykonany_nr == 4) {
        document.getElementById("okno_zadania_info").innerHTML = "Pozbądź sie Upadłego Rycerza z rejonu piramid.";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 40 złota, 3 skóry i 3 runy";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
            
                     
        } else if (quest_wykonany_nr == 5) {
        document.getElementById("okno_zadania_info").innerHTML = "Gargulec zabija pobliskich drwali. Pozbądź się go";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 3 runy";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        document.getElementById("zadanie_button").style.pointerEvents = 'Przyjmij';
        document.getElementById("zadanie_button").style.color="green";
 

            
        } else if (quest_wykonany_nr == 6) {
        document.getElementById("okno_zadania_info").innerHTML = "Dom koło Oxenfurtu został nawiedzony. Wymagana wiedźmińska interwencja";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 30 złota i 3 składniki";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        document.getElementById("zadanie_button").style.pointerEvents = 'Przyjmij';
        document.getElementById("zadanie_button").style.color="green"; 
            
            
            
            
            } else if (quest_wykonany_nr == 7) {
        document.getElementById("okno_zadania_info").innerHTML = "Nieumarła trójca powstała. Wymagana wiedźmińska interwencja";
        document.getElementById("okno_zadania_nagroda").innerHTML = "Nagroda: 20 złota i 4 składniki";
        document.getElementById("okno_zadania_status").style.color = "red";
        document.getElementById("okno_zadania_status").innerHTML = "Niewykonane";
        document.getElementById("zadanie_button").style.pointerEvents = 'Przyjmij';
        document.getElementById("zadanie_button").style.color="green"; 
            
            
            
            
            
            
            
            
        $("#arrow5").fadeOut(0);
        $("#arrow_city").fadeOut(0);



        }



        }


        function zapytanie() {





        document.getElementById("zadanie_button").onclick = function () {
        przyjmij_zadanie();
        };
        zadania_pokaz();

        }




        function przyjmij_zadanie()

        {
        if ((quest_wykonany_nr == 0) && (misja == 0)) { //krypta
        zadanie_lochy = 1;
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        $("#nagrobek").fadeIn(0);
        $("#arrow").fadeIn(0);
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 1;
        } else if ((quest_wykonany_nr == 1) && (misja == 1)) {  //blob
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        $("#blob").fadeIn(0);
        $("#arrow2").fadeIn(0);
        misja = 2;
        } else if ((quest_wykonany_nr == 2) && (misja == 2)) { //jaskinia
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        $("#arrow3").fadeIn(0);
        misja = 3;
        } else if ((quest_wykonany_nr == 3) && (misja == 3)) { //bandyci
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 4;
        $("#arrow4").fadeIn(0);
          $("#bandit").fadeIn(0);           
        $("#arrow4").transition({y:80, x: 400},0,'ease')
        }
        else if ((quest_wykonany_nr == 4) && (misja == 4)) {  //piramida
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 5;
        $("#arrow4").fadeIn(0);
         $("#arrow4").transition({y:0, x: 0},0,'ease')    
        }
                   
        else if ((quest_wykonany_nr ==5) && (misja == 5)) {  //gargulec
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 6;
        $("#arrow4").fadeIn(0);
        $("#arrow4").transition({ y: 50, x: 453},0,'ease')
        }    
           
        else if ((quest_wykonany_nr ==6) && (misja == 6)) {  //nawiedzony dom
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 7;
        $("#arrow4").fadeIn(0);
      
        $("#arrow4").transition({ y: 160, x: 430},0,'ease')
        }   
            
            else if ((quest_wykonany_nr ==7) && (misja == 7)) {  //nieumarła trójca
        zadanie_aktywne = 1;
        zlecenie_sfx.play();
        zadanie_zwykle_status();
        zadania_zanik();
        misja = 8;
   
      

        }   
            
            
            
            
            
        $("#arrow5").fadeOut(0);
        arrow_check();

        }






        function odbieranie_nagrody() {

        if ((quest_wykonany_nr == 1) && (misja == 1)) {
        gold_amount = gold_amount + 25;
        runy_amount = runy_amount + 2;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        pick.play();
        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;
        krypta_reached = 1;
        $("#arrow").fadeOut(0);
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
        gold_amount = gold_amount + 20;

        runy_amount = runy_amount + 2;

        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
        document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        pick.play();

        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;
     

        }
            
          else if ((quest_wykonany_nr == 5) && (misja == 5)) {
        gold_amount = gold_amount + 40;
        skory_amount = skory_amount + 3;
        runy_amount = runy_amount + 3;

        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;
        document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        pick.play();

        misja_zadanie_wykonane = 0;
        zadanie_aktywne = 0;
     

        }  


            else if ((quest_wykonany_nr == 6) && (misja == 6)) {
            gold_amount = gold_amount + 30;
            runy_amount = runy_amount + 3;

            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

            document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
            pick.play();

            misja_zadanie_wykonane = 0;
            zadanie_aktywne = 0;


            }




            else if ((quest_wykonany_nr == 7) && (misja == 7)) {
            gold_amount = gold_amount + 30;
            skladniki_amount = skladniki_amount+3;
            document.getElementById("items").innerHTML = "Składniki:" + " " + skladniki_amount;

            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

            pick.play();

            misja_zadanie_wykonane = 0;
            zadanie_aktywne = 0;


            }
            else if ((quest_wykonany_nr == 8) && (misja == 8)) {
            gold_amount = gold_amount + 20;
            skladniki_amount = skladniki_amount + 4;

            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

            document.getElementById("items").innerHTML = "Składniki:" + " " + skladniki_amount;
            pick.play();

            misja_zadanie_wykonane = 0;
            zadanie_aktywne = 0;

misja=9;
                 $("#alzur").fadeIn(0);    
            }

            

        zadania_zanik();
        wybor_misji();
        }





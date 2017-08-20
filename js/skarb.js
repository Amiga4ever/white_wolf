function skarb_check(wartosc, min, max) {
    


    document.getElementById("zdarzenie_open").style.color = "dimgrey";
    document.getElementById("zdarzenie_open").onclick = function () {
        za_malo_zlota()
    };
    document.getElementById("zdarzenie_quit").onclick = function () {
        za_malo_zlota()
    };

    kroki_stop();
    pick.play();
    document.getElementById("zdarzenie_info").innerHTML = "Sprawdzasz zawartość...";

    setTimeout(skarb_loot(wartosc, min, max,event), 1000);
}




function skarb_loot(wartosc, min, max) {



    if (wartosc == undefined)
        var liczba4 = Math.floor(Math.random() * 10) + 1;
    else
        var liczba4 = wartosc;


    var ilosc1 = Math.floor(Math.random() * 2) + 1;

    if ((min == undefined) && (max == undefined))
        var ilosc5 = Math.floor(Math.random() * 10) + 2;
    else {
        var ilosc5 = Math.floor(Math.random() * max) + min;
        var ilosc1 = Math.floor(Math.random() * max) + min;
    }

    if (wartosc == "zloto")
        liczba4 = 5;

    if (wartosc == "runy")
        liczba4 = 16;

    if (wartosc == "ziola")
        liczba4 = 0;

    if (wartosc == "skladniki")
        liczba4 = 2;


    if (wartosc == "skory")
        liczba4 = 1;


    if ((potion2 == potion_amount) && (liczba4 == 6))
        liczba4 = 100;


    if ((mana_amount == 0) && (liczba4 == 9))
        liczba4 = 100;


    if ((mana_amount == manal_max) && (liczba4 == 8))
        liczba4 = 100;


    if (liczba4 == 100)
        setTimeout(skarb_loot, 0);

    

  var ile_event = Math.floor(Math.random() * level_amount) + 1;  
    
    if ((typ_tla == 15)||(typ_tla==16))
        liczba4 = Math.floor(Math.random() * 3) + 1;
      
  






    if (liczba4 == 0) {
        inventory.play();
        if (ilosc1 == 1)
            document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " zioło";
        else
            document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " zioła";
        herbs_amount = herbs_amount + ilosc1;
        document.getElementById("zdarzenie_info").style.color = "green";
        
        
        
        
    } else if (liczba4 == 1) {
        inventory.play();
  
        
            if(ile_event>3)
            ile_event=3;
        
        if(ile_event==1)
            document.getElementById("zdarzenie_info").innerHTML = "Zdobyto skórę";
        else
             document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ile_event +" skóry";

        skory_amount = skory_amount + ile_event;
        document.getElementById("zdarzenie_info").style.color = "yellow";
    } else if (liczba4 == 2) {
        inventory.play();
    
              if(ile_event>3)
            ile_event=3;
        
                if(ile_event==1)
            document.getElementById("zdarzenie_info").innerHTML = "Zdobyto składnik";
        else
             document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ile_event +" składniki";

        skladniki_amount = skladniki_amount + ile_event;
        document.getElementById("zdarzenie_info").style.color = "orange";
        } else if (liczba4 == 3) {
        inventory.play();

        if(ile_event>2)
        ile_event=2;

        if(ile_event==1)
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto runę";
        else
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ile_event +" runy";

        runy_amount = runy_amount + ile_event;
        document.getElementById("zdarzenie_info").style.color = "darkturquoise";

        
        
        
        
    } else if (liczba4 == 4) {
        inventory.play();
        document.getElementById("zdarzenie_info").innerHTML = "Znaleziono sterte śmieci";
        document.getElementById("zdarzenie_info").style.color = "white";
    } else if (liczba4 == 5) {
        
        ilosc5 = ilosc5 + level_amount*1.5;
        ilosc5 = Math.round(ilosc5);
        
        
        sell.play();
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto złoto w ilości" + " " + ilosc5;
        gold_amount = gold_amount + ilosc5;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("zdarzenie_info").style.color = "yellow";
    } else if (liczba4 == 6) {
        heal.play();
        potion2++;
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto miksturę leczenia" + '<i style="color:red";" class="icon-heart"></i>' + " Stan: " + potion2 + "/" + potion_amount;

        document.getElementById("zdarzenie_info").style.color = "coral";
    } else if (liczba4 == 7) {
           ilosc5 = ilosc5 + level_amount*1.5;
           ilosc5 = Math.round(ilosc5);
        
        
        
        sell.play();
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto złoto w ilości" + " " + ilosc5;
        gold_amount = gold_amount + ilosc5;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("zdarzenie_info").style.color = "yellow";
    } else if (liczba4 == 8) {
        mana_sfx.play();
        document.getElementById("zdarzenie_info").innerHTML = "Znaleziono miksturę koncentracji";
        mana_amount = manal_max;
        document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
        document.getElementById("zdarzenie_info").style.color = "deepskyblue";

    } else if (liczba4 == 9) {
        trafienie1.play();



        mana_amount = mana_amount - 3;
        if (mana_amount <= 0) {
            mana_amount = 0;
            document.getElementById("zdarzenie_info").innerHTML = "Utracono całą koncentrację";
        } else
            document.getElementById("zdarzenie_info").innerHTML = "Utracono część koncentracji";
        document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;

        document.getElementById("zdarzenie_info").style.color = "red";
    } else if (liczba4 == 10) {
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
    } else if (liczba4 == 11) {
        magiczna_zbroja();
        var zbroja_magic = nazwa_magicznej_zbroi.fontcolor("yellow");
        magic2.play();
        document.getElementById("zdarzenie_info2").style.color = "green";
        document.getElementById("zdarzenie_info").className = "flash3";
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto schemat magicznej zbroi - ";
        document.getElementById("zdarzenie_info2").innerHTML = zbroja_magic;
              document.getElementById("zdarzenie_info3").style.color="white";
           document.getElementById("zdarzenie_info3").innerHTML = "Znaleziono <spam style='color:deeppink';>AFTEFAKT</spam>";
        document.getElementById("zdarzenie_open").innerHTML = "--";
              document.getElementById("zdarzenie_quit").innerHTML = "Zamknij";
        document.getElementById("zdarzenie_info").style.color = "deeppink";
        $("#tower_poziom_info").fadeOut(0);
        wieza_klucz = 2;
        artefacts++;
        kierunek=20;
              document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        sprawdz_kierunki_aktywne();
    } else if (liczba4 == 12) {
        document.getElementById("zdarzenie_info3").innerHTML = " ";
        document.getElementById("zdarzenie_open").innerHTML = "--";
        ilosc5 = Math.floor(Math.random() * 15) + 5;
        liczba4 = 20;
        inventory.play();

        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto 2 skóry" + "<br>" +"Zdobyto " + ilosc5 + " złota";
          $("#zdarzenie_info2").fadeIn(0);
           document.getElementById("zdarzenie_info3").style.color="white";
           document.getElementById("zdarzenie_info3").innerHTML = "Znaleziono <spam style='color:deeppink';>AFTEFAKT</spam>";
        skory_amount = skory_amount + 2;
        gold_amount = gold_amount + ilosc5;
        document.getElementById("zdarzenie_info").style.color = "white";
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        artefacts++;
    } else if (liczba4 == 13) {
        var klucz = "KLUCZ DO WIEŻY"
        var klucz_kolor = klucz.fontcolor("deeppink");
        document.getElementById("zdarzenie_info3").innerHTML = " ";
        document.getElementById("zdarzenie_open").innerHTML = "--";
        ilosc5 = Math.floor(Math.random() * 15) + 10;
        ilosc1 = Math.floor(Math.random() * 2) + 3;
        liczba4 = 20;
        inventory.play();
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " runy+ " + ilosc5 + " złota,"+ "</br>"+ "</br>"+ "Zdobyto " + klucz_kolor;
                   document.getElementById("zdarzenie_info3").style.color="white";
           document.getElementById("zdarzenie_info3").innerHTML = "Znaleziono <spam style='color:deeppink';>AFTEFAKT</spam>";
        runy_amount = runy_amount + ilosc1;
        gold_amount = gold_amount + ilosc5;
        document.getElementById("zdarzenie_info").style.color = "yellow";
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        wieza_klucz = 1;
        artefacts++;
    } 
     else if (liczba4 == 14) {
        ilosc5 = Math.floor(Math.random() * 20) + 15;

        sell.play();
        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc5 + " złota" + "<br>"  + "<br>" +"Zdobyto 2 runy";
        gold_amount = gold_amount + ilosc5;
         runy_amount = runy_amount +2;
              document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
        document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
        document.getElementById("zdarzenie_info").style.color = "yellow";
    }
    else if (liczba4 == 15) {
        inventory.play();

           $("#sand_cave_level").fadeOut(0);
        var ilosc1 = Math.floor(Math.random() * 3) + 2;
            document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 + " runy"
document.getElementById("zdarzenie_open").innerHTML = "--";
        runy_amount = runy_amount + ilosc1;
        document.getElementById("zdarzenie_info").style.color = "darkturquoise";
                        document.getElementById("zdarzenie_info3").style.color="white";
           document.getElementById("zdarzenie_info3").innerHTML = "Znaleziono <spam style='color:deeppink';>AFTEFAKT</spam>";
        artefacts++;
    } 
     else if (liczba4 == 16) {
        inventory.play();



        document.getElementById("zdarzenie_info").innerHTML = "Zdobyto " + ilosc1 +" runy";

        runy_amount = runy_amount + ilosc1;
        document.getElementById("zdarzenie_info").style.color = "darkturquoise";

        
        
        
        
    }
    
    
    
    else(liczba4 == 20) 
    {

    }






    document.getElementById("zdarzenie_open").style.color = "dimgrey";
    document.getElementById("zdarzenie_quit").onclick = function () {
        zdarzenie_zanik()
    };


}
function kierunek_po_walce() 
{
  
     
    switch(po_walce)
            {
        case 0: //default
        po_evencie();
        setTimeout(mapa, 200);
        break;
            
        case 1:  //grobowiec
        document.getElementById('krypta_poziom').innerHTML = grobowiec_poziom + "/12";
        cmentarz();        
        break;
    
            
        case 2: //jaskinia
        typ_tla = 5;
        cave_hp++;
        cave_hp++;
        cave_attack++;
        document.getElementById('jaskinia_level').innerHTML = jaskinia_poziom + "/12";
        cave();
        break;
            
            
        case 3: //graveyard
        hp_grave = hp_grave + 3;
        atak_grave = atak_grave + 1;
        graveyard();
        break;
            
            
        case 4:  //tower
        tower_poziom++;
        hp_tower++;
        hp_tower = hp_tower + level_amount;
        atk_tower++;
        tower();
        break;

        case 5: //piramida
        piramida_poziom++;   
        piramida();
        break;

     
        case 6: //sand cave
        sand_cave_poziom++;
        sand_cave();
        break;
    
    
        case 7: //legowisko
        ilosc_potworow_legowisko--;

        if (ilosc_potworow_legowisko > 0) {
        var hp = Math.floor(Math.random() * 4 * level_amount + 1) + 2;
        losuj_potwora(hp);
        var atk_min = Math.floor(Math.random() * 2 * level_amount) + 1;
        var atk_max = Math.floor(Math.random() * 4 * level_amount) + atk_min;
        if(atk_max>8)
        atk_max=8;
        var atk_min= atk_max-4;
        if(atk_min<=0)
        atk_min=1;

        zakres_ataku_potwora(atk_min, atk_max);
        document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow_legowisko;
        document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
        document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;
        fight.play();
        battle_sfx.play();
        typ_tla = 15;
        document.getElementById('strona_novigard').style.backgroundImage = "url('legowisko.jpg')";
        walka2();
        }
        if (ilosc_potworow_legowisko == 0) {
        po_walce=0;    
        legowisko = 0;
        zdarzenie_hide();
        document.getElementById("zdarzenie_open").innerHTML = "Przeszukaj";
        document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";

        document.getElementById("zdarzenie_info").innerHTML = "Legowisko potworów";
        document.getElementById("zdarzenie_open").onclick = function () {
        skarb_check()
        };
        document.getElementById("zdarzenie_quit").onclick = function () {
        zdarzenie_zanik()
        };        
        zdarzenie_pokaz();
        }

        break;
    
    
    
        case 8:  //grota
        liczba_poziomow--;
        aktualny_poziom_groty++;
        if(liczba_poziomow>0)                      
        grota_walka();
        else if (liczba_poziomow == 0) 
        { 
        po_walce=0;    
        liczba_poziomow=0;
        aktualny_poziom_groty=1;
        grota=0;
        zdarzenie_hide();
        document.getElementById("enemy_amount").innerHTML = "Ilość potworów: 1";
        document.getElementById('zdarzenie').style.backgroundImage = "url('grota_skarb.jpg')";
        document.getElementById("zdarzenie_open").innerHTML = "Przeszukaj";
        document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";
        document.getElementById("zdarzenie_info").innerHTML = "Grota";

        document.getElementById("zdarzenie_open").onclick = function () {    
        skarb_check()
        };
        document.getElementById("zdarzenie_quit").onclick = function () {
        zdarzenie_zanik()
        };
        document.getElementById('strona_novigard').style.backgroundImage = "url('grota.jpg')";

        zdarzenie_pokaz();
        }

        break;



        case 9: //bandyci
        pozostalych_bandytow--;

        document.getElementById("enemy_amount").innerHTML = "pozostalych: " + pozostalych_bandytow;

        if(pozostalych_bandytow!=0)
        {
        xp_value = 3;
        var hp =  Math.floor(Math.random() * 10) + 10;
        losuj_potwora(hp, "Bandyta", "sword");
        zakres_ataku_potwora(3, 8);
        fight.play();
        battle_sfx.play();
        walka2();
        }    

        else if(pozostalych_bandytow==0)
        {
        po_walce=0;
        typ_tla=0;
        bandyci_pokonani=1;
        quest_wykonany_nr = 4;
        misja_zadanie_wykonane =1;  
        $("#arrow4").fadeOut(200);    
        zdarzenie_hide();

        document.getElementById('bandit').className = "fight_over";
        document.getElementById('zdarzenie').style.backgroundImage = "url('camp.jpg')";
        document.getElementById("zdarzenie_open").style.color="green";  
        document.getElementById("zdarzenie_open").innerHTML = "Przeszukaj";
        document.getElementById("zdarzenie_info3").innerHTML = " ";
        document.getElementById("zdarzenie_quit").innerHTML = "Idź dalej";
        document.getElementById("zdarzenie_info").innerHTML = "Obóz bandytów";
        document.getElementById("zdarzenie_open").onclick = function () {
        skarb_check(14)
        };
        document.getElementById("zdarzenie_quit").onclick = function () {
        zdarzenie_zanik();
        $("#bandit").transition({ scale:0,opacity:0 }, 800, 'ease');
        skrot_na_mapie();
        };
        zdarzenie_pokaz();
        } 
        break;
    
         
    
    
        case 10: //nawiedzony dom
        ilosc_potworow--;
        document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
        if(ilosc_potworow>0)
        nawiedzony_dom();
        if(ilosc_potworow==0)
        {
        po_walce=0;    
        misja_zadanie_wykonane = 1;
        typ_tla = 0;
        quest_wykonany_nr = 7;   
        nawiedzony_dom_aktywny=0;
        nawiedzony_dom_wykonany=1;
        mapa();
        }
        break;
              
         
            
            
    
             
        default:
        po_evencie();
        setTimeout(mapa, 200);
    

    }  //switch end
}
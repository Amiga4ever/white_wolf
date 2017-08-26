
function zapis_gry_medytacja()
{

    if(gold_amount>=5)
        {
    gold_amount = gold_amount -5;
             document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;

zlecenie_sfx.play();


       document.getElementById("new_medytacja_zapisz").innerHTML ="Gra zapisana";
     document.getElementById("new_medytacja_zapisz").style.color ="green";
            document.getElementById("new_medytacja_zapisz").style.pointerEvents="none";
    zapis_gry();

        }
    else
        {
                 document.getElementById("new_medytacja_zapisz").style.color ="red";
         disabled.play();
        }
}




function zapis_gry()
{










      localStorage.setItem('piramida_nagroda', piramida_nagroda);
        localStorage.setItem('zapis_obecny', zapis_obecny);
        localStorage.setItem('ilosc_ziol', ilosc_ziol);
        localStorage.setItem('ilosc_skladnikow', ilosc_skladnikow);
        localStorage.setItem('herbs_amount', herbs_amount);
        localStorage.setItem('skladniki_amount', skladniki_amount);
        localStorage.setItem('skory_amount', skory_amount);
        localStorage.setItem('runy_amount', runy_amount);
        localStorage.setItem('level_amount', level_amount);
        localStorage.setItem('xp_req', xp_req);
        localStorage.setItem('xp_amount', xp_amount);
        localStorage.setItem('life_amount', life_amount);
        localStorage.setItem('life_max', life_max);
        localStorage.setItem('mana_amount', mana_amount);
        localStorage.setItem('manal_max', manal_max);
        localStorage.setItem('points_amount', points_amount);
        localStorage.setItem('magic_amount', magic_amount);
        localStorage.setItem('strenght_amount', strenght_amount);
        localStorage.setItem("gold_amount", gold_amount);
        localStorage.setItem('dead_monsters', dead_monsters);
        localStorage.setItem('xp_received', xp_received);
        localStorage.setItem('gold_received', gold_received);
        localStorage.setItem('enemy_level_amount', enemy_level_amount);
        localStorage.setItem('znak_hit', znak_hit);
        localStorage.setItem('mob_hp_xp', mob_hp_xp);
        localStorage.setItem('miecz_od', miecz_od);
        localStorage.setItem('miecz_do', miecz_do);
        localStorage.setItem('znak_od', znak_od);
        localStorage.setItem('znak_do', znak_do);
        localStorage.setItem('min_atak', min_atak);
        localStorage.setItem('max_atak', max_atak);
        localStorage.setItem('koszt_zycie', koszt_zycie);
        localStorage.setItem('koszt_magia', koszt_magia);
        localStorage.setItem('koszt_sila', koszt_sila);
        localStorage.setItem('koszt_mana', koszt_mana);
        localStorage.setItem('magic_bonus', magic_bonus);
        localStorage.setItem('sila_bonus', sila_bonus);
        localStorage.setItem('zlecenie_typ', zlecenie_typ);
        localStorage.setItem('zlecenie_status', zlecenie_status);
        localStorage.setItem('kupno_miecza_max_add', kupno_miecza_max_add);
        localStorage.setItem('ring_1', ring_1);
        localStorage.setItem('ring_2', ring_2);
        localStorage.setItem('ring3', ring3);
        localStorage.setItem('ring_1_nazwa', ring_1_nazwa);
        localStorage.setItem('ring_2_nazwa', ring_2_nazwa);
        localStorage.setItem('ring_3_nazwa', ring_3_nazwa);
        localStorage.setItem('ring_1_opis', ring_1_opis);
        localStorage.setItem('ring_2_opis', ring_2_opis);
        localStorage.setItem('ring_3_opis', ring_3_opis);
        localStorage.setItem('ring_value1', ring_value1);
        localStorage.setItem('ring_value2', ring_value2);
        localStorage.setItem('ring_value3', ring_value3);
        localStorage.setItem('ring_value4', ring_value4);
        localStorage.setItem('ring_value7', ring_value5);
        localStorage.setItem('ring_value6', ring_value6);
        localStorage.setItem('ring_value7', ring_value7);
        localStorage.setItem('ring_value8', ring_value8);
        localStorage.setItem('ring_1_nr', ring_1_nr);
        localStorage.setItem('ring_2_nr', ring_2_nr);
        localStorage.setItem('ring_3_nr', ring_3_nr);
        localStorage.setItem('reszta', reszta);
        localStorage.setItem('reszta2', reszta2);
        localStorage.setItem('reszta3', reszta3);
        localStorage.setItem('atak_moba_min', atak_moba_min);
        localStorage.setItem('atak_moba_max', atak_moba_max);
        localStorage.setItem('jaskolka_amount', jaskolka_amount);
        localStorage.setItem('puszczyk_amount', puszczyk_amount);
        localStorage.setItem('wilga_amount', wilga_amount);
        localStorage.setItem('grom_amount', grom_amount);
        localStorage.setItem('eliksir_walki_amount', eliksir_walki_amount);
        localStorage.setItem('eliksir_inny_walki_amount', eliksir_inny_walki_amount);
        localStorage.setItem('jaskolka', jaskolka);
        localStorage.setItem('puszczyk', puszczyk);
        localStorage.setItem('wilga', wilga);
        localStorage.setItem('grom', grom);
        localStorage.setItem('liczba_do_ataku1', liczba_do_ataku1);
        localStorage.setItem('min_1', min_1);
        localStorage.setItem('max_2', max_2);
        localStorage.setItem('heal_cost', heal_cost);
        localStorage.setItem('zlecenie_aktywne', zlecenie_aktywne);
        localStorage.setItem('mob_hp_extra', mob_hp_extra);
        localStorage.setItem('mob_min_extra', mob_min_extra);
        localStorage.setItem('mob_max_extra', mob_max_extra);
        localStorage.setItem('zlecenie_completed', zlecenie_completed);
        localStorage.setItem('mob_hp_escape', mob_hp_escape);
        localStorage.setItem('zlecenie_aktywne_2', zlecenie_aktywne_2);
        localStorage.setItem('level_amount_req', level_amount_req);
        localStorage.setItem('extra_level', extra_level);
        localStorage.setItem('extra_gold_za_zadanie', extra_gold_za_zadanie);
        localStorage.setItem('extra_xp_za_zadanie', extra_xp_za_zadanie);
        localStorage.setItem('gold_do_wyplaty', gold_do_wyplaty);
        localStorage.setItem('xp_do_wyplaty', xp_do_wyplaty);
        localStorage.setItem('zadanie_gold', zadanie_gold);
        localStorage.setItem('zadanie_xp', zadanie_xp);
        localStorage.setItem('zabity_potwor_ze_zlecenia', zabity_potwor_ze_zlecenia);
        localStorage.setItem('miecz_do_kupienia', miecz_do_kupienia);
        localStorage.setItem('miecz_kupiony', miecz_kupiony);
        localStorage.setItem('min_atak_new', min_atak_new);
        localStorage.setItem('max_atak_new', max_atak_new);
        localStorage.setItem('nazwa_posiadanej_broni', nazwa_posiadanej_broni);
        localStorage.setItem('ulepszenie_obecne', ulepszenie_obecne);
        localStorage.setItem('ulepszenie_max', ulepszenie_max);
        localStorage.setItem('wymagane_runy', wymagane_runy);
        localStorage.setItem('co_jest_ulepszane', co_jest_ulepszane);
        localStorage.setItem('co_jest_ulepszane_check', co_jest_ulepszane_check);
        localStorage.setItem('cen_miecza', cen_miecza);
        localStorage.setItem('upgrade_gold', upgrade_gold);
        localStorage.setItem('koniec_kosci', koniec_kosci);
        localStorage.setItem('za_ile_gra', za_ile_gra);
        localStorage.setItem('schemat', schemat);
        localStorage.setItem('zbroja_do_kupienia', zbroja_do_kupienia);
        localStorage.setItem('zbroja_obrona', zbroja_obrona);
        localStorage.setItem('obrona_extra_level_min', obrona_extra_level_min);
        localStorage.setItem('obrona_extra_level_max', obrona_extra_level_max);
        localStorage.setItem('nazwa_posiadanej_zbroi', nazwa_posiadanej_zbroi);
        localStorage.setItem('cen_zbroi', cen_zbroi);
        localStorage.setItem('ile_skor', ile_skor);
        localStorage.setItem('ulepszenie_obecne_zbroi', ulepszenie_obecne_zbroi);
        localStorage.setItem('wymagane_runy_do_zbroi', wymagane_runy_do_zbroi);
        localStorage.setItem('upgrade_zbroja_gold', upgrade_zbroja_gold);
        localStorage.setItem('co_jest_ulepszane_check2', co_jest_ulepszane_check2);
        localStorage.setItem('co_jest_ulepszane2', co_jest_ulepszane2);
        localStorage.setItem('ulepszenie_obecne2', ulepszenie_obecne2);

        localStorage.setItem('zbroja_kupiona', zbroja_kupiona);
        localStorage.setItem('obrona_temp', obrona_temp);
        localStorage.setItem('nr_zlecenia', nr_zlecenia);
        localStorage.setItem('redukcja_obrazen', redukcja_obrazen);
        localStorage.setItem('nazwa_pierscienia', nazwa_pierscienia);

        localStorage.setItem('ring_1_info', ring_1_info);
        localStorage.setItem('ring_1_value', ring_1_value);
        localStorage.setItem('ring_1_symbol', ring_1_symbol);

        localStorage.setItem('ring_2_info', ring_2_info);
        localStorage.setItem('ring_2_value', ring_2_value);
        localStorage.setItem('ring_2_symbol', ring_2_symbol);
        localStorage.setItem('ring_1_aktywny', ring_1_aktywny);
        localStorage.setItem('ring_2_aktywny', ring_2_aktywny);
        localStorage.setItem('both_rings_active', both_rings_active);
        localStorage.setItem('nr_pierscienia_do_kupienia', nr_pierscienia_do_kupienia);
        localStorage.setItem('ring_1_cena', ring_1_cena);
        localStorage.setItem('ring_2_cena', ring_2_cena);
        localStorage.setItem('ring_3_cena', ring_3_cena);
        localStorage.setItem('jaki_pierscien1', jaki_pierscien1);
        localStorage.setItem('jaki_pierscien2', jaki_pierscien2);
        localStorage.setItem('check_magia', check_magia);
        localStorage.setItem('check_magia2', check_magia2);
        localStorage.setItem('obecny1', obecny1);
        localStorage.setItem('obecny2', obecny2);
        localStorage.setItem('bonus1_dodany', bonus1_dodany);
        localStorage.setItem('bonus2_dodany', bonus2_dodany);
        localStorage.setItem('mana_koszt', mana_koszt);
        localStorage.setItem('extra_gold_ring', extra_gold_ring);
        localStorage.setItem('extra_gold_ring_amount', extra_gold_ring_amount);
        localStorage.setItem('extra_life', extra_life);
        localStorage.setItem('extra_mana', extra_mana);
        localStorage.setItem('extra_xp_ring', extra_xp_ring);
        localStorage.setItem('extra_xp_ring_amount', extra_xp_ring_amount);
        localStorage.setItem('furia_amount', furia_amount);
        localStorage.setItem('cena_1_na_odsprzedanie', cena_1_na_odsprzedanie);
        localStorage.setItem('cena_2_na_odsprzedanie', cena_2_na_odsprzedanie);
        localStorage.setItem('zaokraglone1', zaokraglone1);
        localStorage.setItem('zaokraglone2', zaokraglone2);
        localStorage.setItem('zaokraglone3', zaokraglone3);
        localStorage.setItem('zaokraglone4', zaokraglone4);
        localStorage.setItem('energia_zlecenie', energia_zlecenie);
        localStorage.setItem('zlecenie_min', zlecenie_min);
        localStorage.setItem('zlecenie_max', zlecenie_max);
        localStorage.setItem('losuj_pierscien', losuj_pierscien);
        localStorage.setItem('ile_walk_zaliczonych', ile_walk_zaliczonych);
        localStorage.setItem('ile_walk_zaliczonych2', ile_walk_zaliczonych2);
        localStorage.setItem('ile_walk_zaliczonych3', ile_walk_zaliczonych3);
        localStorage.setItem('ile_walk_zaliczonych4', ile_walk_zaliczonych4);
        localStorage.setItem('elixir_obrony_aktywny', elixir_obrony_aktywny);
        localStorage.setItem('zbroja_obrona_bonus', zbroja_obrona_bonus);
        localStorage.setItem('nagroda_specjalna_wzieta', nagroda_specjalna_wzieta);
        localStorage.setItem('suma_zbroi_i_bonusu', suma_zbroi_i_bonusu);
        localStorage.setItem('odglos_obrony', odglos_obrony);
        localStorage.setItem('kiedy_nowy_towar', kiedy_nowy_towar);
        localStorage.setItem('kiedy_nowy_towar2', kiedy_nowy_towar2);
        localStorage.setItem('kiedy_nowy_towar3', kiedy_nowy_towar3);
        localStorage.setItem('gold_received_extra', gold_received_extra);
        localStorage.setItem('gold_temp', gold_temp);
        localStorage.setItem('xp_received_extra', xp_received_extra);
        localStorage.setItem('xp_temp', xp_temp);
        localStorage.setItem('kupiec_kosci', kupiec_kosci);
        localStorage.setItem('nagroda_specjalna', nagroda_specjalna);
        localStorage.setItem('bonus_do_obrony', bonus_do_obrony);
        localStorage.setItem('walka_nr', walka_nr);

        localStorage.setItem('sprzedaj_i_kup', sprzedaj_i_kup);
        localStorage.setItem('ilosc1a', ilosc1a);
        localStorage.setItem('ilosc1b', ilosc1b);
        localStorage.setItem('ilosc2a', ilosc2a);
        localStorage.setItem('ilosc2b', ilosc2b);
        localStorage.setItem('ilosc3a', ilosc3a);
        localStorage.setItem('ilosc3b', ilosc3b);
        localStorage.setItem('ilosc4a', ilosc4a);
        localStorage.setItem('ilosc4b', ilosc4b);
        localStorage.setItem('kupiec_start', kupiec_start);
        localStorage.setItem('zbroja_magiczna_obrona', zbroja_magiczna_obrona);
        localStorage.setItem('zbroja_magiczna_zycie', zbroja_magiczna_zycie);
        localStorage.setItem('nazwa_magicznej_zbroi', nazwa_magicznej_zbroi);
        localStorage.setItem('zbroja_magiczna_do_kupienia', zbroja_magiczna_do_kupienia);
        localStorage.setItem('zbroja_magiczna_aktywna', zbroja_magiczna_aktywna);
        localStorage.setItem('zbroja_magiczna_zycie2', zbroja_magiczna_zycie2);
        localStorage.setItem('critic_amount', critic_amount);
        localStorage.setItem('szansa_na_krytyczne', szansa_na_krytyczne);
        localStorage.setItem('cios_krytyczny', cios_krytyczny);
        localStorage.setItem('kosci_rzucone', kosci_rzucone);
        localStorage.setItem('jaki_opis', jaki_opis);
        localStorage.setItem('jaki_numer', jaki_numer);
        localStorage.setItem('jaki_opis2', jaki_opis2);
        localStorage.setItem('jaki_numer2', jaki_numer2);
        localStorage.setItem('jaki_opis3', jaki_opis3);
        localStorage.setItem('jaki_numer3', jaki_numer3);
        localStorage.setItem('zamtuz_sila_bonus', zamtuz_sila_bonus);
        localStorage.setItem('temp_sila', temp_sila);
        localStorage.setItem('zamtuz_sila_bonus_minus', zamtuz_sila_bonus_minus);
        localStorage.setItem('elixir_dodany', elixir_dodany);
        localStorage.setItem('miasto_odwiedzone', miasto_odwiedzone);
        localStorage.setItem('miasto_ucieczka', miasto_ucieczka);
        localStorage.setItem('jaki_skarb_event', jaki_skarb_event);
        localStorage.setItem('gdzie_zlecenie', gdzie_zlecenie);
        localStorage.setItem('kierunek_sprawdzony', kierunek_sprawdzony);
        localStorage.setItem('czy_walka', czy_walka);
        localStorage.setItem('energia_bosa', energia_bosa);
        localStorage.setItem('energia_zlecenie2', energia_zlecenie2);
        localStorage.setItem('grobowiec', grobowiec);
        localStorage.setItem('grobowiec_completed', grobowiec_completed);
        localStorage.setItem('skip_event', skip_event);
        localStorage.setItem('dziwka_zaliczona', dziwka_zaliczona);
        localStorage.setItem('golem_pokonany', golem_pokonany);
        localStorage.setItem('blob_pokonany', blob_pokonany);
        localStorage.setItem('typ_tla', typ_tla);
        localStorage.setItem('zadanie_lochy', zadanie_lochy);
        localStorage.setItem('lochy_wykonane', lochy_wykonane);
        localStorage.setItem('blob_completed', blob_completed);
        localStorage.setItem('zadanie_kupiec', zadanie_kupiec);
        localStorage.setItem('kupiec_wykonane', kupiec_wykonane);

        localStorage.setItem('zamykanie', zamykanie);
        localStorage.setItem('nazwa_pierscienia2', nazwa_pierscienia2);

        localStorage.setItem('wieza_klucz', wieza_klucz);
        localStorage.setItem('misja', misja);
        localStorage.setItem('zadanie_aktywne', zadanie_aktywne);
        localStorage.setItem('quest_wykonany_nr', quest_wykonany_nr);
        localStorage.setItem('misja_zadanie_wykonane', misja_zadanie_wykonane);
        localStorage.setItem('skrot_zamkniety', skrot_zamkniety);
        localStorage.setItem('plec_typ', plec_typ);
        localStorage.setItem('jaskinia_poziom', jaskinia_poziom);
        localStorage.setItem('cave_completed', cave_completed);
        localStorage.setItem('grom_plus', grom_plus);
        localStorage.setItem('rycerz_pokonany', rycerz_pokonany);
        localStorage.setItem('glejt', glejt);
        localStorage.setItem('grobowiec_poziom', grobowiec_poziom);
        localStorage.setItem('hp_grobowiec', hp_grobowiec);
        localStorage.setItem('atak_grobowiec', atak_grobowiec);
        localStorage.setItem('grave_poziom', grave_poziom);
        localStorage.setItem('hp_grave', hp_grave);
        localStorage.setItem('atak_grave', atak_grave);
        localStorage.setItem('grave_aktywny', grave_aktywny);
        localStorage.setItem('spider_dead', spider_dead);

localStorage.setItem('golem_pokonany', golem_pokonany);

localStorage.setItem('blob_pokonany', blob_pokonany);
localStorage.setItem('cave_completed', cave_completed);
localStorage.setItem('spider_pokonany', spider_pokonany);
localStorage.setItem('imie_postaci', imie_postaci);
localStorage.setItem('zlecenie_typ2', zlecenie_typ2);
localStorage.setItem('zlecenie_status2', zlecenie_status2);


localStorage.setItem('ring_1_name_kolor',    ring_1_name_kolor);
localStorage.setItem('ring_1_info',          ring_1_info);
localStorage.setItem('ring_1_value',         ring_1_value);
localStorage.setItem('ring_1_symbol',        ring_1_symbol);
localStorage.setItem('ring_2_name_kolor',    ring_2_name_kolor);
localStorage.setItem('ring_2_info',          ring_2_info);
localStorage.setItem('ring_2_value',         ring_2_value);
localStorage.setItem('ring_2_symbol',        ring_2_symbol);

localStorage.setItem('gdzie_zlecenie_nr',        gdzie_zlecenie_nr);

localStorage.setItem('wilga_dodana',        wilga_dodana);

localStorage.setItem('wilga_obrona',        wilga_obrona);
localStorage.setItem('nazwa_posiadanej_zbroi_magic',        nazwa_posiadanej_zbroi_magic);
localStorage.setItem('krypta_reached',        krypta_reached);
localStorage.setItem('cave_reached',        cave_reached);
localStorage.setItem('zabite_moby1',        zabite_moby1);

localStorage.setItem('potion_amount',        potion_amount);
  localStorage.setItem('potion2',        potion2);
localStorage.setItem('weapon_sell_value',        weapon_sell_value);
localStorage.setItem('tier_1',        tier_1);
 localStorage.setItem('krypta_skarb_done',        krypta_skarb_done);


 localStorage.setItem('zlecenie_name_temp',        zlecenie_name_temp);
 localStorage.setItem('zlecenie_resistant',        zlecenie_resistant);
 localStorage.setItem('cave_skarb',        cave_skarb);
 localStorage.setItem('tier_nagroda',        tier_nagroda);
 localStorage.setItem('rat_pokonany',        rat_pokonany);


 localStorage.setItem('bron_posiadana',        bron_posiadana);
 localStorage.setItem('zbroja_posiadana',        zbroja_posiadana);

  localStorage.setItem('armour_sell_value',        armour_sell_value);
   localStorage.setItem('misja_mag',        misja_mag);
    localStorage.setItem('bandyci',        bandyci);
     localStorage.setItem('bandyci_pokonani',        bandyci_pokonani);
    localStorage.setItem('glejt2',        glejt2);
      localStorage.setItem('miecz_wylosowany',        miecz_wylosowany);

      localStorage.setItem('mapa_skrot',        mapa_skrot);
     localStorage.setItem('mroczne_resist',        mroczne_resist);
    localStorage.setItem('piramida_poziom',        piramida_poziom);
     localStorage.setItem('tower_poziom',        tower_poziom);

       localStorage.setItem('znak_critical',        znak_critical);

    localStorage.setItem('dialog_nr',        dialog_nr);

     localStorage.setItem('artefacts',        artefacts);

     localStorage.setItem('bat_pokonany',        bat_pokonany);

     localStorage.setItem('bariera_odkryta',        bariera_odkryta);

     localStorage.setItem('ognista_kula',        ognista_kula);

    localStorage.setItem('skorpion_pokonany',        skorpion_pokonany);

     localStorage.setItem('sand_cave_poziom',        sand_cave_poziom);


     localStorage.setItem('miasto_nr3',        miasto_nr3);

      localStorage.setItem('xp_copy',        xp_copy);

     localStorage.setItem('explosion_21',        explosion_21);

      localStorage.setItem('gargulec_pokonany',        gargulec_pokonany);

     localStorage.setItem('cecha_na_zbroi',        cecha_na_zbroi);

     localStorage.setItem('nazwa_cechy',        nazwa_cechy);

     localStorage.setItem('cecha_wartosc',        cecha_wartosc);

     localStorage.setItem('sand_cave_completed',        sand_cave_completed);



     localStorage.setItem('jaskolka_upgrade',        jaskolka_upgrade);

     localStorage.setItem('grom_upgrade',        grom_upgrade);

     localStorage.setItem('wilga_upgrade',        wilga_upgrade);

     localStorage.setItem('mikstura_upgrade',        mikstura_upgrade);

    localStorage.setItem('nowy_atak2',        nowy_atak2);

    localStorage.setItem('nowy_atak_min2',        nowy_atak_min2);

    localStorage.setItem('extra_mikstura',        extra_mikstura);

     localStorage.setItem('nawiedzony_dom_wykonany',        nawiedzony_dom_wykonany);

     localStorage.setItem('kiedy_nowy_towar4',        kiedy_nowy_towar4);

     localStorage.setItem('hp_tower',        hp_tower);

    localStorage.setItem('cecha_broni_nadana',        cecha_broni_nadana);

    localStorage.setItem('atk_tower',        atk_tower);

    localStorage.setItem('cecha_broni_nazwa',        cecha_broni_nazwa);

    localStorage.setItem('mag_pokonany',        mag_pokonany);

     localStorage.setItem('mag_pokonany2',        mag_pokonany2);

     localStorage.setItem('mag_pokonany3',        mag_pokonany3);


      localStorage.setItem('alzur_pokonany',        alzur_pokonany);

    localStorage.setItem('obrona_extra',        obrona_extra);

    localStorage.setItem('celnosc',        celnosc);

    localStorage.setItem('unik',        unik);

    localStorage.setItem('szkola_kolor',        szkola_kolor);

     localStorage.setItem('nazwa_szkoly',        nazwa_szkoly);


         localStorage.setItem('mathea_end',        mathea_end);

 localStorage.setItem('mana_zamtuz',        mana_zamtuz);

    localStorage.setItem('graveyard_skonczony',        graveyard_skonczony);


    localStorage.setItem('event_mob_aktywny',        event_mob_aktywny);

    localStorage.setItem('moj_event',        moj_event);



}















function wczytaj_Zapis()
{


        ilosc_ziol = parseInt(localStorage.getItem('ilosc_ziol'));

        event_mob_aktywny = parseInt(localStorage.getItem('event_mob_aktywny'));
        moj_event = parseInt(localStorage.getItem('moj_event'));

        ilosc_skladnikow = parseInt(localStorage.getItem('ilosc_skladnikow'));
        herbs_amount = parseInt(localStorage.getItem('herbs_amount'));
        skladniki_amount = parseInt(localStorage.getItem('skladniki_amount'));
        skory_amount = parseInt(localStorage.getItem('skory_amount'));
        runy_amount = parseInt(localStorage.getItem('runy_amount'));
        level_amount = parseInt(localStorage.getItem('level_amount'));
        xp_req = parseInt(localStorage.getItem('xp_req'));
        xp_amount = parseInt(localStorage.getItem('xp_amount'));
        life_amount = parseInt(localStorage.getItem('life_amount'));
        life_max = parseInt(localStorage.getItem('life_max'));
        mana_amount = parseInt(localStorage.getItem('mana_amount'));
        manal_max = parseInt(localStorage.getItem('manal_max'));
        points_amount = parseInt(localStorage.getItem('points_amount'));
        magic_amount = parseInt(localStorage.getItem('magic_amount'));
        strenght_amount = parseInt(localStorage.getItem('strenght_amount'));
        gold_amount = parseInt(localStorage.getItem("gold_amount"));
        dead_monsters = parseInt(localStorage.getItem('dead_monsters'));
        xp_received = parseInt(localStorage.getItem('xp_received'));
        gold_received = parseInt(localStorage.getItem('gold_received'));
        enemy_level_amount = parseInt(localStorage.getItem('enemy_level_amount'));
        znak_hit = parseInt(localStorage.getItem('znak_hit'));
        mob_hp_xp = parseInt(localStorage.getItem('mob_hp_xp'));
        miecz_od = parseInt(localStorage.getItem('miecz_od'));
        miecz_do = parseInt(localStorage.getItem('combo_unlocmiecz_doked'));
        znak_od = parseInt(localStorage.getItem('znak_od'));
        znak_do = parseInt(localStorage.getItem('znak_do'));
        min_atak = parseInt(localStorage.getItem('min_atak'));
        max_atak = parseInt(localStorage.getItem('max_atak'));
        koszt_zycie = parseInt(localStorage.getItem('koszt_zycie'));
        koszt_magia = parseInt(localStorage.getItem('koszt_magia'));
        koszt_sila = parseInt(localStorage.getItem('koszt_sila'));
        koszt_mana = parseInt(localStorage.getItem('koszt_mana'));
        magic_bonus = parseInt(localStorage.getItem('magic_bonus'));
        sila_bonus = parseInt(localStorage.getItem('sila_bonus'));

        zlecenie_typ = localStorage.getItem('zlecenie_typ');
        zlecenie_status = localStorage.getItem('zlecenie_status');
        kupno_miecza_max_add = parseInt(localStorage.getItem('kupno_miecza_max_add'));

        ring_value1 = parseInt(localStorage.getItem('ring_value1'));
        ring_value2 = parseInt(localStorage.getItem('ring_value2'));
        ring_value3 = parseInt(localStorage.getItem('ring_value3'));
        ring_value4 = parseInt(localStorage.getItem('ring_value4'));
        ring_value5 = parseInt(localStorage.getItem('ring_value5'));
        ring_value6 = parseInt(localStorage.getItem('ring_value6'));
        ring_value7 = parseInt(localStorage.getItem('ring_value7'));
        ring_value8 = parseInt(localStorage.getItem('ring_value8'));
        ring_1_nr = parseInt(localStorage.getItem('ring_1_nr'));
        ring_2_nr = parseInt(localStorage.getItem('ring_2_nr'));
        ring_3_nr = parseInt(localStorage.getItem('ring_3_nr'));


        reszta = localStorage.getItem('reszta');
        reszta2 = localStorage.getItem('reszta2');
        reszta3 = localStorage.getItem('reszta3');
        atak_moba_min = parseInt(localStorage.getItem('atak_moba_min'));
        atak_moba_max = parseInt(localStorage.getItem('atak_moba_max'));
        jaskolka_amount = parseInt(localStorage.getItem('jaskolka_amount'));
        puszczyk_amount = parseInt(localStorage.getItem('puszczyk_amount'));
        wilga_amount = parseInt(localStorage.getItem('wilga_amount'));
        grom_amount = parseInt(localStorage.getItem('grom_amount'));
        eliksir_walki_amount = parseInt(localStorage.getItem('eliksir_walki_amount'));
        eliksir_inny_walki_amount = parseInt(localStorage.getItem('eliksir_inny_walki_amount'));
        jaskolka = parseInt(localStorage.getItem('jaskolka'));
        puszczyk = parseInt(localStorage.getItem('puszczyk'));
        wilga = parseInt(localStorage.getItem('wilga'));
        grom = parseInt(localStorage.getItem('grom'));
        liczba_do_ataku1 = parseInt(localStorage.getItem('liczba_do_ataku1'));
        min_1 = parseInt(localStorage.getItem('min_1'));
        max_2 = parseInt(localStorage.getItem('max_2'));
        heal_cost = parseInt(localStorage.getItem('heal_cost'));
        zlecenie_aktywne = parseInt(localStorage.getItem('zlecenie_aktywne'));
        mob_hp_extra = parseInt(localStorage.getItem('mob_hp_extra'));
        mob_min_extra = parseInt(localStorage.getItem('mob_min_extra'));
        mob_max_extra = parseInt(localStorage.getItem('mob_max_extra'));
        zlecenie_completed = parseInt(localStorage.getItem('zlecenie_completed'));
        mob_hp_escape = parseInt(localStorage.getItem('mob_hp_escape'));
        zlecenie_aktywne_2 = parseInt(localStorage.getItem('zlecenie_aktywne_2'));
        level_amount_req = parseInt(localStorage.getItem('level_amount_req'));
        extra_level = parseInt(localStorage.getItem('extra_level'));
        extra_gold_za_zadanie = parseInt(localStorage.getItem('extra_gold_za_zadanie'));
        extra_xp_za_zadanie = parseInt(localStorage.getItem('extra_xp_za_zadanie'));
        gold_do_wyplaty = parseInt(localStorage.getItem('gold_do_wyplaty'));
        xp_do_wyplaty = parseInt(localStorage.getItem('xp_do_wyplaty'));
        zadanie_gold = parseInt(localStorage.getItem('zadanie_gold'));
        zadanie_xp = parseInt(localStorage.getItem('zadanie_xp'));
        zabity_potwor_ze_zlecenia = parseInt(localStorage.getItem('zabity_potwor_ze_zlecenia'));
        miecz_do_kupienia = parseInt(localStorage.getItem('miecz_do_kupienia'));
        miecz_kupiony = parseInt(localStorage.getItem('miecz_kupiony'));
        min_atak_new = parseInt(localStorage.getItem('min_atak_new'));
        max_atak_new = parseInt(localStorage.getItem('max_atak_new'));
        nazwa_posiadanej_broni = localStorage.getItem('nazwa_posiadanej_broni');
        ulepszenie_obecne = parseInt(localStorage.getItem('ulepszenie_obecne'));
        ulepszenie_max = parseInt(localStorage.getItem('ulepszenie_max'));
        wymagane_runy = parseInt(localStorage.getItem('wymagane_runy'));
        co_jest_ulepszane = localStorage.getItem('co_jest_ulepszane');
        co_jest_ulepszane_check = parseInt(localStorage.getItem('co_jest_ulepszane_check'));
        cen_miecza = parseInt(localStorage.getItem('cen_miecza'));
        upgrade_gold = parseInt(localStorage.getItem('upgrade_gold'));
        koniec_kosci = parseInt(localStorage.getItem('koniec_kosci'));
        za_ile_gra = parseInt(localStorage.getItem('za_ile_gra'));
        schemat = parseInt(localStorage.getItem('schemat'));
        zbroja_do_kupienia = parseInt(localStorage.getItem('zbroja_do_kupienia'));
        zbroja_obrona = parseInt(localStorage.getItem('zbroja_obrona'));
        obrona_extra_level_min = parseInt(localStorage.getItem('obrona_extra_level_min'));
        obrona_extra_level_max = parseInt(localStorage.getItem('obrona_extra_level_max'));
        cen_zbroi = parseInt(localStorage.getItem('cen_zbroi'));
        ile_skor = parseInt(localStorage.getItem('ile_skor'));
        ulepszenie_obecne_zbroi = parseInt(localStorage.getItem('ulepszenie_obecne_zbroi'));
        wymagane_runy_do_zbroi = parseInt(localStorage.getItem('wymagane_runy_do_zbroi'));
        upgrade_zbroja_gold = parseInt(localStorage.getItem('upgrade_zbroja_gold'));
        co_jest_ulepszane_check2 = parseInt(localStorage.getItem('co_jest_ulepszane_check2'));
        co_jest_ulepszane2 = localStorage.getItem('co_jest_ulepszane2');
        ulepszenie_obecne2 = parseInt(localStorage.getItem('ulepszenie_obecne2'));
        nazwa_posiadanej_zbroi = localStorage.getItem('nazwa_posiadanej_zbroi');
        zbroja_kupiona = parseInt(localStorage.getItem('zbroja_kupiona'));
        obrona_temp = parseInt(localStorage.getItem('obrona_temp'));
        nr_zlecenia = parseInt(localStorage.getItem('nr_zlecenia'));
        redukcja_obrazen = parseInt(localStorage.getItem('redukcja_obrazen'));
       wilga_dodana = parseInt(localStorage.getItem('wilga_dodana'));


        ring_1_info = localStorage.getItem('ring_1_info');
        ring_1_value = parseInt(localStorage.getItem('ring_1_value'));
        ring_1_symbol = localStorage.getItem('ring_1_symbol');


        ring_2_info = localStorage.getItem('ring_2_info');
        ring_2_value = parseInt(localStorage.getItem('ring_2_value'));
        ring_2_symbol = localStorage.getItem('ring_2_symbol');

        ring_1_aktywny = parseInt(localStorage.getItem('ring_1_aktywny'));
        ring_2_aktywny = parseInt(localStorage.getItem('ring_2_aktywny'));



        both_rings_active = parseInt(localStorage.getItem('both_rings_active'));
        nr_pierscienia_do_kupienia = parseInt(localStorage.getItem('nr_pierscienia_do_kupienia'));

        ring_1_cena = parseInt(localStorage.getItem('ring_1_cena'));
        ring_2_cena = parseInt(localStorage.getItem('ring_2_cena'));
        ring_3_cena = parseInt(localStorage.getItem('ring_3_cena'));

        jaki_pierscien1 = localStorage.getItem('jaki_pierscien1');
        jaki_pierscien2 = localStorage.getItem('jaki_pierscien2');

        check_magia = parseInt(localStorage.getItem('check_magia'));
        check_magia2 = parseInt(localStorage.getItem('check_magia2'));
        obecny1 = localStorage.getItem('obecny1');
        obecny2 = localStorage.getItem('obecny2');
        bonus1_dodany = parseInt(localStorage.getItem('bonus1_dodany'));
        bonus2_dodany = parseInt(localStorage.getItem('bonus2_dodany'));
        mana_koszt = parseInt(localStorage.getItem('mana_koszt'));
        extra_gold_ring = parseInt(localStorage.getItem('extra_gold_ring'));
        extra_gold_ring_amount = parseInt(localStorage.getItem('extra_gold_ring_amount'));
        extra_life = parseInt(localStorage.getItem('extra_life'));
        extra_mana = parseInt(localStorage.getItem('extra_mana'));
        extra_xp_ring = parseInt(localStorage.getItem('extra_xp_ring'));
        extra_xp_ring_amount = parseInt(localStorage.getItem('extra_xp_ring_amount'));
        furia_amount = parseInt(localStorage.getItem('furia_amount'));
        cena_1_na_odsprzedanie = parseInt(localStorage.getItem('cena_1_na_odsprzedanie'));
        cena_2_na_odsprzedanie = parseInt(localStorage.getItem('cena_2_na_odsprzedanie'));
        zaokraglone1 = parseInt(localStorage.getItem('zaokraglone1'));
        zaokraglone2 = parseInt(localStorage.getItem('zaokraglone2'));
        zaokraglone3 = parseInt(localStorage.getItem('zaokraglone3'));
        zaokraglone4 = parseInt(localStorage.getItem('zaokraglone4'));
        energia_zlecenie = parseInt(localStorage.getItem('energia_zlecenie'));
        zlecenie_min = parseInt(localStorage.getItem('zlecenie_min'));
        zlecenie_max = parseInt(localStorage.getItem('zlecenie_max'));
        losuj_pierscien = parseInt(localStorage.getItem('losuj_pierscien'));
        ile_walk_zaliczonych = parseInt(localStorage.getItem('ile_walk_zaliczonych'));
        ile_walk_zaliczonych2 = parseInt(localStorage.getItem('ile_walk_zaliczonych2'));
        ile_walk_zaliczonych3 = parseInt(localStorage.getItem('ile_walk_zaliczonych3'));
        ile_walk_zaliczonych4 = parseInt(localStorage.getItem('ile_walk_zaliczonych4'));
        elixir_obrony_aktywny = parseInt(localStorage.getItem('elixir_obrony_aktywny'));
        zbroja_obrona_bonus = parseInt(localStorage.getItem('zbroja_obrona_bonus'));
        nagroda_specjalna_wzieta = parseInt(localStorage.getItem('nagroda_specjalna_wzieta'));
        suma_zbroi_i_bonusu = parseInt(localStorage.getItem('suma_zbroi_i_bonusu'));
        odglos_obrony = parseInt(localStorage.getItem('odglos_obrony'));
        kiedy_nowy_towar = parseInt(localStorage.getItem('kiedy_nowy_towar'));
        kiedy_nowy_towar2 = parseInt(localStorage.getItem('kiedy_nowy_towar2'));
        kiedy_nowy_towar3 = parseInt(localStorage.getItem('kiedy_nowy_towar3'));
        gold_received_extra = parseInt(localStorage.getItem('gold_received_extra'));
        gold_temp = parseInt(localStorage.getItem('gold_temp'));
        xp_received_extra = parseInt(localStorage.getItem('xp_received_extra'));
        xp_temp = parseInt(localStorage.getItem('xp_temp'));
        kupiec_kosci = parseInt(localStorage.getItem('kupiec_kosci'));
        nagroda_specjalna = parseInt(localStorage.getItem('nagroda_specjalna'));
        bonus_do_obrony = parseInt(localStorage.getItem('bonus_do_obrony'));
        walka_nr = parseInt(localStorage.getItem('walka_nr'));

        sprzedaj_i_kup = parseInt(localStorage.getItem('sprzedaj_i_kup'));
        ilosc1a = parseInt(localStorage.getItem('ilosc1a'));
        ilosc1b = parseInt(localStorage.getItem('ilosc1b'));
        ilosc2a = parseInt(localStorage.getItem('ilosc2a'));
        ilosc2b = parseInt(localStorage.getItem('ilosc2b'));
        ilosc3a = parseInt(localStorage.getItem('ilosc3a'));
        ilosc3b = parseInt(localStorage.getItem('ilosc3b'));
        ilosc4a = parseInt(localStorage.getItem('ilosc4a'));
        ilosc4b = parseInt(localStorage.getItem('ilosc4b'));
        kupiec_start = parseInt(localStorage.getItem('kupiec_start'));
        zbroja_magiczna_obrona = parseInt(localStorage.getItem('zbroja_magiczna_obrona'));
        zbroja_magiczna_zycie = parseInt(localStorage.getItem('zbroja_magiczna_zycie'));
        nazwa_magicznej_zbroi = localStorage.getItem('nazwa_magicznej_zbroi');
        zbroja_magiczna_do_kupienia = parseInt(localStorage.getItem('zbroja_magiczna_do_kupienia'));
        zbroja_magiczna_aktywna = parseInt(localStorage.getItem('zbroja_magiczna_aktywna'));
        zbroja_magiczna_zycie2 = parseInt(localStorage.getItem('zbroja_magiczna_zycie2'));
        critic_amount = parseInt(localStorage.getItem('critic_amount'));
        szansa_na_krytyczne = parseInt(localStorage.getItem('szansa_na_krytyczne'));
        cios_krytyczny = parseInt(localStorage.getItem('cios_krytyczny'));
        kosci_rzucone = parseInt(localStorage.getItem('kosci_rzucone'));
        jaki_opis = parseInt(localStorage.getItem('jaki_opis'));
        jaki_numer = parseInt(localStorage.getItem('jaki_numer'));
        jaki_opis2 = parseInt(localStorage.getItem('jaki_opis2'));
        jaki_numer2 = parseInt(localStorage.getItem('jaki_numer2'));
        jaki_opis3 = parseInt(localStorage.getItem('jaki_opis3'));
        jaki_numer3 = parseInt(localStorage.getItem('jaki_numer3'));
        zamtuz_sila_bonus = parseInt(localStorage.getItem('zamtuz_sila_bonus'));
        temp_sila = parseInt(localStorage.getItem('temp_sila'));
        zamtuz_sila_bonus_minus = parseInt(localStorage.getItem('zamtuz_sila_bonus_minus'));
        elixir_dodany = parseInt(localStorage.getItem('elixir_dodany'));
        miasto_odwiedzone = parseInt(localStorage.getItem('miasto_odwiedzone'));
        miasto_ucieczka = parseInt(localStorage.getItem('miasto_ucieczka'));
        jaki_skarb_event = parseInt(localStorage.getItem('jaki_skarb_event'));
        gdzie_zlecenie = parseInt(localStorage.getItem('gdzie_zlecenie'));
        kierunek_sprawdzony = parseInt(localStorage.getItem('kierunek_sprawdzony'));
        czy_walka = parseInt(localStorage.getItem('czy_walka'));
        energia_bosa = parseInt(localStorage.getItem('energia_bosa'));
        energia_zlecenie2 = parseInt(localStorage.getItem('energia_zlecenie2'));
        grobowiec = parseInt(localStorage.getItem('grobowiec'));

        skip_event = parseInt(localStorage.getItem('skip_event'));
        dziwka_zaliczona = parseInt(localStorage.getItem('dziwka_zaliczona'));
        golem_pokonany = parseInt(localStorage.getItem('golem_pokonany'));
        blob_pokonany = parseInt(localStorage.getItem('blob_pokonany'));
        typ_tla = parseInt(localStorage.getItem('typ_tla'));
        zadanie_lochy = parseInt(localStorage.getItem('zadanie_lochy'));
        lochy_wykonane = parseInt(localStorage.getItem('lochy_wykonane'));
        blob_completed = parseInt(localStorage.getItem('blob_completed'));
        zadanie_kupiec = parseInt(localStorage.getItem('zadanie_kupiec'));
        kupiec_wykonane = parseInt(localStorage.getItem('kupiec_wykonane'));

        zamykanie = parseInt(localStorage.getItem('zamykanie'));

       wieza_klucz = parseInt(localStorage.getItem('wieza_klucz'));
        misja = parseInt(localStorage.getItem('misja'));
        zadanie_aktywne = parseInt(localStorage.getItem('zadanie_aktywne'));
        quest_wykonany_nr = parseInt(localStorage.getItem('quest_wykonany_nr'));
        misja_zadanie_wykonane = parseInt(localStorage.getItem('misja_zadanie_wykonane'));
        skrot_zamkniety = parseInt(localStorage.getItem('skrot_zamkniety'));
        plec_typ = parseInt(localStorage.getItem('plec_typ'));
        jaskinia_poziom = parseInt(localStorage.getItem('jaskinia_poziom'));
        cave_completed = parseInt(localStorage.getItem('cave_completed'));
        grom_plus = parseInt(localStorage.getItem('grom_plus'));


        rycerz_pokonany = parseInt(localStorage.getItem('rycerz_pokonany'));
        glejt = parseInt(localStorage.getItem('glejt'));
        grobowiec_poziom = parseInt(localStorage.getItem('grobowiec_poziom'));
        hp_grobowiec = parseInt(localStorage.getItem('hp_grobowiec'));
        atak_grobowiec = parseInt(localStorage.getItem('atak_grobowiec'));
        grave_poziom = parseInt(localStorage.getItem('grave_poziom'));
        hp_grave = parseInt(localStorage.getItem('hp_grave'));
        atak_grave = parseInt(localStorage.getItem('atak_grave'));
        grave_aktywny = parseInt(localStorage.getItem('grave_aktywny'));
        spider_dead = parseInt(localStorage.getItem('spider_dead'));


        golem_pokonany = parseInt(localStorage.getItem('golem_pokonany'));
        grobowiec_completed = parseInt(localStorage.getItem('grobowiec_completed'));
        blob_pokonany = parseInt(localStorage.getItem('blob_pokonany'));
        cave_completed = parseInt(localStorage.getItem('cave_completed'));
        spider_pokonany = parseInt(localStorage.getItem('spider_pokonany'));


imie_postaci =   localStorage.getItem('imie_postaci');
zlecenie_typ2 =  localStorage.getItem('zlecenie_typ2');
zlecenie_status2 =  localStorage.getItem('zlecenie_status2');

ring_1_value =   parseInt(localStorage.getItem('ring_1_value'));
ring_2_value =   parseInt(localStorage.getItem('ring_2_value'));

gdzie_zlecenie_nr =   parseInt(localStorage.getItem('gdzie_zlecenie_nr'));
wilga_obrona =   parseInt(localStorage.getItem('wilga_obrona'));
krypta_reached =   parseInt(localStorage.getItem('krypta_reached'));
cave_reached =   parseInt(localStorage.getItem('cave_reached'));



ring_1_name_kolor =   localStorage.getItem('ring_1_name_kolor');
ring_1_info =  localStorage.getItem('ring_1_info');
ring_1_symbol =  localStorage.getItem('ring_1_symbol');
ring_2_name_kolor =   localStorage.getItem('ring_2_name_kolor');
ring_2_info =  localStorage.getItem('ring_2_info');
ring_2_symbol =  localStorage.getItem('ring_2_symbol');

    nazwa_pierscienia =   localStorage.getItem('nazwa_pierscienia');
nazwa_pierscienia2 =   localStorage.getItem('nazwa_pierscienia2');
  nazwa_posiadanej_zbroi_magic =   localStorage.getItem('nazwa_posiadanej_zbroi_magic');
  zabite_moby1 =    parseInt(localStorage.getItem('zabite_moby1'));


	potion_amount =   parseInt(localStorage.getItem('potion_amount'));
	weapon_sell_value =    parseInt(localStorage.getItem('weapon_sell_value'));
	potion2 =  parseInt(localStorage.getItem('potion2'));
	tier_1 =  parseInt(localStorage.getItem('tier_1'));
krypta_skarb_done =  parseInt(localStorage.getItem('krypta_skarb_done'));
    cave_skarb =  parseInt(localStorage.getItem('cave_skarb'));

rat_pokonany =  parseInt(localStorage.getItem('rat_pokonany'));
 zlecenie_name_temp =   localStorage.getItem('zlecenie_name_temp');

     nazwa_cechy =   localStorage.getItem('nazwa_cechy');



 zlecenie_resistant =   localStorage.getItem('zlecenie_resistant');

 tier_nagroda =  parseInt(localStorage.getItem('tier_nagroda'));
 bron_posiadana =  parseInt(localStorage.getItem('bron_posiadana'));
zbroja_posiadana =  parseInt(localStorage.getItem('zbroja_posiadana'));

armour_sell_value =  parseInt(localStorage.getItem('armour_sell_value'));

piramida_nagroda =  parseInt(localStorage.getItem('piramida_nagroda'));

misja_mag =  parseInt(localStorage.getItem('misja_mag'));
  bandyci =  parseInt(localStorage.getItem('bandyci'));
   bandyci_pokonani =  parseInt(localStorage.getItem('bandyci_pokonani'));
     glejt2 =  parseInt(localStorage.getItem('glejt2'));
     miecz_wylosowany =  parseInt(localStorage.getItem('miecz_wylosowany'));
     mapa_skrot =  parseInt(localStorage.getItem('mapa_skrot'));
    mroczne_resist =  parseInt(localStorage.getItem('mroczne_resist'));
     piramida_poziom =  parseInt(localStorage.getItem('piramida_poziom'));
    tower_poziom =  parseInt(localStorage.getItem('tower_poziom'));

     znak_critical =  parseInt(localStorage.getItem('znak_critical'));
    dialog_nr =  parseInt(localStorage.getItem('dialog_nr'));
    artefacts =  parseInt(localStorage.getItem('artefacts'));
     bat_pokonany =  parseInt(localStorage.getItem('bat_pokonany'));
    bariera_odkryta =  parseInt(localStorage.getItem('bariera_odkryta'));
     ognista_kula =  parseInt(localStorage.getItem('ognista_kula'));

    skorpion_pokonany =  parseInt(localStorage.getItem('skorpion_pokonany'));
     sand_cave_poziom =  parseInt(localStorage.getItem('sand_cave_poziom'));



    miasto_nr3 =  parseInt(localStorage.getItem('miasto_nr3'));

     xp_copy =  parseInt(localStorage.getItem('xp_copy'));
    explosion_21 =  parseInt(localStorage.getItem('explosion_21'));

     gargulec_pokonany =  parseInt(localStorage.getItem('gargulec_pokonany'));

     cecha_na_zbroi =  parseInt(localStorage.getItem('cecha_na_zbroi'));



      cecha_wartosc =  parseInt(localStorage.getItem('cecha_wartosc'));
      sand_cave_completed =  parseInt(localStorage.getItem('sand_cave_completed'));


     jaskolka_upgrade =  parseInt(localStorage.getItem('jaskolka_upgrade'));

     grom_upgrade =  parseInt(localStorage.getItem('grom_upgrade'));

     wilga_upgrade =  parseInt(localStorage.getItem('wilga_upgrade'));

    mikstura_upgrade =  parseInt(localStorage.getItem('mikstura_upgrade'));
    nowy_atak2 =  parseInt(localStorage.getItem('nowy_atak2'));
    nowy_atak_min2 =  parseInt(localStorage.getItem('nowy_atak_min2'));
     extra_mikstura =  parseInt(localStorage.getItem('extra_mikstura'));
     nawiedzony_dom_wykonany =  parseInt(localStorage.getItem('nawiedzony_dom_wykonany'));

    kiedy_nowy_towar4 =  parseInt(localStorage.getItem('kiedy_nowy_towar4'));

mathea_end =  parseInt(localStorage.getItem('mathea_end'));

     hp_tower =  parseInt(localStorage.getItem('hp_tower'));
     atk_tower =  parseInt(localStorage.getItem('atk_tower'));

     mag_pokonany =  parseInt(localStorage.getItem('mag_pokonany'));


     mag_pokonany2 =  parseInt(localStorage.getItem('mag_pokonany2'));

     mag_pokonany3 =  parseInt(localStorage.getItem('mag_pokonany3'));

    alzur_pokonany =  parseInt(localStorage.getItem('alzur_pokonany'));

     obrona_extra =  parseInt(localStorage.getItem('obrona_extra'));

    celnosc =  parseInt(localStorage.getItem('celnosc'));

    unik =  parseInt(localStorage.getItem('unik'));
        mana_zamtuz =  parseInt(localStorage.getItem('mana_zamtuz'));

     graveyard_skonczony =  parseInt(localStorage.getItem('graveyard_skonczony'));



      cecha_broni_nadana =   localStorage.getItem('cecha_broni_nadana');

     cecha_broni_nazwa =   localStorage.getItem('cecha_broni_nazwa');

    cecha_broni_nazwa =   localStorage.getItem('cecha_broni_nazwa');

    nazwa_szkoly =   localStorage.getItem('nazwa_szkoly');



      document.getElementById("level").innerHTML = nazwa_szkoly;

    po_walce=0;

    losuj_pierscien=1;



    if(gdzie_zlecenie_nr>0)
    zlecenie_gif();

        if(ring_1_aktywny==1)
        nazwa_pierscienia = ring_1_name;
        if(ring_2_aktywny==1)
        nazwa_pierscienia2 = ring_2_name;

        if(ring_1_aktywny==1)
        bonus1_dodany=1;
        if(ring_2_aktywny==1)
        bonus2_dodany=1;
        if(ring_1_aktywny==1)
        ring_1_name= nazwa_pierscienia;
        if(ring_2_aktywny==1)
        ring_2_name = nazwa_pierscienia2;





    save_loaded=1;




    save_loaded=0;


            if(jaskolka==1)
            {
            document.getElementById("eliksir_info").innerHTML = "Regeneruje  życie (1 + poziom postaci)";
                if(jaskolka_upgrade==1)
                      document.getElementById("eliksir_info").innerHTML = "Regeneruje  życie (3 + poziom postaci)";
            document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
            }

            if(puszczyk==1)
            {
            document.getElementById("eliksir_info").innerHTML =  "Regeneruje koncentrację o 2 na turę";
            document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
            }
            if(wilga==1)
            {
            document.getElementById("eliksir_info").innerHTML = "Obrona + 5 i redukcja obrażenia o 30%";
                if(wilga_upgrade==1)
                       document.getElementById("eliksir_info").innerHTML = "Obrona + 10 i redukcja obrażenia o 30%";
            document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
            }






            if(grom==1)
            {
            document.getElementById("eliksir_info").innerHTML = "Atak " + nowy_atak_min2 + " - " + nowy_atak2 +", blokuje o 50% wzrost "+ '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>';

            document.getElementById("eliksir_walki").innerHTML = "Ilość walk:" + " " + eliksir_walki_amount;
            }

        if(eliksir_walki_amount==0)
        {
            document.getElementById("eliksir_info").innerHTML = "--";
            document.getElementById("eliksir_walki").innerHTML = "Ilość walk:--";
        }


    if((miecz_wylosowany==undefined)||(miecz_wylosowany==NaN))
    miecz_wylosowany=0;



    if((mapa_skrot==undefined)||(mapa_skrot==NaN))
        mapa_skrot=0;

     if((mroczne_resist==undefined)||(mroczne_resist==NaN))
        mroczne_resist="none";

      if((mroczne_resist==undefined)||(mroczne_resist==NaN))
        mroczne_resist="none";

     if((cecha_na_zbroi==undefined)||(cecha_na_zbroi==NaN))
        cecha_na_zbroi=0;;


if(( nazwa_cechy==undefined)||( nazwa_cechy==NaN))
         nazwa_cechy ="none";



if(( cecha_wartosc==undefined)||( cecha_wartosc==NaN))
         cecha_wartosc =0;;












     document.getElementById("armour").innerHTML ="Zbroja (wartość "+armour_sell_value+ ")";


 status_zadan_mapa();

}




function status_zadan_mapa()
{

if((quest_wykonany_nr==0)&&(misja==1))
{

$("#nagrobek").fadeIn(0);
$("#arrow").fadeIn(0);
}

if((quest_wykonany_nr==1)&&(misja==2))
{
$("#blob").fadeIn(0);
$("#arrow2").fadeIn(0);
}


if((quest_wykonany_nr==2)&&(misja==3))
$("#arrow3").fadeIn(0);


if((quest_wykonany_nr==3)&&(misja==4))
{
    $("#rycerz").fadeIn(0);
    $("#soldier").fadeOut(0);
   $("#arrow4").fadeIn(0);
}



if((rycerz_pokonany==1)&&(gif_zoom_out==0))
$("#rycerz").fadeOut(0);

if((spider_dead==1)&&(gif_zoom_out==0))
{
$("#spider").fadeOut(0);
}

if((golem_pokonany==1)&&(gif_zoom_out==0))
{
$("#golem").fadeOut(0);
}


if(kupiec_wykonane==1)
{
$("#dym2").fadeIn(0);
$("#dom").fadeIn(0);
}

if((quest_wykonany_nr==4)||(misja==5))
$("#arrow5").fadeOut(0);


if(krypta_skarb_done==1)
$("#nagrobek").fadeOut(0);

if(cave_completed==1)
$("#jaskinia_level").fadeIn(0);

if(cave_skarb==1)
$("#jaskinia_level").fadeOut(0);

if(misja_mag==1)
  $("#mag").fadeIn(0);


    if(nawiedzony_dom_wykonany==1)
        $("#arrow4").fadeOut(0);


    if(misja==9)
         $("#alzur").fadeIn(0);

    if(alzur_pokonany==1)
          $("#alzur").fadeOut(0);

}







				function mapa()
				{


if((typ_tla==27)&&(event_mob_aktywny==2))
{



event_chest();
typ_tla=0;


}



if(extra_skarb==1)
    {
        extra_skarb=0;

            zdarzenie_pokaz();
        skarb_check(rodzaj_skarbu,min_wartosc,max_wartosc);
    }


                if(legowisko==0)
                {
                ilosc_potworow=1;
                document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow;
                }
                document.getElementById("enemy_amount").innerHTML = "Ilość potworów: 1";

                setTimeout(fireball_hit, 2000);


                xp_copy = xp_amount;
                document.getElementById("zdarzenie_open").style.pointerEvents="auto";
                alchemik.stop();

                save=0;

				xp_value=0;
				flawless=1;
				cave_krasnolud.stop();
				if(kierunek==20)
				 $("#player").transition({ y: -227, x: 263},100,'linear');

				if(cave_completed==0)
				{
				cave_attack=1;
				cave_hp=5;
				jaskinia_poziom=0;
				}

				document.getElementById("zlecenie_slot").style.borderStyle = "solid";
				document.getElementById("lokacja").style.borderStyle = "solid";
				document.getElementById("medytacja").style.borderStyle = "solid";
				document.getElementById('krypta_poziom').innerHTML= grobowiec_poziom + "/12";
				document.getElementById('jaskinia_level').innerHTML= jaskinia_poziom + "/12";
				document.getElementById('tower_poziom_info').innerHTML= tower_poziom + "/10";
				document.getElementById('piramida_level').innerHTML= piramida_poziom + "/12";
                  document.getElementById('sand_cave_level').innerHTML= sand_cave_poziom + "/15";

				document.getElementById('zabicia').innerHTML=zabite_moby1 + "/28";
				kowal_sfx.stop();
				$("#zdarzenie_open").fadeIn(0);
				document.getElementById('player').className = "fight_over";
				$("#tlo_test").fadeOut(0);
				document.getElementById('tlo_test').className = "fight_over";

				setTimeout(zindex, 1000);


				battle_active=0;
				grobowiec_aktywny=0;
				life_check();
				document.getElementById("medytacja_menu").style.pointerEvents="auto";
                document.getElementById("medytacja_menu").onclick = function() {medytacja_pokaz()};
                document.getElementById("info").style.pointerEvents="auto";
                document.getElementById("info").onclick = function() {inventory_pokaz()};



				tower_nagroda=2;
				piramida_active=0;
				grave_aktywny=0;
				jaskinia_aktywna=0;
				tower_active=0;
                 sand_cave_active=0;

				if(grobowiec_completed==0)
				grobowiec_poziom=0;

				if((cave_completed==0)&&(jaskinia_poziom!=6))
				jaskinia_poziom=0;


				grave_poziom=0;
				cave_sfx.stop();
				cmentarz1.stop();
				typ_tla=0;
				$("#okno_teren").fadeOut(0);

				$("#cala_mapa").fadeIn(500);

				cmentarz1.stop();

				wiatr.play();
				kupiec_music.stop();
				music_ambient.stop();
                music_ambient.play();
				eventy();
				po_evencie();
				$("#nagrobek").fadeIn(0);

				miasto_event2();
				status_zadan_mapa();
				sprawdz_kierunki_aktywne();
				arrow_check();



                    pokaz_informacje();


				zanik_obiektow();

				if(gif_zoom_out==1)
				setTimeout(gif_out, 400);







				}

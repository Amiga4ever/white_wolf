                    function kto_atakuje() {
                    var tura = Math.floor(Math.random() * 2) + 1;
                    if (tura == 1)
                    kto_uderza = 1;
                    else
                    kto_uderza = 2;
                    }


                    function walka_X() {
                    kroki();
                    $("#lokacja").fadeOut(500);
                    $("#medytacja").fadeOut(500);
                    $("#miasto").fadeOut(500);
                    $("#tekst").fadeOut(500);
                    $("#zlecenie_slot").fadeOut(500);
                    typ_tla = 11;

                    setTimeout(walka_X2, 0);
                    }

                    function walka_X2() {
                    zlecenie_aktywne = 1;
                    energia_bosa = 1;
                    typ_tla = 11;
                    xp_value = 9;
                    walka2();
                    }

                    function walka() {
             
                    document.getElementById("potion_walka").innerHTML = "+10 leczenie " + potion2 + "/" + potion_amount;
                    potion_check();    
                    zakres_ataku_potwora();
                    losuj_potwora();
                    battle_sfx.play();
                    walka2();
                    }

                    function walka2() {
                  medytacja_zanik();
                    $("#player").transition({ scale:1}, 500, 'ease');
                    $("#enemy_name").transition({scale:1, opacity: 1},1000,'linear');
                    potion_check();
                    document.getElementById("potion_walka").innerHTML = "+10 leczenie " + potion2 + "/" + potion_amount;
                    $("#tlo_test").fadeOut(0);
                    document.getElementById('tlo_test').className = "fight_over";
                    battle_active = 0;
                    document.getElementById("ucieczka").style.color = "skyblue";
                    document.getElementById("ucieczka").style.pointerEvents = 'auto';
                    music_ambient.stop();
                    cmentarz1.stop();
                    $("#okno_teren").fadeOut(0);
                    $("#cala_mapa").fadeOut(0);
                    if (zlecenie_aktywne == 1)
                    dracula.play();
                    document.getElementById("atak_mieczem").style.pointerEvents = 'auto';
                    document.getElementById("atak_znakiem").style.pointerEvents = 'auto';
                    if (mana_amount < 0)
                    mana_amount = 0;
                    czy_pudlo();
                    miecz_znak();
                    znak_od_copy= znak_od;
                    znak_do_copy= znak_do;
                        boost=1;
                    znak_boost();





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

                    document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
                    walk1.stop();
                    walk2.stop();
                    walk3.stop();
                    wiatr.stop();

                    document.getElementById("atak_znakiem").style.pointerEvents = 'auto';

                    $("#panel_walki").fadeIn(300);
                    $("#panel_walki").transition({ scale:1,opacity:1}, 500, 'ease');

         




                    switch (typ_tla) {
                    case 1: //BLOB
                    xp_value = 9;
                    battle_sfx.stop();
                    boss.play();
                    document.getElementById("enemy_name").className = "flash7";
                    losuj_potwora(60, '~Blob~', 'sword');
                    zakres_ataku_potwora(3, 8);
                    document.getElementById("strona_novigard").style.backgroundImage = "url('bagna.jpg')";
                    break;

                    case 2:
                    xp_value = 7;
                    battle_sfx.stop();
                    boss.play();
                    losuj_potwora(65, '~Golem strażniczy~', 'magic');
                    document.getElementById("enemy_name").className = "flash7";
                    zakres_ataku_potwora(3, 8);
                    document.getElementById("strona_novigard").style.backgroundImage = "url('tlo_walki.jpg')";
                    break;

                    case 3:
                    xp_value = 9;
                    battle_sfx.stop();
                    boss.play();
                    losuj_potwora(30, '~Upiór~', 'sword');
                    zakres_ataku_potwora(2, 6);
                    document.getElementById("enemy_name").className = "flash7";
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tomb.jpg')";
                    dracula.play();
                    break;

                    case 4:


                    dracula.play();



                    document.getElementById('strona_novigard').style.backgroundImage = "url('dungeon3.jpg')";
                    break;

                    case 5:
                    $("#strona_novigard").fadeIn(300);
                    document.getElementById('strona_novigard').style.backgroundImage = "url('cave.jpg')";
                    break;

                    case 6:


                    battle_sfx.stop();
                    xp_value = 9;
                    boss.play();
                    losuj_potwora(50, '~Wściekły niedźwiedź~', 'none');
                    zakres_ataku_potwora(2, 6);
                    document.getElementById("enemy_name").className = "flash7";
                    $("#strona_novigard").fadeIn(300);
                    document.getElementById('strona_novigard').style.backgroundImage = "url('cave.jpg')";
                    break;

                    case 7:


                    battle_sfx.stop();
                    xp_value = 10;
                    boss.play();
                    losuj_potwora(80, '~Upadły rycerz~', 'sword');
                    zakres_ataku_potwora(7, 12);
                    document.getElementById("enemy_name").className = "flash7";
                    $("#strona_novigard").fadeIn(300);
                    document.getElementById('strona_novigard').style.backgroundImage = "url('piramida_inside.jpg')";
                    break;

                    case 8:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('grave.jpg')";
                    break;

                    case 9:
                    battle_sfx.stop();
                    xp_value = 9;
                    boss.play();
                    losuj_potwora(70, '~Zmutowany pająk~', 'none');
                    zakres_ataku_potwora(3, 8);
                    document.getElementById("enemy_name").className = "flash7";
                    $("#strona_novigard").fadeIn(300);
                    document.getElementById('strona_novigard').style.backgroundImage = "url('spider.jpg')";
                    break;


                    case 10:


                    battle_sfx.stop();
                    boss.play();
                    xp_value = 9;
                    losuj_potwora(70, '~Magiczny strażnik~', 'magic');
                    zakres_ataku_potwora(3, 10);
                    document.getElementById("enemy_name").className = "flash7";
                    $("#strona_novigard").fadeIn(300);
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tower_inside.jpg')";
                    enemy_resistant = "magic";
                    break;


                    case 11:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tlo_walki.jpg')";
        document.getElementById("enemy_name").className = "flash2a";

                    if (zlecenie_resistant == "none")
                    document.getElementById("enemy_name").innerHTML = zlecenie_typ2;
                    if (zlecenie_resistant == "sword")
                    document.getElementById("enemy_name").innerHTML = zlecenie_typ2 + " " + cios_def1;
                    if (zlecenie_resistant == "magic")
                    document.getElementById("enemy_name").innerHTML = zlecenie_typ2 + " " + magia_def1;
                    min_1 = zlecenie_min;
                    max_2 = zlecenie_max;
                    mob_hp = energia_zlecenie;
                    break;

                    case 12:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tower_stairs.jpg')";
                    break;

                    case 13:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('piramida_inside.jpg')";
                    break;


                    case 14:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tlo_walki.jpg')";
                    break;



                    case 15:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('legowisko.jpg')";
                    document.getElementById("enemy_amount").innerHTML = "Ilość potworów: " + ilosc_potworow_legowisko;
                    break;

                    case 16:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('grota.jpg')";
                    break;

                    case 17:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('dark_mag.jpg')";
                    break; 

                    case 18:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('desert.jpg')";
                    break; 

                    case 19:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('sand_cave.jpg')";
                    break; 

                    case 20:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('bat.jpg')";
                    break; 

                    case 22:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('nawiedzony.jpg')";
                    break; 


                    case 23:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('desert.jpg')";
                    break; 


                        case 24:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('desert.jpg')";
                    break; 

   case 25:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('desert.jpg')";
                    break; 


                    case 26:
                    document.getElementById('strona_novigard').style.backgroundImage = "url('dark_mag.jpg')";
                    break; 


                            
                            

                    default:
                    if(tlo_pustynia==0)
                    document.getElementById('strona_novigard').style.backgroundImage = "url('tlo_walki.jpg')";
                    else
                    document.getElementById('strona_novigard').style.backgroundImage = "url('desert.jpg')";
                    }



                    document.getElementById("enemy_level").innerHTML = "Poziom:" + " " + level_amount;
                    document.getElementById("enemy_hp").innerHTML = '<i style="color:forestgreen;" class="icon-heart"></i>' + " " + mob_hp;
                    document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " " + "-" + " " + max_2;

                    if (kto_uderza == 1) {
                    document.getElementById("ucieczka").style.color = "dimgrey";
                    document.getElementById("ucieczka").style.pointerEvents = 'none';
                    document.getElementById("atak_mieczem").style.pointerEvents = 'none';
                    document.getElementById("atak_znakiem").style.pointerEvents = 'none';

                    atak_potwora();
                    }

                    potion_check();
           if (zlecenie_aktywne == 1) 
                     document.getElementById("enemy_name").className = "flash2a";
                    }



                    function brak_many() {
                    if (mana_amount < mana_koszt) {
                    disabled.play();
                    document.getElementById("wymagana_koncentracja").innerHTML = "Wymaga " + " " + mana_koszt + " koncentracji";
                    $("#wymagana_koncentracja").fadeIn(400);
                    setTimeout(zanik_informacji, 700);
                    }


                    }


                    function magia_odporny() {
                    document.getElementById("wymagana_koncentracja").innerHTML = "Przeciwnik odporny na magię";
                    $("#wymagana_koncentracja").fadeIn(400);
                    setTimeout(zanik_informacji, 2000);
                    }


                    function miecz_odporny() {
                    document.getElementById("wymagana_koncentracja").innerHTML = "Przeciwnik odporny na ciosy";
                    $("#wymagana_koncentracja").fadeIn(400);
                    setTimeout(zanik_informacji, 2000);
                    }




                    function uderzenie_mieczem() {
                    document.getElementById("ucieczka").style.color = "dimgrey";
                    document.getElementById("ucieczka").style.pointerEvents = 'none';
                    gracz_uderza=1;    
                    czy_pudlo();
                    gracz_uderza=0;    
                    document.getElementById("atak_mieczem").style.pointerEvents = 'none';
                    miecz_hit_sfx();
                    setTimeout(atakuj, 600);
                    }


                    function atakuj() {
                
                    cios_mieczem = 1;
                    obliczanie_atakiem_miecza();

                    if (pudlo == 1) {
              
                    miss.play();
                    miecz_hit = 0;
                    } else {
                        
                                 cios_specjalny();  
                        
                           if(stun==1)
                            {
                            document.getElementById("status_specjalny").innerHTML ="Ogłuszony";
                            $("#status_specjalny").transition({scale:1, opacity:1},500,'ease');
                            armor_hit.play();
                            document.getElementById("enemy_hp").innerHTML = '<i style="color:forestgreen;" class="icon-heart"></i>' + " " + mob_hp;
                            } 
                        
                            if(wampire==1)
                            {
                            let ile_zycia = life_max*0.1;
                            let floor = Math.floor(ile_zycia);    
                            life_amount = life_amount +floor;
                            document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;       $("#zycie_restore").transition({scale:1, opacity:1},0,'ease');
                            $("#zycie_restore").transition({scale:0, opacity:0},4000,'ease');
                            document.getElementById("zycie_restore").innerHTML ="+"+'<i style="color:red" ; class="icon-heart"></i>' + floor; 
                            wampire_sfx.play();
                            }
                        
                            wampire=0;
                  
                 

                        
                    if(enemy_resistant == "sword") {
                    miecz_odporny();
                    miecz_hit = miecz_od - 1;
                    if(miecz_hit>4)
                    miecz_hit = miecz_hit-1;
                    if(miecz_hit<1)
                    miecz_hit=1;
                    }
                    }

                    if (cios_krytyczny == 1) {

                    if (enemy_resistant == "sword") 
                    critic_amount = miecz_od+1;


                    mob_hp = mob_hp - miecz_hit - critic_amount;




                    } else
                    mob_hp = mob_hp - miecz_hit;

                    if (mob_hp < 0)
                    mob_hp = 0;

                     
                        
                     
                        
                    if (mob_hp < 0)
                    mob_hp = 0;
                        
                        
                        if((stun!=1)&&(bleeding!=1))
                    document.getElementById("enemy_hp").innerHTML = '<i style="color:forestgreen;" class="icon-heart"></i>' + " " + mob_hp;
                    pos1 = Math.floor(Math.random() * 430) + 1;
                    pos3 = Math.floor(Math.random() * 50) + 1;
                    document.getElementById('green_blood').style.left = pos1 + "px";
                    document.getElementById('green_blood').style.top = pos3 + "px";

                    var krew = Math.floor(Math.random() * 3) + 1;

                    if (cios_krytyczny == 0) {
                    if (krew == 1) {
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood2.png')";

                    }
                    if (krew == 2) {
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood3.png')";

                    }
                    if (krew == 3)
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood.png')";
                    } else
                    document.getElementById("green_blood").style.backgroundImage = "url('blood_crit.png')";
                    if (pudlo == 0)
                    trafienie_potwora();

                    if (cios_krytyczny == 1)
                    miecz_hit = miecz_hit + critic_amount;

                    if(bandyci_aktywni==1)
                    document.getElementById("green_blood").style.backgroundImage = "url('redblood.png')";

                    $("#green_blood").fadeIn(0);
                    document.getElementById("green_blood").style.display = "block";

                    if (miecz_hit > 0)
                    document.getElementById("green_blood").innerHTML = "-" + miecz_hit;
                    if (miecz_hit == 0) {
                    document.getElementById("green_blood").style.backgroundImage = "url('green_bloodxx.png')";
                    document.getElementById("green_blood").innerHTML = "unik";
                    }

                    zgon_potwora();

                    setTimeout(atakuj2, 1500);
                    }




                    function atakuj2() {

                    $("#green_blood").fadeOut(400);

                    if (mob_hp > 0)
                    {
                    if(stun!=1)
                    atak_potwora();
                    else
                    {  
                    stun=0;    
                    hit_reset();
                    }
                    
                    }
                    }




                    function atakuj_znakiem() {
                    atak_znakiem_check = 1;
                    document.getElementById("ucieczka").style.color = "dimgrey";
                    document.getElementById("ucieczka").style.pointerEvents = 'none';

                    cios_mieczem = 0;

                    if (mana_amount >= mana_koszt) {
                    document.getElementById("atak_mieczem").style.pointerEvents = 'none';
                    document.getElementById("atak_znakiem").style.pointerEvents = 'none';

                    znak_sfx.play();
                    setTimeout(atakuj_znakiem2, 600);
                    }
                    }

                    function zanik_informacji() {
                    $("#wymagana_koncentracja").fadeOut(400);
                    }




                    function atakuj_znakiem2() 
                    {
                    document.getElementById("atak_mieczem").style.pointerEvents = 'none';
                    mana_amount = mana_amount - mana_koszt;
                    document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;
                    obliczanie_atakiem_znak();
                        
                        var value = Math.floor(Math.random() * 10) + 1;
                        var miss1 = Math.floor(Math.random() * 10) + 1;
                        if(value!=miss1)
                            {
                             miss.play();
                            znak_hit = 0;   
                            pudlo=1;
                            }
                    if (enemy_resistant == "magic") {
                    magia_odporny();
                    znak_hit = znak_od - 4;
                    if(znak_hit<1)
                    znak_hit=1;
                        
                    if(znak_hit>4)
                    znak_hit=4;  
                        
                    }

                    mob_hp = mob_hp - znak_hit;


                    if (mob_hp < 0)
                    mob_hp = 0;
                    document.getElementById("enemy_hp").innerHTML = '<i style="color:forestgreen;" class="icon-heart"></i>' + " " + mob_hp;
                    pos1 = Math.floor(Math.random() * 430) + 1;
                    pos3 = Math.floor(Math.random() * 50) + 1;
                    document.getElementById('green_blood').style.left = pos1 + "px";
                    document.getElementById('green_blood').style.top = pos3 + "px";

                    var krew = Math.floor(Math.random() * 3) + 1;
if(pudlo==0)
    {
                    if (krew == 1) {
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood2.png')";

                    }
                    if (krew == 2) {
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood3.png')";

                    }
                    if (krew == 3)
                    document.getElementById("green_blood").style.backgroundImage = "url('green_blood.png')";

                    if(znak_critical_hit==1)
                    document.getElementById("green_blood").style.backgroundImage = "url('blood_crit.png')";


                    trafienie_potwora();
    }
                        else
                              document.getElementById("green_blood").innerHTML = "unik";
                        
                    if(bandyci_aktywni==1)
                    document.getElementById("green_blood").style.backgroundImage = "url('redblood.png')";
                    $("#green_blood").fadeIn(0);
                    document.getElementById("green_blood").style.display = "block";
                    document.getElementById("green_blood").innerHTML = "-" + znak_hit;
                    zgon_potwora();
                    setTimeout(atakuj2, 1500);

                    }


                    function atakuj3() {
                    $("#green_blood").fadeOut(400);
                    }


                    function atak_potwora() {
                        
                                    if((bleeding==1)&&(mob_hp>1))
                            {
                              $("#enemy_bleeding").transition({scale:1, opacity:1},0,'ease');
                            $("#enemy_bleeding").transition({scale:0, opacity:0},4000,'ease');
                            document.getElementById("enemy_bleeding").innerHTML ="-"+'<i style="color:forestgreen" ; class="icon-heart"></i>' + "1"; 
                                wampire_sfx.play();  
                                mob_hp--;
                                 document.getElementById("status_specjalny").innerHTML ="Krwawienie";
                                  $("#status_specjalny").transition({scale:1, opacity:1},500,'ease');
                                if(mob_hp<0)
                                    mob_hp=2;
                                
                            }
                        else
                              $("#status_specjalny").transition({scale:0, opacity:0},500,'ease');
                        
                        
                        
                        
                              document.getElementById("enemy_hp").innerHTML = '<i style="color:forestgreen;" class="icon-heart"></i>' + " " + mob_hp;
                    flawless = 0;
                    czy_pudlo_potwora();
                    mob_hit_sfx();
                    setTimeout(atak_potwora_hit, 600);
                    }


                    function atak_potwora_hit() {
                    document.getElementById("blood").style.backgroundImage = "url('blood.png')";
                    obliczanie_ataku_potwora();
                    if (pudlo == 1)
                    monster_hit = 0;

                    if(kto_uderza == 1)
                    {
                    if(monster_hit>life_amount)
                    monster_hit = life_amount - 1;
                    kto_uderza=0;
                    }

                    life_amount = life_amount - monster_hit;


                    zgon();
                    document.getElementById("life").innerHTML = '<i style="color:red";" class="icon-heart"></i>' + " " + life_amount + "/" + life_max;
                    pos1 = Math.floor(Math.random() * 430) + 1;
                    pos3 = Math.floor(Math.random() * 330) + 1;
                    document.getElementById('blood').style.left = pos1 + "px";
                    document.getElementById('blood').style.top = pos3 + "px";




                    if (pudlo == 0)
                    trafienie();
                    else
                    miss.play();

                    var krew = Math.floor(Math.random() * 2) + 1;

                    if (krew == 1)
                    document.getElementById("blood").style.backgroundImage = "url('blood.png')";
                    if (krew == 2)
                    document.getElementById("blood").style.backgroundImage = "url('blood2.png')";

                    $("#blood").fadeIn(0);
                    document.getElementById("blood").style.display = "block";

                    if (pudlo == 0) {
                    document.getElementById("blood").style.backgroundImage = "url('blood.png')";
                    document.getElementById("blood").innerHTML = "-" + monster_hit;
                    navigator.vibrate(200);

                    if (odglos_obrony == 1)
                    document.getElementById("blood").style.backgroundImage = "url('shield.png')";



                    } else {
                    document.getElementById("blood").style.backgroundImage = "url('green_bloodxx.png')";
                    document.getElementById("blood").innerHTML = "unik";
                    }
                    zgon();
                    setTimeout(atak_potwora2, 1500);
                    }


                    function atak_potwora2() {
                    $("#blood").fadeOut(400);
                    setTimeout(hit_reset, 400);

                    }

                    function hit_reset() 
                    {

                        
             
                    eliksir_check_battle();
                    znak_boost();
                    document.getElementById("atak_mieczem").style.pointerEvents = 'auto';
                    document.getElementById("atak_znakiem").style.pointerEvents = 'auto';
                    document.getElementById("ucieczka").style.color = "skyblue";
                    document.getElementById("ucieczka").style.pointerEvents = 'auto';

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



                    potion_check();


                    }



function cios_specjalny()
{

        let szansa = Math.floor(Math.random() * 100) + 1;
        if(szansa<12) 
        {
        if(cecha_broni_nazwa=="Ogłuszenie")
        stun=1;
        if(cecha_broni_nazwa=="Wampiryzm")
        wampire=1;
        if(cecha_broni_nazwa=="Krwawienie")
        bleeding=1;
        }
    
        
    
    
    
}









                    function ucieczka() {

                        
                        po_walce=0;
                    document.getElementById("enemy_name").className = "flash0";
                    mana_amount--;
                    if((obecny1 == "Koncentracji")||(obecny2 == "Koncentracji")) 
                    mana_amount++;

                    if(mana_amount<0)
                    mana_amount=0;
                    document.getElementById("mana").innerHTML = '<i style="color:deepskyblue;" class="icon-spin6 animate-spin"></i>' + " " + mana_amount + "/" + manal_max;

                        
                        
                    nawiedzony_dom_aktywny=0;
                    grota=0;
                    legowisko=0;
                    battle_sfx.stop();
                    boss.stop();
                    odjecie_czasu_trwania_eliksiru();
                    grobowiec = 0;
                    energia_bosa = 0;
                    typ_tla = 0;
                 
                    document.getElementById("player").style.zIndex = "205";
                    document.getElementById('player').style.backgroundImage = "url('gif.gif')";

                    if (zlecenie_aktywne == 1) {
                    var roznica_zycia = energia_zlecenie2 - mob_hp;
                    var leczenie_50_procent = roznica_zycia / 2;
                    var leczenie_50_procent2 = Math.round(leczenie_50_procent);
                    energia_zlecenie = mob_hp + leczenie_50_procent2;
                    }

                    if (energia_zlecenie > energia_zlecenie2)
                    energia_zlecenie = energia_zlecenie2;

                    liczba_escape = Math.floor(Math.random() * 4) + 1;

                    if (liczba_escape == 1)
                    ucieczka_fail();

                    run.play();
                    $("#panel_walki").transition({ scale:0, opacity:0}, 500, 'ease');

                    zlecenie_aktywne = 0;

                    if ((golem_pokonany == 0) && (kierunek == 8)) {
                    document.getElementById('golem').className = "fight_over";
                    document.getElementById("gif81").style.pointerEvents = 'none';
                    document.getElementById("gif8").style.pointerEvents = 'none';
                    document.getElementById("gif9").style.pointerEvents = 'none';

                    $("#player").transition({ y: 30, x: 165},1,'linear');
                    $("#player").transition({ y: 100, x:160}, 1400,'linear');
                    $("#player").transition({ y: 100, x:80},1300,'linear');

                    kierunek = 99;
                    kierunek_temp = 87;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }

                    if ((spider_dead == 0) && (kierunek == 10)) {
                    document.getElementById('spider').className = "fight_over";
                    $("#player").transition({ y: -8, x: 426},1,'linear');
                    $("#player").transition({ y: 5,x: 240}, 4000,'linear');
                    document.getElementById("gif10").style.pointerEvents = 'none';
                    document.getElementById("spider").style.pointerEvents = 'none';
                    document.getElementById("player").style.pointerEvents = 'none';
                    kierunek = 99;
                    kierunek_temp = 109;
                    setTimeout(kierunek_wlasciwy, 4000);
                    }

                    if ((blob_pokonany == 0) && (kierunek == 2)) {
                    document.getElementById('blob').className = "fight_over";
                    $("#player").transition({ y: -140, x: 22},1,'linear');
                    $("#player").transition({ y: -88,x: 10}, 1200,'linear');
                    $("#player").transition({ y: -78,x: -12}, 2200,'linear');
                    document.getElementById("blob").style.pointerEvents = 'none';
                    document.getElementById("spider").style.pointerEvents = 'none';
                    document.getElementById("gif2").style.pointerEvents = 'none';
                    kierunek = 99;
                    kierunek_temp = 3;
                    setTimeout(kierunek_wlasciwy, 2000);
                    }

                    if ((rat_pokonany == 0) && (kierunek == 20)) {
                    document.getElementById('rat').className = "fight_over";
                    $("#player").transition({ y: -227, x: 263},1,'linear');
                    $("#player").transition({ y: -184,x: 245}, 1000,'linear');
                    $("#player").transition({ y: -164,x: 193}, 1000,'linear');
                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("rat").style.pointerEvents = 'none';
                    document.getElementById("gif20").style.pointerEvents = 'none';
                    kierunek = 99;
                    kierunek_temp = 1;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }
                    if ((rycerz_pokonany == 0) && (kierunek == 22)) {
                    document.getElementById('rycerz').className = "fight_over";
                    $("#player").transition({ y: -228, x: -80},1,'linear');
                    $("#player").transition({ y: -180, x: -55},2200,'linear'); 

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("rycerz").style.pointerEvents = 'none';
                    document.getElementById("gif22").style.pointerEvents = 'none';
                    kierunek = 99;
                    kierunek_temp = 2221;
                    setTimeout(kierunek_wlasciwy, 2000);
                      document.getElementById("rycerz").style.zIndex = 1600;   

                    }


                    if((bandyci_aktywni==1)&& (kierunek == 123)) 
                    {
                    document.getElementById('bandit').className = "fight_over";
                    $("#player").transition({ y: -146, x: 237},1,'ease')
                    $("#player").transition({ y: -164, x: 193},1500,'ease');

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("bandit").style.pointerEvents = 'none';
                    document.getElementById("gif1").style.pointerEvents = 'none';
                    document.getElementById("gif23").style.pointerEvents = 'none';
                    kierunek = 99;
                    bandyci_aktywni=0;
                    kierunek_temp = 1;
                    setTimeout(kierunek_wlasciwy, 2000);


                    }
                    if((bandyci_pokonani==1)&&(kierunek == 123)&&(misja_mag==1)) 
                    {
                    document.getElementById('mag').className = "fight_over";
                    $("#player").transition({ y: -146, x: 237},1,'ease')
                    $("#player").transition({ y: -164, x: 193},1500,'ease');

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("bandit").style.pointerEvents = 'none';
                    document.getElementById("gif1").style.pointerEvents = 'none';
                    document.getElementById("gif23").style.pointerEvents = 'none';
                    kierunek = 99;
                    bandyci_aktywni=0;
                    kierunek_temp = 1;
                    setTimeout(kierunek_wlasciwy, 2000);


                    }
                    if((kierunek == 1013)&&(ognista_kula==0)) 
                    {
                    document.getElementById('goblin').className = "fight_over";
                    $("#player").transition({ y: -30, x: 550},1,'ease')
                    $("#player").transition({ y: -30, x: 460},1700,'ease')
                    $("#player").transition({ y: -8, x: 426},4000,'ease');
                        

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
                    bandyci_aktywni=0;
                    kierunek_temp = 10;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }
                        
                                  if((kierunek == 1415)&&(skorpion_pokonany==0)) 
                    {
                    document.getElementById('skorpion').className = "fight_over";
                        
              
                $("#player").transition({ y: 25, x: 890},1,'ease')
                .transition({ y: 29, x: 810},2500,'ease')
                .transition({ y: 58, x: 718},2500,'ease');
                        

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
             
                    kierunek_temp = 1514;
                    setTimeout(kierunek_wlasciwy, 2000);

                    } 
                          
                    if((kierunek == 1718)&&(gargulec_pokonany==0)) 
                    {
                    document.getElementById('gorgol').className = "fight_over";
                    document.getElementById("gorgol").style.zIndex = 200;
              
                $("#player").transition({y:-180, x: 339},200,'ease')
                .transition({y:-186, x: 455},3000,'ease')
                .transition({y:-146, x: 445},3000,'ease');
                        

                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
        
                    kierunek_temp = 1817;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }   

                        
                        if((kierunek == 2526)&&(mag_pokonany==0)) 
                    {
                    document.getElementById('mag').className = "fight_over";
                    document.getElementById("mag").style.zIndex = 1200;
              
                    $("#player").transition({ y: -95, x: 878},20,'linear')
                    .transition({ y: -72, x: 750},2700,'linear')
                    .transition({y: 5, x: 657},2000,'linear');
                        
                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
        
                    kierunek_temp = 1325;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }   

                        
                        if((kierunek == 1427)&&(mag_pokonany2==0)) 
                    {
                    document.getElementById('mag2').className = "fight_over";
                    document.getElementById("mag2").style.zIndex = 1200;
              
                     $("#player").transition({ y: 127, x: 797},10,'linear')  
                         .transition({ y: 58, x: 718},2000,'linear');
                        
                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
        
                    kierunek_temp = 1514;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }   

                        
                        
                        
                          if((kierunek == 1319)&&(mag_pokonany3==0)) 
                    {
                    document.getElementById('mag3').className = "fight_over";
                    document.getElementById("mag3").style.zIndex = 1200;
              
                     $("#player")     .transition({ y: -103, x: 698},10,'linear')
                         .transition({y:-30, x: 650},2000,'linear')
          
                         .transition({ y: -30, x: 550},1000,'linear');
                        
                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
        
                    kierunek_temp = 1013;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }   

                        
                        
                           if((kierunek == 1924)&&(alzur_pokonany==0)) 
                    {
                    document.getElementById('alzur').className = "fight_over";
                    document.getElementById("alzur").style.zIndex = 1200;
              
                 $("#player").transition({y:-150, x: 908},10,'linear')
                        
                         .transition({ y: -103, x: 698},1700,'linear');
          
                  
                        
                    document.getElementById("player").style.pointerEvents = 'none';
                    document.getElementById("gif13").style.pointerEvents = 'none';

                    kierunek = 99;
        
                    kierunek_temp = 1319;
                    setTimeout(kierunek_wlasciwy, 2000);

                    }   

                        
                        
                        
                        
                        
                        
                        
                        
                        
                    powrot_na_trakt();

                    }
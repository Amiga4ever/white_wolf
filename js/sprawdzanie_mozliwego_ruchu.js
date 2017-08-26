
            function sprawdz_kierunki_aktywne()
            {

            wylacz_drogi();

            if(kierunek==4)
            {


            document.getElementById("gif4").style.pointerEvents = 'none';
            document.getElementById("gif5").style.pointerEvents = 'auto';
            document.getElementById("gif5").onclick = function() {kierunek_5()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("gif3").onclick = function() {kierunek_3()};
            document.getElementById("player").style.pointerEvents = 'none';
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";

             if(misja==1)
             {
             document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
             document.getElementById("player").style.pointerEvents = 'auto';
             document.getElementById("player").onclick = function() {cmentarz()};
             }
             if((grobowiec_completed==1)&&(krypta_skarb_done==0))
             {
             document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
             document.getElementById("player").style.pointerEvents = 'auto';
             document.getElementById("player").onclick = function() {cmentarz()};
             }
            if(krypta_skarb_done==1)
            {
             document.getElementById("gif4").style.pointerEvents = 'none';
            document.getElementById("gif5").style.pointerEvents = 'auto';
            document.getElementById("gif5").onclick = function() {kierunek_5()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("gif3").onclick = function() {kierunek_3()};
            document.getElementById("player").style.pointerEvents = 'none';
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";

            }



            }

            if(kierunek==45)
            {
            document.getElementById("gif4").style.pointerEvents = 'auto';
            document.getElementById("gif5").style.pointerEvents = 'none';
            document.getElementById("gif6").style.pointerEvents = 'auto';
            document.getElementById("gif5").onclick = function() {kierunek_45()};
            }

            if((kierunek==60)||(kierunek==6))
            {
            document.getElementById("gif6").style.pointerEvents = 'none';
            document.getElementById("gif4").style.pointerEvents = 'none';
            document.getElementById("gif5").style.pointerEvents = 'auto';
            document.getElementById("gif7").style.pointerEvents = 'auto';
            document.getElementById("gif7").onclick = function() {kierunek_7()};
            document.getElementById("gif5").onclick = function() {kierunek_65()};

            }

            if((kierunek==5)||(kierunek==65))
            {
            document.getElementById("gif6").style.pointerEvents = 'auto';
            document.getElementById("gif4").style.pointerEvents = 'auto';
            document.getElementById("gif6").onclick = function() {kierunek_6()};
            document.getElementById("gif4").onclick = function() {kierunek_4()};
            document.getElementById("gif5").style.pointerEvents = 'none';
            document.getElementById("gif7").style.pointerEvents = 'none';
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";
            }


            if(kierunek==65)
            {
            document.getElementById("gif6").style.pointerEvents = 'auto';
            document.getElementById("gif4").style.pointerEvents = 'auto';
            document.getElementById("gif5").style.pointerEvents = 'none';
            document.getElementById("gif7").style.pointerEvents = 'none';
            }


            if((kierunek==7)&&(miasto_odwiedzone==0))
            {
            document.getElementById("gif6").style.pointerEvents = 'auto';
            document.getElementById("gif6").onclick = function() {kierunek_76()};
            document.getElementById("gif7").style.pointerEvents = 'auto';
            document.getElementById("gif8").onclick = function() {kierunek_8()};
            document.getElementById("gif8").style.pointerEvents = 'auto';
             document.getElementById('strona_novigard').style.backgroundImage = "url('city.jpg')";
            }

            if((kierunek==7)||(kierunek==87))
            {
            document.getElementById("gif6").style.pointerEvents = 'auto';
            document.getElementById("gif6").onclick = function() {kierunek_76()};
            document.getElementById("gif7").style.pointerEvents = 'none';
            document.getElementById("player").onclick = function() {ppl_zoom_out()};
            document.getElementById("gif8").onclick = function() {kierunek_8()};
            document.getElementById("gif8").style.pointerEvents = 'auto';
            document.getElementById("golem").onclick = function() {kierunek_8()};
            document.getElementById("golem").style.pointerEvents = 'auto';
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";

               if(golem_ucieczka==1)
            {
            document.getElementById("gif81").style.pointerEvents = 'none';
            document.getElementById("gif8").style.pointerEvents = 'none';
            document.getElementById("gif9").style.pointerEvents = 'none';
              document.getElementById("golem").style.pointerEvents = 'none';
            document.getElementById("player").style.pointerEvents = 'none';
           document.getElementById("player").style.backgroundImage = "url('gif.gif')";
            golem_ucieczka=0;
            setTimeout(sprawdz_kierunki_aktywne, 3000);
            }


      document.getElementById('strona_novigard').style.backgroundImage = "url('city.jpg')";

            }

            if((kierunek==3)||(kierunek==30)||(kierunek==23))
            {
            wylacz_drogi();
            document.getElementById("gif4").style.pointerEvents = 'auto';
            document.getElementById("gif4").onclick = function() {kierunek_34()};
            document.getElementById("gif0").style.pointerEvents = 'auto';
            document.getElementById("gif0").onclick = function() {kierunek_0()};
            document.getElementById("gif5").style.pointerEvents = 'none';
            document.getElementById("gif2").onclick = function() {kierunek_2()};
            document.getElementById("gif2").style.pointerEvents = 'auto';
            document.getElementById("blob").onclick = function() {kierunek_2()};
            document.getElementById("blob").style.pointerEvents = 'auto';
               document.getElementById("player").style.backgroundImage = "url('gif.gif')";

            }


            if((kierunek==2)||(kierunek==12))
            {
            wylacz_drogi();
                    
            document.getElementById("gif3").style.pointerEvents = 'auto';
                  document.getElementById("event_mob").style.pointerEvents = 'auto';
            document.getElementById("gif3").onclick = function() {kierunek_23()};
            document.getElementById("gif1").style.pointerEvents = 'auto';
            document.getElementById("gif1").onclick = function() {kierunek_1()};
                  document.getElementById("event_mob").onclick = function() {kierunek_1()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("gif3").onclick = function() {kierunek_23()};
            document.getElementById("gif21").style.pointerEvents = 'auto';
            document.getElementById("gif21").onclick = function() {kierunek_21()};


            }


            if(kierunek==34)
            {

            wylacz_drogi();
            document.getElementById("gif3").onclick = function() {kierunek_3()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("gif5").onclick = function() {kierunek_5()};
            document.getElementById("gif5").style.pointerEvents = 'auto';
             document.getElementById("player").style.pointerEvents = 'none';
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";

             if(misja)
             {
             document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
             document.getElementById("player").style.pointerEvents = 'auto';
             document.getElementById("player").onclick = function() {cmentarz()};
             }
             if((grobowiec_completed==1)&&(krypta_skarb_done==0))
             {
             document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
             document.getElementById("player").style.pointerEvents = 'auto';
             document.getElementById("player").onclick = function() {cmentarz()};
             }

            if(krypta_skarb_done==1)
            {
            document.getElementById("gif4").style.pointerEvents = 'none';
            document.getElementById("gif5").style.pointerEvents = 'auto';
            document.getElementById("gif5").onclick = function() {kierunek_5()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("gif3").onclick = function() {kierunek_3()};
            document.getElementById("player").style.pointerEvents = 'none';
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";
            }






            }


            if(kierunek==76)
            {
            wylacz_drogi();
            miasto_odwiedzone=0;
            document.getElementById("gif5").onclick = function() {kierunek_65()};
            document.getElementById("gif5").style.pointerEvents = 'auto';
            document.getElementById("gif7").onclick = function() {kierunek_7()};
            document.getElementById("gif7").style.pointerEvents = 'auto';
            document.getElementById("player").style.pointerEvents = 'none';
             document.getElementById("player").style.backgroundImage = "url('gif.gif')";

            }

            if(kierunek==0)
            {
            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").onclick = function() {kupiec_event()};
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("gif0").style.pointerEvents = 'none';
            document.getElementById("gif3").onclick = function() {kierunek_30()};
            document.getElementById("gif3").style.pointerEvents = 'auto';
            document.getElementById("player").style.pointerEvents = 'auto';
            }


            if(kierunek==1)
            {
            document.getElementById("gif20").onclick = function() {kierunek_20()};
            document.getElementById("gif20").style.pointerEvents = 'auto';
            document.getElementById("gif1").style.pointerEvents = 'none';
            document.getElementById("gif2").onclick = function() {kierunek_12()};
            document.getElementById("gif2").style.pointerEvents = 'auto';
            document.getElementById("rat").style.pointerEvents = 'auto';
            document.getElementById("rat").onclick = function() {kierunek_20()};
            document.getElementById("gif23").style.pointerEvents = 'auto';
            document.getElementById("gif23").onclick = function() {kierunek_123()};
            document.getElementById("bandit").style.pointerEvents = 'auto';
            document.getElementById("bandit").onclick = function() {kierunek_123()};



if(event_mob_aktywny==1)
{

  t2();
}




            }

            if(kierunek==20)
            {




                        if(rat_pokonany==1)
                        {

                            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
                            document.getElementById("player").style.pointerEvents = 'auto';
                            document.getElementById("player").onclick = function() {wieza()};
                            document.getElementById("gif1").onclick = function() {kierunek_201()};
                            document.getElementById("gif1").style.pointerEvents = 'auto';




                        if(tower_nagroda==1)
                        {
                        $("#x_gif3").fadeIn(200);
                        document.getElementById("gif20").style.pointerEvents = 'none';
                        document.getElementById("player").style.pointerEvents = 'none';
                        document.getElementById("player").style.backgroundImage = "url('gif.gif')";
                        document.getElementById("gif1").onclick = function() {kierunek_201()};
                        document.getElementById("gif1").style.pointerEvents = 'auto';
                        }


                            if(wieza_klucz==2)
                                {
                        document.getElementById("gif20").style.pointerEvents = 'none';
                        document.getElementById("player").style.pointerEvents = 'none';
                        document.getElementById("player").style.backgroundImage = "url('gif.gif')";
                        document.getElementById("gif1").onclick = function() {kierunek_201()};
                        document.getElementById("gif1").style.pointerEvents = 'auto';

                                }


                        }


            }


if(kierunek==123)
  {
       typ_tla=0;
           document.getElementById("gif1").style.pointerEvents = 'auto';
            document.getElementById("gif1").onclick = function() {kierunek_231()};
          document.getElementById("gif23").style.pointerEvents = 'none';
         if(bandyci_pokonani==1)
                    {
                    document.getElementById("gif81").style.pointerEvents = 'auto';
                    document.getElementById("gif81").onclick = function() {kierunek_2381()};


                    }

   }



            if(kierunek==12)
            {
            document.getElementById("gif1").style.pointerEvents = 'auto';
            document.getElementById("gif1").onclick = function() {kierunek_1()};


            }

            if(kierunek==201)
            {
            document.getElementById("gif20").style.pointerEvents = 'auto';
            document.getElementById("gif20").onclick = function() {kierunek_20()};
            document.getElementById("gif2").style.pointerEvents = 'auto';
            document.getElementById("gif2").onclick = function() {kierunek_12()};
            $("#x_gif3").fadeOut(200);
            document.getElementById("gif23").style.pointerEvents = 'auto';
            document.getElementById("gif23").onclick = function() {kierunek_23()};
            document.getElementById("bandit").style.pointerEvents = 'auto';
            document.getElementById("bandit").onclick = function() {kierunek_23()};
            document.getElementById("mag").onclick = function() {kierunek_23()};
            }

            if((kierunek==8)||(kierunek==818)||(kierunek==98))
            {
            miasto_nr2=0;
            wylacz_drogi();
            document.getElementById("gif8").style.pointerEvents = 'none';
            document.getElementById("gif7").style.pointerEvents = 'auto';
            document.getElementById("gif7").onclick = function() {kierunek_87()};
            document.getElementById("gif81").style.pointerEvents = 'auto';
            document.getElementById("gif81").onclick = function() {kierunek_81()};
            document.getElementById("golem").style.pointerEvents = 'none';
            document.getElementById("gif9").style.pointerEvents = 'auto';
            document.getElementById("gif9").onclick = function() {kierunek_9()};
            }









            if(kierunek==81)
            {
typ_tla=0;
                  wylacz_drogi();




                  if(misja==3)
                  {
                  $("#x_gif").fadeOut(0);
                  document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
                  document.getElementById("player").style.pointerEvents = 'auto';
                  document.getElementById("gif81").onclick = function() {cave()};
                  document.getElementById("player").onclick = function() {cave()};
                  document.getElementById("gif8").style.pointerEvents = 'auto';
                  document.getElementById("gif8").onclick = function() {kierunek_818()};
                  }

                  else if((cave_completed==1)&&(cave_skarb==0))
                  {
                  $("#x_gif").fadeOut(0);
                  document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
                  document.getElementById("player").style.pointerEvents = 'auto';
                  document.getElementById("gif81").onclick = function() {cave()};
                  document.getElementById("player").onclick = function() {cave()};
                  document.getElementById("gif8").style.pointerEvents = 'auto';
                  document.getElementById("gif8").onclick = function() {kierunek_818()};
                  }
                  else
                  {
                  document.getElementById("gif81").style.pointerEvents = 'none';
                  document.getElementById("player").style.pointerEvents = 'none';
                  document.getElementById("player").style.backgroundImage = "url('gif.gif')";
                  document.getElementById("gif8").style.pointerEvents = 'auto';
                  document.getElementById("gif8").onclick = function() {kierunek_818()};
                  $("#x_gif").fadeIn(0);
                  document.getElementById("x_gif").onclick = function() {not_allowed()};
                  }


                if(bandyci_pokonani==1)
                    {
                    $("#x_gif").fadeOut(0);
                    document.getElementById("gif23").style.pointerEvents = 'auto';
                    document.getElementById("gif23").onclick = function() {kierunek_8123()};
                    document.getElementById("mag").style.pointerEvents = 'auto';
                    document.getElementById("mag").onclick = function() {kierunek_8123()};

                    }






            }







            if(kierunek==21)
            {
            wylacz_drogi();
            document.getElementById("gif21").style.pointerEvents = 'none';
            document.getElementById("gif2").style.pointerEvents = 'auto';
            document.getElementById("gif2").onclick = function() {kierunek_212()};
            document.getElementById("gif22").style.pointerEvents = 'auto';

           if(glejt==1)
            {


            document.getElementById("gif22").onclick = function() {kierunek_22()};
            document.getElementById("rycerz").style.pointerEvents = 'auto';
            document.getElementById("rycerz").onclick = function() {kierunek_22()};
            }

            }



            if(kierunek==22)
            {
            wylacz_drogi();




            document.getElementById('player').style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("gif22").style.pointerEvents = 'auto';
            document.getElementById("gif22").onclick = function() {piramida()};
            document.getElementById("player").onclick = function() {piramida()};

            document.getElementById("gif21").style.pointerEvents = 'auto';
            document.getElementById("gif21").onclick = function() {kierunek_21()};

            if(piramida_nagroda==1)
            {
            document.getElementById("player").style.backgroundImage = "url('gif.gif')";
            document.getElementById("player").style.pointerEvents = 'none';
            document.getElementById("gif22").style.pointerEvents = 'none';
            $("#x_gif4").fadeIn(200);
            }




            }



            if(kierunek==2221)
            {
            wylacz_drogi();
            document.getElementById("gif21").style.pointerEvents = 'none';
            document.getElementById("gif2").style.pointerEvents = 'auto';
            document.getElementById("gif2").onclick = function() {kierunek_212()};
                   document.getElementById("gif22").style.pointerEvents = 'auto';
            document.getElementById("gif22").onclick = function() {kierunek_22()};
            $("#x_gif4").fadeOut(0);
            }

            if((kierunek==10)||(kierunek==110))
            {
                miasto_nr2=0;
                wylacz_drogi();

                document.getElementById("gif9").style.pointerEvents = 'auto';
                document.getElementById("gif9").onclick = function() {kierunek_109()};
                document.getElementById("gif11").style.pointerEvents = 'auto';

                if(spider_dead==1)
                    {
                document.getElementById("gif13").style.zIndex = "1600";
                document.getElementById("gif11").onclick = function() {kierunek_11()};
                    }
                else
                document.getElementById("gif11").onclick = function() {not_allowed()};


                document.getElementById("gif13").style.pointerEvents = 'auto';
                document.getElementById("gif13").onclick = function() {
                     document.getElementById("gif13").style.zIndex = "1";
                    kierunek_1013()};
                document.getElementById("zamek").style.pointerEvents = 'auto';
                document.getElementById("zamek").onclick = function() {
                     document.getElementById("gif13").style.zIndex = "1";
                    kierunek_1013()};




            }


            if((kierunek==9)||(kierunek==109))
            {
            miasto_nr2=1;
            wylacz_drogi();
            $("#x_gif2").fadeOut(0);
            document.getElementById("gif9").onclick = function() {miasto_event2()};
            document.getElementById("gif8").style.pointerEvents = 'auto';
            document.getElementById("gif8").onclick = function() {kierunek_98()};
            document.getElementById("gif10").style.pointerEvents = 'auto';
            document.getElementById("gif10").onclick = function() {kierunek_10()};
            document.getElementById("spider").style.pointerEvents = 'auto';
            document.getElementById("spider").onclick = function() {kierunek_10()};
            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("player").onclick = function() {miasto_event2()};

            if((spider_dead==0)&&(ucieczka_spider==1))
            {
            $("#player").transition({ y: 5, x: 240},4000);
            document.getElementById("gif10").style.pointerEvents = 'none';
            document.getElementById("spider").style.pointerEvents = 'none';
            document.getElementById("player").style.pointerEvents = 'none';
            ucieczka_spider=0;
            setTimeout(sprawdz_kierunki_aktywne, 3000);
            }



}





            if(kierunek==11)
            {
            wylacz_drogi();
            //document.getElementById('strona_novigard').style.backgroundImage = "url('grave.jpg')";
            document.getElementById("gif10").style.pointerEvents = 'auto';
            document.getElementById("gif10").onclick = function() {kierunek_110()};
            document.getElementById("gif11").style.pointerEvents = 'auto';
            document.getElementById("gif11").onclick = function() {graveyard()};
            document.getElementById("spider").style.pointerEvents = 'auto';

            document.getElementById("spider").onclick = function() {kierunek_110()};
            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("player").onclick = function() {graveyard()};

            document.getElementById("gif12").style.pointerEvents = 'auto';
            document.getElementById("gif12").onclick = function() {kierunek_1112()};


            }

       if(kierunek==1112)
            {
            wylacz_drogi();

            document.getElementById("gif11").style.pointerEvents = 'auto';
            document.getElementById("gif11").onclick = function() {kierunek_1211()};
            document.getElementById("gif12").style.pointerEvents = 'auto';
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").onclick = function() {chatka_maga()};
            document.getElementById("gif12").onclick = function() {chatka_maga()};
            document.getElementById('tlo_test').style.backgroundImage = "url('mag_tower.jpg')";

            }


            if(kierunek==1013)
            {
            wylacz_drogi();

            document.getElementById("gif25").style.pointerEvents = 'auto';
            document.getElementById("gif25").onclick = function() {kierunek_1325()};


            document.getElementById("gif16").style.pointerEvents = 'auto';
            document.getElementById("gif16").onclick = function() {kierunek_1316()};
            document.getElementById("gif19").style.pointerEvents = 'auto';
            document.getElementById("gif19").onclick = function() {kierunek_1319()};


            document.getElementById("gif10").style.pointerEvents = 'auto';
            document.getElementById("gif10").onclick = function() {kierunek_1310()};
   if(ognista_kula==2)
        {
        miasto_nr3=1;
        document.getElementById("player").style.pointerEvents = 'auto';
        document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
        document.getElementById("player").onclick = function() {

        droga3()};

        }



            }


            if(kierunek==1514)
            {
            wylacz_drogi();

            document.getElementById("gif15").style.pointerEvents = 'auto';
            document.getElementById("gif15").onclick = function() {kierunek_1415()};
            document.getElementById("gif13").style.pointerEvents = 'auto';
            document.getElementById("gif13").onclick = function() {kierunek_1413()};
                   document.getElementById("gif25").style.pointerEvents = 'auto';
            document.getElementById("gif25").onclick = function() {kierunek_1425()};
                   document.getElementById("gif27").style.pointerEvents = 'auto';
            document.getElementById("gif27").onclick = function() {kierunek_1427()};


            }







            if(kierunek==1415)
            {
            wylacz_drogi();

            document.getElementById("gif14").style.pointerEvents = 'auto';
            document.getElementById("gif14").onclick = function() {kierunek_1514()};

            if((artefacts<5)&&(skorpion_pokonany==1))
            {
            document.getElementById('player').style.backgroundImage = "url('pytanie.gif')";
            document.getElementById("player").style.pointerEvents = 'auto';
            document.getElementById("player").onclick = function() {sand_cave()};
            document.getElementById("gif15").style.pointerEvents = 'auto';
            document.getElementById("gif15").onclick = function() {sand_cave()};
            }
            else
            {
            document.getElementById("gif15").style.pointerEvents = 'none';
            document.getElementById('player').style.backgroundImage = "url('gif.gif')";
            document.getElementById("player").style.pointerEvents = 'none';
            }

            }




            if(kierunek==1316)
            {
            wylacz_drogi();

            document.getElementById("gif17").style.pointerEvents = 'auto';
            document.getElementById("gif17").onclick = function() {kierunek_1617()};
            document.getElementById("gif13").style.pointerEvents = 'auto';
            document.getElementById("gif13").onclick = function() {kierunek_1619()};

            document.getElementById("zamek").onclick = function() {kierunek_1613()};
            document.getElementById("zamek").style.pointerEvents = 'auto';
            document.getElementById("gif13").onclick = function() {kierunek_1613()};
            document.getElementById("gif13").style.pointerEvents = 'auto';


            }


            if(kierunek==1617)
            {
            wylacz_drogi();

            document.getElementById("gif18").style.pointerEvents = 'auto';
            document.getElementById("gif18").onclick = function() {kierunek_1718()};
            document.getElementById("gif16").style.pointerEvents = 'auto';
            document.getElementById("gif16").onclick = function() {kierunek_1716()};
               document.getElementById("gif28").style.pointerEvents = 'auto';
            document.getElementById("gif28").onclick = function() {kierunek_1728()};



            }

            if(kierunek==1718)
            {
            wylacz_drogi();

            document.getElementById("gif17").style.pointerEvents = 'auto';
            document.getElementById("gif17").onclick = function() {kierunek_1817()};



            }
            if(kierunek==1728)
            {
            wylacz_drogi();

            document.getElementById("gif17").style.pointerEvents = 'auto';
            document.getElementById("gif17").onclick = function() {kierunek_2817()};



            }



               if(kierunek==1817)
            {
            wylacz_drogi();

            document.getElementById("gif16").style.pointerEvents = 'auto';
            document.getElementById("gif16").onclick = function() {kierunek_1716()};
            document.getElementById("gif18").style.pointerEvents = 'auto';
            document.getElementById("gif18").onclick = function() {kierunek_1718()};


            }

            if(kierunek==1716)
            {
            wylacz_drogi();

            document.getElementById("gif19").style.pointerEvents = 'auto';
            document.getElementById("gif19").onclick = function() {kierunek_1619()};
            document.getElementById("gif13").style.pointerEvents = 'auto';
            document.getElementById("gif13").onclick = function() {kierunek_1613()};
            document.getElementById("gif17").style.pointerEvents = 'auto';
            document.getElementById("gif17").onclick = function() {kierunek_1617()};
                          document.getElementById("zamek").onclick = function() {kierunek_1613()};
            document.getElementById("zamek").style.pointerEvents = 'auto';

            }





            if(kierunek==1319)
            {
            wylacz_drogi();

                document.getElementById("gif24").style.pointerEvents = 'auto';
                document.getElementById("gif24").onclick = function() {kierunek_1924()};
                document.getElementById("gif13").style.pointerEvents = 'auto';
                document.getElementById("gif13").onclick = function() {kierunek_1913()};





            }
                if(kierunek==1924)
                {
                wylacz_drogi();

                document.getElementById("gif19").style.pointerEvents = 'auto';
                document.getElementById("gif19").onclick = function() {kierunek_2419()};

                document.getElementById("player").style.pointerEvents = 'auto';
                document.getElementById("player").onclick = function() {zamek()};

                }

                 if(kierunek==2419)
                {
                wylacz_drogi();

                document.getElementById("gif24").style.pointerEvents = 'auto';
                document.getElementById("gif24").onclick = function() {kierunek_1924()};



                      document.getElementById("gif13").style.pointerEvents = 'auto';
                document.getElementById("gif13").onclick = function() {kierunek_1913()};

                }

                       if(kierunek==1325)
                {
                wylacz_drogi();

                document.getElementById("gif26").style.pointerEvents = 'auto';
                document.getElementById("gif26").onclick = function() {kierunek_2526()};

                document.getElementById("gif14").style.pointerEvents = 'auto';
                document.getElementById("gif14").onclick = function() {kierunek_2514()};

                      document.getElementById("gif13").style.pointerEvents = 'auto';
                document.getElementById("gif13").onclick = function() {kierunek_2513()};

                }





                if(kierunek==2526)
                {
                wylacz_drogi();

                document.getElementById("gif25").style.pointerEvents = 'auto';
                document.getElementById("gif25").onclick = function() {kierunek_2625()};


                }
                        if(kierunek==1427)
                {
                wylacz_drogi();

                document.getElementById("gif14").style.pointerEvents = 'auto';
                document.getElementById("gif14").onclick = function() {kierunek_2714()};


                }



        if((kierunek==1013)||(kierunek==2513)||(kierunek==1913))
        {

        if(ognista_kula==2)
        {

           document.getElementById("player").style.zIndex = 2000;
        miasto_nr3=1;
        document.getElementById("player").style.pointerEvents = 'auto';
        document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";

        document.getElementById("player").onclick = function() {

        droga3()};

        }
}



}



function zlecenie_walka()
{
music_ambient.stop();

zlecenie_okno1.play();
document.getElementById("zdarzenie_info3").style.fontSize = "26px";
document.getElementById("zdarzenie_info2").style.fontSize = "26px";
document.getElementById("zdarzenie").style.fontSize = "28px";

document.getElementById("zdarzenie_open").style.color = "deeppink";
document.getElementById("zdarzenie_info3").style.color = "red";
document.getElementById("zdarzenie_info2").style.color = "green";

document.getElementById('zdarzenie').style.backgroundImage = "url('zlecenie_art.jpg')";
document.getElementById("zdarzenie_info").className = "flash3";

document.getElementById("player").style.pointerEvents="none";

if(zlecenie_resistant == "none")
document.getElementById("zdarzenie_info").innerHTML = zlecenie_typ2;
if(zlecenie_resistant == "sword")
document.getElementById("zdarzenie_info").innerHTML = zlecenie_typ2 + " " + cios_def1;
if(zlecenie_resistant == "magic")
document.getElementById("zdarzenie_info").innerHTML = zlecenie_typ2 + " " + magia_def1;





document.getElementById("zdarzenie_info2").innerHTML = "Energia: " + " " + energia_zlecenie;
mob_hp_xp = energia_zlecenie -10;
document.getElementById("zdarzenie_info3").innerHTML = "Atak: " + " " + zlecenie_min + " - " + " " + zlecenie_max;
$("#zdarzenie_open").fadeIn(0);
document.getElementById("zdarzenie_open").innerHTML = "Atakuj"
document.getElementById("zdarzenie_quit").innerHTML = "Zamknij"



zdarzenie_pokaz();

document.getElementById("zdarzenie_open").onclick = function() {zlecenie_walka2()};
document.getElementById("zdarzenie_quit").onclick = function() {
    document.getElementById("player").style.pointerEvents="auto";
    zdarzenie_zanik3()};



}

function zlecenie_walka2()
{
    zdarzenie_zanik();
    document.getElementById("enemy_atk").innerHTML = "Atak:" + " " + min_1 + " "  + "-" + " " + max_2;
    typ_tla= 11;
boss.play();
       enemy_resistant=zlecenie_resistant;
    setTimeout(walka_X, 200);

}

function sprawdz_zlecenie_walke()
{
    if((kierunek==1)||(kierunek==201)||(kierunek==23 )||(kierunek==3 )||(kierunek==30)||(kierunek==5 )||(kierunek==65 )||(kierunek== 6)||(kierunek==76 ))
    {
        sprawdz_kierunki_aktywne();
    document.getElementById("player").style.backgroundImage = "url('pytanie.gif')";
    document.getElementById("player").style.pointerEvents = 'auto';
    document.getElementById("player").onclick = function() {zlecenie_check_gif()};
    zlecenie_check_gif();
    }
    else
    {
    document.getElementById("player").style.backgroundImage = "url('gif.gif')";
    document.getElementById("player").style.pointerEvents = 'none';
    }



}



function not_allowed()
{
	    disabled.play();

}

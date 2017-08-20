
        function kierunek_0()
        { 
      
        $("#player").stop();
        kierunek = 0;
        sprawdz_zlecenie_walke();     
        wylacz_drogi();
        skip_event = 1;
          klik.play();
        $("#player").transition({ y: -95, x: -114},1500,'linear');
        document.getElementById("gif4").style.pointerEvents = 'none';
        kroki();
        setTimeout(sprawdz_kierunki_aktywne, 2000);
        }

        function kierunek_1()
        {       
        $("#player").stop();
        wylacz_drogi();        
        skip_event = 0;
        var czas =  Math.floor(Math.random()*2000)+1500;

         klik.play();
        kierunek = 1;
        zlecenie_check();

        $("#player").transition({ y: -164, x: 193},4000,'linear');
        document.getElementById("gif7").onclick = function() {kierunek_7()};
        document.getElementById("gif6").style.pointerEvents = 'none';



        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 4000);
        else
        setTimeout(random_event, czas);    


        kroki();
        }

        function kierunek_20()
        { 
            kroki();
            $("#player").stop();
            kierunek = 20;        
            wylacz_drogi();        
            klik.play();
            $("#player").transition({ y: -184, x: 245},1500,'linear')
            $("#player").transition({ y: -227, x: 263},1500,'linear');

            document.getElementById("gif20").style.pointerEvents = 'none';
            document.getElementById("rat").style.pointerEvents = 'none';
            if(rat_pokonany==0)
            {
                setTimeout(walka_na_20, 1500);
                }
                else
                {
                setTimeout(sprawdz_kierunki_aktywne, 1500);
              
            }
        }



function kierunek_123()
{
    kierunek=123;
                kroki();
            $("#player").stop();      
            wylacz_drogi();        
            klik.play();
            $("#player").transition({ y: -146, x: 237},1500,'linear')
            $("#player").transition({ y: -133, x: 290},1500,'linear');
             document.getElementById("gif1").style.pointerEvents = 'none';
               document.getElementById("gif23").style.pointerEvents = 'none';
        document.getElementById("bandit").style.pointerEvents = 'none';
    if((bandyci==0)&&(bandyci_pokonani==0))
             setTimeout(bandyci_walka, 1500);
        else if(misja_mag==1)
              setTimeout(mag_walka, 1500);
    else
     setTimeout(sprawdz_kierunki_aktywne, 1500);
    
    
    
    
}

function kierunek_231()
{
            kierunek=1;
            kroki();
            $("#player").stop();    
            wylacz_drogi();    
            zlecenie_check();
            klik.play();
            $("#player").transition({ y: -146, x: 237},1500,'linear')
            $("#player").transition({ y: -164, x: 193},1500,'linear');
            document.getElementById("gif1").style.pointerEvents = 'none';
            document.getElementById("gif23").style.pointerEvents = 'none';

            if(kierunek_sprawdzony==gdzie_zlecenie) 
            setTimeout(sprawdz_zlecenie_walke, 1000);  
            else
            setTimeout(random_event, 1000);   
    
    
   
}






        function kierunek_2()
        {
        $("#player").stop();
        kierunek = 2;   
        sprawdz_zlecenie_walke();    
        wylacz_drogi();
        kroki();
        if(misja==2)
        typ_tla=1;
         klik.play();

        $("#player").transition({ y: -88, x: 10},1200,'linear')
        $("#player").transition({ y: -140, x: 22},1200,'linear');

        document.getElementById("player").style.pointerEvents = 'none';


        if((misja==2)&&(blob_pokonany==0))
        {   
        document.getElementById("gif2").style.pointerEvents = 'none'; 
        document.getElementById("blob").style.pointerEvents = 'none'; 
        document.getElementById("player").style.pointerEvents = 'none';    
        setTimeout(waklka_na_2, 3500);
        }
        else    
        setTimeout(sprawdz_kierunki_aktywne, 3500);
        }




        function kierunek_21()
        {
        $("#player").stop();
        wylacz_drogi();
        kroki();
          
        klik.play();
        kierunek = 21;
    document.getElementById("player").style.zIndex = "1700";
        $("#player").transition({ y: -180, x: -55},2200,'linear');  
        document.getElementById("gif21").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';

            
            if(glejt==1)   
            {
            
              if(explosion_21==0)
                  {
                   $("#explosion2").transition({ opacity:1},0, 'linear')
                   $("#explosion2").transition({ opacity:0},2000, 'linear');
                document.getElementById("gif21").style.backgroundImage = "url('')";  
                explosion.play();  
                      explosion_21=1;
                  }
            }
            
            if(glejt==0)
                {
        tekst_nr=13;
                pokaz_informacje();    
                }
else
        setTimeout(sprawdz_kierunki_aktywne, 2000);
        }




        function kierunek_22()
        {
        $("#player").stop();
        wylacz_drogi();
        kroki();
        klik.play();
        kierunek = 22;

  
        $("#player").transition({ y: -228, x: -80},2000,'linear');

        document.getElementById("player").style.pointerEvents = 'none';
        document.getElementById("gif22").style.pointerEvents = 'none';
              document.getElementById("rycerz").style.pointerEvents = 'none';

        if(bat_pokonany==0)
        setTimeout(waklka_na_22, 2000);
        else
        setTimeout(sprawdz_kierunki_aktywne, 2000);
        }





        function kierunek_2221()
        {
        $("#player").stop();
        wylacz_drogi();
        kroki();

     klik.play();
        kierunek = 2221;

  
        $("#player").transition({ y: -180, x: -55},2200,'linear');  



        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';
        document.getElementById("gif21").style.pointerEvents = 'none';


        setTimeout(sprawdz_kierunki_aktywne, 2200);
        }









        function kierunek_12()
        {
        $("#player").stop();
        kierunek = 12;    
        sprawdz_zlecenie_walke();     
        wylacz_drogi();
        kroki();

     klik.play();

        $("#player").transition({ y: -140, x: 22},4000,'linear');

        document.getElementById("player").style.pointerEvents = 'none';  
        setTimeout(sprawdz_kierunki_aktywne, 4000);
        }



        function kierunek_201()
        {
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';
        var czas =  Math.floor(Math.random()*2000)+1500;
        wylacz_drogi();
        kroki();
     klik.play();
        kierunek = 201;
        zlecenie_check();
        $("#player").transition({ y: -184, x: 245},1500,'linear')
        $("#player").transition({ y: -164, x: 193},1500,'linear');
        document.getElementById("gif4").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie) 
        setTimeout(sprawdz_zlecenie_walke, 1500);  
        else
        setTimeout(random_event, czas);   

        }

function player_z()
{
             document.getElementById("player").style.zIndex = "200";
    
}



        function kierunek_212()
        {
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';
       setTimeout(player_z,2000);

        wylacz_drogi();
        kroki();
     klik.play();
        kierunek = 2;
        tekst_nr=0;
        $("#player").transition({ y: -140, x: 22},2200,'linear');
        document.getElementById("gif4").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 

        setTimeout(sprawdz_kierunki_aktywne, 2000);
        }





        function kierunek_30()
        {
        $("#player").stop();
        wylacz_drogi();
        kierunek = 30;
        zlecenie_check();

     klik.play();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';

        $("#player").transition({ y: -78, x: -12},1500,'linear');
        document.getElementById("gif4").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';

        kroki();

        if(kierunek_sprawdzony==gdzie_zlecenie)    
        setTimeout(sprawdz_zlecenie_walke, 1700);   
        else
        setTimeout(random_event, 1500);     
        }









        function kierunek_23()
        {
        $("#player").stop();
        wylacz_drogi();
        kroki();
     klik.play();
        kierunek = 23;
        zlecenie_check();
        $("#player").transition({ y: -88, x: 10},1200,'linear')
        $("#player").transition({ y: -78, x: -12},1200,'linear');
        document.getElementById("gif2").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';


        if(kierunek_sprawdzony==gdzie_zlecenie)      
        setTimeout(sprawdz_zlecenie_walke, 1500);
        else
        setTimeout(random_event, 1500);
        }



        function kierunek_4()
        {
        $("#player").stop();
        kierunek = 4;    
    
        var czas =  Math.floor(Math.random()*2000)+1500;
        wylacz_drogi();    
        klik.play();

        $("#player").transition({ y: -21, x: -75},1500, 'linear')
        $("#player").transition({ y: -43, x: -150},1500, 'linear');    


        
        setTimeout(sprawdz_kierunki_aktywne, 2000); 
        kroki();
        }


        function kierunek_6()
        { 
        $("#player").stop();   
        wylacz_drogi();        
        skip_event = 0;
        var czas =  Math.floor(Math.random()*2000)+1500;

     klik.play();
        kierunek = 6;
        zlecenie_check();
            
            $("#player").transition({ x: '7px', y: '21px' },1000,'linear')
            $("#player").transition({ x: '-7px', y: '41px' },1000,'linear')
            $("#player").transition({ x: '-63px', y: '82px' },1000,'linear');
            
       // $("#player").transition({ y: 21, x: 7},1200);
        //$("#player").transition({ y: 41, x: -7},1200);
        //$("#player").transition({ y: 82, x: -63},1200);

            
            
        document.getElementById("gif7").onclick = function() {kierunek_7()};
        document.getElementById("gif6").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 3000);  
        else
        setTimeout(random_event, czas);
        kroki();
        }

        function kierunek_5()
        { 
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')";  
        document.getElementById("player").style.pointerEvents = 'none';
        wylacz_drogi(); 
        kierunek = 5;
        zlecenie_check();      
        var czas =  Math.floor(Math.random()*2000)+1500;  
        kroki();
     klik.play();
        $("#player").transition({ y: -21, x: -75},1500, 'linear');
        $("#player").transition({ y: 0, x: 0},1500, 'linear');
            
        document.getElementById("gif5").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 4200);
        else
        setTimeout(random_event, czas);
        }

        function kierunek_45()
        { 
        $("#player").stop();
        wylacz_drogi();  
     klik.play();
        kierunek = 45;
        $("#player").transition({ y: -21, x: -75},1200,'linear')
        $("#player").transition({ y: 0, x: 0},2200,'linear');
        document.getElementById("gif5").style.pointerEvents = 'none';


        kroki();
        }

        function kierunek_7()
        { 
        $("#player").stop();
        kierunek = 7;    
        sprawdz_zlecenie_walke();     
        wylacz_drogi(); 
        kroki();
    
        skip_event = 1;
     klik.play();
        var czas =  Math.floor(Math.random()*2000)+1500;

       // $("#player").transition({ y: 90, x: -30},1000);
       // $("#player").transition({ y: 100, x: 30},1000);
       // $("#player").transition({ y: 100, x: 80},1000);
            
            
            $("#player").transition({ y: '90px', x: '-30px' },1000, 'linear')
            $("#player").transition({ y: '100px', x: '30px' },1000, 'linear')
            $("#player").transition({ y: '100px', x: '80px' },1000, 'linear');
            
            
            
        document.getElementById("gif7").style.pointerEvents = 'none';
        document.getElementById("gif6").style.pointerEvents = 'none';


        setTimeout(miasto_event, 2000);
        setTimeout(sprawdz_kierunki_aktywne , 2000);

        }

        function kierunek_76()
        { 
        $("#player").stop();
        wylacz_drogi();  
        $("#player").transition({ y: 100, x: 40},1000,'linear')
        $("#player").transition({ y: 90, x: -30},1000,'linear')
        $("#player").transition({ y: 82, x: -63},1000,'linear');    


        var czas =  Math.floor(Math.random()*2000)+1500;

     klik.play();
        kierunek = 76;
        miasto_event();
        zlecenie_check();
        document.getElementById("gif6").style.pointerEvents = 'none';
        if(kierunek_sprawdzony==gdzie_zlecenie)    
        setTimeout(sprawdz_zlecenie_walke, 3200);   
        else
        setTimeout(random_event, czas);      
        kroki();
        }

        function kierunek_65()
        {    
        $("#player").stop();
        wylacz_drogi(); 
        var czas =  Math.floor(Math.random()*2000)+1500;
     klik.play();
        kierunek = 65;
        zlecenie_check();   
        kroki();
        $("#player").transition({ y: 41, x: -7},2200,'linear')
        $("#player").transition({ y: 21, x: 7},1200,'linear')
        $("#player").transition({ y: 0, x: 0},2200,'linear');
            

            
            
            
            
        document.getElementById("gif5").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)      
        setTimeout(sprawdz_zlecenie_walke, 4600);
        else
        setTimeout(random_event, czas);  
        }






        function kierunek_3()
        { 
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')";  
        document.getElementById("player").style.pointerEvents = 'none';
        wylacz_drogi();
        kroki();
        kierunek =3;

        zlecenie_check();
        var czas =  Math.floor(Math.random()*2000)+1000;
     klik.play();
        $("#player").transition({ y: -60, x: -80},1500,'linear')
        $("#player").transition({ y: -78, x: -12},1500,'linear');
        document.getElementById("gif3").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 3000);
        else
        setTimeout(random_event, czas); 
        kroki();
        }


        function kierunek_34()
        { 
        $("#player").stop();
        kierunek =34;   
        sprawdz_zlecenie_walke();     

        wylacz_drogi();
        var czas =  Math.floor(Math.random()*2000)+1500;

     klik.play();
        $("#player").transition({ y: -60, x: -80},1500,'linear')
        $("#player").transition({ y: -43, x: -150},1500,'linear');
        document.getElementById("gif3").style.pointerEvents = 'none';


         setTimeout(sprawdz_kierunki_aktywne, 3000); 
        kroki();


        kroki();
        }


        function kierunek_8()
        { 
        $("#player").stop();
        kierunek = 8; 
        typ_tla=2;    
        wylacz_drogi();
        kroki();
        miasto_event();
        klik.play();
        $("#player").transition({ y: 100, x: 160},1700,'linear')
         .transition({ y: 30, x: 165},1700,'linear');
            
        document.getElementById("gif8").style.pointerEvents = 'none';
        if(golem_pokonany==0)
        setTimeout(waklka_na_8, 2500);
        else    
        setTimeout(sprawdz_kierunki_aktywne, 2500);

    wylacz_drogi();
        }


        function kierunek_9()
        { 
        $("#player").stop();
        kierunek = 9; 

        wylacz_drogi();
        kroki();

     klik.play();
        $("#player").transition({ y: 5, x: 240},2000,'linear');

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 2000);
        setTimeout(miasto_event2, 2200);

        }

            function kierunek_10()
            { 
           
            wylacz_drogi();
            $("#player").stop();
            kierunek = 10; 
            zlecenie_check();
            kroki();
            document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
            klik.play();
            $("#player").transition({ y: -8, x: 426},4000,'linear');

            document.getElementById("gif8").style.pointerEvents = 'none';

            wylacz_drogi();
            if(spider_dead==0)
                {
                     document.getElementById('strona_novigard').style.backgroundImage = "url('spider.jpg')";
            typ_tla=9;
            setTimeout(walka_na_10, 3800);
                }
                else
                sprawdz_kierunki_aktywne();

        }

        function kierunek_11()
        { 
        $("#player").stop();
        kierunek = 11; 

        wylacz_drogi();
        kroki();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
     klik.play();

        $("#player").transition({ y: 30, x: 416},2000,'linear')
            .transition({ y: 88, x: 340},2500,'linear');

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 4000);
        setTimeout(grave, 4000);


        }




        function kierunek_110()
        { 
            
             document.getElementById("gif13").style.zIndex = 6000;   
        $("#player").stop();
        kierunek = 110; 

        wylacz_drogi();
        kroki();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
     klik.play();

        $("#player").transition({ y: 30, x: 416},2500,'linear')
        $("#player").transition({ y: -8, x: 426},2000,'linear');

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 4000);


        }






        function kierunek_109()
        { 
        $("#player").stop();
        kierunek = 109; 

        wylacz_drogi();
        kroki();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
     klik.play();
        $("#player").transition({ y: 5, x: 240},4000,'linear');

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 4000);
        setTimeout(miasto_event2, 4000);

        }





        function kierunek_98()
        { 
        $("#player").stop();
        kierunek = 98; 

        wylacz_drogi();
        kroki();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
     klik.play();
        $("#player").transition({ y: 30, x: 165},2200,'linear');

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 2000);


        }





        function kierunek_87()
        { 
        $("#player").stop();
        kierunek =87;   
        wylacz_drogi();
        kroki();
        setTimeout(miasto_event, 3000);
     klik.play();  
        $("#player").transition({ y: 100, x: 160},2000,'linear')
        $("#player").transition({ y: 100, x: 80},2000,'linear');
        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 3500);

        }

        function kierunek_81()
        { 
     
        $("#player").stop();
        kierunek = 81; 
        wylacz_drogi();
        kroki();
        klik.play();
        $("#player").transition({ y: -45, x: 142},1800,'linear');
        document.getElementById("gif8").style.pointerEvents = 'none';
        setTimeout(sprawdz_kierunki_aktywne, 1800);
        }

        

        function kierunek_818()
        { 
        $("#player").stop();
        $("#x_gif").fadeOut(0);
        kierunek = 818; 
        wylacz_drogi();
        kroki();
         klik.play();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("gif8").style.pointerEvents = 'none';    
        $("#player").transition({ y: 30, x: 165},2200,'linear');   
        setTimeout(sprawdz_kierunki_aktywne, 2200);

        }

function kierunek_1112()
{
        $("#player").stop();
        kierunek = 1112; 
        wylacz_drogi();
        kroki();
         klik.play();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("gif11").style.pointerEvents = 'none';    
        $("#player")
        .transition({ y: 96, x: 420},2000,'linear') 
        .transition({ y: 124, x: 490},2500,'linear'); 
     
        setTimeout(sprawdz_kierunki_aktywne, 3000);


}

function kierunek_1211()
{
        $("#player").stop();
        kierunek = 11; 
        wylacz_drogi();
        kroki();
         klik.play();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("gif11").style.pointerEvents = 'none';    
        $("#player").transition({ y: 96, x: 420},2000,'linear') 
        .transition({ y: 88, x: 340},2500,'linear');

        setTimeout(sprawdz_kierunki_aktywne, 4200);


}


        function kierunek_8123()
        {
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';
        var czas =  Math.floor(Math.random()*2000)+1500;
        wylacz_drogi();
        kroki();
        klik.play();
        kierunek = 123;
        $("#player").transition({ y: -104, x: 208},3000,'linear')
        .transition({ y: -133, x: 290},2500,'linear');
        document.getElementById("gif23").style.pointerEvents = 'none';
        document.getElementById("mag").style.pointerEvents = 'none';
       if(misja_mag==1)
              setTimeout(mag_walka, 3000);
    else
     setTimeout(sprawdz_kierunki_aktywne, 2500);

        }




      function kierunek_2381()
        {
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';
        var czas =  Math.floor(Math.random()*2000)+1500;
        wylacz_drogi();
        kroki();
        klik.play();
        kierunek = 81;
        $("#player").transition({ y: -104, x: 208},1500,'linear')
        .transition({ y: -45, x: 142},1500,'linear');
            
        document.getElementById("gif81").style.pointerEvents = 'none';
     
    
        setTimeout(random_event, czas);   

        }


                function kierunek_1013()
                {
                    tlo_pustynia=1;
                document.getElementById("gif13").style.zIndex = "1";  
                    
                $("#player").stop();
                wylacz_drogi();
                kierunek = 1013;
             

                klik.play();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';

                $("#player").transition({ y: -30, x: 460},1700,'linear')
                .transition({ y: -30, x: 550},1700,'linear');
                    
                document.getElementById("gif13").style.pointerEvents = 'none';
                document.getElementById("player").style.pointerEvents = 'none';
                         document.getElementById("zamek").style.pointerEvents = 'none';

                kroki();

                if(ognista_kula==0)  
                setTimeout(wyzima_pole, 1700);   
          

                setTimeout(sprawdz_kierunki_aktywne, 2000); 
               
                    
                }


                function kierunek_1325()
                {
                document.getElementById("player").style.zIndex = 300;
            document.getElementById("zamek").style.zIndex = 10;   
                    
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1325;
                $("#player").transition({y: 5, x: 657},3000,'linear');
          
              
                document.getElementById("gif25").style.pointerEvents = 'none';


                       
                      var czas =  Math.floor(Math.random()*3000)+1000;
        setTimeout(random_event, czas); 



                }

                function kierunek_2513()
                {
            document.getElementById("player").style.zIndex = 2000;
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'auto';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1013;
                $("#player").transition({ y: -30, x: 550},2700,'linear');
          
                    
                document.getElementById("gif13").style.pointerEvents = 'none';
                document.getElementById("gif25").style.pointerEvents = 'none';
    

                setTimeout(sprawdz_kierunki_aktywne, 3000); 

                }

                function kierunek_2514()
                {
         
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1514;
                $("#player")  .transition({ y: 58, x: 718},2500,'linear');
          
                    
                document.getElementById("gif13").style.pointerEvents = 'none';
                document.getElementById("gif25").style.pointerEvents = 'none';

                setTimeout(sprawdz_kierunki_aktywne, 3000); 

                }


                function kierunek_2526()
                {
            
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 2526;
                $("#player").transition({ y: -72, x: 750},3700,'linear')
                            .transition({ y: -95, x: 878},2700,'linear');
                    
                document.getElementById("gif13").style.pointerEvents = 'none';
                document.getElementById("gif25").style.pointerEvents = 'none';

                    
                    
                if((mag_pokonany==0)&&(mathea_end==1))
                setTimeout(walka_na_26,6000 );
                else
                setTimeout(random_event, 3000); 

                }

                function kierunek_2625()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1325;
                    
                    $("#player").transition({ y: -72, x: 750},2700,'linear')
                      .transition({y: 5, x: 657},3000,'linear');
                    
                document.getElementById("gif13").style.pointerEvents = 'none';
                document.getElementById("gif25").style.pointerEvents = 'none';

                      
                      var czas =  Math.floor(Math.random()*2000)+2000;
        setTimeout(random_event, czas); 

                }


                function kierunek_1415()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1415;
                $("#player").transition({ y: 29, x: 810},2500,'linear')
                .transition({ y: 25, x: 890},2500,'linear');
                    
                document.getElementById("gif15").style.pointerEvents = 'none';


     
                       if(skorpion_pokonany==0)                  
                       setTimeout(walka_na_15, 4000); 
                       else
                       setTimeout(sprawdz_kierunki_aktywne, 3000); 
           



                }


                function kierunek_1514()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1514;

                $("#player").transition({ y: 29, x: 810},2500,'linear')
                .transition({ y: 58, x: 718},2500,'linear');
                    
                document.getElementById("gif14").style.pointerEvents = 'none';


                       
                      var czas =  Math.floor(Math.random()*2000)+3000;
        setTimeout(random_event, czas); 



                }

      function kierunek_1427()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1427;
     document.getElementById("mag2").style.zIndex = 4700;
                $("#player").transition({ y: 127, x: 797},2500,'linear');
          
                    
                document.getElementById("gif14").style.pointerEvents = 'none';


                if((mag_pokonany2==0)&&(mathea_end==1))
                setTimeout(walka_na_27,2000 );
                else
                setTimeout(random_event, 2000); 



                }




       

       function kierunek_2714()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1514;

                 $("#player")  .transition({ y: 58, x: 718},2500,'linear');
           
                    
                document.getElementById("gif13").style.pointerEvents = 'none';


                      
                      var czas =  Math.floor(Math.random()*1000)+1000;
        setTimeout(random_event, czas);  



                }



            function kierunek_1316()
            {
                       tlo_pustynia=0;
            document.getElementById("player").style.zIndex = 200;
            document.getElementById("zamek").style.zIndex = 300;
            $("#player").stop();
            document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
            document.getElementById("player").style.pointerEvents = 'none';
            var czas =  Math.floor(Math.random()*2000)+1500;
            wylacz_drogi();
            kroki();
            klik.play();
            kierunek = 1316;

            $("#player").transition({ y: -126, x: 590},4700,'linear');

            document.getElementById("gif16").style.pointerEvents = 'none';


            setTimeout(sprawdz_kierunki_aktywne, 3000); 



                }
                function kierunek_1617()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1617;

                $("#player").transition({y:-146, x: 445},4000,'linear');

                document.getElementById("gif17").style.pointerEvents = 'none';


                      
                      var czas =  Math.floor(Math.random()*1000)+2000;
        setTimeout(random_event, czas); 



                }
                function kierunek_1718()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1718;

                $("#player").transition({y:-186, x: 455},3000,'linear')
                .transition({y:-180, x: 339},3000,'linear');
                    
                document.getElementById("gif18").style.pointerEvents = 'none';

if(gargulec_pokonany==0)
     setTimeout(walka_na_18, 6000); 
                    
                    
                    
                setTimeout(sprawdz_kierunki_aktywne, 3000); 



                }

                function kierunek_1817()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1817;


                $("#player").transition({y:-186, x: 455},3000,'linear')
                .transition({y:-146, x: 445},3000,'linear');
                    
                document.getElementById("gif17").style.pointerEvents = 'none';


                setTimeout(sprawdz_kierunki_aktywne, 3000); 



                }
                function kierunek_1716()
                {
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1716;


                $("#player").transition({ y: -126, x: 590},1700,'linear');
                document.getElementById("gif16").style.pointerEvents = 'none';


                     
                      var czas =  Math.floor(Math.random()*3000)+1000;
        setTimeout(random_event, czas); 



                }

                function kierunek_1613()
{
                tlo_pustynia=1;
                     document.getElementById("zamek").style.zIndex = 300;
                kierunek=1013;
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
           document.getElementById("zamek").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
        


                $("#player").transition({ y: -30, x: 550},3700,'linear');
                document.getElementById("gif13").style.pointerEvents = 'none';


                setTimeout(sprawdz_kierunki_aktywne, 3000); 



                }

        function kierunek_1319()
{
             document.getElementById("player").style.zIndex = 300;
            document.getElementById("zamek").style.zIndex = 10;  
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1319;


                        $("#player").transition({y:-30, x: 650},3000,'linear')
                                    .transition({ y: -103, x: 698},1700,'linear');
    
                document.getElementById("gif19").style.pointerEvents = 'none';


                       
                if((mag_pokonany3==0)&&(mathea_end==1))
                setTimeout(walka_na_19,5000 );
                else
                setTimeout(random_event, 5000); 



                }
   function kierunek_1924()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1924;


                $("#player").transition({y:-150, x: 908},4000,'linear');
            
    
                document.getElementById("gif24").style.pointerEvents = 'none';


    
    if((misja==9)&&(alzur_pokonany==0))
           setTimeout(walka_na_24, 4000); 
    else
                setTimeout(sprawdz_kierunki_aktywne, 4000); 



                }
    
         function kierunek_2419()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 2419;


                        $("#player").transition({y:-150, x: 908},3000,'linear')
                       .transition({ y: -103, x: 698},1700,'linear');
    
                document.getElementById("gif19").style.pointerEvents = 'none';


                    
                      var czas =  Math.floor(Math.random()*3000)+1000;
        setTimeout(random_event, czas); 



                }

      function kierunek_1425()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
          document.getElementById("gif25").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1325;


            $("#player").transition({y: 5, x: 657},3000,'linear');
              
    
                document.getElementById("gif19").style.pointerEvents = 'none';


               
                      var czas =  Math.floor(Math.random()*1000)+1000;
        setTimeout(random_event, czas); 



                }




         function kierunek_1913()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1013;


                        $("#player").transition({y:-30, x: 650},3000,'linear')
      
                                        .transition({ y: -30, x: 550},1700,'linear');
    
    
                document.getElementById("gif13").style.pointerEvents = 'none';


                setTimeout(sprawdz_kierunki_aktywne, 3000); 



                }




   function kierunek_1310()
{
    
           tlo_pustynia=0;
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 10;
  miasto_nr3=0;

                    $("#player").transition({ y: -30, x: 460},1700,'linear')
                    $("#player").transition({ y: -8, x: 426},4000,'linear');
    
    
                document.getElementById("gif13").style.pointerEvents = 'none';


                
                      var czas =  Math.floor(Math.random()*2000)+1500;
        setTimeout(random_event, czas); 



                }
 
   function kierunek_1728()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1728;


                    $("#player").transition({ y: -82, x: 371},3700,'linear');
             
    
    
                document.getElementById("gif28").style.pointerEvents = 'none';


                
                      var czas =  Math.floor(Math.random()*2000)+1500;
    
    if((misja==7)&&(nawiedzony_dom_wykonany==0))
        {
                   document.getElementById('player').style.backgroundImage = "url('pytanie.gif')";     
            document.getElementById("player").style.pointerEvents = 'auto';  
            document.getElementById("player").onclick = function() {nawiedzony_dom()};    
            
            
        }
    else
    
        setTimeout(random_event, czas); 


                }

function kierunek_2817()
{
                $("#player").stop();
                document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
                document.getElementById("player").style.pointerEvents = 'none';
                var czas =  Math.floor(Math.random()*2000)+1500;
                wylacz_drogi();
                kroki();
                klik.play();
                kierunek = 1617;


                   $("#player").transition({y:-146, x: 445},3000,'linear');
             
    
    
                document.getElementById("gif28").style.pointerEvents = 'none';


                      var czas =  Math.floor(Math.random()*2000)+1500;
        setTimeout(random_event, czas);   



                }


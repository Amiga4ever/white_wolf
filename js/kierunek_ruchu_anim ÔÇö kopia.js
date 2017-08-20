
        function kierunek_0()
        { 
      
        $("#player").stop();
        kierunek = 0;
        sprawdz_zlecenie_walke();     
        wylacz_drogi();
        skip_event = 1;
          klik.play();
        $("#player").animate({ top: -95, left: -114},2700);
        document.getElementById("gif4").style.pointerEvents = 'none';
        kroki();
        setTimeout(sprawdz_kierunki_aktywne, 3500);
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

        $("#player").animate({ top: -164, left: 193},4000);
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
            $("#player").animate({ top: -184, left: 245},2000);
            $("#player").animate({ top: -227, left: 263},2000);

            document.getElementById("gif20").style.pointerEvents = 'none';
            document.getElementById("rat").style.pointerEvents = 'none';
            if(rat_pokonany==0)
            {
                setTimeout(walka_na_20, 4200);
                }
                else
                {
                setTimeout(sprawdz_kierunki_aktywne, 4200);
              
            }
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

        $("#player").animate({ top: -88, left: 10},1200);
        $("#player").animate({ top: -140, left: 22},2200);

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
            if(glejt==0)
        tekst_nr=7;
        klik.play();
        kierunek = 21;

        $("#player").animate({ top: -180, left: -55},2200);  
        document.getElementById("gif21").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';


        setTimeout(sprawdz_kierunki_aktywne, 2000);
        }




        function kierunek_22()
        {
        $("#player").stop();
        wylacz_drogi();
        kroki();
             if(glejt==0)
        typ_tla=7;
        klik.play();
        kierunek = 22;

  
        $("#player").animate({ top: -228, left: -80},2000);

        document.getElementById("player").style.pointerEvents = 'none';
        document.getElementById("gif22").style.pointerEvents = 'none';
              document.getElementById("rycerz").style.pointerEvents = 'none';

        if(rycerz_pokonany==0)
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

  
        $("#player").animate({ top: -180, left: -55},2200);  



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

        $("#player").animate({ top: -140, left: 22},4000);

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
        $("#player").animate({ top: -184, left: 245},2000);
        $("#player").animate({ top: -164, left: 193},2000);
        document.getElementById("gif4").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie) 
        setTimeout(sprawdz_zlecenie_walke, 4000);  
        else
        setTimeout(random_event, czas);   

        }



        function kierunek_212()
        {
        $("#player").stop();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
        document.getElementById("player").style.pointerEvents = 'none';

        wylacz_drogi();
        kroki();
     klik.play();
        kierunek = 2;
        tekst_nr=0;
        $("#player").animate({ top: -140, left: 22},2200);
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

        $("#player").animate({ top: -78, left: -12},1700);
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
        $("#player").animate({ top: -88, left: 10},2200);
        $("#player").animate({ top: -78, left: -12},1200);
        document.getElementById("gif2").style.pointerEvents = 'none';
        document.getElementById("player").style.pointerEvents = 'none';


        if(kierunek_sprawdzony==gdzie_zlecenie)      
        setTimeout(sprawdz_zlecenie_walke, 3500);
        else
        setTimeout(random_event, 3500);
        }



        function kierunek_4()
        {
        $("#player").stop();
        kierunek = 4;    
    
        var czas =  Math.floor(Math.random()*2000)+1500;
        wylacz_drogi();    
        klik.play();

        $("#player").animate({ top: -21, left: -75},2000);
        $("#player").animate({ top: -43, left: -150},2000);    


        
        setTimeout(sprawdz_kierunki_aktywne, 4000); 
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
        $("#player").animate({ top: 21, left: 7},1200);
        $("#player").animate({ top: 41, left: -7},1200);
        $("#player").animate({ top: 82, left: -63},1200);

        document.getElementById("gif7").onclick = function() {kierunek_7()};
        document.getElementById("gif6").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 3600);  
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
        $("#player").animate({ top: -21, left: -75},2000);
        $("#player").animate({ top: 0, left: 0},2000);
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
        $("#player").animate({ top: -21, left: -75},1200);
        $("#player").animate({ top: 0, left: 0},2200);
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

        $("#player").animate({ top: 90, left: -30},1000);
        $("#player").animate({ top: 100, left: 30},1000);
        $("#player").animate({ top: 100, left: 80},1000);
        document.getElementById("gif7").style.pointerEvents = 'none';
        document.getElementById("gif6").style.pointerEvents = 'none';


        setTimeout(miasto_event, 3000);
        setTimeout(sprawdz_kierunki_aktywne , 3000);

        }

        function kierunek_76()
        { 
        $("#player").stop();
        wylacz_drogi();  
        $("#player").animate({ top: 100, left: 40},1000);
        $("#player").animate({ top: 90, left: -30},1000);
        $("#player").animate({ top: 82, left: -63},1200);    


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
        $("#player").animate({ top: 41, left: -7},2200);
        $("#player").animate({ top: 21, left: 7},1200);
        $("#player").animate({ top: 0, left: 0},1200);
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
        var czas =  Math.floor(Math.random()*2000)+1500;
     klik.play();
        $("#player").animate({ top: -60, left: -80},2200);
        $("#player").animate({ top: -78, left: -12},2200);
        document.getElementById("gif3").style.pointerEvents = 'none';

        if(kierunek_sprawdzony==gdzie_zlecenie)       
        setTimeout(sprawdz_zlecenie_walke, 4400);
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
        $("#player").animate({ top: -60, left: -80},2200);
        $("#player").animate({ top: -43, left: -150},2200);
        document.getElementById("gif3").style.pointerEvents = 'none';


         setTimeout(sprawdz_kierunki_aktywne, 4000); 
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
        $("#player").animate({ top: 100, left: 160},2000);
        $("#player").animate({ top: 30, left: 165},2200);
        document.getElementById("gif8").style.pointerEvents = 'none';
        if(golem_pokonany==0)
        setTimeout(waklka_na_8, 4200);
        else    
        setTimeout(sprawdz_kierunki_aktywne, 3500);

    wylacz_drogi();
        }


        function kierunek_9()
        { 
        $("#player").stop();
        kierunek = 9; 

        wylacz_drogi();
        kroki();

     klik.play();
        $("#player").animate({ top: 5, left: 240},2000);

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
            $("#player").animate({ top: -8, left: 426},4000);

            document.getElementById("gif8").style.pointerEvents = 'none';

            wylacz_drogi();
            if(spider_dead==0)
                {
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

        $("#player").animate({ top: 30, left: 416},2000);
        $("#player").animate({ top: 88, left: 340},2500);

        document.getElementById("gif8").style.pointerEvents = 'none';

        setTimeout(sprawdz_kierunki_aktywne, 4000);
        setTimeout(grave, 4000);


        }




        function kierunek_110()
        { 
        $("#player").stop();
        kierunek = 110; 

        wylacz_drogi();
        kroki();
        document.getElementById("player").style.backgroundImage = "url('gif.gif')"; 
     klik.play();

        $("#player").animate({ top: 30, left: 416},2500);
        $("#player").animate({ top: -8, left: 426},2000);

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
        $("#player").animate({ top: 5, left: 240},4000);

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
        $("#player").animate({ top: 30, left: 165},2200);

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
        $("#player").animate({ top: 100, left: 160},2000);
        $("#player").animate({ top: 100, left: 80},2000);
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
        $("#player").animate({ top: -45, left: 142},2500);
        document.getElementById("gif8").style.pointerEvents = 'none';
        setTimeout(sprawdz_kierunki_aktywne, 2500);
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
        $("#player").animate({ top: 30, left: 165},2200);   
        setTimeout(sprawdz_kierunki_aktywne, 2200);

        }


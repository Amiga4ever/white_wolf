           
function rozmowa_start()
{   
       document.getElementById('ship').style.backgroundImage = "url('ship2.png')";

       dialog_nr=0;
    rozmowa();
  medytacja_zanik();
    inventory_zanik();
    
}

function rozmowa()
            {
                
            

        $("#dialog").transition({scale:1,opacity:1}, 200, 'ease'); 
    $("#odpowiedzi").transition({scale:1,opacity:1}, 200, 'ease');
                
                
            if(dialog_nr==0)             
            {     
  
      
            slide.play();
            if(plec_typ==1)
            document.getElementById("dialog1").innerHTML = "Dziękuję, że przybyłeś tak szybko. Mam nadzieję ,że podróz minęła przyjemnie choć wiem, że morski środek transportu nie nalezy do Twoich ulubionych.";   
            else
            document.getElementById("dialog1").innerHTML = "Dziękuję , że przybyłaś tak szybko. Mam nadzieję ,że podróz minęła przyjemnie choć wiem, że morski środek transportu nie nalezy do Twoich ulubionych.";   

                
            document.getElementById("opcja1").innerHTML = "Podróż była nawet udana. Obyło się bez niespodzianek."
          
            document.getElementById("opcja1").style.pointerEvents = 'auto'; 
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';    
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease'); 
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1;
            setTimeout(rozmowa,200)};
                

            }
                
                
                
                
            if(dialog_nr==1)
                
            {        
            $("#dialog1").transition({opacity:1}, 200, 'ease');    
            $("#opcja1").transition({opacity:1}, 200, 'ease');     
       
            slide.play();
            document.getElementById("dialog1").innerHTML = "Ile to minęło od Twojego ostatniego pobytu ..rok? Dużo się zmieniło i to niestety na gorsze."
            if(plec_typ==1)    
            document.getElementById("opcja1").innerHTML = "Będzie z rok..Musiałem zmienić otoczenie po ostatniej przygodzie z Dzikim Gonem."
             else
            document.getElementById("opcja1").innerHTML = "Będzie z rok..Musiałam zmienić otoczenie po ostatniej przygodzie z Dzikim Gonem."    
            document.getElementById("opcja1").style.pointerEvents = 'auto';  
  

            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';    
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease'); 
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=2;
            setTimeout(rozmowa,200)};
                
            }


            if(dialog_nr==2)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';  
            $("#dialog1").transition({opacity:1}, 200, 'ease');    
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "To było do przewidzenia patrząc z perspektywy czasu."
            document.getElementById("dialog1").innerHTML = "Loża czarodziejek zupełnie się rozpadła. Wyzima i okolice pozostały zupełnie bez jakiejkolwiek opieki z ich strony.";
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease'); 
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=3;
            setTimeout(rozmowa,200)};  
                
            }
 
                
            if(dialog_nr==3)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Domyślam się , że on jest naszym zmartwieniem..."
            document.getElementById("dialog1").innerHTML = "Jeden z magów Alzur, w sumie nie wiem czy go kojarzysz. Zupełnie oszalał. Po rozpadzie loży magowie rozeszli się w swoją stronę. Każdy zaczął działać na własną rękę.";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=4;    
            setTimeout(rozmowa,200)};
           
            }
                
            if(dialog_nr==4)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Co to za artefakty? Do czego mu sa potrzebne?"

            document.getElementById("dialog1").innerHTML = "Niestety tak. Pozyskał 5 <spam style='color:yellow';>starożytnych artefaktów</spam> i wykorzystuje je jak już się pewnie domyślasz do swoich podłych planów";         

            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=5;    
            setTimeout(rozmowa,200)};
           
            }
 
     
          if(dialog_nr==5)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
                if(plec_typ==1)
            document.getElementById("opcja1").innerHTML = "Jednym słowem wymarzone miesje dla Wiedźmina";
else
             document.getElementById("opcja1").innerHTML = "Jednym słowem wymarzone miesje dla Wiedźminki";
            document.getElementById("dialog1").innerHTML = "Ich pochodzenie jest bliżej nie określone, ale dzięki nim wszelakie paskudztwa doznają mutacji. Stają się silniejsze, odporniejsze bardziej agresywne. Wystarczy, że znajdą się w ich otoczeniu";         

            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=6;    
            setTimeout(rozmowa,200)};
           
            } 
                
            if(dialog_nr==6)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Nie pozostaje więc nic innego jak odszukać te artefakty.";
   
            if(plec_typ==2)    
            document.getElementById("dialog1").innerHTML = "Uwież mi - nawet na Wiedźminki to coś z czym do tej pory nie miałaś doczynienia";         
            else
            document.getElementById("dialog1").innerHTML = "Uwież mi - nawet na Wiedźmina to coś z czym do tej pory nie miałeś doczynienia";    

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1117;    
            setTimeout(rozmowa,200)};
           
            }     
               
            if(dialog_nr==1117)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Czy możemy liczyć na czyjąś pomoc?";
   
            document.getElementById("dialog1").innerHTML = "Do tej pory udało mi się ustalić jedną lokacje w której potencjalnie może się znajdować - .<spam style='color:deeppink';>'Stara Krypta'</spam>, ogólnie gdzie zmutowane potwory tam zapewne znajdują się <spam style='color:yellow';>ARTEFAKTY</spam>  ";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1118;    
            setTimeout(rozmowa,200)};        
            }   
                
                
                
                    if(dialog_nr==1118)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Czy wiadomo gdzie znajduje się teraz Alzur?";
   
            document.getElementById("dialog1").innerHTML = "Jest jedna młoda adeptka magii. Jej mentorka wyruszyła na północ ona zaś pozostała w okolicy. Myślę, że warto z nią porozmawiać.";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1119;    
            setTimeout(rozmowa,200)};        
            }  
                
                
             if(dialog_nr==1119)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Jak nie plaga to potwory..ach ta Wyzima...";
   
            document.getElementById("dialog1").innerHTML = "Niestety nie. Okolicę pustoszą zmutowane potwory, a on sam siedzi w ukryciu. Na dodatek jestesmy odcięci od  <spam style='color:deeppink';> Wyzimy </spam>";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1120;    
            setTimeout(rozmowa,200)};        
            }   
                
                
            if(dialog_nr==1120)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Jak je odnajdę..co z nimi zrobić?";
   
            document.getElementById("dialog1").innerHTML = "Zdobądź część artefaktów. Porozmawiaj z adeptka magii Matheą. Jestem pewiem, że razem znajdziecie sposób by przedostać się do <spam style='color:deeppink';> Wyzimy </spam> by kontynuować dalsze poszukiwania.";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1121;    
            setTimeout(rozmowa,200)};        
            }   
                
                
                if(dialog_nr==1121)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Dobra..ruszam na poszukiwania";
   
            document.getElementById("dialog1").innerHTML = "Musimy je zniszczyć by więcej nie wpadły w niepowołane ręce, ale póki co za ich pomocą musimy jakoś pozbyć się barier magicznych stworzonych przez Alzura. Może Mathea znajdzie sposób.";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1122;    
            setTimeout(rozmowa,200)};        
            }      
                
                
                         if(dialog_nr==1122)
            { 
           document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
        
            document.getElementById("opcja1").innerHTML = "Zajrzę więc do Novigradu. W sumie potrzebuję uzupełnić zapasy.";
   
            document.getElementById("dialog1").innerHTML = "Udaj się do Novigradu. Myslę, że wyznaczyli nagrodę na rozwiązanie problemu ze znikającymi ludźmi. Pojawiły się również <spam style='color:yellow';> Zlecenia Wiedźmińskie </spam> co raczej nie powinno dziwić w obecnej sytuacji.";         
         

                
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=1123;    
            setTimeout(rozmowa,200)};        
            }     
                

            if(dialog_nr==1123)
            { 
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');

            document.getElementById("opcja1").innerHTML = "Bywaj przyjacielu. Zrobię co w mojej mocy by odnaleźć wszystkie artefakty";

            if(plec_typ==1)
            document.getElementById("dialog1").innerHTML = "Uważaj na siebie Wiedźminie. Cała nadzieja w Tobie.";         else
            document.getElementById("dialog1").innerHTML = "Uważaj na siebie Wiedźminko. Cała nadzieja w Tobie.";



            document.getElementById("opcja1").onclick = function() {

            document.getElementById("medytacja_menu").style.pointerEvents="auto";
            document.getElementById("medytacja_menu").onclick = function() {medytacja_pokaz()};  
            document.getElementById("info").style.pointerEvents="auto";
            document.getElementById("info").onclick = function() {inventory_pokaz()};   



            $("#dialog1").transition({opacity:0}, 200, 'ease');    
            document.getElementById("opcja1").style.pointerEvents = 'none';      

            slide.play();
            $("#druid").transition({scale:0,opacity:0}, 2000, 'ease');       
                
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            kroki();
            $("#player").transition({scale:1, opacity:1},2500,'ease');   
            dialog_nr=7;
            pokaz_informacje();
                kierunek=5;
                tekst_nr=11;
              pokaz_informacje();
                sprawdz_kierunki_aktywne();
                
                
            };          
            }   

                
                
                
                
                
            else if(dialog_nr==7)
            {
                
                
      
                
            $("#opcja1").fadeIn(0);   
       
            document.getElementById("opcja1").style.pointerEvents = 'auto';  
                
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
                
            document.getElementById("opcja1").innerHTML = "Witaj. Przychodzę w sprawie Artefaktów..."
            document.getElementById("dialog1").innerHTML = "W czym Mathea może Ci pomóc?";   
                
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
             zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=8;    
            setTimeout(rozmowa,200)};
           
            }
                
            else if(dialog_nr==8)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Driud odkrył położenie kilku z nich.";
            document.getElementById("dialog1").innerHTML = "<spam style='color:yellow';> ARTEFAKTY</spam> powiadasz... gdybym tylko wiedziała gdzie ich szukać...";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=9;    
            setTimeout(rozmowa,200)};
           
            }
                
               else   if(dialog_nr==9)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
          
            document.getElementById("opcja1").innerHTML = "Z jego wskazówkami udało mi się odnaleźć "+artefacts + "<spam style='color:yellow';> ARTEFAKTY</spam>";
            document.getElementById("dialog1").innerHTML = "Ten stary wariat nie kontaktował się ze mną od tygodni choć wiedziałam, że coś kombinuje.";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=10;    
            setTimeout(rozmowa,200)};
           
            }  
                
           else  if(dialog_nr==10)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Podobno możesz mi pomóć dostać się do Wyzimy?."
            document.getElementById("dialog1").innerHTML = "Czyli to jednak prawda co do Twojej skuteczności. Do tej pory jedynie z opowieści znałam Twoje zasługi.";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=11;    
            setTimeout(rozmowa,200)};
           
            }   
           else  if(dialog_nr==11)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Wrócę więc do Ciebie jak 4 odnajdę";
            document.getElementById("dialog1").innerHTML = "Z moich badań wynika, że piąty <spam style='color:yellow';>ARTEFAKT</spam> może być w jaskiniach na pustyni. Najpierw jednak  potrzebujemy czterech  <spam style='color:yellow';>ARTEFAKTÓW</spam> do stworzenia zaklęcia, które otworzy nam przejście do <spam style='color:red';>WYZIMY</spam>";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            dialog_nr=22;    
            setTimeout(rozmowa,200)};
           
            }   
   
           else  if(dialog_nr==13)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Usiłuje dostac się do Piramidy..."
            document.getElementById("dialog1").innerHTML = "O co chodzi?";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
                  
            dialog_nr=14;    
            setTimeout(rozmowa,200)};
           
            }   
                
           else  if(dialog_nr==14)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Dokładnie tak. Wiesz jak to obejść?"
            document.getElementById("dialog1").innerHTML = "I nie możesz gdyż pole siłowe blokuje przejście. Swoją drogą to nic w porównaniu do tego co jest w <spam style='color:red';> WYZIMIE</spam>.Tu wystarczy, że przekieruje moc z artefaktów bez konieczności rzucania zaklęć. ";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
                  
            dialog_nr=15;    
            setTimeout(rozmowa,200)};
           
            }   
         else    if(dialog_nr==15)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            if(artefacts==3)
            {  
            dialog_nr=16;  
            document.getElementById("opcja1").innerHTML = "Właściwie to mam juz 3..."
            }
            else
            {
            dialog_nr=100;  
            document.getElementById("opcja1").innerHTML = "Wrócę więc jak je znajdę. Bywaj."
            }
            document.getElementById("dialog1").innerHTML = "Myślę ,że mając 3 <spam style='color:yellow';> ARTEFAKTY</spam> dam radę je przekuć <spam style='color:red';> 2 runami</spam>  byś mógł przekierować siłę w stronę pola. Wystarczy się zbliżyć by energia eksplodowała niszcząc barierę";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
                  
          
            setTimeout(rozmowa,200)};
           
            }    
                
                
          else   if(dialog_nr==16)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            if(runy_amount>=2)
            {  
            dialog_nr=18;  
            document.getElementById("opcja1").innerHTML = "Tak się składa, że mam 2 runy przy sobie."
            }
            else
            {
            dialog_nr=101;  
            document.getElementById("opcja1").innerHTML = "Wróce niebawem z runami. Bywaj."
            }
            document.getElementById("dialog1").innerHTML = "Świetnie. Dostarcz mi jeszcze <spam style='color:red';> 2 runy </spam>";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
                  
          
            setTimeout(rozmowa,200)};
           
            }   
            else if(dialog_nr==101)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
            dialog_nr=16;     
                    }
                
                
                
                
                
            else if(dialog_nr==18)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
 
            runy_amount=runy_amount-2;
            document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;
            magic_runes.play();
            dialog_nr=19; 
              glejt = 1;   
            document.getElementById("opcja1").innerHTML = "Dziękuję. Bywaj"    
            document.getElementById("dialog1").innerHTML = "Zrobione. Teraz nie powinno byc problemu z pokonaniem bariery. Nie wiadomo jakie niebezpieczeństwa czają się w tej Piramidzie. Miej się na baczności.";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
                  
          
            setTimeout(rozmowa,200)};
           
            }      
            else if(dialog_nr==19)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');   
                
            dialog_nr=22;     
                    }
     
                
                
                
                        else if(dialog_nr==22)
                        {
                        document.getElementById("opcja1").style.pointerEvents = 'auto';      
                        $("#dialog1").transition({opacity:1}, 200, 'ease');
                        $("#opcja1").transition({opacity:1}, 200, 'ease');
                        if(artefacts<4)    
                        {
                        document.getElementById("opcja1").innerHTML = "Jeszcze nie, bywaj!"
                        dialog_nr=23;    
                        }

                        if(artefacts==4)
                        {
                        document.getElementById("opcja1").innerHTML = "Tak. Oto one!" 
                        dialog_nr=24;    
                        }
                        document.getElementById("dialog1").innerHTML = "Czy masz juz 4 <spam style='color:yellow';> ARTEFAKTY?</spam>";     
                 
                        document.getElementById("opcja1").onclick = function() {
                        document.getElementById("opcja1").style.pointerEvents = 'none';      
                          zlecenie_sfx.play();
                        $("#dialog1").transition({opacity:0}, 200, 'ease');
                        $("#opcja1").transition({opacity:0}, 200, 'ease');

                           
                        setTimeout(rozmowa,200)};

                        }  
                
            else if(dialog_nr==24)
            {
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            if((runy_amount>=3)&&(graveyard_skonczony==1))
            {  
            dialog_nr=25;  
            document.getElementById("opcja1").innerHTML = "Cmentarz oczyszczony.."
            }
            else
            {
            dialog_nr=26;  
            document.getElementById("opcja1").innerHTML = "Wróce niebawem. Bywaj."
            }
			document.getElementById("dialog1").innerHTML = "Zanim jednak zajmiemy się artefaktami to musze Cię prosić o wyeliminowanie potworów z pobliskiego cmentarza. Emitują silna aurę przez co moje czary są osłabione. Wróć gdy pokonasz wszystkie potwory.";              
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            setTimeout(rozmowa,200)};
           
            }   
                
            else if(dialog_nr==25)
			{
			document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            if((runy_amount>=3)&&(graveyard_skonczony==1))
            {  
            dialog_nr=28;  
            document.getElementById("opcja1").innerHTML = "Oto 3 runy"
            }
            else
            {
            dialog_nr=26;  
            document.getElementById("opcja1").innerHTML = "Wróce niebawem. Bywaj."
            }
            document.getElementById("dialog1").innerHTML = "Jak pewnie już wiesz oprócz <spam style='color:yellow';>ARTEFAKTÓW</spam> potrzebuję jeszcze <spam style='color:red';> 3 run </spam> by wytworzyć odpowiednią energię, która pozwoli przywołać ognistą kulę w kierunku pola w <spam style='color:red';>WYZIMIE</spam>. Niestety energii starczy tylko na jeden czar.";              
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
       
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            setTimeout(rozmowa,200)};
            }   
                
                
             else if(dialog_nr==27)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
			}
                
                
                
				else if(dialog_nr==28)
				{
				extend_dialog();
				document.getElementById("opcja1").innerHTML = "Nie ma sprawy. Dzieki za pomoc. Bywaj."
				document.getElementById("dialog1").innerHTML = "Daj mi chwilkę na przygotowanie odpowiedniego zaklęcia...";   
			    zlecenie_sfx.play();	
					ognista_kula=1;
				 dialog_nr=29; 	
				}
				
				else if(dialog_nr==29)
				{
				extend_dialog();
				document.getElementById("opcja1").innerHTML = "Bywaj."
				document.getElementById("dialog1").innerHTML = "Wróć gdy znajdziesz wszystkie 5 artefaktów";   
			    zlecenie_sfx.play();	
				document.getElementById("opcja1").onclick = function() {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease'); };
				}
				
                
                
   
                
                
                
                
                
             else if(dialog_nr==23)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
            dialog_nr=22;     
                    }
                
             else if(dialog_nr==26)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
            dialog_nr=24;     
                    } 
                
                
             else if(dialog_nr==100)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
            dialog_nr=15;     
                    }
         
                       else if(dialog_nr==28)
            {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');     
         
                    }
                
                
                
            if((bariera_odkryta==1)&&(dialog_nr==23))
            {
       
            document.getElementById("opcja1").style.pointerEvents = 'auto';      
            $("#dialog1").transition({opacity:1}, 200, 'ease');
            $("#opcja1").transition({opacity:1}, 200, 'ease');
            document.getElementById("opcja1").innerHTML = "Właściwie to mam jeszcze jedno pytanie..."
            document.getElementById("dialog1").innerHTML = "Wiesz gdzie mnie szukać jakbyś czegoś jeszcze potrzebował";                 
            document.getElementById("opcja1").onclick = function() {
            document.getElementById("opcja1").style.pointerEvents = 'none';      
              zlecenie_sfx.play();
            $("#dialog1").transition({opacity:0}, 200, 'ease');
            $("#opcja1").transition({opacity:0}, 200, 'ease');
            bariera_odkryta=2;
            dialog_nr=13;    
            setTimeout(rozmowa,200)};
           
            } 
               
               if( mathea_end==1)
				{
				extend_dialog();
				document.getElementById("opcja1").innerHTML = "Bywaj."
				document.getElementById("dialog1").innerHTML = "Powodzenia!";   
			    zlecenie_sfx.play();	
				document.getElementById("opcja1").onclick = function() {
            $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease'); };
				}
                
                
                
                if((artefacts==5)&&(mathea_end==0))
                {
                document.getElementById("opcja1").style.pointerEvents = 'auto';      
                $("#dialog1").transition({opacity:1}, 200, 'ease');
                $("#opcja1").transition({opacity:1}, 200, 'ease');

                dialog_nr=30; 
                document.getElementById("opcja1").innerHTML = "W takim razie czas się nimi zająć..."
                mathea_end=1;
                document.getElementById("dialog1").innerHTML = "Masz już 5 <spam style='color:yellow';>ARTEFAKTÓW</spam>,a Alzur już wie o zaistniałem sytuacji i wysłał 'Trójcę nieumarłych' magów. Ich eliminacja jest nieuchronna. Także burmistrz wyznaczył nagrodę. Jak to mawiają - dwie pieczenie na jednym ogniu.";                 
                document.getElementById("opcja1").onclick = function() {
                document.getElementById("opcja1").style.pointerEvents = 'none';      
                  $("#odpowiedzi").transition({scale:0,opacity:0}, 200, 'ease');        
            $("#dialog").transition({scale:0,opacity:0}, 200, 'ease'); 
            $("#okno_teren").transition({ scale:1,opacity:1}, 200, 'ease');
            $("#zdarzenie").transition({ scale:0,opacity:0}, 200, 'ease');
                $("#mag").fadeIn(0);
                $("#mag2").fadeIn(0);
                $("#mag3").fadeIn(0);
							dialog_nr=30;
               };



                }
                
                		
                
              
                
            }







function extend_dialog()
{
document.getElementById("opcja1").style.pointerEvents = 'auto';      
$("#dialog1").transition({opacity:1}, 200, 'ease');
$("#opcja1").transition({opacity:1}, 200, 'ease');	
document.getElementById("opcja1").onclick = function() {
document.getElementById("opcja1").style.pointerEvents = 'none';      
zlecenie_sfx.play();
$("#dialog1").transition({opacity:0}, 200, 'ease');
$("#opcja1").transition({opacity:0}, 200, 'ease');
setTimeout(rozmowa,200)};
}
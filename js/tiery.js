
function polowanie()
{
document.getElementById("btn_1").disabled=true;
document.getElementById("btn_2").disabled=true;
document.getElementById("btn_3").disabled=true;
document.getElementById("btn_4").disabled=true;
document.getElementById("btn_5").disabled=true;
document.getElementById("btn_6").disabled=true;
document.getElementById("btn_7").disabled=true;
document.getElementById("btn_8").disabled=true;



    check_rewards();
    
    
  
            $("#lista_close").fadeIn(0);
            document.getElementById("lista_close").onclick = function(){zadania_new_zanik()};  
            document.getElementById("ile_zabitych").innerHTML = "Zabitych potworów na cmentarzu: "+ zabite_moby1;
 
   
            if((zabite_moby1<=5)&&(tier_1==0))
            {
                
            $("#tier1").fadeIn(0);
            $("#btn_1").fadeIn(0);
            document.getElementById("btn_1").disabled=true;
            document.getElementById("btn_1").style.color="dimgrey";
            }
    
            if((zabite_moby1>=5)&&(tier_1==0))
            {
            $("#btn_1").fadeIn(0);
            document.getElementById("btn_1").disabled=false;
            document.getElementById("btn_1").style.color="green";   

            document.getElementById("btn_1").onclick = function()
            { 
            gold_amount= gold_amount+10;
            tier_1=1;
            buy.play();    
            document.getElementById("tier1").style.color="dimgrey";
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_2").fadeIn(0);
            $("#tier2").fadeIn(0);    
            $("#btn_1").fadeTo(500, 0);
            document.getElementById("btn_2").disabled=true;
            document.getElementById("btn_2").style.color="dimgrey";
            document.getElementById("btn_1").disabled=true;
            document.getElementById("btn_1").style.color="dimgrey"; 
            tier_nagroda=1;
            polowanie();    
            }                 
            }

    
            if((zabite_moby1<8)&&(tier_1==1))
            {
            $("#btn_2").fadeIn(0);
            document.getElementById("btn_2").disabled=true;
            document.getElementById("btn_2").style.color="dimgrey";
            }
    
            if((zabite_moby1>=8)&&(tier_1==1))
            {
            $("#btn_2").fadeIn(0);
              
            document.getElementById("btn_2").disabled=false;
            document.getElementById("btn_2").style.color="green";
                
            document.getElementById("btn_2").onclick = function()
            { 
            gold_amount= gold_amount+10;
            skory_amount = skory_amount +2;    
            document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount;    
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_3").fadeIn(0);
            $("#tier3").fadeIn(0);    
            $("#btn_2").fadeTo(500, 0);
            document.getElementById("btn_3").disabled=true;
            document.getElementById("btn_3").style.color="dimgrey";
            document.getElementById("tier2").style.color="dimgrey";  
            document.getElementById("btn_2").disabled=true;
            document.getElementById("btn_2").style.color="dimgrey"; 
            tier_1=2; 
            tier_nagroda=2;   
            polowanie();    
            }                
            }
    
    
            if((zabite_moby1<12)&&(tier_1==2))
            {
            $("#btn_3").fadeIn(0);
            document.getElementById("btn_3").disabled=true;
            document.getElementById("btn_3").style.color="dimgrey";
            }
    
            if((zabite_moby1>=12)&&(tier_1==2))
            {
            $("#btn_3").fadeIn(0);
              
            document.getElementById("btn_3").disabled=false;
            document.getElementById("btn_3").style.color="green";
                
            document.getElementById("btn_3").onclick = function()
            { 
            gold_amount= gold_amount+15;
            runy_amount = runy_amount +1;    
                 document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;  
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_4").fadeIn(0);
            $("#tier4").fadeIn(0);    
            $("#btn_3").fadeTo(500, 0);
            document.getElementById("btn_4").disabled=true;
            document.getElementById("btn_4").style.color="dimgrey";
            document.getElementById("tier3").style.color="dimgrey";  
            document.getElementById("btn_3").disabled=true;
            document.getElementById("btn_3").style.color="dimgrey"; 
            tier_1=3;   
            tier_nagroda=3; 
            polowanie();    
            }                 
            }
    
    
    
            if((zabite_moby1<15)&&(tier_1==3))
            {
            $("#btn_4").fadeIn(0);
            document.getElementById("btn_4").disabled=true;
            document.getElementById("btn_4").style.color="dimgrey";
            }
    
            if((zabite_moby1>=15)&&(tier_1==3))
            {
            $("#btn_4").fadeIn(0);
              
            document.getElementById("btn_4").disabled=false;
            document.getElementById("btn_4").style.color="green";
                
            document.getElementById("btn_4").onclick = function()
            { 
            gold_amount= gold_amount+20;
            runy_amount = runy_amount +2;    
                 document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;  
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_5").fadeIn(0);
            $("#tier5").fadeIn(0);    
            $("#btn_4").fadeTo(500, 0);
            document.getElementById("btn_5").disabled=true;
            document.getElementById("btn_5").style.color="dimgrey";
            document.getElementById("tier4").style.color="dimgrey";  
            document.getElementById("btn_4").disabled=true;
            document.getElementById("btn_4").style.color="dimgrey"; 
            tier_1=4;   
            tier_nagroda=4; 
            polowanie();    
            }                 
            }
    
    
           if((zabite_moby1<18)&&(tier_1==4))
            {
            $("#btn_5").fadeIn(0);
            document.getElementById("btn_5").disabled=true;
            document.getElementById("btn_5").style.color="dimgrey";
            }
    
            if((zabite_moby1>=18)&&(tier_1==4))
            {
            $("#btn_5").fadeIn(0);
              
            document.getElementById("btn_5").disabled=false;
            document.getElementById("btn_5").style.color="green";
                
            document.getElementById("btn_5").onclick = function()
            { 
            gold_amount= gold_amount+20;
              skory_amount = skory_amount +3;    
            document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount; 
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_6").fadeIn(0);
            $("#tier6").fadeIn(0);    
            $("#btn_5").fadeTo(500, 0);
            document.getElementById("btn_6").disabled=true;
            document.getElementById("btn_6").style.color="dimgrey";
            document.getElementById("tier5").style.color="dimgrey";  
            document.getElementById("btn_5").disabled=true;
            document.getElementById("btn_5").style.color="dimgrey"; 
            tier_1=5; 
            tier_nagroda=5   
            polowanie();    
            }                
            }
    
    
           if((zabite_moby1<21)&&(tier_1==5))
            {
            $("#btn_6").fadeIn(0);
            document.getElementById("btn_6").disabled=true;
            document.getElementById("btn_6").style.color="dimgrey";
            }
    
            if((zabite_moby1>=21)&&(tier_1==5))
            {
            $("#btn_6").fadeIn(0);
              
            document.getElementById("btn_6").disabled=false;
            document.getElementById("btn_6").style.color="green";
                
            document.getElementById("btn_6").onclick = function()
            { 
            gold_amount= gold_amount+40;
            runy_amount = runy_amount +2;    
                 document.getElementById("runes").innerHTML = "Runy:" + " " + runy_amount;  
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_7").fadeIn(0);
            $("#tier7").fadeIn(0);    
            $("#btn_6").fadeTo(500, 0);
            document.getElementById("btn_7").disabled=true;
            document.getElementById("btn_7").style.color="dimgrey";
            document.getElementById("tier6").style.color="dimgrey";  
            document.getElementById("btn_6").disabled=true;
            document.getElementById("btn_6").style.color="dimgrey"; 
            tier_1=6; 
            tier_nagroda=6;   
            polowanie();    
            }                 
            }
    
    
           if((zabite_moby1<25)&&(tier_1==6))
            {
            $("#btn_7").fadeIn(0);
            document.getElementById("btn_7").disabled=true;
            document.getElementById("btn_7").style.color="dimgrey";
            }
    
            if((zabite_moby1>=25)&&(tier_1==6))
            {
            $("#btn_7").fadeIn(0);
              
            document.getElementById("btn_7").disabled=false;
            document.getElementById("btn_7").style.color="green";
                
            document.getElementById("btn_7").onclick = function()
            { 
            gold_amount= gold_amount+50;
     
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;
            $("#btn_8").fadeIn(0);
            $("#tier8").fadeIn(0);    
            $("#btn_7").fadeTo(500, 0);
            document.getElementById("btn_8").disabled=true;
            document.getElementById("btn_8").style.color="dimgrey";
            document.getElementById("tier7").style.color="dimgrey";  
            document.getElementById("btn_7").disabled=true;
            document.getElementById("btn_7").style.color="dimgrey"; 
            tier_1=7;  
            tier_nagroda=7;  
            polowanie();    
            }                
            }
    
          if((zabite_moby1<28)&&(tier_1==7))
            {
            $("#btn_8").fadeIn(0);
            document.getElementById("btn_8").disabled=true;
            document.getElementById("btn_8").style.color="dimgrey";
            }
    
            if((zabite_moby1>=28)&&(tier_1==7))
            {
            $("#btn_8").fadeIn(0);
              
            document.getElementById("btn_8").disabled=false;
            document.getElementById("btn_8").style.color="green";
                
            document.getElementById("btn_8").onclick = function()
            { 
            gold_amount= gold_amount+50;
            skory_amount = skory_amount +5;    
            document.getElementById("skins").innerHTML = "Skóry:" + " " + skory_amount; 
            buy.play();    
            document.getElementById("gold").innerHTML = "Złoto:" + " " + gold_amount;   
            $("#btn_8").fadeTo(500, 0);
            document.getElementById("tier8").style.color="dimgrey";  
            document.getElementById("btn_8").disabled=true;
            document.getElementById("btn_8").style.color="dimgrey"; 
                tier_1=8; 
                tier_nagroda=8;   
            polowanie();    
            }                
            }
            check_rewards();
}



function check_rewards()
{

if(tier_nagroda>0)
{
$("#btn_1").fadeTo(500, 0);
$("#tier2").fadeIn(0); 
$("#tier1").fadeIn(0);
document.getElementById("tier1").style.color="dimgrey";
document.getElementById("btn_1").disabled=true;
}

if(tier_nagroda>1)
{
$("#btn_2").fadeTo(500, 0);
$("#tier3").fadeIn(0); 
$("#tier2").fadeIn(0);
document.getElementById("tier2").style.color="dimgrey"; 
document.getElementById("btn_2").disabled=true; 
}

if(tier_nagroda>2)
{
$("#btn_3").fadeTo(500, 0);
$("#tier4").fadeIn(0); 
$("#tier3").fadeIn(0);
document.getElementById("tier3").style.color="dimgrey";
document.getElementById("btn_3").disabled=true;  
}

if(tier_nagroda>3)
{
$("#btn_4").fadeTo(500, 0);
$("#tier5").fadeIn(0); 
$("#tier4").fadeIn(0);
document.getElementById("tier4").style.color="dimgrey"; 
document.getElementById("btn_4").disabled=true; 
}

if(tier_nagroda>4)
{
$("#btn_5").fadeTo(500, 0);
$("#tier6").fadeIn(0); 
$("#tier5").fadeIn(0);
document.getElementById("tier5").style.color="dimgrey"; 
document.getElementById("btn_5").disabled=true; 
}

if(tier_nagroda>5)
{
$("#btn_6").fadeTo(500, 0);
$("#tier7").fadeIn(0); 
$("#tier6").fadeIn(0);
document.getElementById("tier6").style.color="dimgrey";
document.getElementById("btn_6").disabled=true;  
}

if(tier_nagroda>6)
{
$("#btn_7").fadeTo(500, 0);
$("#tier8").fadeIn(0); 
$("#tier7").fadeIn(0);
document.getElementById("tier7").style.color="dimgrey"; 
document.getElementById("btn_7").disabled=true; 
}


if(tier_nagroda>7)
{
$("#btn_8").fadeTo(500, 0);
$("#tier9").fadeIn(0); 
$("#tier8").fadeIn(0);
document.getElementById("tier8").style.color="dimgrey";
document.getElementById("btn_8").disabled=true;  
}








}



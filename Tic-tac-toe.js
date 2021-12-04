var q=0; var l=0;
function fun(o){
 // f=toString(o);
  var p=document.getElementById(""+o);
  if((q%2==0)&&(p.value==" "))
 {
   p.value="x";
   q++;
  }
  else if(p.value==" ")
 {
  p.value="o";
  q++;
  }
 
 
  if(q>4)pair();
}

function pair()
{
   var a1=document.getElementById("1");
   var b1=document.getElementById("2");
   var c1=document.getElementById("3");
   var d1=document.getElementById("4");
   var e1=document.getElementById("5");
   var f1=document.getElementById("6");
   var g1=document.getElementById("7");
   var h1=document.getElementById("8");
   var i1=document.getElementById("9");
   
 a=  a1.value;
 b=  b1.value;
 c=   c1.value;
 d=  d1.value;
 e=  e1.value;
 f=  f1.value;
 g=  g1.value;
 h=   h1.value;
 i=  i1.value;
   
 
   if((a==b)&&(b==c)&&((c=="x")||(c=="o")))
    { alert(a+' wins'); l=1;}
   if((d==e)&&(e==f)&&((f=="x")||(f=="o")))
    {alert(d+' wins');l=1;}
   if((g==h)&&(h==i)&&((i=="x")||(i=="o")))
   
   {alert(i+' wins');l=1;}
   if((a==e)&&(e==i)&&((i=="x")||(i=="o")))
   {alert(a+' wins');l=1;}
   if((c==e)&&(e==g)&&((g=="x")||(g=="o")))
   {alert(g+' wins');l=1;}
   if((a==d)&&(d==g)&&((g=="x")||(g=="o")))
   {alert(g+' wins');l=1;}
   if((b==e)&&(e==h)&&((h=="x")||(h=="o")))
   {alert(h+' wins');l=1;}
   if((c==f)&&(f==i)&&((i=="x")||(i=="o")))
   {alert(i+' wins');l=1;}
   if(q==9)
   {
     l=1;
   alert("Game Restarted!");
   }
   
   if(l==1)
   {
   a1.value=" ";
   b1.value=" ";
   c1.value=" ";
   d1.value=" ";
   e1.value=" ";
   f1.value=" ";
   g1.value=" ";
   h1.value=" ";
   i1.value=" ";
   
    q=0;
    l=0;
   }
   
   
   
}

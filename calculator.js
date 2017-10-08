var final = "";
var s1;
function fun(id){
var  text;

	
   if(id === 'id1'){
   	text = "1";
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }
   if(id === 'id2'){
   	text = '2';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id3'){
   	text = '3';
  	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id4'){
   	text = '4';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id5'){
   	text = '5';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id6'){
   	text = '6';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id7'){
   	text = '7';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id8'){
   	text = '8';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id9'){
   	text = '9';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'id0'){
   	text = '0';
   	text = final + text;
   	final = text;
   	document.getElementById("display").innerHTML = final;
   }

   if(id === 'idsum'){
   	s1 = final;
   	final = "" ;
   	document.getElementById("display").innerHTML = final;
   }
    if(id === 'idequal'){
    	final = parseInt(s1) + parseInt(final);
    	document.getElementById("display").innerHTML = final;
    }
}

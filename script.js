	window.onload = start;
	
	function start(){
		if(window.location == "acer.html"){
			document.getElementById("btnKjop").onclick = addToCheckout;
			
		}
				document.getElementById("checkout").onclick = payAndDelivery;
			

	}
	function addToCheckout(){
			prodnum= document.getElementById("btnKjop").value;
			alert("du har lagt til produkt " + prodnum);
			
			
			valuesToCheckout();
	}
	function valuesToCheckout(){
		document.getElementById("prdNum1").value= prdnmr;
		window.location = "../../checkout/checkout.html";
	}
	function payAndDelivery(){
		alert("du har kjøpt " + document.getElementById("prdNum1").value + " og den forventes levert imorgen");
	}
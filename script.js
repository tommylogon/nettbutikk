	window.onload = start;
	
	function start(){
		if(window.location == "acer.html"){
			document.getElementById("btnKjop").onclick = addToCheckout;
			
		}
				document.getElementById("checkout").onclick = payAndDelivery;
			

	}
	function addToCheckout(){
			alert("du har kjøpt en pc");
			
			window.location = "../../checkout/checkout.html"
			valuesToCheckout();
	}
	function valuesToCheckout(){
		document.getElementById("prdNum1").value= prdnmr;
	}
	function payAndDelivery(){
		alert("du har kjøpt " + document.getElementById("prdNum1").value + " og den forventes levert imorgen");
	}
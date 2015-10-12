	window.onload = start;
	
	function start(){
		document.getElementById("btnKjop").onclick = addToCheckout;
		document.getElementById("checkout").onclick = payAndDelivery;
	}
	var prdnmr = document.getElementById("btnKjop").value;
	function addToCheckout(){
			alert("du har kjøpt en pc");
			
			window.location = "../../checkout/checkout.html"
			valuesToCheckout();
	}
	function valuesToCheckout(){
		document.getElementById("prdNum1").value= prdnmr;
	}

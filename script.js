	window.onload = start;
	
	function start(){
		document.getElementById("kjop").onclick = addToCheckout;
	}
	function addToCheckout(){
			alert("du har kjøpt en pc");
			window.location = "../../checkout/checkout.html"
	}

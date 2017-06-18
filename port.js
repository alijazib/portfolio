function doFirst()
	{	mo = document.getElementsByClassName("myModal");
		bar=document.getElementById('bar');
		bar.addEventListener('click',function(){
									nav=document.getElementById("nav-list");
									nav.style.visibility="visible";
									bar.id="bar1";
									bar1=document.getElementById('bar1');
									bar1.addEventListener('click',function(){
																nav=document.getElementById("nav-list");
																nav.style.visibility="hidden";
																bar1.id="bar";
																doFirst();
									},false);
		},false);
	}
	function loadm(){
		alert('Nothing to load!');
	}

	function mod(im) {
		
		
		mo[0].style.display="table";

		/*var i = document.getElementById('im');
		return i.src;*/

		img=document.getElementById('mod-im');
		img.src=document.getElementById(im).src;
	}

	function clos(event) {
		
		
		mo[0].style.display="none";
		/*if(event.target==mo[0])
			mo[0].style.display="none";*/
	}
	window.onload=doFirst;
	window.onclick = function(e) {
    if (e.target == mo[0]) {
        mo[0].style.display = "none";
    }
}

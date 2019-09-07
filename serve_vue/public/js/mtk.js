export function add(mtk){
var h = document.documentElement.clientHeight;   
    var app = document.getElementById('mapp');   
    // app.style.height = h + 'px';
    // app.style.overflow = 'hidden';
	var m=document.querySelector(".mask");
	console.log(app);
	function show(){
		app.classList.remove("hidden");
	}

	function reg(){
			contain1.classList.remove("hidden");
			contain2.classList.add("hidden");
		}
		function login(){
			contain2.classList.remove("hidden");
			contain1.classList.add("hidden");
		}
		m.onclick=function(){
			app.classList.add("hidden");
		}
	}
var arr = [];
		var box = parseInt(prompt("Please give input 2-9 column", ''))+1;
		var html = '';
		var index;
		var numbers = document.getElementsByClassName('p');

		function reload(){
			window.location = window.location;
		}
		if(box>2 && box<11){
			for(var i=0;i<=box;i++){
			arr[i] = [];
			for(var j = 0; j<=box; j++){
				arr[i][j] = '';
				var position = i+j;
				if(i==0 || i == box){
					html += '<p id="p" class="p" style="display:none"  onclick="Click(this)"></p>'
				}else{
					if(j==0 || j==box){
						html += '<p id="p" class="p" style="display:none"  onclick="Click(this)"></p>'
					}else{
						html += '<p id="p" class="p" style="background-color: yellow; transform: rotateY(0deg);"  onclick="Click(this)"></p>'
					}
				}		
			}
			html += '<br>';
			}
		}else{
			alert("Vui lòng nhập trong khoảng từ 2-9");
			location.reload();
		}
		document.getElementById('circle').innerHTML = html;
		for (var i = 0; i < numbers.length;i++) {
			     numbers[i].setAttribute("index",i);
			}
	function Color(i){
		var color = numbers[i].style.backgroundColor;
		var goc = numbers[i].style.transform;
		if(goc == 'rotateY(0deg)'){
			numbers[i].style.transform = "rotateY(180deg)";
		}
		if(goc == 'rotateY(180deg)'){
			numbers[i].style.transform = "rotateY(0deg)";
		}
		numbers[i].style.transition = " 1.2s";
		if(color == "red"){
			return "yellow";
		}
		if(color == "yellow"){
			return "red";
		}
	}
	var Step = 0;
	function checkWin(){
			var count = 0;
			for (var i = 0; i < numbers.length;i++) {
				     var color = numbers[i].style.backgroundColor;
				     if (color == "red"){
				     count++;
				 	}
				}
			return count;
		}
		var n = box-1;
	function Click(index){
		Step++;
		document.getElementById('step').innerHTML = Step;
		var indexx = parseInt(index.getAttribute("index"));
		numbers[indexx+1].style.backgroundColor = Color(indexx+1);
		numbers[indexx-1].style.backgroundColor = Color(indexx-1);
		numbers[indexx+n+3].style.backgroundColor = Color(indexx+n+3);
		numbers[indexx+n+1].style.backgroundColor = Color(indexx+n+1);
		numbers[indexx+n+2].style.backgroundColor = Color(indexx+n+2);
		numbers[indexx-n-3].style.backgroundColor = Color(indexx-n-3);
		numbers[indexx-n-1].style.backgroundColor = Color(indexx-n-1);
		numbers[indexx-n-2].style.backgroundColor = Color(indexx-n-2);
		if(checkWin() == n*n){
			alert(" You win | Score: "+Step);
			location.reload();
		}
	}

	
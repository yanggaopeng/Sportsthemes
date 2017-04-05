// 自执行函数
(function(){
	function banner(){
		// 定义图片的个数;
		var num=1;
		// 进入网页时，调用计时器轮播图片
		berdiv=setInterval(function(){
		//获取img标签
		var banner=document.querySelectorAll(".banner img")[0];
		banner.src="imag/"+"banner"+num+".jpg";
		if(num>=4){
			num=0;
		}
		num++;
		},2000);
	};
	// 进入网页时 调用这个计时器
banner();

//头部隐藏与显示
//获取头部全部标签
	var header=document.getElementsByTagName("header")[0];
	window.onscroll=function(){
		if(document.body.scrollTop>=100){
			header.style.display="none";
		}else{
			header.style.display="block";
		}
	}

// 透明度隐藏与显示
	var opy=document.getElementsByClassName("zoom");
	var op=document.getElementsByClassName("opy");
	for(var m=0;m<opy.length;m++){
		opy[m].index=m;
		opy[m].onmouseover=function(){
			op[this.index].style.display="block";
		}
		opy[m].onmouseout=function(){
			op[this.index].style.display="none";
		}
	}

// 透明度与遮盖层
	var live=document.getElementsByClassName("puplice");
	var liver=document.getElementsByClassName("liveop");
	for(var m=0;m<live.length;m++){
		live[m].index=m;
		live[m].onmouseover=function(){
			liver[this.index].style.display="block";
		}
		live[m].onmouseout=function(){
			liver[this.index].style.display="none";
		}
	}
// 获取第一层小图标
	var fbr=document.querySelectorAll(".advertis li img");
	//获取到之后 进行循环下标
	for(var i=0;i<fbr.length;i++){
		fbr[i].index=i;
		fbr[i].onmouseover=function (){
			var sbanner=document.querySelectorAll(".fbanner img")[0];
			sbanner.src="imag/"+"footer"+(this.index+1)+".png";	
		}

		// 声明图片的个数
		var num=1;
		//创建方法名函数 通过计时循环播放图片
		function img(){
			var sbanner=document.querySelectorAll(".fbanner img")[0];
			sbanner.src="imag/"+"footer"+num+".png";
			if(num>=6){
				num=0;
			}
			num++;
			// console.log(sbanner.src="imag/"+"footer"+num+".png")
		}
		fbr[fbr.length-1].onmouseout=function(){
			var time=setInterval(img,1000);		
	}
}
}());


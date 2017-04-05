//自执行函数
(function(){
	//获取三个小标题
	var di=document.querySelectorAll(".tb ul li");
	var tabe=document.getElementsByClassName("New");
	// 遍历循环数组 绑定事件
	for(var i=0;i<di.length;i++){
		di[i].index=i;
		di[i].onmouseover=function(){
			for(var i=0;i<tabe.length;i++){
				tabe[i].style.display="none";
			}
			tabe[this.index].style.display="block";
			tabe[tabe.length-1].style.transform="translate3d(0px, -360px, 0px)";

// 第二块和第三块的遮盖层
			var np=document.getElementsByClassName("np");
			var nop=document.querySelectorAll(".np .opy");
			for(var m=0;m<np.length;m++){
				np[m].index=m;
				np[m].onmouseover=function(){
					nop[this.index].style.display="block";
				}
				np[m].onmouseout=function(){
					nop[this.index].style.display="none";
				}
			}
		}
	}

//遮盖层
	var zg=document.getElementsByClassName("op");
	console.log(zg);
	var zc=document.querySelectorAll(".op .opy");
	console.log(zc.length);
	for(var k=0;k<zg.length;k++){
		zg[k].index=k;
		zg[k].onmouseover=function(){
			zc[this.index].style.display="block";
		}
		zg[k].onmouseout=function(){
			zc[this.index].style.display="none";
		}
	}
}());
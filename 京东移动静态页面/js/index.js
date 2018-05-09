//加载完毕事件
window.onload = function(){
	// 顶部通用栏滚动效果
	headerScroll();
	// 倒计时的效果
	cutDownTime();
	// 轮播图的效果
	banner();
}
//通用栏方法
//在onScroll事件中修改通用栏透明度
function headerScroll(){
	var navDom = document.querySelector('.jd_nav');
	var maxDistance = navDom.offsetTop+navDom.offsetHeight;
	var headerDom = document.querySelector('.jd_header');
	
	window.onscroll = function(){
		var scrollDistance = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
		// console.log(document.compatMode);
		//设置透明度的值
		var percent = scrollDistance/maxDistance;
		if(percent>1){
			percent = 1;
		}
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
	}
}
// 倒计时的效果
function cutDownTime(){
	var totalHour = 3;
	var totalSec = 3*60*60;
	var liArr = document.querySelectorAll('.main_content:nth-child(1) ul li');
	liArr[1].innerHTML = totalHour;
	//开启定时器
	var timer = setInterval(function(){
		totalSec--;
		var hours = Math.floor(totalSec/3600);
		var minutes = Math.floor(totalSec%3600/60);
		var seconds = Math.floor(totalSec%60);

		liArr[0].innerHTML = Math.floor(hours/10);
		liArr[1].innerHTML = Math.floor(hours%10);

		liArr[3].innerHTML = Math.floor(minutes/10);
		liArr[4].innerHTML = Math.floor(minutes%10);

		liArr[6].innerHTML = Math.floor(seconds/10);
		liArr[7].innerHTML = Math.floor(seconds%10);

		if(totalSec===0){
			clearInterval(timer);
			return;
		}
	},1000)
}

function banner(){
	var width = document.body.offsetWidth;
	var moveUl = document.querySelector('.banner_images');
	var liArr = document.querySelectorAll('.banner_index li');
	var index=1;

	var timer = setInterval(function(){
		index++;
		moveUl.style.transition = 'all 0.3s';
		moveUl.style.transform = 'translateX('+width*(-index)+'px)';
		
	},1000);

	moveUl.addEventListener('webkitTransitionEnd',function(){
		if(index>8){
			index = 1;
			moveUl.style.transition = '';
			moveUl.style.transform = 'translateX('+(-1*width*index)+'px)';
		}else if(index<1){
			index = 8;
			moveUl.style.transition = '';
			moveUl.style.transform = 'translateX('+(-1*width*index)+'px)';
		}
		for(var i=0;i<liArr.length;i++){
			liArr[i].className = '';
		}
		liArr[index-1].className = 'current';
	});

	var startX = 0;
	var moveX = 0;
	var distanceX = 0;

	moveUl.addEventListener('touchstart',function(event){
			clearInterval(timer);
			moveUl.style.transition ='';
			startX = event.touches[0].clientX;
	});

	moveUl.addEventListener('touchmove',function(event){
			moveX = event.touches[0].clientX-startX;
			moveUl.style.transform = 'translateX('+(moveX+-1*width*index)+'px)';
	});

	moveUl.addEventListener('touchend',function(event){
			var maxDistance = width/3;
			if(Math.abs(moveX)>maxDistance){
					if(moveX>0){
							index--;
					}else{
						index++;
					}
					moveUl.style.transition = 'all .3s';
					moveUl.style.transform = 'translateX('+(-1*width*index)+'px)';
			}else{
					moveUl.style.transition = 'all .3s';
					moveUl.style.transform = 'translateX('+(-1*width*index)+'px)';
			}
			timer = setInterval(function(){
					index++;
					moveUl.style.transition = 'all 0.3s';
					moveUl.style.transform = 'translateX('+width*(-index)+'px)';
		
			},1000);
	});
}
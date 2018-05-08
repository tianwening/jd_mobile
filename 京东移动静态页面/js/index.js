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
		var scrollDistance = window.document.documentElement.scrollTop;
		//设置透明度的值
		var percent = scrollDistance/maxDistance;
		if(percent>1){
			percent = 1;
		}
		headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
	}
}

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
		}
	},1000)
}

function banner(){

}
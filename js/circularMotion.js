/*
 * 模拟星球运动
 * argsJSON={"obj": star[0], //目标，必填
			"center": [a, b], //参考中心 ，必填
			"radius": 100, //半径 ，默认100
			"looptime": 3600, //运动一圈用的时间，默认3600
			"degree": 180, //初始角度，默认为0
			"diraction": -1}//转动方向-1、1，默认为1
 * 
 * 
 * 
 */

function circularMotion(argsJSON) {

	//获取数据
	var o = argsJSON.obj;
	//圆心
	var a = argsJSON.center[0];
	var b = argsJSON.center[1];

	//半径
	var r = argsJSON.radius || 100;
	//运动一圈的时间
	var looptime = argsJSON.looptime || 3600;
	//方向
	var dir = argsJSON.diraction || 1;

	//信号量
	var deg = argsJSON.degree || 0;

	//动画每帧运动间隔
	var interval = 10;
	//运动一圈的次数
	var loopframes = looptime / interval;
	//每次运动的角度
	var degreeDelta = 360 / loopframes;
	setInterval(function() {
		deg += degreeDelta * dir % 360;
		go(deg);

	}, interval);
	//将角度转化为left和top
	function go(degree) {

		o.style.left = a + r * Math.sin(degreeToRad(degree)) + "px";
		o.style.top = b - r * Math.cos(degreeToRad(degree)) + "px";
	}
	//实用函数，把角度制换成弧度制，为什么要有这个函数，因为js中正弦等方法都是用弧度制的
	function degreeToRad(degree) {
		return degree * Math.PI / 180
	}

}
//计算后样式
function fetchComputedStyle(obj, property) {
	//能力检测
	if (window.getComputedStyle) {
		//现在要把用户输入的property中检测一下是不是驼峰，转为连字符写法
		//强制把用户输入的词儿里面的大写字母，变为小写字母加-
		//paddingLeft  →  padding-left
		property = property.replace(/([A-Z])/g, function(match, $1) {
			return "-" + $1.toLowerCase();
		});

		return window.getComputedStyle(obj)[property];
	} else {
		//IE只认识驼峰，我们要防止用户输入短横，要把短横改为大写字母
		//padding-left  → paddingLeft 
		property = property.replace(/\-([a-z])/g, function(match, $1) {
			return $1.toUpperCase();
		});

		return obj.currentStyle[property];
	}
}
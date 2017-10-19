function scrollAnimate(target, time) {
	var frameNumber = 0;
	var start = document.body.scrollTop || document.documentElement.scrollTop;
	var changeNum = target - start;
	var interval = 10;
	var maxFrame = time / interval;

	clearInterval(timer);
	var timer = setInterval(function() {
		frameNumber++;
		if (frameNumber == maxFrame) {
			clearInterval(timer);
		}
		document.body.scrollTop = document.documentElement.scrollTop = fun(frameNumber, start, changeNum, maxFrame);

	}, 10);
	//t当前帧编号
	//b起始位置
	//c变化量
	//d总帧数
	function fun(t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	}
}
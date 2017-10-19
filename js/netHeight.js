function getAllTop(obj) {
	//累加器，初始值当前元素的offsettop
	//while
	var allTop = obj.offsetTop;
	//当前正在算高度的元素
	var currentObj = obj;
	//循环依次向外找父级
	while (currentObj = currentObj.offsetParent) {
		allTop += currentObj.offsetTop;
	}
	return allTop;
}

function getAllLeft(obj) {
	var allLeft = obj.offsetLeft;
	var currentObj = obj;
	while (currentObj = currentObj.offsetParent) {
		allLeft += currentObj.offsetLeft;
	}
	return allLeft;
}
/*
 * 绑定事件
 * 第一个参数，需要绑定事件的元素
 * 第二个参数，事件名，没有on
 * 第三个参数，事件处理函数
 */
function addEvent(obj, eventType, fn) {
	//判断能力
	if (obj.addEventListener) {
		//DOM2级事件绑定
		obj.addEventListener(eventType, fn, false);
	} else if (obj.attachEvent) {
		//IE低版本事件绑定
		obj.attachEvent("on" + eventType, function() {
			//改变this指向
			fn.call(obj);
		});
	} else {
		//DOM0级事件绑定
		obj["on" + eventType] = fn;
	}
}
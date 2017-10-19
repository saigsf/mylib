var $ = {
	ajax: function(options) {
		var url = options.url;
		if (url === undefined) {
			throw new Error("ajax一定要传送url");
			return;
		}
		var type = options.type || "GET";
		//
		var dataType = options.dataType || "string";

		var xhr = null;
		//兼容
		if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
			xhr = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 200 || xhr.status < 300 || xhr.status == 304) {
					if ((typeof options.success) == "function") {
						var responce;
						if (dataType == "json") {
							responce = JSON.parse(xhr.responseText);

						} else if (dataType == "string") {
							responce = xhr.responseText;
						}
						options.success(responce);
					}
				} else {

				}
			}
		}

		xhr.open(type, url);
		xhr.send();

	}
}
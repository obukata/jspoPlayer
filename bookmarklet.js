javascript:(function(){
	var jspoTarget = document.getElementById("UlizaMediaPlayback_player");
	var jspoHeader = document.getElementsByTagName("header");

	jspoTarget.style.position = "fixed";
	jspoTarget.style.width = "100%";
	jspoTarget.style.height = "100%";
	jspoTarget.style.top = "0";
	jspoTarget.style.left = "0";
	jspoTarget.style.zIndex = "1000000";
	jspoHeader.style.display = "none";

	var jspoChange = document.createElement("div");
	jspoChange.id = "jspoButton";
	var jspoCover = document.getElementById("sb-site");
	jspoChange.innerHTML = "<div id='jspoChange' style='position: fixed;z-index: 99999999;top: 0px;right: 100px;padding: 15px;font-size: 12px;background: rgba(0,0,100,0.5);border-radius: 0 0 5px 5px;display: block;color: #fff;cursor: pointer;'>元に戻す</div>";
	document.body.insertBefore(jspoChange, jspoCover);
	jspoChange.onclick = function() {
		var jspoButton = document.getElementById("jspoButton");
		jspoButton.parentNode.removeChild(jspoButton);
		jspoTarget.style.position ="static";
		jspoHeader.style.display = "block";
	};
})()

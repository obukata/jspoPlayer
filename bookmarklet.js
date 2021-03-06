javascript:(function(){

	if(typeof jspoPlayer == "undefined" || jspoPlayer == "-1") {
		// 定義チェック関数
		jspoPlayer = "true";

		// プレイヤー、コントロールバー、サイトヘッダー定義
		var jspoTarget = document.getElementsByTagName("video")[0];
		var jspoControlTarget = document.getElementsByClassName("vjs-control-bar")[0];
		var jspoHeader = document.getElementsByTagName("header")[0];

		// 起動させた時のスタイル変更
		jspoTarget.style.position = "fixed";
		jspoTarget.style.width = "100%";
		jspoTarget.style.height = "100%";
		jspoTarget.style.top = "0";
		jspoTarget.style.left = "0";
		jspoTarget.style.zIndex = "1000000";
		jspoControlTarget.style.position = "fixed";
		jspoControlTarget.style.bottom = "0";
		jspoControlTarget.style.left = "0";
		jspoControlTarget.style.width = "100%";
		jspoControlTarget.style.zIndex = "1000000";
		jspoHeader.style.display = "none";

		// 背景、元に戻すボタン作成
		var jspoChange = document.createElement("div");
		jspoChange.id = "jspoButton";
		var jspoCover = document.getElementById("main")[0];
		jspoChange.innerHTML = "<div id='jspoCover' style='position: fixed;z-index: 100000;top: 0px;left: 0px;right: 0px;bottom: 0px;margin: auto;background: #000;'></div><div id='jspoChange' style='position: fixed;z-index: 99999999;top: 0px;right: 100px;padding: 15px;font-size: 12px;background: rgba(0,0,100,0.5);border-radius: 0 0 5px 5px;display: block;color: #fff;cursor: pointer;'>元に戻す</div>";
		document.body.insertBefore(jspoChange, jspoCover);

		// 元に戻すボタン押下時
		jspoChange.onclick = function() {
			var jspoButton = document.getElementById("jspoButton");
			jspoButton.parentNode.removeChild(jspoButton);
			jspoTarget.style.position ="static";
			jspoControlTarget.style.position ="absolute";
			jspoHeader.style.display = "block";
			jspoPlayer = "-1";
		};
	}
})()

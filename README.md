### jspoウィンドウ最大化ブックマークレット
---

スタートリストを見ながら、レース観戦しようとすると動画プレイヤーサイズが一定なので見づらい。

![before](https://cloud.githubusercontent.com/assets/11017173/18358655/1e1845e0-7631-11e6-9cda-9ca6ded4ef32.png)

このブックマークレットを使用すると、ウィンドウ内で最大化するのでとっても見やすい。

![after](https://cloud.githubusercontent.com/assets/11017173/18358650/15dadd70-7631-11e6-9560-5add20f509b5.png)


#### 導入方法

以下をコピーしてブックマークに登録して下さい。

jspoオンデマンドの再生ページに移動し、登録したブックマークをクリックすると、実行されます。

```
javascript:(function()%7Bjavascript:(function()%7Bvar jspoTarget %3D document.getElementById("UlizaMediaPlayback_player")%3Bvar jspoHeader %3D document.getElementsByTagName("header")%5B0%5D%3BjspoTarget.style.position %3D "fixed"%3BjspoTarget.style.width %3D "100%25"%3BjspoTarget.style.height %3D "100%25"%3BjspoTarget.style.top %3D "0"%3BjspoTarget.style.left %3D "0"%3BjspoTarget.style.zIndex %3D "1000000"%3BjspoHeader.style.display %3D "none"%3Bvar jspoChange %3D document.createElement("div")%3BjspoChange.id %3D "jspoButton"%3Bvar jspoCover %3D document.getElementById("sb-site")%3BjspoChange.innerHTML %3D "<div id%3D%27jspoChange%27 style%3D%27position: fixed%3Bz-index: 99999999%3Btop: 0px%3Bright: 100px%3Bpadding: 15px%3Bfont-size: 12px%3Bbackground: rgba(0,0,100,0.5)%3Bborder-radius: 0 0 5px 5px%3Bdisplay: block%3Bcolor: %23fff%3Bcursor: pointer%3B%27>元に戻す</div>"%3Bdocument.body.insertBefore(jspoChange, jspoCover)%3BjspoChange.onclick %3D function() %7Bvar jspoButton %3D document.getElementById("jspoButton")%3BjspoButton.parentNode.removeChild(jspoButton)%3BjspoTarget.style.position %3D"static"%3BjspoHeader.style.display %3D "block"%3B%7D%3B%7D)()%7D)()%3B
```

#### その他

検証環境：Mac + Google Chrome

正常に動作しない場合がありますが、個人的な使用が目的ですので各ブラウザ対応などは基本的にはしていません。

また、このブックマークレットを使用して起こった不具合などの責任も負いかねます。

何かあったらどこかに連絡下さい。

気が向いたらアップデートするかもしれません。
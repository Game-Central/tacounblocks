//Ban Devices
var bannedDeviceIDS = ["X11; CrOS x86_64 14588.98.0"];
var deviceId = navigator.appVersion.split('(')[1].split(')')[0];
if (bannedDeviceIDS.indexOf(deviceId) !== -1) {
  window.location = "/banned.html"
}

//Custom Alert Boxes
var alertActive = "0";
function Alert(title, subtext, type) {
  if (alertActive == "0") {
    var blurBG = document.createElement('div');
    document.body.appendChild(blurBG);
    blurBG.id="blurBG";
    blurBG.style.width = "100%";
    blurBG.style.height = "100%";
    blurBG.style.top = "0";
    blurBG.style.bottom = "0";
    blurBG.style.left = "0";
    blurBG.style.right = "0";
    blurBG.style.opacity = "0.9";
    blurBG.style.margin = "auto";
    blurBG.style.position = "absolute";
    blurBG.style.backgroundColor = "#555";
    
    var MainBox = document.createElement('div');
    document.body.appendChild(MainBox);
    MainBox.id="MainBox";
    MainBox.style.width = "500px";
    MainBox.style.height = "300px";
    MainBox.style.top = "0";
    MainBox.style.bottom = "0";
    MainBox.style.left = "0";
    MainBox.style.right = "0";
    MainBox.style.margin = "auto";
    MainBox.style.position = "absolute";
    MainBox.style.borderRadius = "30px";
    MainBox.style.backgroundColor = "#bbb";
    
    var TitleBar = document.createElement('div');
    MainBox.appendChild(TitleBar);
    TitleBar.id="TitleBar";
    TitleBar.style.width = "500px";
    TitleBar.style.height = "50px";
    TitleBar.style.top = "0";
    TitleBar.style.left = "0";
    TitleBar.style.right = "0";
    TitleBar.style.margin = "auto";
    TitleBar.style.color = "#fff";
    TitleBar.style.position = "relative";
    TitleBar.style.textAlign = "center";
    TitleBar.style.fontSize = "45px";
    TitleBar.style.borderRadius = "30px 30px 0 0";
    TitleBar.style.backgroundColor = "#ccc";
    TitleBar.innerHTML = "<a>" + title + "</a>";
    
    var InnerBox = document.createElement('div');
    MainBox.appendChild(InnerBox);
    InnerBox.id = "InnerBox";
    InnerBox.style.width = "500px";
    InnerBox.style.height = "250px";
    InnerBox.style.bottom = "0";
    InnerBox.style.left = "0";
    InnerBox.style.color = "#fff";
    InnerBox.style.right = "0";
    InnerBox.style.margin = "auto";
    InnerBox.style.position = "relative";
    InnerBox.style.textAlign = "center";
    InnerBox.style.fontSize = "25px";
    InnerBox.style.borderRadius = "0 0 30px 30px";
    InnerBox.innerHTML = "<br><a>" + subtext + "</a><br><br>";
    
    var OkButton = document.createElement('button');
    InnerBox.appendChild(OkButton);
    OkButton.id = "OkButton";
    OkButton.style.width = "200px";
    OkButton.style.height = "30px";
    OkButton.style.bottom = "0";
    OkButton.style.left = "0";
    OkButton.style.right = "0";
    OkButton.style.margin = "auto";
    OkButton.style.position = "relative";
    OkButton.style.textAlign = "center";
    OkButton.style.fontSize = "25px";
    OkButton.style.borderRadius = "30px";
    OkButton.innerHTML = "Ok";
    
    alertActive = "1";
    PT2();
  } else {console.log('Alert Box Already Open');}
}
function PT2() {
    var OkButton = document.getElementById('OkButton');
    OkButton.addEventListener('click', (function(){ alertActive = '0'; document.getElementById('blurBG').remove(); document.getElementById('MainBox').remove(); document.getElementById('TitleBar').remove(); document.getElementById('InnerBox').remove(); document.getElementById('OkButton').remove();}));
    }

function loop() {
  const interval = setInterval(function() {
    var a = 'a';
 }, 10);
}
loop()

//Enable Popups
var urlparams = (new window.URL(window.location.href)).searchParams.get('popups');
if (urlparams != "no") {
  if (parent.window.location.href != 'about:blank') {
    var popUpTest = null;
    var popUps = "no"; 
    popUpTest = window.open('about:blank','','height=1px,width=1px');
    if (popUpTest != null) {
      popUpTest.close();
      popUps = "yes";
    } else {
        popUps = "no";
        Alert('Error','Please Enable Popups On This Page.<br>This Site Heavily Relies On Them', 'normal');
    }
  }
}

//Url Hider / About:blank Tab
if (localStorage.getItem('UrlHiderEnabled') == null) {localStorage.setItem('UrlHiderEnabled', 'false')}
if (localStorage.getItem('UrlHiderEnabled') == "true") {
  var win = null;
      if (parent.window.location.href != 'about:blank') {
        if (popUps == "yes") {
          win = window.open('about:blank', 'win', 'top=0,left=0,scrollbar=yes,width=10000,height=10000');
          win.focus();
        }
        
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.src = window.location.href;
        var title = win.document.createElement("title");
        title.innerHTML = document.title;
        win.document.head.appendChild(title);
        win.document.body.appendChild(iframe);
        
        var url = ["https://www.google.com/", "https://classroom.google.com/", "https://drive.google.com/", "https://mail.google.com/", "https://www.youtube.com/", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"];
        
        window.location.href = url[Math.floor(Math.random() * url.length)];
        }
}
//Misc 
function openGame(url, title) {
  localStorage.setItem('gameUrl', url);
  localStorage.setItem('gameTitle', title);
  window.location = "gamePlayer.html"
}

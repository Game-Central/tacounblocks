if (parent.window.location.href != 'about:blank') {
  var popUpTest = null;
  var popUps = "no"; 
  popUpTest = window.open('about:blank','','height=0px,width=0px');
  if (popUpTest != null) {
    popUpTest.close();
    popUps = "yes";
  } else {
      popUps = "no";
    alert("Popups & Redirects Are Blocked Please Enable It On This Site To Enable The Sites Url History Hider\r\nAfter Enabling This Refresh The Page\r\n------------------------------------------------------------------\r\nThis Is Not A Required Setting, But Its Recommended");
  }
}
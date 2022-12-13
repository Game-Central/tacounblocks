function bannedEmail(email) {
  var bannedEmails = ["nathanaschilling@gvusd.org"]
  if (bannedEmails.indexOf(email) != -1) {
            var redirectURL = (new window.URL(window.location.href)).searchParams.get('redirect');
            window.location = "banned.html?redirect="+redirectURL;
         } else {
            var redirectURL = (new window.URL(window.location.href)).searchParams.get('redirect');
            if (isValidUrl(redirectURL)) {
              window.location = redirectURL
            } else {
              window.location = "index.html"
            };
         }
}
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
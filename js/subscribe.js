function sendMailgun(){document.getElementById("mailSubmitButton").disabled=!0,setTimeout(function(){document.getElementById("mailSubmitButton").disabled=!1},2e4),emailjs.send("mailgun","myblog-subscriber",{reply_to:document.getElementById("contact-email").value,ejs_dashboard__test_template:!0}).then(function(e){window.location.replace("/subscribe/thanks.html")},function(e){console.log("FAILED...",e)});var e=20;setInterval(function(){0<=--e&&(span=document.getElementById("mailSubmitButton"),span.innerHTML=e+"s ..."),0===e&&(clearInterval(e),span.innerHTML="Subscribe")},1e3)}
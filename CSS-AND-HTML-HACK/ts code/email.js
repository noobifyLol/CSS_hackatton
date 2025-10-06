  emailjs.init("your api id");
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 


  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };


  emailjs.send("your id ", "your template", params)
    .then(function(response) {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      console.log("SUCCESS!", response.status, response.text);
            setTimeout(function() {
    location.reload(); 
  }, 2000); 
    }, function(error) {
      document.getElementById("status").innerText = "❌ Failed to send message. Try again later.";
      console.error("FAILED...", error);
    });
});
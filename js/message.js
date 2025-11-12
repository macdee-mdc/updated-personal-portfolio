
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_knke15b", "template_nzc62ek", {
    from_name: name,
    from_email: email,
    message: message
  }).then(function() {

    const phoneNumber = "263778853159"; 
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}.\n\n${message}\n\nMy email is: ${email}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    // Clear form
    document.getElementById("contactForm").reset();
  });
});


function sendMail(contactForm) {
    emailjs.send("hackathon21", "hackteam8",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "more_info": contactForm.message.value,
        
    })
    .then(alert(`Thank you! Your message was sent`));
}
function sendMail() {
  const name = document.getElementById('Name').value
  const email = document.getElementById('Email').value
  const message = document.getElementById('Message').value
  const recipient = document.getElementById('Recipient').value

  // Let user know it takes time
  window.alert(
    'Your message will process shortly. This may just take a minute or two...'
  )

  // Form info 
  emailjs
    .send("St.Patrick's","template_k3ikump", {
      from_name: name,
      to_name: recipient,
      to_email: email,
      message: message,
    })
    // emailjs.send.then promise
    .then(
      function (response) {
        window.alert('Message was successfully sent 👍')
        reset();
        console.log('SUCCESS', response)
      },
      function (error) {
        window.alert('Message Failed 😔')
        console.log('FAILED', error)
      }
    )
  return false
}

function reset(){
  let inputs = [
    document.getElementById('Name'),
    document.getElementById('Email'),
    document.getElementById('Message'),
   ]

  for(i=0;i<inputs.length;i++){
    inputs[i].value='';
  }
}
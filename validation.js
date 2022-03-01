function validate() {
  let loader = document.querySelector('.loader');
  let name = document.querySelector('.username');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let btn = document.querySelector('.form-submit-btn');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyerror();
    } else {
      loader.style.display = 'flex';
      sendmail(name.value, email.value, msg.value);
      success();
      loader.style.display = 'none';
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send('service_38udhto', 'template_onbp6go', {
    to_name: 'Hurley',
    from_name: name,
    reply_to: email,
    message: msg
  });
}

function emptyerror() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Fields cannot be empty!'
  });
}

function error() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!'
  });
}

function success() {
  Swal.fire({
    icon: 'success',
    title: 'Success...',
    text: 'Successfully sent message'
  });
  setTimeout(() => {
    location.href = 'index.html';
  }, 3500);
}

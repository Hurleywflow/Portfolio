function validate() {
  let loader = document.querySelector('.loader');
  let name = document.querySelector('.username');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let btn = document.querySelector('.form-submit-btn');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == '' || email.value == '' || msg.value == '') {
      emptyError();
    } else if (email) {
      const emailRegex =
        /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/;
      email.addEventListener('keyup', (even) => {
        console.log(even.target.value);
        if (emailRegex.test(even.target.value)) {
          email.parentElement.classList.add('valid');
          email.parentElement.classList.remove('close');
        } else {
          email.parentElement.classList.add('close');
          email.parentElement.classList.remove('valid');
        }
      });
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

function emptyError() {
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
  }, 3000);
}

// init AOS
AOS.init();

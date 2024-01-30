(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'video/background-video.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());

//////////////////////////////////////////////////////////////////////////////////////////
///// END VIDEO
///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
///// START LOGIN / PASSWORD
///////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  // INCIAMOS LA CUENTA DE INTENTOS FALLIDOS CON failedAttempts
  var failedAttempts = 0;

  document.getElementById('login_enter').addEventListener('click', function() {
    var username = document.getElementById('login_username');
    var password = document.getElementById('login_password');
    const myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const modalBody = document.getElementById('loginModal').querySelector('.modal-body');
    let leftAttempts = 2 - failedAttempts;

    if (failedAttempts >= 3) {
      modalBody.innerHTML = 'You have reached the <b>maximum number</b> of login attempts.';
      myModal.show();
      return; // DETENEMOS MEDIANTE RETURN LA EJECUCION INCIIAL DEL SISTEMA
    }

    if (username === '' && password === '') {
      modalBody.innerHTML = 'please, to enter the system you need to enter your <b>username</b> and <b>password</b>.';
      myModal.show();
    } else if (username === '') {
      modalBody.innerHTML = 'please enter your <b>username</b>.';
      myModal.show();
    } else if (password === '') {
      modalBody.innerHTML = 'please enter your <b>password</b>.';
      myModal.show();
    } else {
      modalBody.innerHTML = 'Incorrect <b>username</b> or <b>password</b><br/>' + 'left ' + leftAttempts + ' <b>attempts</b>';
      myModal.show();
      failedAttempts++;

      // MAXIMO DE INTENTOS FALLIDOS EN EL SISTEMA
      if (failedAttempts >= 3) {
        buttonLogin = document.getElementById('login_enter');
        buttonLogin.disabled = true;
        buttonLogin.className = 'btn btn-dark animate__animated animate__fadeInUp disable'

        let toastAlert = document.getElementById('alertToast');
        modalBody.innerHTML = 'You have reached the maximum number of login attempts<br/><b>the system is now locked</b>';
        myModal.show();
        toastAlert.style.display = ("block")
        toastAlert.className = 'toast animate__animated animate__bounceInDown animate__delay-1s';
        document.getElementById("login_unlock_button").className = "btn btn-danger animate__animated animate__flash animate__delay-2s animate__infinite ms-1 d-block";
      }
    }
  });
});

function unlockToast(){
let toastUnlock = document.getElementById('unlockToast');
toastUnlock.style.display = ("block")
toastUnlock.className = 'toast animate__animated animate__bounceInDown animate__delay-1s';
}

//////////////////////////////////////////////////////////////////////////////////////////
///// END LOGIN / PASSWORD
///////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////
///// UNLOCK / LOGIN ADMIN
///////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('unlock_login').addEventListener('click', function() {
    var username = document.getElementById('login_username').value;
    var password = document.getElementById('login_password').value;
    var loginError = document.getElementById('loginError'); // Elemento para mostrar mensajes de error

    if (username === '' || password === '') {
      loginError.textContent = 'Please fill in both username and password fields.';
      loginError.style.display = 'block'; // Muestra el mensaje de error
    } else if (username === 'admin' && password === 'admin') {
      loginError.style.display = 'none'; // Oculta el mensaje de error si el inicio de sesión es exitoso
      // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito, según necesites
    } else {
      loginError.innerHTML = 'incorrect username or password<br/><b>please try again</b>';
      loginError.style.display = 'block'; // Muestra el mensaje de error
    }
  });
});

let button_unlock_login = document.getElementById('unlock_login');
unlock_login.addEventListener('click', shakeMessage);
unlock_login.addEventListener('mouseup', out_shakeMessage);


function shakeMessage(){
  let loginError = document.getElementById('loginError');
  loginError.className = "alert alert-danger animate__animated animate__shakeX";
}
function out_shakeMessage(){
  let loginError = document.getElementById('loginError');
  loginError.className = "alert alert-danger";
}


//////////////////////////////////////////////////////////////////////////////////////////
/////  END UNLOCK / LOGIN ADMIN
///////////////////////////////////////////////////////////////////////////////////////////
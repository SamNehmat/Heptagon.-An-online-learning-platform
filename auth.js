$(document).ready(function() {
  var auth0 = null;
  auth0 = new Auth0({
    domain: 'aphiset.eu.auth0.com',
    clientID: 'pAhJSwxezLJ9V8GFBDahHg775zWImJEI',
    callbackOnLocationHash: true,
    callbackURL: 'https://belooga.000webhostapp.com',
  });

  $('#btn-login').on('click', function(ev) {
    ev.preventDefault();
    var kNumber = $('#usernameField').val();
    localStorage.setItem('kNumber', kNumber.toLowerCase());
    var username = kNumber + '@kcl.ac.uk';
    var password = $('#passwordField').val();
    auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {
      if (err) {
        alert(err.message);
      } else {
        window.location.href = "https://belooga.000webhostapp.com/dashboard";
      }
    });
  });

  $('#btn-register').on('click', function(ev) {
    ev.preventDefault();
    var kNumber = $('#usernameField').val();
    
    localStorage.setItem('kNumber', kNumber.toLowerCase());
    var username = kNumber + '@kcl.ac.uk';
    var password = $('#passwordField').val();
    auth0.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
      auto_login: false
    }, function(err) {
      if (err) {
        alert(err.message);
      } else {
        window.location.href = "https://belooga.000webhostapp.com/signIn";
        $.ajax({
          url: 'createUser.php',
          type: 'post',
          data: { "createUser": localStorage.getItem('kNumber')}
        });
      }
    });
  });

  $('#logOutButton').on('click', function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    localStorage.removeItem('kNumber');
    localStorage.removeItem('currentFolder');
    window.location.href = "https://belooga.000webhostapp.com";
  });
  
  $('.registerTD').on('click', function(ev) {
    ev.stopPropagation();
    window.location.href = "https://belooga.000webhostapp.com/register";
  });
  
  $('.signInTD').on('click', function(ev) {
    ev.stopPropagation();
    window.location.href = "https://belooga.000webhostapp.com/signIn";
  });

  var parseHash = function() {
    var token = localStorage.getItem('id_token');
    if (null != token) {
      show_logged_in();
    } else {
      var result = auth0.parseHash(window.location.hash);
      if (result && result.idToken) {
        localStorage.setItem('id_token', result.idToken);
        show_logged_in();
      } else if (result && result.error) {
        alert('error: ' + result.error);
        window.location.href = "https://belooga.000webhostapp.com/signIn";
      }
    }
  };

  parseHash();

  $('input[type="button"][value="k1502609"]').prop("value", localStorage.getItem('kNumber'));
});

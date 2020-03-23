jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("/img/backgrounds/1.jpg");

    /*
        Forms show / hide
    */
    $('.show-register-form').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.show-login-form').removeClass('active');
            $(this).addClass('active');
            $('.login-form').fadeOut('fast', function() {
                $('.register-form').fadeIn('fast');
            });
        }
    });
    // ---
    $('.show-login-form').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.show-register-form').removeClass('active');
            $(this).addClass('active');
            $('.register-form').fadeOut('fast', function() {
                $('.login-form').fadeIn('fast');
            });
        }
    });

    /*
        Login form validation
    */
    $('.l-form input[type="text"], .l-form input[type="password"], .l-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });

    $('.l-form').on('submit', function(e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
                $(this).setCustomValidity("Faltou preencher aqui")
            } else {
                $(this).removeClass('input-error');
            }
        });

    });

    /*
        Registration form validation
    */
    $('.r-form input[type="text"], .r-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });

    $('.r-form').on('submit', function(e) {

        $(this).find('input[type="text"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });


});

var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var idade = document.getElementById("idade");

function validarIdade() {
    if (idade.value < 1) {
        idade.setCustomValidity("Idade não pode ser menor que 1");
    }
    if (idade.value > 99) {
        idade.setCustomValidity("Idade não pode ser maior que 99")
    }

}

idade.onchange = validarIdade;

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// DASHBOARD

// jQuery(document).ready(function() {


//     /*
//         Forms show / hide
//     */
//     $('.show-profile-page').on('click', function() {
//         if (!$(this).hasClass('active')) {
//             $('.show-dashboard-page').removeClass('active');
//             $(this).addClass('active');
//             $('.profile-page').fadeOut('fast', function() {
//                 $('.dashboard-page').fadeIn('fast');
//             });
//         }
//     });
//     // ---
//     $('.show-dashboard-page').on('click', function() {
//         if (!$(this).hasClass('active')) {
//             $('.show-profile-page').removeClass('active');
//             $(this).addClass('active');
//             $('.dashboard-page').fadeOut('fast', function() {
//                 $('.profile-page').fadeIn('fast');
//             });
//         }
//     });


// });
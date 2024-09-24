$(document).ready(function () {
  $("#menu-expand-collapse").click(function () {
    $("#responsive-menu-list").toggle();
  });
});

$(document).ready(function () {
  var items = $(".carousel .carousel-item");
  var length = $(".active-length");
  var page = $("#current-page");
  // console.log(fade)
  var currentIndex = 0;
  var number = 0;
  items.first().addClass("active");

  function showDisplay(index) {
    items.removeClass("active");
    items.eq(index).addClass("active");
    if (index === 0) {
      length.css("width", "50px");
      page.html("01");
    } else if (index === 1) {
      length.css("width", "100px");
      page.html("02");
    } else {
      length.css("width", "150px");
      page.html("03");
    }
  }

  $("#prevBtn").click(function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    console.log(currentIndex);
    showDisplay(currentIndex);
  });

  $("#nextBtn").click(function () {
    currentIndex = (currentIndex + 1 + items.length) % items.length;
    showDisplay(currentIndex);
  });

  function autoplay() {
    currentIndex = (currentIndex + 1 + items.length) % items.length;
    showDisplay(currentIndex);
  }

  // setIntervals(autoplay, 10000);
});

$(document).ready(function () {
  $(".accordian-header").click(function () {
    var content = $(this).next(".accordian-body");
    content.slideToggle();
    $(".accordian-body").not(content).slideUp();
  });
});

// form

$(document).ready(function () {
  // Validate Username
  $("#nameCheck").hide();
  $("#textCheck").hide();
  let usernameError = true;
  $("#inputText").keypress(function (event) {
    validateUsername();
    // var regex = new RegExp("[a-zA-Z ]"); // Allow letters and spaces
    // var key = String.fromCharCode(event.which);
    // if (!regex.test(key)) {
    //   event.preventDefault();
    //   return false;
    // }
  });
  $("#text").keypress(function (event) {
    validatetext();
    var regex = new RegExp("[a-zA-Z ]"); // Allow letters and spaces
    var key = String.fromCharCode(event.which);
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });

  function validatetext() {
    let usernameValue = $("#text").val();

    if (usernameValue.length == "") {
      $("#textCheck").show();
      $("#textCheck").html("enter Something");
      // $("#text").addClass("error");
      textError == true;
      return false;
    } else if (usernameValue.length < 3) {
      $("#textCheck").show();
      // $("#text").addClass("error");
      $("#textCheck").html("Name must be between 3 and 10 length");
      textError == true;
      return false;
    } else {
      $("#textCheck").hide();
      $("#text").removeClass("error");
      return true;
    }
  }

  function validateUsername() {
    let usernameValue = $("#inputText").val();
    // var regex = new RegExp("[a-zA-Z ]"); // Allow letters and spaces
    // var key = String.fromCharCode(usernameValue);
    // if (!regex.test(key)) {
    //   event.preventDefault();
    //   return false;
    // }
    if (usernameValue.length == "") {
      $("#nameCheck").show();
      // $("#inputText").addClass("error");
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
      $("#nameCheck").show();
      // $("#inputText").addClass("error");
      $("#nameCheck").html("Name must be between 3 and 10 length");
      usernameError = false;
      return false;
    } else {
      $("#nameCheck").hide();
      $("#inputText").removeClass("error");
      return true;
    }
  }

  // Validate Email
  $("#mailcheck").hide();
  let emailError = true;
  $("#inputMail").keypress(function () {
    isEmail();
  });
  $("#inputmailthree").keypress(function () {
    isEmailtwo();
  });
  function isEmail() {
    let mail = $("#inputMail").val();
    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(mail)) {
      $("#mailcheck").hide();
      $("#inputMail").removeClass("error");
      return true;
    } else {
      $("#mailcheck").show();
      // $("#inputMail").addClass("error");
      $("#mailcheck").html("Invalid mail id");
      emailError = false;
      return false;
    }
  }

  $("#mailcheckthree").hide();

  function isEmailtwo() {
    let mail = $("#inputmailthree").val();
    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(mail)) {
      $("#mailcheckthree").hide();
      $("#inputmailthree").removeClass("error");
      return true;
    } else {
      $("#mailcheckthree").show();
      $("#inputMail").addClass("error");
      $("#mailcheckthree").html("Invalid mail id");
      emailError = false;
      return false;
    }
  }

  $("#telCheck").hide();
  let mobileError = true;
  $("#inputTele").keypress(function () {
    isPhone();
  });
  function isPhone() {
    var mobileNum = $("#inputTele").val();
    var validateMobNum = /^\+?([ -]*\d[ -]*){6,14}$/;
    if (validateMobNum.test(mobileNum)) {
      $("#telCheck").hide();
      $("#inputTele").removeClass("error");
      return true;
    } else {
      $("#telCheck").show();
      // $("#inputTele").addClass("error");
      $("#telCheck").html(
        "mobile number should be 10 length and should contain only number"
      );
      mobileError = false;
      return false;
    }
  }

  // Submit button
  $("#formBtn").click(function () {
    validateUsername();
    isEmail();
    isPhone();
    validatetext();
    if (
      usernameError == true &&
      mobileError == true &&
      emailError == true &&
      textError == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});

// subscribe form
// $(document).ready(function () {
//   // Validate Email

//   let emailError = true;
//   $("#inputmailtwo").keypress(function () {
//     isEmail();
//   });
//   function isEmail() {
//     let mail = $("#inputmailtwo").val();
//     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (regex.test(mail)) {
//       $("#inputMail").removeClass("error");
//       return true;
//     } else {
//       $("#inputmailtwo").addClass("error");
//       $("#inputmailtwo").addClass("success");
//       emailError = false;
//       return false;
//     }
//   }

//   // Submit button
//   $("#newsBtn").click(function () {
//     isEmail();

//     if (emailError == true) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// });

// // testimonial

var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  },
});

const signup = document.querySelector(".t-signup"),
  signin = document.querySelector(".t-signin"),
  addClass = document.querySelector(".site");
signup.addEventListener("click", function () {
  addClass.className = "site signup-show";
});
signin.addEventListener("click", function () {
  addClass.className = "site signin-show";
});

/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");

/*=============== SHOW SEARCH ===============*/
/* Validate if constant exists */
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}

/*=============== CLOSE SEARCH ===============*/
/* Validate if constant exists */
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");

/*=============== SHOW LOGIN ===============*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
    console.log("login");
  });
}

/*=============== HIDE LOGIN ===============*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

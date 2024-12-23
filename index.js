$(document).ready(function () {
    $("form").on("submit", function (event) {
      event.preventDefault(); // Prevent form submission and page reload
      
      const username = $("#floatingInput").val(); // Get the username
      const password = $("#floatingPassword").val(); // Get the password
      
      // Check if the username and password are both "admin"
      if (username === "anniversary" && password === "fifth") {
        // Redirect to album.html if login is successful
        window.location.href = "album.html";
      } else {
        // Show alert if login is unsuccessful
        alert("Unsuccessful login");
      }
    });
});

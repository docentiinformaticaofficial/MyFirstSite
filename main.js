document.addEventListener("DOMContentLoaded", () => {
  // Verifica se esiste un utente loggato; in caso contrario, reindirizza alla login
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    window.location.href = "login.html";
    return;
  }

  // Gestione logout
  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }
});

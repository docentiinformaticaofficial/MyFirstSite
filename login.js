document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const messagePara = document.getElementById("login-message");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById("username").value.trim();
      const passwordInput = document.getElementById("password").value.trim();
  
      // Recupera gli utenti salvati, oppure inizializza con un array vuoto
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Trova l'utente con le credenziali corrette
      const foundUser = users.find(user => user.username === usernameInput && user.password === passwordInput);
  
      if (foundUser) {
        messagePara.style.color = "green";
        messagePara.textContent = `Login effettuato, benevenuto ${usernameInput}!`;
        // Salva l'utente loggato
        localStorage.setItem("loggedInUser", usernameInput);
        // Reindirizza alla pagina protetta (index.html)
        setTimeout(() => { window.location.href = "index.html"; }, 1000);
      } else {
        messagePara.style.color = "red";
        messagePara.textContent = "Credenziali non valide, riprova.";
      }
    });
  });
  
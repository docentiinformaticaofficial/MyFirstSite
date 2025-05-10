document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const messagePara = document.getElementById("register-message");
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById("username").value.trim();
      const passwordInput = document.getElementById("password").value.trim();
      const confirmPasswordInput = document.getElementById("confirm-password").value.trim();
  
      if (passwordInput !== confirmPasswordInput) {
        messagePara.style.color = "red";
        messagePara.textContent = "Le password non coincidono.";
        return;
      }
  
      // Recupera gli utenti registrati oppure inizializza con un array vuoto
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Verifica se lo username esiste già
      if (users.find(user => user.username === usernameInput)) {
        messagePara.style.color = "red";
        messagePara.textContent = "Username già in uso. Scegline un altro.";
        return;
      }
  
      // Aggiungi il nuovo utente
      users.push({ username: usernameInput, password: passwordInput });
      localStorage.setItem("users", JSON.stringify(users));
  
      messagePara.style.color = "green";
      messagePara.textContent = "Registrazione completata! Reindirizzamento alla pagina di login...";
  
      setTimeout(() => { window.location.href = "login.html"; }, 1500);
    });
  });
  
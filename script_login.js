let primeiroCliqueFeito = false;

document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault(); // Impede o envio automático do formulário

  const nome = document.getElementById("name").value.trim();
  const senha = document.getElementById("password").value;

  // Verifica se o nome e a senha são os esperados
  if (nome === "Marina" && senha === "amordaminhavida123") {
    if (!primeiroCliqueFeito) {
      // Primeiro clique correto
      primeiroCliqueFeito = true;

      // Muda o fundo do site para degradê roxo e vermelho claro
      document.body.style.background = "linear-gradient(to right, #6a0dad, #ffb6c1)";
      document.getElementById("main_login").style.background = "linear-gradient(to right, #6a0dad, #ffb6c1)";

      // Muda a imagem do avatar
      document.getElementById("Icon_Perfil").src = "assets/Foto_perfil_marina.jpg";

      // Muda a frase
      const frase = document.getElementById("Frase");
      frase.textContent = "é a marina mesmo??, preencha denovo 🧐";

      // Limpa os campos para novo preenchimento
      document.getElementById("name").value = "";
      document.getElementById("password").value = "";
    } else {
      // Segundo clique correto: redireciona
      window.location.href = "carta.html";
    }
  } else {
    // Dados incorretos
    const frase = document.getElementById("Frase");
    frase.textContent = "Nome ou senha incorretos 😢";
  }
});
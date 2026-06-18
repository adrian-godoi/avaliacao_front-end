document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const btnCadastrar = document.getElementById("btnCadastrar");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = document.getElementById("email").value.trim();
            const senhaInput = document.getElementById("senha").value.trim();

            const errorEmail = document.getElementById("error-email");
            const errorSenha = document.getElementById("error-senha");

            errorEmail.textContent = "";
            errorSenha.textContent = "";

            let formularioValido = true;

            if (!emailInput.includes("@")) {
                errorEmail.textContent = "O e-mail deve obrigatoriamente conter o caractere @.";
                formularioValido = false;
            }

            const temMaiuscula = /[A-Z]/.test(senhaInput);
            if (senhaInput.length < 8 || !temMaiuscula) {
                errorSenha.textContent = "A senha deve ter no mínimo 8 caracteres e conter pelo menos uma letra maiúscula.";
                formularioValido = false;
            }

            if (formularioValido) {
                alert("Login realizado com sucesso!");
            }
        });
    }

    if (btnCadastrar) {
        btnCadastrar.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../cadastro/cadastro.html";
        });
    }
});
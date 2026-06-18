document.addEventListener("DOMContentLoaded", () => {
    const cadastroForm = document.getElementById("cadastroForm");
    const btnVoltar = document.getElementById("btnVoltar");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = document.getElementById("email").value.trim();
            const senhaInput = document.getElementById("senha").value.trim();
            const confirmarInput = document.getElementById("confirmar_senha").value.trim();

            const errorEmail = document.getElementById("error-email");
            const errorSenha = document.getElementById("error-senha");
            const errorConfirmar = document.getElementById("error-confirmar");

            errorEmail.textContent = "";
            errorSenha.textContent = "";
            errorConfirmar.textContent = "";

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

            if (confirmarInput !== senhaInput) {
                errorConfirmar.textContent = "O valor digitado no campo 'Confirmar Senha' deve ser exatamente igual ao do campo 'Senha'.";
                formularioValido = false;
            }

            if (formularioValido) {
                alert("Inscrição salva com sucesso!");
                window.location.href = "../login/index.html";
            }
        });
    }

    if (btnVoltar) {
        btnVoltar.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "../login/index.html";
        });
    }
});

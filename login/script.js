function Entrar() {
    let textUsuario = document.getElementById('usuario')
    let textSenha = document.getElementById('senha')
    let nomeUsuario = textUsuario.value;
    let nomeSenha = textSenha.value;

    if (nomeUsuario == "admin" || nomeUsuario.charAt(0) == nomeUsuario.charAt(0).toUpperCase() && nomeSenha == "admin123") {
        window.location.href = 'painel.html'
    } else {
        window.alert("Usuário ou senha incorretos!")
    }
}
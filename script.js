function Entrar() {
    let textU = window.document.getElementById('usuario');
    let textS = window.document.getElementById('senha');

    let erro = "Usuário ou senha incorretos";

    if (textU.value == "admin" && textS.value == "admin123") {
        window.location.href = 'pag.html'
    } else {
        return window.alert(erro);
    }

}
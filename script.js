function Entrar() {
    let textU = window.document.getElementById('usuario');
    let textS = window.document.getElementById('senha');

    let erro = "Usuário ou senha incorretos";

    if (textU.value == "isaacgeazy" && textS.value == "encantado123") {
        window.location.href = 'pag.html'
    } else {
        return window.alert(erro);
    }

}
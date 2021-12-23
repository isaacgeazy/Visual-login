function letra(textU){
 if (textU.charAt(0) == textU.charAt(0).toUpperCase() || textU) {
     return true
 } else {
     return false
 }
}
function Entrar() {
    let textU = window.document.getElementById('usuario');
    let textS = window.document.getElementById('senha');
    let erro = "Usuário ou senha não preenchidos ou incorretos!";

    if (letra(textU.value) == "admin" && textS.value == "admin123") {
        window.location.href = 'pag.html'
    } else {
        return window.alert(erro);
    }
}

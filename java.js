function enviardados() {
    if (document.getElementById("nome").value == "" ||
        document.getElementById("nome").value.length < 8) {
        alert("Preencha campo NOME corretamente!");
        document.getElementById("nome").focus();
        return false;
    }
    if (document.getElementById("sobrenome").value == "" ||
        document.getElementById("sobrenome").value.length < 8) {
        alert("Preencha campo NOME corretamente!");
        document.getElementById("sobrenome").focus();
        return false;
    }


    if (document.getElementById("comentario").value == "") {
        alert("Preencha o campo MENSAGEM!");
        document.getElementById("comentario").focus();
        return false;
    }

    if (document.getElementById("comentario").value.length < 50) {
        alert("É necessário preencher o campo MENSAGEM com mais de 50 caracteres!");
        document.getElementById("comentario").focus();
        return false;
    }

    return true;
}
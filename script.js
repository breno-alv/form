
//Verificando se os campos nome é e-mail estão vazios.
function validar() {
    if (document.getElementById("nome").value ==""){
        alert("Preencher o campo nome");
        document.getElementById("nome").focus();
        return false;
    }

    if (document.getElementById("email").value ==""){
        alert("Preencher o campo email");
        document.getElementById("email").focus();
        return false;

    } 

}

//bre um pop ups com uma mensagem 
document.getElementById("button")
.addEventListener("click", function () {
alert("Sua mensagem foi enviada")
});






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
    
    if (document.getElementById("msg").value ==""){
        alert("Escreva uma mensagem");
        document.getElementById("msg").focus();
        return false;

    }
    
    else { //Abre um pop ups com uma mensagem 
        document.getElementById("button")
        .addEventListener("click", function validar() {
         alert("Sua mensagem foi enviada com sucesso!!")
    });
}}
    



//document.getElementById("button")
//.addEventListener("click", function validar() {
//alert("Sua mensagem foi enviada")
//});





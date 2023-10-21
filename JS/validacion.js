// codigo de validacion para el form que esta en el apartado de secreto

function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "Carlos" && pass == "120902")
    {
        window.location = "pagina_secreta.html"
    }
    else if(user !== "Carlos")
    {
        alert("Usuario incorrecto");
    }
    else if(pass !== "120902")
    {
        alert("Contraseña incorrecta");
    }

}
//validar nombre

letras = new RegExp('^[A-Z]+$', 'i');

function validarNom(value){    

    if (!letras.test(value)){

        $('#errorNom').show();
            return false;
        }

    else {
        $('#errorNom').hide();
        return true;
    }
}

//Validar apellido

function validarCognom(value){    

    if (!letras.test(value)){

        $('#errorCognom').fadeIn(2000);
            return false;
        }

    else {

        $('#errorCognom').fadeOut(2000);
        return true;
    }
}

//Validar mail


function validarMail(value){

    var posArroba = value.indexOf("@");
    var posPunt = value.indexOf(".",posArroba);
                    
        if (posArroba<0 || posPunt<0){

            $('#errorMail').show();
            return false;
        }

        else {
            
            $('#errorMail').hide();
            return true;
        }
}

//Validar dia

function validarDia(value){

    if (isNaN(value)==true) {
     
        $('#errorDia').show();
        return false;
    }

    else if ((value<=0) || (value>31)){
        
        $('#errorDia').show();
        return false;   
    }

    else {

        $('#errorDia').hide();
        return true;
    }        
}

//Validar mes

function validarMes(value){

    if (isNaN(value)==true)   {
     
        $('#errorMes').show();
        return false;
    }

    else if ((value<=0) || (value>12)) {

        $('#errorMes').show();
        return false;   
    }

    else {

        $('#errorMes').hide();
        return true;
    }        
}

//Validar año

function validarAny(value){

    if (isNaN(value)==true) {
     
        $('#errorAny').show();
        return false;
    }

    else if ((value.length<=0) || (value.length>4)){

        $('#errorAny').show();
        return false;   
    }

    else {

        $('#errorAny').hide();
        return true;
    }
}

//Validar telefon

function validarTelefon(value){

    var admitidos = "0123456789 +";

        if (isNaN(value)==true){
        
            $('#errorTelefon').show();
            return false;
        }

        else if ((value.length<7) || (value.length>25)){

            $('#errorTelefon').show();
            return false;  
        }

        for (i=0; i< value.length; i++) { 
                
            caracter = value[i];

        if (admitidos.indexOf(caracter)<0) {

            $('#errorTelefon').show();
            return false;
        }   

        else {

            $('#errorTelefon').hide();
            return true;
        }
}
}

//VALIDAR DNI

function validarDni(value){

    var admesos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    
    if (value.length != 9) {     
                              
        $('#errorDni').show();
        return false;
        }

    for (i=0; i< value.length; i++) {
        caracter = value[i];
        
        if (i<8) {

            if (isNaN(caracter)==true) { 

                $('#errorDni').show();
                return false;
            }        
        }

        else if (i==8) {        
                                                       
        if (isNaN(caracter)==false) {  

            $('#errorDni').show();
            return false;
        }
        
        
        else if (admesos.indexOf(caracter.toUpperCase())<0) {
            
            $('#errorDni').show();
            return false;
        }
        
    var numero = value.substring(0,8);    
    var modul = numero%23;
    var letra = "TRWAGMYFPDXBNJZSQVHLCKE"

        if (letra.charAt(modul) !=caracter.toUpperCase()){      
            
            $('#errorDni').show();
            return false;
        }
        
    
        else {
            
            $('#errorDni').hide();
            return true;}
        
    }   
    
}
}


function validartotal() {    
    

    var nom = document.forms["formValida"]["nom"].value;
    var cognom = document.forms["formValida"]["cognom"].value;
    var mail = document.forms["formValida"]["mail"].value;
    var dia = document.forms["formValida"]["dia"].value;
    var mes = document.forms["formValida"]["mes"].value;
    var any = document.forms["formValida"]["any"].value;
    var dni = document.forms["formValida"]["dni"].value;
    var telefon = document.forms["formValida"]["telefon"].value;

    var resul1 = validarNom(document.getElementById("nom").value);
    var resul2 = validarCognom(document.getElementById("cognom").value);
    var resul3 = validarMail(document.getElementById("mail").value);
    var resul4 = validarDia(document.getElementById("dia").value);
    var resul5 = validarMes(document.getElementById("mes").value);
    var resul6 = validarAny(document.getElementById("any").value);
    var resul7 = validarTelefon(document.getElementById("telefon").value);
    var resul8 = validarDni(document.getElementById("dni").value);


    
    if ((nom=="") || (cognom=="") || (mail=="") || (dia=="")|| (mes=="")|| (any=="")|| (telefon=="")|| (dni=="")) {

        
        document.getElementById("texto").innerHTML= "Has dejado campos vacios";

        text = document.getElementById('texto');
        text.style.color= "#cb3234";
        text.style.marginLeft = "20px";
        return false;
    }


    else if ((resul1==true) && (resul2==true) && (resul3==true) && (resul4==true) && (resul5==true) && (resul6==true) && (resul7==true) && (resul8==true)) {

        document.getElementById('texto').innerHTML="Lo conseguiste";
        text = document.getElementById('texto');
        text.style.color= "#cb3234";
        

    return false;
    }
}
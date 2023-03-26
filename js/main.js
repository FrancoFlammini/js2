console.log(funcionB("coder"))
console.log(funcionB("house"))


function validarFecha(dia, mes){
    const meses31 = [1,3,5,7,8,10,12];
    const meses30 = [4,6,9,11];
    if (meses31.includes(mes)){
        if (dia>0 && dia < 32){
            return true;
        }
    }
     else if (mes == 2){
        if ((dia>0) && (dia<29)){
            return true;
        } 
        } else if (meses30.includes(mes)){
            if (dia >  0 && dia<31){
                return true;
            }
        } else {
            return false;
        }
        
}
function zood(){
    let dia, mes;
    
    do {
        dia = parseInt(prompt("dia de nacimiento"));
        mes = parseInt(prompt("mes de nacimiento"));  
        ok = validarFecha(dia, mes);
        if (!ok){
            alert("La fecha ingresada no es valida");
        }     
        
    } while (!ok)

    if ((dia>=21&&mes==3) || (dia<=20&&mes==4)){
        alert("aries")
    }  else if ((dia>=24&&mes==9) || (dia<=23&&mes==10)){
        alert("libra")
        } else if ((dia>=21&&mes==4) || (dia<=21&&mes==5)){
            alert("tauro")
        } else if ((dia>=24&&mes==10) || (dia<=22&&mes==11)){
            alert("escorpio")
        } else if ((dia>=22&&mes==5) || (dia<=21&&mes==6)){
        alert("geminis")
        } else if ((dia>=23&&mes==11) || (dia<=21&&mes==12)){
            alert("sagitario")
        } else if ((dia>=21&&mes==6) || (dia<=23&&mes==7)){
            alert("cancer")
        } else if ((dia>=22&&mes==12) || (dia<=20&&mes==1)){
            alert("capricornio")
        } else if ((dia>=24&&mes==7) || (dia<=23&&mes==8)){
            alert("leo")
        } else if ((dia>=21&&mes==1) || (dia<=19&&mes==2)){
            alert("acuario")
        } else if ((dia>=24&&mes==8) || (dia<=23&&mes==9)){
            alert("virgo")
        } else if ((dia>=20&&mes==2) || (dia<=20&&mes==3)){
            alert("piscis")
        }

        location.reload();
}


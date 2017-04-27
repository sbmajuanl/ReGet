    var boton=document.getElementById("boton");
    var nombre=document.getElementById("nombre");
    var dni=document.getElementById("dni");
    nombre.onblur = changeUpperCase;
    nombre.onkeypress=soloLetras;
    apellido.onkeypress=soloLetras;
    dni.onkeypress=soloNumeros;

    boton.addEventListener('click',function(evento) {
    evento.preventDefault();
    validacion();
        });

    //evento onblur para nombre
    function changeUpperCase(){
          var arrDato = this.value.split(" ");//split division
          var datoConMayusculas = "";
          for(var i = 0; i<arrDato.length;i++){
            datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
          }
          this.value=datoConMayusculas;
        }

    function soloLetras(e){
        var codigoTecla=e.keyCode;//document.write(codigoTecla);
        if ((codigoTecla>=97 && codigoTecla<=122)|| (codigoTecla>=65 && codigoTecla<=90)||(codigoTecla==32 || codigoTecla==39 )){
          return true;
        }else{
          return false;
        }

      }

    function soloNumeros(e){
      var codigoTecla=e.keyCode;
      if(codigoTecla>=48 && codigoTecla<=57){
        return true;
      }else{
        return false;
      }
    }


    function validacion(){
            var celular=document.getElementById("celular").value;
            var casa=document.getElementById("casa").value;
            var contraseña=document.getElementById("contraseña").value;
            var ccontraseña=document.getElementById("ccontraseña").value;
            var comentario=document.getElementById("comentario").value;
          }


function CapturarDatos(){
            
    var Nombres= document.getElementById("Nombres").value.toUpperCase();
    var Apellidos= document.getElementById("Apellidos").value.toUpperCase();
    var Correo= document.getElementById("Correo").value;
    var Telefono= document.getElementById("Telefono").value;
    var TipoDocu= document.getElementById("TipoDocu").value;
    var Identificacion= document.getElementById("Identificacion").value;
    var CiudadOrigen= document.getElementById("CiudadOrigen").value;
    var PeriodoAdmisión= document.getElementById("PeriodoAdmisión").value.toUpperCase();

    if((Nombres == null) || (Nombres == "")){
        Swal.fire({
            icon: 'error',
            title: '☠ Error ☠',
            text: 'No Exite "Nombres"',
            confirmButtonColor: '#2892DB'
        })
    }else if((Apellidos == null) || (Apellidos == "")){
        Swal.fire({
            icon: 'error',
            title: '☠ Error ☠',
            text: 'No Exite "Usuario"',
            confirmButtonColor: '#2892DB'
        })
    }else if((TipoDocu == null) || (TipoDocu == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Tipo De Documento"',
            confirmButtonColor: '#2892DB'
        })
    }else if((Identificacion == null) || (Identificacion == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Identificacion"',
            confirmButtonColor: '#2892DB'
        })
    }else if((Correo == null) || (Correo == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Correo"',
            confirmButtonColor: '#2892DB'
        })
    }else if((Telefono == null) || (Telefono == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Telefono"',
            confirmButtonColor: '#2892DB'
        })
    }else if((CiudadOrigen == null) || (CiudadOrigen == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Ciudad Origen"',
            confirmButtonColor: '#2892DB'
        })
    }else if((PeriodoAdmisión == null) || (PeriodoAdmisión == "")){
        Swal.fire({
            icon: 'error',
            title: '🤨 Oops...',
            text: 'Se Tiene Que Diligenciar El Campo "Periodo de Admisión deseado"',
            confirmButtonColor: '#2892DB'
        })
    }else{
        Swal.fire({
        title: '¡Datos Capturados Exitosamente!  😏',
        text: Nombres + ' ' +Apellidos + ' / ' + TipoDocu + Identificacion + ' / ' + Correo +' / '+ Telefono + ' / ' + CiudadOrigen +' / '+ PeriodoAdmisión,
        icon: 'success',
        confirmButtonColor: '#2892DB',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
        })
    }
}

// declarando variables para los controles
    var txtNom=document.getElementById("txtNom");
    var txtApe=document.getElementById("txtApe");
    var txtCor=document.getElementById("txtCor");
    var txtMas=document.getElementById("txtMas");
    var txtFem=document.getElementById("txtFem");
    var txtOtr=document.getElementById("txtOtr");
    var chkEst=document.getElementById("chkEst");

function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+m+'</li>';
}


// // creamos una funcion para validar nombre
// function ValidarNombre(){
//     if(txtNom.value=="" || txtNom.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese sus nombres</li>';
//     }else{
//         error.style.display='none';
//     }
// }
// function ValidarApellido(){
//     if(txtApe.value=="" || txtApe.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese sus apellidos</li>';
//     }else{
//         error.style.display='none';
//     }
// }
// function ValidarCorreo(){
//     if(txtCor.value=="" || txtApe.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese su correo</li>';
//     }else{
//         error.style.display='none';
//     }
// }
// function ValidarSexo(){
//     if(sexo.value=="" || sexo.value==null){
//         error.style.display='block';
//         error.innerHTML+='<li>Por favor ingrese su sexo</li>';
//     }else{
//         error.style.display='none';
//     }
// }
// creamos un pocedimiento para validar
function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false &&rbOtr.checked==false){
        LlamarClase("Por favor seleccione su sexo");
        LlamarClase("Por favor seleccione su estado");
        rbMas.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor seleccione su estado");
        chkEst.focus();
    }else{
        error.style.display='none';
    }
}

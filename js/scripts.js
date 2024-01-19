// Use this file to add JavaScript to your project
//import { Empresa } from "./Empresa.js";
$(window).on('load', function (e) {
    const spinner = document.querySelector("#box1");
    spinner.outerHTML='<div id="box1"class="load">'+
    '<span class="loader"></span>'+
    '</div>';
    setTimeout(function(){ 
        mostrarTextoIndex();
     }, 3000);
 });

 function mostrarTextoIndex() {
    const contenidoPer = document.querySelector("#box1");
    contenidoPer.outerHTML='<div id="box1"class="row gx-4 gx-lg-5 align-items-center my-5">'+
    '<div class="col-lg-4"><img class="img-fluid rounded mb-4 mb-lg-0" src="./images/fotoMC.png" alt="..." /></div>'+
    '<div class="col-lg-8">'+
        '<h1>Miguel Correa</h1>'+
        '<p>Soy <strong>Desarrollador</strong> y <strong>Administrador de sistemas</strong>, con más de 16 años de experiencia en el ámbito de la informática.<br><br> A lo largo de mi carrera, he abordado diversas áreas de esta disciplina, siempre con entusiasmo y un compromiso constante con mi desarrollo profesional, lo que me ha llevado a buscar oportunidades para ampliar mis conocimientos y mantenerme actualizado en un entorno profesional que evoluciona constantemente.</p>'+
        '</div>'+
    '</div>';
    
  }

document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector(".cabecera");
    container.outerHTML="<a class='navbar-brand' href='index.html'><img id='imgLogo' src='images/fotoMC.png' alt='Logo' /> Miguel Correa </a>"+
                "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>"+
                "<span class='navbar-toggler-icon'></span></button>"+
                "<div class='collapse navbar-collapse' id='navbarSupportedContent'>"+
                "<ul class='navbar-nav m-auto'>"+
                    "<li class='nav-item'>"+
                    "<a class='nav-link' href='about.html'>About</a>"+
                    "</li>"+
                    "<li class='nav-item'>"+
                        "<a class='nav-link' href='formacion.html'>Formación</a>"+
                    "</li>"+
                    "<li class='nav-item'>"+
                        "<a class='nav-link' href='experiencia.html'>Experiencia</a>"+
                    "</li>"+
                    "<li class='nav-item'>"+
                    "<a class='nav-link ' href='contacto.html'>Contacto</a>"+
                    "</li>"+
                "</ul>"+    
                "</div>";
                
});
document.addEventListener("DOMContentLoaded", function() {
                animateprogress("#JavaScript",91);
                animateprogress("#Java",72);
                animateprogress("#Android",86);
                animateprogress("#Html",52);
                animateprogress("#CSS",79);
                animateprogress("#PHP",36);
                animateprogress("#SQL",86);
                animateprogress("#Python",52);
                animateprogress("#React",79);
                animateprogress("#C",36);
                
            } );

/*-------------------------------- Cargar empresas--------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Utilizar fetch para obtener los datos del archivo JSON
    // Fetch de Empresas con 'no-cors' mode
    fetch('./js/Empresas.json', { mode: 'no-cors' })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
/*-------------------------------- Enlace a web --------------------------------*/
// Llamada a la función al hacer clic en el botón
document.getElementById("empresa1").onclick = function() {
   
    window.open('http://www.squareconcept.com/', '_blank');
};

document.getElementById("empresa2").onclick = function() {
    window.open('https://scapeinformatica.com/', '_blank');
};

document.getElementById("empresa3").onclick = function() {
    window.open('http://www.inforserversl.com/', '_blank');
};

/*-------------------------------- Descripción trabajo --------------------------------*/
const descripción = document.getElementById('dt');
    descripción.style.display = 'none';
function mostrarDescripcion(opc) {
    const descripción = document.getElementById('dt');
    descripción.style.display = 'block';
    if(opc==1){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>Square Concept (Malta):</h2><p>09/2006 -11/2006</p><p>Diseño y desarrollo Web </p></div>";
    }
    if(opc==2){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>Informática Scape:</h2><p>01/2007 - 06/2012</p><p>Servicio Técnico, Mantenimiento y reparación de equipos en taller e insitu,<br> administración de redes, docente en academia de informática,<br>venta de productos informáticos, oficina y trato cara el público.</p></div>";
    }
    if(opc==3){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>InforServer S.L:</h2><p>07/2012 - 08/2023</p>"+
        "<ul><li>Administrador de Sistemas y Soporte Técnico</li>"+
                "<ul><li>Soporte técnico en farmacias de Pontevedra y Ourense.</li>"+
                    "<li>Distribución y soporte de AGF Nixfarma.</li></ul>"+
            "<li>Experiencia en Sistemas:</li>"+
                "<ul><li>Implementación de Servidores HP Proliant con Windows Server.</li>"+
                    "<li>Instalación y configuración de Redes.</li></ul>"+
            "<li>Técnico Oficial de Cajones Inteligentes: CashGuard, CashInfinity, CashLogy.</li>"+
            "<li>Desarrollo Web: Desarrollo y mantenimiento de páginas web.</li>"+
            "<li>Soporte de Software de Hostelería: BDP, Ágora y MenuLan.</li>"+
            "<li>Etiquetas Electrónicas: Instalación, configuración y diseño de etiquetas electrónicas Pricer.</li></ul></div>";
    }
    
  }

  // Función para ocultar el div
  function ocultarDescripcion() {
    const descripción = document.getElementById('dt');
    descripción.style.display = 'none';
    
  }

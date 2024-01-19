// Use this file to add JavaScript to your project
//import { Empresa } from "./Empresa.js";
// Declarar la variable global
let empresa1;
let empresa2;
let empresa3;
document.addEventListener('DOMContentLoaded', function () {
    $(window).on('load', function (e) {
        const spinner = document.querySelector("#box1");
        spinner.outerHTML='<div id="box1"class="load">'+
        '<span class="loader"></span>'+
        '</div>';
        setTimeout(function(){ 
            mostrarTextoIndex();
         }, 3000);
     });
     /*----------------------------- NAV ------------------------------------*/
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
 
 /*----------------------------- Animacion barras carga ------------------------------------*/
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
    /*----------------------------- Trabajar con la clse Empresa.js ------------------------------------*/
    const scriptEmpresa = document.createElement('script');
    scriptEmpresa.src = './js/Empresa.js'; // Ruta relativa o absoluta a Empresa.js
    scriptEmpresa.type = 'text/javascript';
    document.head.appendChild(scriptEmpresa);

    // Evento personalizado que se disparará cuando las instancias de Empresa estén listas
    const empresasListasEvent = new Event('empresasListas');

    scriptEmpresa.onload = function () {
        // Crear instancia de Empresa
        empresa1 = new window.Empresa("1", "Square Concept (Malta)", "./images/squareConcept.png", "http://www.squareconcept.com/", "09/2006 -11/2006");
        empresa2 = new window.Empresa("2", "Informática Scape", "./images/LOGO SCAPE.png", "https://scapeinformatica.com/", "01/2007 - 06/2012");
        empresa3 = new window.Empresa("3", "InforServer S.L.", "./images/is.png", "http://www.inforserver.es/", "01/2007 - 06/2012");
        // Acceder a los métodos de la instancia
        console.log(empresa1.getNombre());

        // Despachar el evento empresasListas
        document.dispatchEvent(empresasListasEvent);
    };

    // Esperar hasta que las instancias de Empresa estén listas
    document.addEventListener('empresasListas', function () {
        const arrayEmpresas = [empresa1, empresa2, empresa3,]; 

        // Obtén el contenedor donde deseas agregar los elementos
const empresasContainer = document.getElementById('empresas');

// Configura el contenedor como un contenedor flexible (flex container)
empresasContainer.style.display = 'flex';

// Recorre el array de empresas para crear los elementos y agregarlos al contenedor
for (let i = 0; i < arrayEmpresas.length; i++) {
    const empresa = arrayEmpresas[i];

    // Crea el contenedor principal
    const empresaDiv = document.createElement('div');
    empresaDiv.classList.add('col-sm-3', 'experiencia');
    empresaDiv.addEventListener('mouseover', () => mostrarDescripcion(i + 1));
    empresaDiv.addEventListener('mouseout', ocultarDescripcion);

    // Crea el enlace
    const empresaLink = document.createElement('a');
    empresaLink.href = '#';
    empresaLink.id = `empresa${i + 1}`;

    // Crea la imagen
    const empresaImg = document.createElement('img');
    empresaImg.src = empresa.getImagen();
    empresaImg.alt = empresa.getNombre();

    // Crea el párrafo
    const empresaP = document.createElement('p');
    empresaP.textContent = empresa.getNombre();

    // Agrega los elementos al enlace y el enlace al contenedor principal
    empresaLink.appendChild(empresaImg);
    empresaLink.appendChild(empresaP);
    empresaDiv.appendChild(empresaLink);

    // Agrega el contenedor principal al contenedor general
    empresasContainer.appendChild(empresaDiv);
    const descripción = document.getElementById('dt');
    descripción.style.display = 'none';
}   
    });
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

/*-------------------------------- Enlace a web --------------------------------*/
// Llamada a la función al hacer clic en el botón
document.getElementById("empresa1").onclick = function() {
   
    window.open(empresa1.getUrl(), '_blank');
};

document.getElementById("empresa2").onclick = function() {
    window.open(empresa2.getUrl(), '_blank');
};

document.getElementById("empresa3").onclick = function() {
    window.open(empresa3.getUrl(), '_blank');
};

/*-------------------------------- Descripción trabajo --------------------------------*/
const descripción = document.getElementById('dt');
descripción.style.display = 'none';
function mostrarDescripcion(opc) {
    const descripción = document.getElementById('dt');
    descripción.style.display = 'block';
    if(opc==1){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>"+empresa1.getNombre()+":</h2><p>"+empresa1.getFechas()+"</p><p>Diseño y desarrollo Web </p></div>";
    }
    if(opc==2){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>"+empresa2.getNombre()+"</h2><p>"+empresa2.getFechas()+"</p><p>Servicio Técnico, Mantenimiento y reparación de equipos en taller e insitu,<br> administración de redes, docente en academia de informática,<br>venta de productos informáticos, oficina y trato cara el público.</p></div>";
    }
    if(opc==3){
        descripción.outerHTML="<div id='dt' class='dt2'><h2>"+empresa3.getNombre()+"</h2><p>"+empresa3.getFechas()+"</p>"+
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

import { Empresa } from "./Empresa.js";
// Declarar la variable global
let empresa1;
let empresa2;
let empresa3;
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith("index.html")) {
        // Tu código aquí
        const spinner = document.querySelector("#box1");
        if (spinner) {
            spinner.outerHTML = '<div id="box1" class="load"><span class="loader"></span></div>';
            setTimeout(() => {
                mostrarTextoIndex();
            }, 3000);
        } else {
            console.error('Elemento con id "box1" no encontrado.');
        }
    }
     /*----------------------------- NAV ------------------------------------*/
     const container = document.querySelector(".cabecera");
    container.outerHTML="<a class='navbar-brand' href='index.html'><img id='imgLogo' src='images/fotoMC.png' alt='FotoPerfil' /> Miguel Correa </a>"+
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
     /*----------------------------- NAV ------------------------------------*/
        // Obtén el nombre de la página actual, por ejemplo, desde la URL
        var currentPage = window.location.href.split("/").pop();

        // Obtén todos los elementos <a> dentro de los elementos <li> en el menú
        var menuItems = document.querySelectorAll(".navbar-nav li");

        // Itera sobre los elementos del menú
        menuItems.forEach(function(item) {
            // Obtén el enlace dentro del elemento <li>
            var link = item.querySelector("a");

            // Verifica si la href del enlace coincide con la página actual
            if (link.getAttribute("href") === currentPage) {
                // Si coincide, añade la clase 'active' al elemento <li>
                item.classList.add("active");
            }
        });
 /*----------------------------- Animacion barras carga ------------------------------------*/
                animateprogress("#JavaScript",70);
                animateprogress("#Java",72);
                animateprogress("#Android",50);
                animateprogress("#Html",85);
                animateprogress("#CSS",80);
                animateprogress("#PHP",70);
                animateprogress("#SQL",65);
                animateprogress("#Python",40);
                animateprogress("#React",36);
                animateprogress("#C",30);
    /*----------------------------- Trabajar con la clse Empresa.js ------------------------------------*/
    
    
        empresa1 = new Empresa("1", "Square Concept (Malta)", "./images/squareConcept.png", "http://www.squareconcept.com/", "09/2006 -11/2006");
        empresa2 = new Empresa("2", "Informática Scape", "./images/LOGO SCAPE.png", "https://scapeinformatica.com/", "01/2007 - 06/2012");
        empresa3 = new Empresa("3", "InforServer S.L.", "./images/is.png", "http://www.inforserver.es/", "01/2007 - 06/2012");
         
        console.log(empresa2.getNombre());
        const arrayEmpresas = [empresa1, empresa2, empresa3,]; 

        const empresasContainer = document.getElementById('empresas');
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
            empresaLink.href = empresa.getUrl();
            empresaLink.id = `empresa${i + 1}`;
            empresaLink.target = "_blank"; 

            // Crea la imagen
            const empresaImg = document.createElement('img');
            empresaImg.src = empresa.getImagen();
            empresaImg.alt = empresa.getNombre();
            empresaImg.classList.add('img-fluid'); // Clase Bootstrap para imágenes responsivas


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
  function ajustarPosicionDt2(empresaDiv) {
    // Obtener la posición de la empresa en relación con la ventana
    const empresaRect = empresaDiv.getBoundingClientRect();
    
    // Calcular la posición de .dt2 en función de la posición de la empresa
    const dt2 = document.querySelector('.dt2');
    const dt2Top = empresaRect.top + empresaRect.height / 2 - dt2.offsetHeight / 2;
    const dt2Left = empresaRect.left + empresaRect.width / 2 - dt2.offsetWidth / 2;

    // Aplicar la nueva posición a .dt2
    dt2.style.top = `${dt2Top}px`;
    dt2.style.left = `${dt2Left}px`;
}

/*-------------------------------- Descripción trabajo --------------------------------*/
const descripción = document.getElementById('dt');
descripción.style.display = 'none';
function mostrarDescripcion(opc) {
    document.body.classList.add('show-scroll');
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
    document.body.classList.remove('show-scroll');
    
  }
  /*-------------------------------- Correo --------------------------------*/
  function enviarCorreo() {
    // Obtén los elementos del formulario
    var nombreInput = document.getElementById('nombre');
    var correoInput = document.getElementById('correo');
    var mensajeTextarea = document.getElementById('mensaje');

    if (nombreInput.value.trim() === '' || mensajeTextarea.value.trim() === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        if (nombreInput.value.trim() === '') {
            nombreInput.classList.add('error');
        }
        if (mensajeTextarea.value.trim() === '') {
            mensajeTextarea.classList.add('error');
        }
        return; 
    } else {
        nombreInput.classList.remove('error');
        mensajeTextarea.classList.remove('error');
    }

    // Valida el correo electrónico
    if (!validarCorreo(correoInput.value)) {
        correoInput.classList.add('error');
        alert('Por favor, ingrese una dirección de correo electrónico válida.');
        return; 
    } else {
        correoInput.classList.remove('error');
    }

    nombreInput.value = '';
    correoInput.value = '';
    mensajeTextarea.value = '';
    nombreInput.classList.remove('error');
    correoInput.classList.remove('error');
}

function validarCorreo(correo) {
    // Expresión regular para validar el formato del correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
 /* function enviarCorreo() {
    emailjs.init("service_4ins5jk"); // Reemplaza "user_tu_api_key" con tu clave de API de Email.js

    var form = document.getElementById("myForm");

    emailjs.sendForm("Gmail", "plantillaMC", new FormData(form))
        .then(function (response) {
            alert("Correo enviado con éxito", response);
        }, function (error) {
            alert("Error al enviar el correo", error);
        });
}*/

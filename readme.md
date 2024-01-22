# T4.1DevDoc UX UI Accesibilidad Inclusividad 
## Tabla de contenidos
1. [Leyes UX](#Leyes_UX)
2. [Tecnologías](#tecnologias)
3. [Javascript](#javascript)
4. [Navegación](#navegacion)
5. [FAQs](#faqs)

## Leyes UX 
***
En este proyecto se han aplicado las siguientes __leyes UX__: 
* __Ley de Fitts__: establece que cuanto más grande sea un objeto y más cerca esté de nosotros, más fácil será alcanzarlo, influyó en la convención de hacer que los botones interactivos sean más grandes.

![Image text](https://miguelcorreadev.github.io/miguelcorrea/DOC/imagenes/Fitts.png)

* __Ley de Jakob__: usar patrones familiares en el diseño para facilitar la experiencia del usuario uso de un menú sencillo y web minimalista.
* __Efecto de estética-usabilidad__: Interfaz atractiva con imagen visual.
* __Ley de Postel__: En el formulario de contacto se avisa mediante un alert, si se introduce una estructura de la dirección de email incorrecta o si falta algún campo.
* __Umbral de Doherty__: En la página de inicio aparece una animación que nos hace percibir que se esta cargando.

![Image text](https://miguelcorreadev.github.io/miguelcorrea/DOC/imagenes/Doherty.png)

* __Principio de la Navaja de Occam__: Diseño limpio y minimalista, se puede observar que existe un flujo de navegación claro, el usuario siempre sabe donde esta, el menu queda sobreado en azul en la sección correspondiente (Se puede observar en la captura de la Ley de Fitts).


## Tecnologias
***
En este proyecto se ha utilizado las siguientes tecnologías:
* JavaScript
* HTML
* [CSS](https://example.com)
* Bootstrap

## Javascript
***
### Import - Export
La parte de Javascript consta inicialmente de dos archivos JS el primero es __scripts.js__, donde encontraremos prácticamente todo el código utilizado en la web y donde se realiza el __import__ del segundo archivo llamado __Empresa.js__, en el encontraremos una clase en JS exportada con el nombre de Empresa, en ella hay un constructor donde le pasamos por parámetros el id, nombre, imagen, url, y fechas, a continuación tenemos los métodos __get_ para recuperar cada uno de los datos.
```
 export class Empresa{
    constructor(id, nombre, imagen, url, fechas){
        this._id = id;
        this._nombre = nombre;
        this._imagen = imagen;
        this._url = url;
        this._fechas = fechas
    }
    getId(){
        return this._id;
    }
    ...
```
```
import { Empresa } from "./Empresa.js";
```
En cada uno de los  archivos HTML cargamos/llamamos a __scripts.js__ de la siguiente manera, con type="module".
```
<script type="module" src="js/scripts.js"></script>
```
### Función Arrow
Se utiliza para retrasar la carga del contenido del index.html durante 3 segundos para similar que esta cargando el contenido.
```
setTimeout(() => {
                mostrarTextoIndex();
            }, 3000);
```
### Instancia de objetos
En la página de __experiencia.html__ he instanciado en este caso 3 objetos, que serian las 3 empresas donde he trabajado, lo bueno de hacerlo de esta forma es que si crece la cantidad de empresas, con instanciarla ya se generará automaticamte en la web.  <br>
__Nota__: en la captura de la Ley de Fitts se puede observar las 3 empresas creadas.
```
empresa1 = new Empresa("1", "Square Concept (Malta)", "./images/squareConcept.png", "http://www.squareconcept.com/", "09/2006 -11/2006");

empresa2 = new Empresa("2", "Informática Scape", "./images/LOGO SCAPE.png", "https://scapeinformatica.com/", "01/2007 - 06/2012");

empresa3 = new Empresa("3", "InforServer S.L.", "./images/is.png", "http://www.inforserver.es/", "01/2007 - 06/2012");
``` 
Inicialmente se ha intentado pasar los datos de un archivo JSON, cargarlos en un array o lista y recorriendolo ir realizando la instancia de cada objeto empresa, pero por varios motivos no se pudo realizar en este punto, queda para proximas mejoras.

Todos los elementos html de las empresas se ha creado mediante elementos y dinamicamente dentro de un bucle for, desde el código JS, este es un pequeño fragmento:

```
// Crea el contenedor principal
const empresaDiv = document.createElement('div');
empresaDiv.classList.add('col-sm-3', 'experiencia');
empresaDiv.addEventListener('mouseover',() => mostrarDescripcion(i+ 1));

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
```
## Navegacion
***
Give instructions on how to collaborate with your project.
> Maybe you want to write a quote in this part. 
> It should go over several rows?
> This is how you do it.
## FAQs
***
A list of frequently asked questions
1. **This is a question in bold**
Answer of the first question with _italic words_. 
2. __Second question in bold__ 
To answer this question we use an unordered list:
* First point
* Second Point
* Third point
3. **Third question in bold**
Answer of the third question with *italic words*.
4. **Fourth question in bold**
| Headline 1 in the tablehead | Headline 2 in the tablehead | Headline 3 in the tablehead |
|:--------------|:-------------:|--------------:|
| text-align left | text-align center | text-align right |
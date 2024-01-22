
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
    getNombre(){
        return this._nombre;
    }
    getImagen() {
        return this._imagen;
      }
      getUrl() {
        return this._url;
      }
      getFechas() {
        return this._fechas;
      }

}
// Hacer que la clase esté disponible globalmente
//window.Empresa = Empresa;

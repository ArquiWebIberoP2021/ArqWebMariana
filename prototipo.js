//prototipe
function Persona(nombre, edad) {
 
    this.nombre = nombre;
    this.edad = edad;
    
    }
    
    Persona.prototype.info = function() {
    
    console.log(this.nombre + " " + this.edad);
    
    }
    
    
    let pepito = new Persona("pepito", 20);
    let juanito = new Persona("juanito", 30);
    
    pepito.info();
    juanito.info();
    
    
    Persona.prototype.info = function() {
    }
    
    
    juanito.info();
    pepito.info();
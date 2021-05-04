//Singleton limitar el numero de instancias de un objeto a 1 
function Process()// funcion de proceso 
{
    this.state = state // pasar el estado para saber si se esta ejecutando o bloqueado o si se detiene

}


// administrador de procesos 
const Singleton = (function(){ // asignar una expresion de función invocada 
    function ProcessManager() // cualquier constructor de ojeto 
    {
        this.numProcess = 0 // limitar a 0 
    }

    let pManager // almacenar una referencia 

    function createProcessManager() // funcion para crear el administrador de procesos
    {
     pManager = new ProcessManager() // asignamos pManager a un nuevo proceso y regresamos pManager
     return pManager   
    }
    return {
        getProcessManager : ()=>{ // vamos a comprobar para ver si nuestro objeto no esta configurado 
            if(!pManager)
            pManage = createProcessManager() // crear una nueva instancia de nuestro administrados
            return pManager
        }
    }
})()

const processManager = Singleton.getProcessManager(); // llamar proceso 1
const processManager2 = Singleton.getProcessManager(); // llamara proceso 2

console.log(processManager === processManager2)// si la respuesta es true significa que aunque llamamos a dos procesos realmente solo es uno
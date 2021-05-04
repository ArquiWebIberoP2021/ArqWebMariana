//Factory method

function Developer(name) //Estructura de developers
{
    this.name = name
    this.type = "Developer"
}

function Tester(name)
{
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory()
{
    this.create = (name, type) => { //metodo de creacion este metodo toma un nombre y un tipo 
        switch(type)
        {
            case 1:
                return new Developer(name)
                break;
            case 2: 
                return new Tester(name)
                break;
        }

    }
}
function say()
{
    console.log("Hola, yo soy "+ this.name + "y yo soy" + this.type)
}
const employeeFactory = new EmployeeFactory() // instanciando la funcion 
const employees = [] // creamos una matriz vacia para ir agregando 

employees.push(employeeFactory.create("Patrick",1))// cargamos nuevos empelados con su nombre y su tipo 
employees.push(employeeFactory.create("STV",2))

employees.forEach( emp => { // bucle para que cada empleado agregado sea añadido 
    say.call(emp)
})


const empleados = [
    {
        id: 1,
        name:"waldir"
    },
    {
        id:2,
        name: "kart"
    },
    {
        id:3,
        name: "Shore"
    }
]


const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
]

const id = 3;

const getEmpleado = (id,callback) => {
    const empleado = empleados.find( e => e.id === id )?.name;
    if(empleado){
        callback(null,empleado);
    }else{
        callback(`El empleado con id: ${id} no existe`);
    }
}


const getSalario = (id,callback) => {
    const salario = salarios.find( e => e.id === id )?.salario;
    if(salario){
        callback(null,salario);
    }else{
        callback(`El salario del id: ${id} no existe`);
    }
}

getEmpleado(id,(err,empleado) => {
    if(err){
        console.log("Error");
        return console.log(err)
    }

   
        
});



getSalario(id, (err,salario)=>{
    if(err){
        console.log("Error!");
        return console.log(err);
    }
    //console.log(salario);
    console.log(`el empleado: ${empleado} tiene ${salario} soles de salario`);
});
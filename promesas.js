const id = 3;
const empleados = [
  {
    id: 1,
    name: "waldir",
  },
  {
    id: 2,
    name: "kart",
  },
  {
    id: 3,
    name: "Shore",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.name;
    (empleado) ? resolve(empleado) : reject(`No existe el empleado con el id: ${id}`);
  })
    
  
  
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe el salario con el id: ${id}`);
    })
}

/*getEmpleado(id)
    .then((empleado) => console.log(empleado))
    .catch((err) => console.log(err));

getSalario(id)
    .then((salario) => console.log(salario))
    .catch((err) => console.log(err));*/
let nombre;

getEmpleado(id)
  .then(empleado => {
    nombre=empleado;
    return getSalario(id);
  })
  .then(salario => console.log('El empleado',nombre,'tiene el salario de:',salario))
  .catch((err) => console.log(err));
const id = 4;
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
    empleado
      ? resolve(empleado)
      : reject(`No existe el empleado con el id: ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`No existe el salario con el id: ${id}`);
  });
};

const getInfo = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado ${empleado} es ${salario}`;
  } catch (error) {
    throw error;
  }
};

getInfo(id)
    .then(info => console.log(info))
    .catch(err => console.log(err));
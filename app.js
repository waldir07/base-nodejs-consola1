let object = {
    standard:0,
    vegan: 0
};

function pedirComida(array) {

    // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
    // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
    // (a fines practicos solo hay dieta "standard" y "vegan")
    // Por ej:
    // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
    // retorna {standard: 2, vegan: 1}
    // Tu código aca:

    

    
    const datos = array.map((item) => {
        (item.dieta==="standard") ? object.standard += 1 : object.vegan += 1;
    })

}

pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}]);
console.log(object);
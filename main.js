// inicio del programa
let sesion = false;
while (!sesion) {
  sesion = confirm(
    "Bienvenido al registro de clientes del servicio técnico. ¿Desea iniciar sesión?"
  );
  if (!sesion) {
    alert("Hasta pronto.");
    break;
  }

  // inicio de sesion
  let cuenta;
  let contra;
  do {
    cuenta = prompt("Ingrese su nombre para iniciar sesión:");
    contra = prompt("Ingrese su contraseña: ");
    if (cuenta == "servtec" && contra == "1234") {
      alert("¡Bienvenido!");
    } else {
      alert("Nombre y/o contraseña incorrectas. Inténtelo nuevamente.");
    }
  } while (cuenta != "servtec" || contra != "1234");

  // menu del programa
  const clientes = [];
  let id = 1;
  let agregarCliente = () => {
    let fecha = prompt("Ingrese el día de ingreso:");
    let nombre = prompt("Ingrese el nombre del cliente:");
    let numero = prompt("Ingrese el numero de teléfono del cliente:");
    let dispositivo = prompt("Ingrese el dispositivo:");
    let diagnostico = prompt("Ingrese el diagnóstico:");
    let presupuesto = prompt("Ingrese el presupuesto:");
    let estado = prompt("Ingrese el estado:");

    let cliente = {
      id,
      fecha,
      nombre,
      numero,
      dispositivo,
      diagnostico,
      presupuesto,
      estado,
    };
    clientes.push(cliente);
    id++;
  };

  let mostrarClientes = (arrayClientes) => {
    let listaClientes = "Lista de clientes:";
    for (let i = 0; i < arrayClientes.length; i++) {
      listaClientes +=
        "\n ID: " +
        arrayClientes[i].id +
        "\n " +
        "Fecha de ingreso: " +
        arrayClientes[i].fecha +
        "\n " +
        "Nombre: " +
        arrayClientes[i].nombre +
        "\n " +
        "Número: " +
        arrayClientes[i].numero +
        "\n " +
        "Dispositivo: " +
        arrayClientes[i].dispositivo +
        "\n " +
        "Diagnóstico: " +
        arrayClientes[i].diagnostico +
        "\n " +
        "Presupuesto: " +
        arrayClientes[i].presupuesto +
        "\n " +
        "Estado: " +
        arrayClientes[i].estado +
        "\n";
    }
    alert(listaClientes);
    for (let cliente of arrayClientes) {
      console.log(cliente);
    }
  };

  let buscarCliente = () => {
    let buscado = prompt("Ingrese el nombre del cliente a buscar:");
    let encontrado = false;
    let persona;
    for (let i = 0; i < clientes.length; i++) {
      if (buscado == clientes[i].nombre) {
        encontrado = true;
        persona = clientes[i];
      }
    }
    if (encontrado) {
      alert(
        "ID: " +
          persona.id +
          "\n " +
          "Fecha de ingreso: " +
          persona.fecha +
          "\n " +
          "Nombre: " +
          persona.nombre +
          "\n " +
          "Número: " +
          persona.numero +
          "\n " +
          "Dispositivo: " +
          persona.dispositivo +
          "\n " +
          "Diagnóstico: " +
          persona.diagnostico +
          "\n " +
          "Presupuesto: " +
          persona.presupuesto +
          "\n " +
          "Estado: " +
          persona.estado
      );
    } else {
      alert("No se encontró el cliente");
    }
  };

  let accion = 0;
  while (accion != "4") {
    accion = prompt(
      "¿Qué desea hacer? \n 1. Agregar cliente \n 2. Ver clientes \n 3. Buscar cliente \n 4. Cerrar programa"
    );
    if (accion == "1") {
      agregarCliente();
      accion;
    } else if (accion == "2") {
      mostrarClientes(clientes);
      accion;
    } else if (accion == "3") {
      buscarCliente();
      accion;
    } else if (accion == "4") {
      alert("Hasta pronto.");
    }
  }
}

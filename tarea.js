// 1) Extraer el total de ingresos
// 2) Extraer el total de egresos (o extracciones)
// 3) Extraer un saldo final (a ver si llegamos a fin de mes)
// TRATAR DE NO COPIARSE DE NINGUN LADO :')

const movimientos = [
    {
      tipo: "ingreso",
      monto: 5000,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 300,
    },
    {
      tipo: "extraccion",
      monto: 1000,
    },
  
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 2000,
    },
    {
      tipo: "ingreso",
      monto: 500,
    },
    {
      tipo: "extraccion",
      monto: 500,
    },
  ];

  var ingresos=0;
  var egresos=0;

  for (var i=0; i<movimientos.length; i++ ) {
      if (movimientos[i].tipo === "ingreso") {
          ingresos = ingresos + movimientos[i].monto;
      } else if (movimientos[i].tipo === "extraccion") {
        egresos = egresos + movimientos[i].monto;
      }
  }

  console.log("El total de operaciones es " + movimientos.length);
  console.log(" ##############  ESTADO DE CUENTA ##############");
  console.log(" El total de ingresos es: " + ingresos);
  console.log(" El total de egresos es: " + egresos);

  var saldo;
 
  if ((saldo = ingresos - egresos) < 0) {
    console.log("El saldo EN ROJO es: " + saldo);
  }
  if ((saldo = ingresos - egresos) === 0) {
    console.log("El saldo es: " + saldo);
  }
  if ((saldo = ingresos - egresos) > 0) {
    console.log("El saldo A FAVOR es: " + saldo);
  }
  console.log(" ###############################################");

  /*
  switch (saldo) {
    case saldo==3600:
        console.log("El saldo es: " + saldo);
        break;
    case saldo<0:
        console.log("El saldo EN ROJO es: " + saldo);
        break;
    case saldo>0:
        console.log("El saldo A FAVOR es: " + saldo);
        break;
  }*/
  
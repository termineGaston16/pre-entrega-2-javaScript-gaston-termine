/* VARIABLES */
let variableQueAlmacenaOpcionMenuPrincipal = 0;

/* CLASES */
class Objeto {
    constructor(id, nombreDelObjeto, tipoDeAlimento, precioFinal) {
        this.id = id;
        this.nombreDelObjeto = nombreDelObjeto;
        this.tipoDeAlimento = tipoDeAlimento;
        this.precioFinal = precioFinal;
    }
}

class MaquinaExpendedora {
    constructor(id, nombreDeLaMaquina, montoMaximoParaDinero, capacidadMaximaEspacioCabina) {
        this.id = id;
        this.nombreDeLaMaquina = nombreDeLaMaquina;
        this.montoMaximoParaDinero = montoMaximoParaDinero;
        this.montoMinimoParaDinero = 0.0;
        this.capacidadMaximaEspacioCabina = capacidadMaximaEspacioCabina;
        this.contenedorDeObjetos = [];
        this.cabina = [];
        this.saldoActual = 0.0;
    }

    /* funciones */
    agregarUnObjetoALaMaquina(objeto) {
        if (!maquina1.contenedorDeObjetos.includes(objeto)) {
            maquina1.contenedorDeObjetos.push(objeto)
            return
        }
    }

    buscarObjetoPorId(id){
        return maquina1.contenedorDeObjetos.find(producto => producto.id == id);
    }

    agregarSaldoAlaMaquina(dineroAAgregar) {

        if (dineroAAgregar === undefined || isNaN(dineroAAgregar)) {
            return alert("Ingresa un valor numérico válido para agregar dinero.");
        }

        if (this.saldoActual >= this.montoMaximoParaDinero || this.saldoActual < this.montoMinimoParaDinero) {
            return alert("El Saldo supera los limites.");
        }

        this.saldoActual += dineroAAgregar;

        if (this.saldoActual > this.montoMaximoParaDinero || this.saldoActual < this.montoMinimoParaDinero) {
            this.saldoActual -= dineroAAgregar
            return alert("El Saldo supera los limites.");
        }

        return alert("Dinero agregado con éxito.");
    }

    comprarUnObjetoEnLaMaquina(id) {

        let objetoAComprar=maquina1.buscarObjetoPorId(id)

        if (objetoAComprar===undefined) {
            alert("producto no encontrado")
            return;
        }

        if (this.cabina.length > this.capacidadMaximaEspacioCabina) {
            return alert("Ya no hay espacio en la cabina. Retira los objetos.")
        }

        if (this.saldoActual >= objetoAComprar.precioFinal) {
            this.saldoActual -= objetoAComprar.precioFinal;

            if (this.saldoActual < 0.0) {
                this.saldoActual += objetoAComprar.precioFinal;
                return alert("Dinero insuficiente.")
            }

            this.cabina.push(objetoAComprar);
            return alert("¡Objeto comprado!.")
        }

        return alert("¡Compra rechazada!")
    }

    retirarProductosDeLaCabina() {
        this.cabina.splice(0, this.cabina.length);
        return alert("Ñom ñ")
    }
}

/* OBJETOS */
let maquina1 = new MaquinaExpendedora("#2", "Tinky Winky CORPS", 1500.0, 4);
let objeto1 = new Objeto("1", "Coca-Cola", "Bebida", 50.0);
let objeto2 = new Objeto("2", "Chanta", "Bebida", 120.0); //Bebida trucha y peor que la Fanta pero que es vendida como mejor que ella. 
let objeto3 = new Objeto("3", "Ñoquis", "Comida", 1000.0);
let objeto4 = new Objeto("4", "Papas Fritas", "Comida", 75.0);

maquina1.agregarUnObjetoALaMaquina(objeto1)
maquina1.agregarUnObjetoALaMaquina(objeto2)
maquina1.agregarUnObjetoALaMaquina(objeto3)
maquina1.agregarUnObjetoALaMaquina(objeto4)




/* -------------- CODIGO -------------- */

do {
    variableQueAlmacenaOpcionMenuPrincipal = prompt("¡Bievenido/a a la Máquina Expendedora!\n \n *Nombre de la Máquina: " + maquina1.nombreDeLaMaquina + ". \n *Saldo Actual: $" + maquina1.saldoActual + ".\n *Monto maximo de dinero: $" + maquina1.montoMaximoParaDinero + ".\n *Alimentos en la cabina: " + maquina1.cabina.length + ". \n \n (1) Ver productos. \n (2) Ingresar dinero. \n (3) Retirar productos de la cabina. \n (4) Comprar Productos. \n (5) SALIR")

    switch (variableQueAlmacenaOpcionMenuPrincipal) {
        case "1":

            maquina1.contenedorDeObjetos.forEach(objeto => {
                alert(" ID:" + objeto.id + ". \n Nombre del Producto: " + objeto.nombreDelObjeto + ". \n Precio del Producto: $" + objeto.precioFinal + ". \n Tipo de Producto: " + objeto.tipoDeAlimento + ".")
            });

            break;

        case "2":

            let montoAAgregar = prompt("Ingrese el monto a Agregar a la máquina: ")
            maquina1.agregarSaldoAlaMaquina(parseInt(montoAAgregar))

            break;

        case "3":

            maquina1.retirarProductosDeLaCabina();
            break;


        case "4":
            let idDeObjetoAComprar = prompt("Ingrese el Id del objeto a comprar. ")
            maquina1.comprarUnObjetoEnLaMaquina(parseInt(idDeObjetoAComprar));

            break;

        default:
            break;
    }


} while (variableQueAlmacenaOpcionMenuPrincipal != 5);


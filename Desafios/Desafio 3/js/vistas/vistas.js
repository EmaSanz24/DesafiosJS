

function inicializarApp()
{
    crearTittle()
    crearMenu()

}
function crearTittle()
{
    const tittleH1 = document.createElement('h1')
    tittleH1.innerHTML= "CALCULADORA DE PRESTAMOS"
    document.body.appendChild(tittleH1)
}
function crearMenu()
{
    let opciones = ["Registrar Nuevo Usuario", "Listar Usuarios Registrados", "Calcular Un Prestamo", "Listar Prestamos Realizados"]
    opciones.forEach((opcion)=>{
        const boton = document.createElement("button")
        boton.innerHTML=opcion
    
    if(opcion === "Registrar Nuevo Usuario")
    {
        boton.addEventListener("click", ()=>{
            nuevoUsuario()
            listarUsuarios(usuarios)
        })
    }
    else if(opcion === "Listar Usuarios Registrados")
    {
        boton.addEventListener("click", ()=>{
            listarUsuarios(usuarios)
        })
    }
    else if(opcion === "Listar Prestamos Realizados")
    {
        boton.addEventListener("click", ()=>{
            listarPrestamos(prestamos)
        })
    }
    else if(opcion === "Calcular Un Prestamo")
    {
        boton.addEventListener("click",()=>{
            calcularPrestamo()
            
            let btnCalcular = document.querySelector("#btnCalcular")
            btnCalcular.addEventListener('click', ()=>{
                libsPrestamos()
                let preciosCuotas = document.querySelector("#preciosCuotas")
                preciosCuotas.innerHTML=calcular()
            })
        })
    }
        document.body.appendChild(boton)
    })  
}

function nuevoUsuario()
{
    let id=1
    if(usuarios.length>0)
    {
        id = usuarios[usuarios.length-1].id+1
    }
    let nombre = prompt("ingrese su nombre")
    let apellido = prompt("ingrese su apellido")
    let usuario = new Usuario(id, nombre, apellido)

    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))   
}
function listarUsuarios(listadoUsuarios)
{
    let listadoP = document.querySelector("#listadoPrestamos")
    if(!listadoP)
    {
        listadoP=document.createElement("table")
        listadoP.setAttribute("id","listadoPrestamos")
    }
    listadoP.innerHTML=""

    let calculo = document.querySelector("#calculoPrestamo")
    if(!calculo)
    {
        calculo=document.createElement("h2")
        calculo.setAttribute("id", "calculoPrestamo")
        tabla = document.createElement("table")
        
    }
    calculo.innerHTML=""
    tabla.innerHTML=""

    let listado = document.querySelector("#listadoUsuarios")
    if(!listado)
    {
        listado=document.createElement("table")
        listado.setAttribute("id", "listadoUsuarios")
    }
    listado.innerHTML=""
    
    const encabezado = document.createElement("tr")

    const tNombre = document.createElement("th")
    tNombre.innerHTML = "Nombre"
    encabezado.appendChild(tNombre)

    const tApellido = document.createElement("th")
    tApellido.innerHTML = "Apellido"
    encabezado.appendChild(tApellido)

    listado.appendChild(encabezado)

    listadoUsuarios.forEach((usuario)=>{
        let nodotr = document.createElement("tr")
        let nodotd = document.createElement("td")
        nodotd.innerHTML = `${usuario.nombre}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${usuario.apellido}`
        nodotr.appendChild(nodotd)

        listado.appendChild(nodotr)
    })
    document.body.appendChild(listado)
}

function listarPrestamos(listadoPrestamos)
{   
    let listado = document.querySelector("#listadoUsuarios")
    if(!listado)
    {
        listado=document.createElement("table")
        listado.setAttribute("id", "listadoUsuarios")
    }
    listado.innerHTML=""

    let calculo = document.querySelector("#calculoPrestamo")
    if(!calculo)
    {
        calculo=document.createElement("h2")
        calculo.setAttribute("id", "calculoPrestamo")
        tabla = document.createElement("table")
        
    }
    calculo.innerHTML=""
    tabla.innerHTML=""

    let listadoP = document.querySelector("#listadoPrestamos")
    if(!listadoP)
    {
        listadoP=document.createElement("table")
        listadoP.setAttribute("id","listadoPrestamos")
    }
    listadoP.innerHTML=""

    const encabezado = document.createElement("tr")

    const tID = document.createElement("th")
    tID.innerHTML = "ID"
    encabezado.appendChild(tID)

    const tMonto = document.createElement("th")
    tMonto.innerHTML = "Monto Prestado"
    encabezado.appendChild(tMonto)

    const tCuotas = document.createElement("th")
    tCuotas.innerHTML = "Cantidad de Cuotas"
    encabezado.appendChild(tCuotas)

    listadoP.appendChild(encabezado)

    listadoPrestamos.forEach((prestamo)=>{
        let nodotr = document.createElement("tr")
        let nodotd = document.createElement("td")
        nodotd.innerHTML = `${prestamo.id}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${prestamo.monto}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
        nodotd.innerHTML = `${prestamo.cuotas}`
        nodotr.appendChild(nodotd)

        listadoP.appendChild(nodotr)
    })
    document.body.appendChild(listadoP)
}
function calcularPrestamo()
{
    let listado = document.querySelector("#listadoUsuarios")
    if(!listado)
    {
        listado=document.createElement("table")
        listado.setAttribute("id", "listadoUsuarios")
    }
    listado.innerHTML=""

    let listadoP = document.querySelector("#listadoPrestamos")
    if(!listadoP)
    {
        listadoP=document.createElement("table")
        listadoP.setAttribute("id","listadoPrestamos")
    }
    listadoP.innerHTML=""

    let calculo = document.querySelector("#calculoPrestamo")
    if(!calculo)
    {
        calculo=document.createElement("h2")
        calculo.setAttribute("id", "calculoPrestamo")
        tabla = document.createElement("table")
        
    }
    calculo.innerHTML=""
    tabla.innerHTML=""
    calculo.innerHTML="Complete los siguientes campos:"
    

    const encabezado = document.createElement("tr")

    const tMonto = document.createElement("th")
    tMonto.innerHTML = "Monto Deseado"
    encabezado.appendChild(tMonto)

    const tCuotas = document.createElement("th")
    tCuotas.innerHTML = "Cantidad de Cuotas"
    encabezado.appendChild(tCuotas)

    let final = document.createElement("th")
    final.innerHTML ="Precio por cuota"
    encabezado.appendChild(final)

    let nodotr = document.createElement("tr")
    let nodotd = document.createElement("td")

    //nodo1
    let input1=document.createElement("input")
    input1.setAttribute("id","dinero")
    nodotd.appendChild(input1)
    nodotr.appendChild(nodotd)

    //nodo2 
    let cantidadCuotas=document.createElement("select")
    cantidadCuotas.setAttribute("id","eleccion")
    const cuotas3=document.createElement("option")
    cuotas3.setAttribute("value",3)
    cuotas3.innerHTML="3 Cuotas"

    const cuotas6=document.createElement("option")
    cuotas6.setAttribute("value",6)
    cuotas6.innerHTML="6 Cuotas"

    const cuotas12=document.createElement("option")
    cuotas12.setAttribute("value",12)
    cuotas12.innerHTML="12 Cuotas"
    
    const cuotas24=document.createElement("option")
    cuotas24.setAttribute("value",24)
    cuotas24.innerHTML="24 Cuotas"

    const cuotas36=document.createElement("option")
    cuotas36.setAttribute("value",36)
    cuotas36.innerHTML="36 Cuotas"
   
    cantidadCuotas.appendChild(cuotas3)
    cantidadCuotas.appendChild(cuotas6)
    cantidadCuotas.appendChild(cuotas12)
    cantidadCuotas.appendChild(cuotas24)
    cantidadCuotas.appendChild(cuotas36)

    let nodotd2 = document.createElement("td")
    nodotd2.appendChild(cantidadCuotas)
    nodotr.appendChild(nodotd2)
    
    //nodo3
    let nodotd3 = document.createElement("td")
    nodotd3.innerHTML = 0
    nodotd3.setAttribute("id","preciosCuotas")
    nodotr.appendChild(nodotd3)
    //termina nodo3

    let nodotr2 = document.createElement("tr")
    let btnCalcular = document.createElement("button")
    btnCalcular.setAttribute("id","btnCalcular")
    btnCalcular.innerHTML = "Calcular"
    nodotr2.appendChild(btnCalcular)

    tabla.appendChild(encabezado)
    tabla.appendChild(nodotr)
    tabla.appendChild(nodotr2)

    document.body.appendChild(calculo)
    document.body.appendChild(tabla)
}

function calcular()
{   
    
    let cuotaSeleccionada= document.querySelector("#eleccion")
    let seleccion = cuotaSeleccionada.value
    let dineroSeleccionado= document.querySelector("#dinero")
    let seleccionD = dineroSeleccionado.value
    let cuotas = 5
    
    if(seleccionD.trim()=="" || seleccionD<=0 || isNaN(seleccionD))
    {
        cuotas="ERROR"
    }
    else
    {
        if(seleccion == 3)//2%
        {
            let r1 = seleccionD*1.02
            cuotas = r1/seleccion   
        }
        else if(seleccion == 6)//5%
        {
            let r1 = seleccionD*1.05
            cuotas = r1/seleccion 
        }
        else if(seleccion == 12)//10%
        {
            let r1 = seleccionD*1.10
            cuotas = r1/seleccion 
        }
        else if(seleccion == 24)//20%
        {
            let r1 = seleccionD*1.20
            cuotas = r1/seleccion 
        }
        else if(seleccion == 36)//35%
        {
            let r1 = seleccionD*1.35
            cuotas = r1/seleccion   
        }
    }
    return cuotas
}

function libsPrestamos()
{   
    let dineroSeleccionado= document.querySelector("#dinero")
    let seleccionD = dineroSeleccionado.value
    if(seleccionD.trim()=="" || seleccionD<=0 || isNaN(seleccionD))
    {
        swal({
            tittle:"Algo no esta bien",
            text:'Verifica que hayas completado el campo "Monto Deseado" o que no hayas puesto un numero negativo en el mismo',
            icon:"error",
            button: "OK"
        })
    }
    else
    {
        Toastify({
            text:"Calculo realizado con éxito",
            duration:1500,
            position: "center",
            style: {
                background: "green"
                },
        }).showToast()
    }           
}
        
    


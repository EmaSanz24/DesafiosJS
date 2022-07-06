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

    let pedir = document.querySelector("#pedir")
    if(!pedir)
    {
        pedir = document.createElement('div')
        pedir.setAttribute("id", "pedir")
    }
    pedir.innerHTML=""

    let listado = document.querySelector("#listadoUsuarios")
    if(!listado)
    {
        listado=document.createElement("table")
        listado.setAttribute("id", "listadoUsuarios")
    }
    listado.innerHTML=""
    
    const encabezado = document.createElement("tr")

    const tID = document.createElement("th")
    tID.innerHTML = "ID"
    encabezado.appendChild(tID)

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
        nodotd.innerHTML = `${usuario.id}`
        nodotr.appendChild(nodotd)

        nodotd = document.createElement("td")
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

    let pedir = document.querySelector("#pedir")
    if(!pedir)
    {
        pedir = document.createElement('div')
        pedir.setAttribute("id", "pedir")
    }
    pedir.innerHTML=""

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
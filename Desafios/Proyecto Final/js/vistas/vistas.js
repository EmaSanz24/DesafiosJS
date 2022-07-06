

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
                crearBotonPedir()
                let btnPedir = document.querySelector("#btnPedir")
                btnPedir.addEventListener("click",()=>{
                    pedirPrestamo()
                })
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
    let nombre = nuevoNombre()
    let apellido = nuevoApellido()
    //let nombre = prompt("ingrese su nombre")
    //let apellido = prompt("ingrese su apellido")
    let usuario = new Usuario(id, nombre, apellido)

    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
function nuevoNombre()
{
    let rpt = true
    while(rpt = true)
    {
        let nombre = prompt("ingrese su nombre")
        let regex = /[0-9]+/
        if(nombre.trim() == "")
        {
            alert("Por favor ingresa un nombre")
        }
        else if(!regex.test(nombre))
        {
            rpt = false
            return nombre
        }
        else
        {
            alert("Por favor ingresa un nombre valido")
        }
    }

}
function nuevoApellido()
{
    let rpt = true
    while(rpt = true)
    {
        let apellido = prompt("ingrese su Apellido")
        let regex = /[0-9]+/
        if(apellido.trim() == "")
        {
            alert("Por favor ingresa un apellido")
        }
        else if(!regex.test(apellido))
        {
            rpt = false
            return apellido
        }
        else
        {
            alert("Por favor ingresa un apellido valido")
        }
    }
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
function crearBotonPedir()
{
    let pedir = document.querySelector("#pedir")
    if(!pedir)
    {
        pedir = document.createElement('div')
        pedir.setAttribute("id", "pedir")
    }
    pedir.innerHTML=""
    
    let info = document.createElement("h3")
    info.innerHTML = "Ingrese su ID"

    let inputInfo = document.createElement("input")
    inputInfo.setAttribute("id","inputInfo")

    btnPedir = document.createElement("button")
    btnPedir.setAttribute("id","btnPedir")
    btnPedir.innerHTML = "Pedir Prestamo"

    pedir.appendChild(info)
    pedir.appendChild(inputInfo)
    pedir.appendChild(btnPedir)
    document.body.appendChild(pedir)
    
    
}
function pedirPrestamo()
{
    let cuotaSeleccionada= document.querySelector("#eleccion")
    let seleccion = cuotaSeleccionada.value
    let dineroSeleccionado= document.querySelector("#dinero")
    let seleccionD = dineroSeleccionado.value
    
    let idIngresado = document.querySelector("#inputInfo")
    let idSolicitante = idIngresado.value
    //verificacion de id mas alto
    let users = JSON.parse(localStorage.getItem("usuarios"))
    let idUsers = users.map(({id})=>id)
    if(idSolicitante.trim() == "" || isNaN(idSolicitante) || idSolicitante<0 || idSolicitante> Math.max(...idUsers))
    {
        swal({
            tittle:"ID Invalido",
            text:'Verifica que hayas ingresado un ID valido y que corresponda a un usuario existente',
            icon:"error",
            button: "OK"
        })
    }
    else
    {
        let id=1
    if(prestamos.length>0)
    {
        id = prestamos[prestamos.length-1].id+1
    }
    let monto = seleccionD
    let cuotas = seleccion
    //prestamo > id,monto,cuotas,idSolicitante
    let prestamo = new Prestamo(id, monto, cuotas, idSolicitante)

    console.log(prestamo)
    prestamos.push(prestamo)
    localStorage.setItem("prestamos", JSON.stringify(usuarios))
    }

}       
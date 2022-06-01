
//Usuarios > id, Nombre, Apellido
const userAdmin = new Usuario(1,"Admin","Admin")
const user1 = new Usuario (2,"Raul", "Gonzalez")
const user2 = new Usuario (3,"Matias","Gecke")
const user3 = new Usuario (4,"Christian", "Belessi")
const usuarios = [userAdmin,user1,user2,user3]

//prestamo > id,monto,cuotas,idSolicitante
const movimiento1 = new Prestamo(1,4000,6,1)
const movimiento2 = new Prestamo (2,6700,24,3)
const moviemiento3 = new Prestamo (3,6000,3,2)
let prestamos = [movimiento1,movimiento2,moviemiento3]

inicializarApp()
/*
opcion=0
while(opcion!=5)
{
    opcion= Number(prompt(`Bienvenido/a la calculadora de prestamos, por favor seleccione la opcion correspondiente:
                        1.Registrar Nuevo Usuario
                        2.Listar Usuarios Registrados
                        3.Calcular un Prestamo
                        4.Listar Prestamos Realizados
                        5.FIN `))
    switch(opcion)
    {
        case 1:
            {
                nuevoUsuario()
                break
            }
        case 2:
            {
                listarUsuarios()
                break
            }
        case 3:
            {
                mostrarMenu()
                break
            }
        case 4:
            {
                listarPrestamos()
                break
            }
        case 5:
            {
                alert("Muchas gracias por usar nuestra calculadora")
                break 
            }
        default:
            {
                alert("Opcion Invalida")
                break
            }   
    } 
}

//Funciones

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
    listarUsuarios()
   
}
function listarUsuarios()
{
    const titulo=document.createElement("h1")
    titulo.innerText="Usuarios Registrados"
    document.body.appendChild(titulo)
    usuarios.forEach((usuario)=>
    {
        const users=document.createElement("h2")
        users.innerText= (usuario.nombre+" "+usuario.apellido+" |id:"+usuario.id)
        document.body.appendChild(users)
    })
}
function mostrarMenu()
{
    opcion2=0
    while(opcion2!=3)
    {
        cantidadPrestamo = elegirPrestamo()
        cantidadCuotas = elegirCuotas()
        precioCuotas = calculo()
        alert("Las cuotas que debe abonar son de: $" + precioCuotas)
        opcion2= Number(prompt(`Por favor seleccione la opcion correspondiente:
                        1.Pedir el prestamo calculado
                        2.Calcular otro prestamo
                        3.Finalizar
                        `))
    switch(opcion2)
    {
        case 1:
            {
                prestar()
                alert("Mucha gracias por confiar en nosotros")
                opcion=10
                return opcion
            }
        case 2:
            {
                break  
            }
        case 3:
            {
                break
            }
        default:
            {
                alert("Seleccion invalida")                    
                break
            }
    }
    } 
}
function elegirPrestamo()
{
    repeat = true
    while(repeat = true)
    {
        const opcion = Number(prompt(`Por favor ingrese el dinero que desea pedir`))
        if(isNaN(opcion))
        {
            alert("Por Favor ingrese un numero valido")
        }
        else if(opcion < 0)
        {
            alert("El numero no puede ser menor a cero")
        }
        else
        {
            repeat=false
            return opcion
        }
    }   
}
function elegirCuotas()
{
    repeat = true
    while(repeat = true)
    {
        const opcion2 = Number(prompt(`Por favor ingrese el numero de la opcion que desea:
                    1. 3 cuotas
                    2. 6 cuotas
                    3. 12 cuotas
                    4. 24 cuotas
                    5. 36 cuotas`))
    
        if(isNaN(opcion2) || opcion2 > 5)
            {
                alert("Por Favor ingrese un numero valido")
            }
        else
            {
                repeat=false
                return opcion2
            }
    }
}
function calculo()
{
    repeat = true
    while(repeat=true)
        if(cantidadCuotas === 1)//2%
        {
            let interes = cantidadPrestamo*1.02
            let cuotas = interes/3
            repeat=false
            return cuotas
        }
        else if(cantidadCuotas === 2)//5%
        {
            let interes = cantidadPrestamo*1.05
            let cuotas = interes/6
            repeat=false
            return cuotas
        }
        else if(cantidadCuotas === 3)//10%
        {
            let interes = cantidadPrestamo*1.10
            let cuotas = interes/12
            repeat=false
            return cuotas
        }
        else if(cantidadCuotas === 4)//20%
        {
            let interes = cantidadPrestamo*1.20
            let cuotas = interes/24
            repeat=false
            return cuotas
        }
        else if(cantidadCuotas === 5)//35%
        {
            let interes = cantidadPrestamo*1.35
            let cuotas = interes/36
            repeat=false
            return cuotas
        }
        else
        alert("La opcion ingresada es invalida")
}

function prestar()
{
    let id=1
    if(prestamos.length>0)
        {
            id = prestamos[prestamos.length-1].id+1
        }
    let monto = cantidadPrestamo
    let cuotas = cantidadCuotas
    let idSolicitante= pedirId()
    let prestamo = new Prestamo(id, monto, cuotas, idSolicitante )

    prestamos.push(prestamo)
}
function pedirId()
{
    listarUsuarios()
    idElegido= Number(prompt("Por favor ingrese su id para completar el prestamo"))
    return idElegido
}
function listarPrestamos()
{
    const titulo=document.createElement("h1")
    titulo.innerText="Prestamos Registrados"
    document.body.appendChild(titulo)
    prestamos.forEach((prestamo)=>
    {
        const prest=document.createElement("h2")
        prest.innerText= ("Monto: "+prestamo.monto+" |Cantidad de cuotas: "+prestamo.cuotas+" |id:"+prestamo.id)
        document.body.appendChild(prest)
    })
    
}
*/


//Usuarios > id, Nombre, Apellido
const userAdmin = new Usuario(1,"Admin","Admin")
const user1 = new Usuario (2,"Raul", "Gonzalez")
const user2 = new Usuario (3,"Matias","Gecke")
const user3 = new Usuario (4,"Christian", "Belessi")
let usuarios = []


//prestamo > id,monto,cuotas,idSolicitante
const movimiento1 = new Prestamo(1,4000,6,1)
const movimiento2 = new Prestamo (2,6700,24,3)
const movimiento3 = new Prestamo (3,6000,3,2)
let prestamos = []

if(localStorage.getItem("usuarios"))
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}
else
{
    fetch("./js/data/users.json")
    .then((response) => response.json())
    .then((json) => cargarUsers(json))
    .catch((error)=>swal({  tittle:"ERROR",
                            text:"Fallo al importar la base de datos de usuarios",
                            icon:"error",
                            button:"OK"}))
    //usuarios = [userAdmin,user1,user2,user3]
}

if(localStorage.getItem("prestamos"))
{
    prestamos = JSON.parse(localStorage.getItem("prestamos"))
}
else
{
    fetch("./js/data/prestamos.json")
    .then((response) => response.json())
    .then((json) => cargarPrestamos(json))
    .catch((error)=>swal({  tittle:"ERROR",
                            text:"Fallo al importar la base de datos de prestamos",
                            icon:"error",
                            button:"OK"}))
    //prestamos = [movimiento1,movimiento2,movimiento3]
}

inicializarApp()

function cargarUsers(data)
{
    usuarios = data
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
function cargarPrestamos(data)
{
    prestamos = data
    localStorage.setItem("prestamos", JSON.stringify(prestamos))
}

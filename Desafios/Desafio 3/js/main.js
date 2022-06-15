
//Usuarios > id, Nombre, Apellido
const userAdmin = new Usuario(1,"Admin","Admin")
const user1 = new Usuario (2,"Raul", "Gonzalez")
const user2 = new Usuario (3,"Matias","Gecke")
const user3 = new Usuario (4,"Christian", "Belessi")
let usuarios = []

//prestamo > id,monto,cuotas,idSolicitante
const movimiento1 = new Prestamo(1,4000,6,1)
const movimiento2 = new Prestamo (2,6700,24,3)
const moviemiento3 = new Prestamo (3,6000,3,2)
let prestamos = []

if(localStorage.getItem("usuarios"))
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}
else
{
    usuarios = [userAdmin,user1,user2,user3]
}

if(localStorage.getItem("prestamos"))
{
    usuarios = JSON.parse(localStorage.getItem("prestamos"))
}
else
{
    prestamos = [movimiento1,movimiento2,moviemiento3]
}

inicializarApp()

//calculadora de prestamos
/*  1.pedir al usuario el monto que desea
    2.pedir al usuario la cantidad de cuotas que desea
    3.calcular las cuotas con su correspondiente interes
    4.mostrar al usuario en un alert el resultado */

    //constructores
    class Usuario {
        constructor(id,nombre,apellido)
        {
            this.id=id
            this.nombre=nombre
            this.apellido=apellido
        }
    }
    const userAdmin = new Usuario(1,"Admin","Admin")
    const usuarios = [userAdmin]
    
    console.log(usuarios.length)
    class Prestamo{
        constructor(id,monto,cuotas,idSolicitante)
        {
            this.id=id
            this.monto=monto
            this.cuotas=cuotas
            this.idSolicitante=idSolicitante
        }
    }
    const movimiento1 = new Prestamo(1,4000,6,1)
    let prestamos = [movimiento1]
    
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
       
    }
    function listarUsuarios()
    {
        console.log("Lista de Usuarios:")
        usuarios.forEach((usuario)=>
        {
            console.log(usuario.nombre+" "+usuario.apellido+" |id:"+usuario.id)
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
        console.log("Lista de Prestamos:")
        prestamos.forEach((prestamo)=>
        {
            console.log("Monto: "+prestamo.monto+" |Cantidad de cuotas: "+prestamo.cuotas+" |id:"+prestamo.id)
        })
    
    }

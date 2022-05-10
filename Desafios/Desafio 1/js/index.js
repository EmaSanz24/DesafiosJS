//calcular pagos en cuotas sobre un monto determinado
/*  1.pedir al usuario el monto que desea
    2.pedir al usuario la cantidad de cuotas que desea
    3.calcular las cuotas con su correspondiente interes
    4.mostrar al usuario en un alert el resultado */
let rpt= "SI"
while(rpt!="NO")
{
    let cantidadPrestamo = elegirPrestamo()
    let cantidadCuotas = elegirCuotas()
    let precioCuotas = calculo()
    alert("Las cuotas que debe abonar son de: $" + precioCuotas)
    let consulta = "H"
    while(consulta != "SI" && consulta != "NO")
    {
        consulta=prompt("Desea volver a calcular un prestamo? SI/NO")
        consulta = consulta.toUpperCase();
        if(consulta != "SI" && consulta != "NO")
        {
            alert("Por favor seleccione una opcion valida SI/NO")
        }
        else if(consulta === "NO")
        {   
            alert("Muchas gracias por usar nuestra calculadora")
        }
    }
    rpt = consulta
    
    
    function elegirPrestamo()
    {
        let repeat = true
        while(repeat = true)
        {
            const opcion = Number(prompt(`Bienvenido/a a la calculadora de prestamos, por favor ingrese el dinero que desea pedir`))
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
        let repeat = true
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
        let repeat = true
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
}


let operacion = "1"
while(operacion!="FIN")
{//elegir operacion
    operacion = prompt(`ingresa una operacion:
                         CONTAR
                         SUMAR
                         RESTAR
                         MULTIPLICAR
                         DIVIDIR
                         FIN`);
    operacion = operacion.toUpperCase();

    if(operacion === "CONTAR")//Contar
    {
        let conteo = Number(prompt("Conteo: Ingrese el numero hasta el cual quiera contar"));

        if(isNaN(conteo))
        {
        alert("Debe ingresar un numero valido");
        }
        else
        {
            for(let i=1;i<=conteo;i++)
            {
                console.log(i);
            }
        } 
    }
    else if(operacion === "SUMAR")//Sumar
    {
        let numero1 = Number(prompt("Ingrese el valor de a ==>'a+b'"))
        let numero2 = Number(prompt("Ingrese el valor de b ==>'a+b'"))

        if(isNaN(numero1)|| isNaN(numero2))
        {
            alert("Alguno de sus numeros no es valido")
        }
        else
        {
            alert(numero1+numero2);
        }
    }
    else if(operacion === "RESTAR")//Restar
    {
        let numero1 = Number(prompt("Ingrese el valor de a ==>'a-b'"))
        let numero2 = Number(prompt("Ingrese el valor de b ==>'a-b'"))

        if(isNaN(numero1)|| isNaN(numero2))
        {
            alert("Alguno de sus numeros no es valido")
        }
        else
        {
            alert(numero1-numero2);
        }
    }
    else if(operacion === "MULTIPLICAR")//Multiplicar
    {
        let numero1 = Number(prompt("Ingrese el valor de a ==>'a*b'"))
        let numero2 = Number(prompt("Ingrese el valor de b ==>'a*b'"))

        if(isNaN(numero1) || isNaN(numero2))
        {
            alert("Alguno de sus numeros no es valido")
        }
        else
        {
            alert(numero1*numero2);
        }
    }
    else if(operacion === "DIVIDIR")//Dividir
    {
        let numero1 = Number(prompt("Ingrese el valor de a ==>'a/b'"))
        let numero2 = Number(prompt("Ingrese el valor de b ==>'a/b'"))

        if(isNaN(numero1) || isNaN(numero2))
        {
            alert("Alguno de sus numeros no es valido")
        }
        else if(numero2 ==0)
        {
            alert("Numero 2 no es valido para divdir")
        }
        else
        {
            alert(numero1/numero2); 
        }
    }
    else if(operacion === "FIN")
    {
        alert("Fin, Gracias por usar nuestra calculadora")
    }
    else //opciones invalidas
    {
        alert("opcion invalida")
    }
}   
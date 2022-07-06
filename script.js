/* 
    Se requiere de una Aplicación que empleando el Método de Monte Carlo permita darle solución a la siguiente integral simple:   

integral con lim sup 3, lim inf 2: 3x^2+2x dx

    El metodo de Monte Carlo permite valiendose del manejo de numeros aleatorios resolver problemas matematicos simples y complejos. 

    La aplicación podra desarrollase en cualquier lenguaje de programación y/o herramienta informatica que este a su alcance. 

    Como interfaz de entrada se debera: 

        Ingresar solamente el numero de simulaciones 

        Como interfaz de salida se debera especificar: 

        Resultado Matematico de la integral. 

        Resultado Aproximado de la Integral por el metodo de Monte Carlo. 

        Porcentaje (%) de error entre valor real (matematico) y el valor aproximado obtenido de la simulación. 

    */

    const identifier = () => {
        document.getElementById("btn").innerHTML=start();
    }

    function sumar_array(array_numeros){
        
        var suma = 0;
        
        array_numeros.forEach (function(numero){
            suma += numero;
        });
        
        return suma;
        
    }

    function start(){

        let monteCarlo = false;
        let final;
        let mError;                                           // es el margen de error final      
        let muestra;                                          // funciona como el tamaño de la muestra
        let desviacion;                                       // desviación estándar
        let standardError;                                    // error estándar
        let numSim = document.getElementById("numSim").value; // establece la cantidad de iteraciones y también funciona como el "tamaño de la población"
        
        while(monteCarlo != true){
            let prueba = [];
            for(let i = 1; i <= numSim; i++){
                let azar = Math.floor(Math.random() * 61);
                prueba.push(azar);
                console.log("INTENTO: "+i+", con resultado = "+azar);
                if((azar >= 20 && azar <= 23) || (azar >= 25 && azar <= 30)){
                    console.log("Se llegó a un resultado cercano: "+azar+". En "+i+" intentos");
                }
                if(azar == 24){
                    console.log("Se llegó al resultado correcto: "+azar+". En "+i+" intentos");
                    final = i;
                    monteCarlo = true;
                }
            }
            let media = sumar_array(prueba) / numSim;
            console.log(prueba);
            console.log("La simulación finalizó con el resultado en el intento #"+final);
            console.log(media);
        }
    }
    
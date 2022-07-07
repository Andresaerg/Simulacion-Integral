    const identifier = () => {
        document.getElementById("btn").innerHTML=start();
    }

    function sumar_array(array_numeros){
        let suma = 0;
        array_numeros.forEach (function(numero){
            suma += numero;
        });
        return suma;   
    }

    function trunc (x, posiciones = 0) {
        let s = x.toString()
        let l = s.length
        let decimalLength = s.indexOf('.') + 1
        let numStr = s.substr(0, decimalLength + posiciones)
        return Number(numStr)
    }

    function start(){

        let monteCarlo = false;
        let final;
        let cuasiFinal = 0;
        let numSim = document.getElementById("numSim").value; // establece la cantidad de iteraciones y también funciona como el "tamaño total de la muestra"
        if(numSim == 0){
            numSim += 1;
        }

        let contador = 1;
        let prueba = [];
        for(let i = 1; i <= numSim; i++){
            let azar = Math.floor(Math.random() * 61);
            prueba.push(azar);
            console.log("INTENTO: "+i+", con resultado = "+azar);
            if((azar >= 20 && azar <= 23) || (azar >= 25 && azar <= 30)){
                console.log("Se llegó a un resultado cercano: "+azar+". En "+i+" intentos");
                cuasiFinal += 1;
            }
            if(azar == 24){
                console.log("Se llegó al resultado correcto: "+azar+". En "+i+" intentos");
                final = i;
            }
        }
        
        let mediaAr = sumar_array(prueba) / numSim;
        let errorMargin = Math.abs(mediaAr - 24) / 24 * 100;
        console.log(prueba);
        document.getElementById("title1").innerHTML = "RESULTADO CORRECTO";
        document.getElementById("title2").innerHTML = "RESULTADO SIMULACIÓN";
        document.getElementById("title3").innerHTML = "PORCENTAJE DE ERROR";
        document.getElementById("realResult").innerHTML = "24";
        document.getElementById("simResult").innerHTML = trunc(mediaAr, 2);
        document.getElementById("errorMargin").innerHTML = trunc(errorMargin, 2)+"%";
        document.getElementById("modalBtn").innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'> Ver Integral asignada </button>";
        document.querySelector(".linea").innerHTML = "<hr>"

        if((mediaAr == numSim) || (mediaAr >= 20 && mediaAr <= 28)){
            monteCarlo = true;
            console.log("La simulación llegó al resultado correcto en el intento #"+final);
            console.log("La simulación estuvo cerca del resultado correcto en "+cuasiFinal+" ocasiones.");
        }

        else{
            while(monteCarlo != true){

                let prueba = [];
                contador += 1;

                for(let i = 1; i <= numSim; i++){
                    let azar = Math.floor(Math.random() * 61);
                    prueba.push(azar);
                    console.log("SE EJECUTA MONTECARLO");
                }

                let mediaAr = sumar_array(prueba) / numSim;
                console.log(prueba+", En montecarlo");
                if((mediaAr == numSim) || (mediaAr >= 20 && mediaAr <= 28)){
                    monteCarlo = true;
                    console.log("La simulación llegó al resultado correcto o cercano en "+contador+" intentos, ya que el resultado fue: "+mediaAr);
                }
            }
        }
    }

    const openEls = document.querySelectorAll("[data-open]");
    const closeEls = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";

    for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
    }

    for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
    }

    document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
    });

    document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
    });
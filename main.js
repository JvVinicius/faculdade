const submitTxt = document.querySelector("#txtSubmit");

submitTxt.addEventListener("click", function (e) {
    e.preventDefault();

    const day = document.querySelector("#DateDay").value;
    const month = document.querySelector("#DateMonth").value;
    
    const mesJaneiro = ("Capricórnio");
    const mesFevereiro = ("Aquário");
    const mesMarco = ("Peixes");
    const mesAbril = ("Áries");
    const mesMaio = ("Touro");
    const mesJunho = ("Gêmeos");
    const mesJulho = ("Câncer");
    const mesAgosto = ("Leão");
    const mesSetembro = ("Virgem");
    const mesOutubro = ("Libra");
    const mesNovembro = ("Escorpião");
    const mesDezembro = ("Sagitário");

    var ano = 12;

    while (month <= ano) {

        if (month == 12 && day >= 22) {
            alert("Seu signo é " + mesJaneiro);
            break;
        }
        else if (month == 1 && day <= 19) {
            alert("Seu signo é " + mesJaneiro);
            break;
        }
        else if (month == 1 && day >= 20) {
            alert("Seu signo é " + mesFevereiro);
            break;
        }
        else if (month == 2 && day <= 18) {
            alert("Seu signo é " + mesFevereiro);
            break;
        }
        else if (month == 2 && day >= 19) {
            alert("Seu signo é " + mesMarco);
            break;
        }
        else if (month == 3 && day <= 20) {
            alert("Seu signo é " + mesMarco);
            break;
        }
        else if (month == 3 && day >= 21) {
            alert("Seu signo é " + mesAbril);
            break;
        }
        else if (month == 4 && day <= 19) {
            alert("Seu signo é " + mesAbril);
            break;
        }
        else if (month == 4 && day >= 20) {
            alert("Seu signo é " + mesMaio);
            break;
        }
        else if (month == 5 && day <= 20) {
            alert("Seu signo é " + mesMaio);
            break;
        }
        else if (month == 5 && day >= 21) {
            alert("Seu signo é " + mesJunho);
            break;
        }
        else if (month == 6 && day <= 20) {
            alert("Seu signo é " + mesJunho);
            break;
        }
        else if (month == 6 && day >= 21) {
            alert("Seu signo é " + mesJulho);
            break;
        }
        else if (month == 7 && day <= 22) {
            alert("Seu signo é " + mesJulho);
            break;
        }
        else if (month == 7 && day >= 23) {
            alert("Seu signo é " + mesAgosto);
            break;
        }
        else if (month == 8 && day <= 22) {
            alert("Seu signo é " + mesAgosto);
            break;
        }
        else if (month == 8 && day >= 23) {
            alert("Seu signo é " + mesSetembro);
            break;
        }
        else if (month == 9 && day <= 22) {
            alert("Seu signo é " + mesSetembro);
            break;
        }
        else if (month == 9 && day >= 23) {
            alert("Seu signo é " + mesOutubro);
            break;
        }
        else if (month == 10 && day <= 22) {
            alert("Seu signo é " + mesOutubro);
            break;
        }
        else if (month == 10 && day >= 23) {
            alert("seu signo é " + mesNovembro);
            break;
        }
        else if (month == 11 && day <= 21) {
            alert("seu signo é " + mesNovembro);
            break;
        }
        else if (month == 11 && day >= 22) {
            alert("seu signo é " + mesDezembro);
            break;
        }
        else if (month == 12 && day <= 21) {
            alert("seu signo é " + mesDezembro);
            break;
        }
    }
})
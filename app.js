function saludo(n){
    document.getElementById("mensaje").innerHTML = n.country[0].country_id;
    //alert(document.getElementById("mensaje").innerHTML);
}

function sendForm() {
    console.log("hola");
}

async function countryName() {
    let link = "https://api.nationalize.io/?name=Kary";
    const answer = await fetch(link);
    const name = answer.json();
    return name
}



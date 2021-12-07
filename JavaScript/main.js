
    //Välj + eller - beroende på om det ska adderas eller subtraheras. 

var inkomstLista =[];
var kostnadsLista =[];

    //Välj knapp, för att få ned summan till antingen inköps eller kostnadslistan. 
document.querySelector("button").addEventListener("click", choose);


function choose(e){
    e.preventDefault();

    let costSum =0;
    let incomeSum =0;
    var beskrivning = document.querySelector("#Beskrivning").value
    var amount = document.querySelector("#summa").value

        //Beroende på om det ska adderas eller subtraheras hamnar summan i Inkomst alternativt Kostnads-listan 
    

        const option = document.querySelector("#choose").value;

        if(option == "plus") { 
            document.querySelector(".inkomstList").innerHTML +=" <li>" +beskrivning +" : " + amount + "</li>" ; inkomstLista.push(amount)  }

        // const minusOption = document.querySelector(".minus").textContent;
        // console.log(minusOption
        else if(option == "minus") { 
            document.querySelector(".kostnadsLista").innerHTML +=" <li>" + beskrivning +" : " + amount + "</li>" ; kostnadsLista.push(amount) 
            console.log(kostnadsLista)
        }
        //Felmedelande visas om man inte väljer + eller -. 
        else if (option == "-") {
            alert("Du måste välja + eller -");
        }

        else {
            alert("Fyll i formuläret")
        }

        //Totalsumman av Inkomster - utgifter. 

    var summa = 0;

   // loopa igenom inkomstLista och kostnadLista 

   inkomstLista.map( (e)=> {
 
    incomeSum += parseFloat(e)
})

//console.log(incomeSum)
kostnadsLista.map( (e)=> {
costSum += parseFloat (e)
})
   document.querySelector(".totalSum").textContent = incomeSum - costSum;
   
}

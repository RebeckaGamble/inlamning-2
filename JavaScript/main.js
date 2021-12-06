
//list.map( e=> console.log(e) )

//Skapa en knapp för att kunna välja om det ska adderas eller subtrahera

var inkomstLista =[];
var kostnadsLista =[];


document.querySelector("button").addEventListener("click", choose);


function choose(e){
    e.preventDefault();
    
    console.log("button works")

    var beskrivning = document.querySelector("#Beskrivning").value
    var amount = document.querySelector("#summa").value

            //Beroende på om det ska adderas eller subtraheras hamnar summan i Inkomst alternativt Kostnads-listan 
    

    const plusOption = document.querySelector("#choose");
    console.log(plusOption) 

        if(plusOption.value=="plus") { 
            document.querySelector(".inkomstList").innerHTML +=" <li>" +beskrivning +" : " + amount + "</li>" ; inkomstLista.push(amount)  }

  //  const minusOption = document.querySelector(".minus").textContent;
   // console.log(minusOpti
        else if(minusOption.value=="minus") { 
            document.querySelector(".inkomstList").innerHTML +=" <li>" +beskrivning -" : " + amount + "</li>" ; kostnadsLista.push(amount)  }


   var summa = 0;

   // loopa igenom inkomstLista och kostnadLista 

  
   
   

   document.querySelector(".vinst").innerHTML= summa;
   
   
}
//var plusOption =





/*
const plus document.querySelector(".beskrivning");
console.log(Inkomst)

//const plus document.querySelector(".plus").textContent;
//console.log(plus)

const minus document.querySelector(".minus").textContent;
console.log(minus)

if(addOption=="+"){
    
    const description = documetn.querySelector("Inkomst")
}

else if(addOption=="-"){
    
    const description = documetn.querySelector("Kostnad")
}

const sortedList = list.filter( e=> e>44 )
console.log(sortedList)*/

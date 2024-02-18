var arr = [
    {name: "Animal of town", image:"https://images.unsplash.com/photo-1625316708582-7c38734be31d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8fDA%3D"},
     {name: "Petals of roses", image:"https://images.unsplash.com/photo-1518709779341-56cf4535e94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXN8ZW58MHx8MHx8fDA%3D"},
      {name: "Fruits of planet", image:"https://media.istockphoto.com/id/1154805099/photo/zero-waste-and-eco-friendly-shopping-with-vegetables-and-fruits-in-textile-and-paper-bags-top.webp?b=1&s=170667a&w=0&k=20&c=JMK98QcptIqLFsnBZwVAGHC6dZaPrjQaqKDfuVJ-joA="},
       {name: "web desing", image:"https://images.unsplash.com/file-1672938924852-f41ba5d8ad43image?dpr=2&w=416&auto=format&fit=crop&q=60"},
       {name: "orange peeled", image:"https://plus.unsplash.com/premium_photo-1693266286749-420cfcea5f96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww"},
        {name: "Spitual", image:"https://images.unsplash.com/photo-1603480458382-cfa7f03b2e9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfF84ekZIdWhSaHlvfHxlbnwwfHx8fHw%3D"},
        {name: "3d Renders" , image: "https://images.unsplash.com/photo-1697541283989-bbefb5982de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"},
        {name: "Fastival", image: "https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.jpg?s=1024x1024&w=is&k=20&c=ecLMXSVrZNP5RJMOcNUorBzWM9Jn5uGAsCw7WLL2riA="},
        {name: "Travel", image:"https://images.unsplash.com/photo-1705667831122-59f1076bb866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
        {name: "Travel", image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
        {name: "Food and Drink", image: "https://plus.unsplash.com/premium_photo-1680117665452-bedcc8c33603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8fHww"},
        {name: "Film", image:"https://images.unsplash.com/photo-1708209667681-020237826a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D"}
       
]
const  showTheCards = ()=>{
    var clutter ="";
     arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image"/>
        <div class="caption">Lorem ipsum</div>
    </div>`;
     })

     document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
   

    document
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    document
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    document
    .addEventListener("input", function(e){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(e.target.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();

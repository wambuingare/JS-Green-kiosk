
var body=document.getElementById("background")
body.style.background="silver"

var heading=document.getElementById("title")
heading.style.color="green"

var fruits=document.getElementById("fruit")
fruits.style.textTransform="uppercase"

var vegetables=document.getElementById("vegetable")
vegetables.style.textTransform="uppercase"

var addfruits=document.createElement("li")
var List=document.createTextNode("Pineapples")
addfruits.appendChild(List)
var add=document.getElementById("fruList")
add.append(addfruits)

var addvegetables=document.createElement("li")
var Items=document.createTextNode("Cabbages")
addvegetables.appendChild(Items)
var add=document.getElementById("vegList")
add.append(addvegetables)








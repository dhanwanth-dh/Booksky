var pop=document.querySelector(".popup-overlay")
var popbox=document.querySelector(".popup-box")
var addpopbtn=document.getElementById("add-popup")
addpopbtn.addEventListener("click",function(){
    pop.style.display="block"
    popbox.style.display="block"

})

var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    popbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescript=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
            <h5>${bookdescript.value}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, iusto quia? Culpa voluptate nisi voluptas ullam veniam doloribus, nobis possimus rem, iusto quam enim reprehenderit, distinctio tenetur laborum blanditiis? Impedit.</p>
            <button onclick="deletebook(event)">DELETE</button>`
    container.append(div)
    pop.style.display="none"
    popbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
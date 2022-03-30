


let formDOM=document.querySelector("#userForm")
let inputDOM=document.querySelector("#task")
let ulDOM=document.querySelector("#list")
let listDOM=document.getElementsByTagName("li")

for(let i=0; i<listDOM.length ;i++){
    let closeButton=document.createElement("span")
    closeButton.textContent="\u00d7"
    listDOM[i].append(closeButton)
    closeButton.classList.add("close")
    closeButton.onclick=removeClick
    listDOM[i].onclick=checkClick

}

function removeClick(){
    this.parentElement.remove()
}
function checkClick(){
    this.classList.toggle("checked")
}


formDOM.addEventListener("submit",addElement)

function addElement(event){
    event.preventDefault();
    if(inputDOM.value==""){
        $(".error").toast("show")
    }else {
        let liDOM=document.createElement("li")
        liDOM.innerHTML=inputDOM.value
        ulDOM.appendChild(liDOM)
        $(".success").toast("show")
        let closeButton=document.createElement("span")
        closeButton.textContent="\u00d7"
        closeButton.classList.add("close")
        liDOM.append(closeButton)
        closeButton.onclick=removeClick
        liDOM.onclick=checkClick
        


       
        

    }
}


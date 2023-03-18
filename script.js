let btn = document.querySelector(".mark");
let notifications = document.querySelector("#notifications");
let state = document.querySelectorAll(".state")
let select = document.querySelectorAll(".card");
for(let i = 0; i<3; i++){
        let action = state[i];
        let read = select[i];
        btn.addEventListener("click", ()=>{
            action.classList.remove("active");
            read.classList.remove("unread")
            notifications.innerHTML = "0" ;
        })
}
let marked = document.getElementById("notifications")
let numb = Number.parseInt(marked.textContent);
for(let i = 0; i<3; i++){
    let read = select[i];
    let action = state[i];
    read.addEventListener("click", ()=>{
        read.classList.remove("unread")
        action.classList.remove("active");
        if(numb>=1){
        numb--;
        marked.textContent = numb;
        }  
})
}

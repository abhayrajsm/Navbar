const body = document.querySelector("body"),
    nav = document.querySelector("nav"), 
    modeToggle = document.querySelector(".dark-light"), 
    searchToggle = document.querySelector(".searchToggel"),
    sidebarClose = document.querySelector(".sidebarClose"),
    siderbarOpen = document.querySelector(".siderbarOpen");


    let getMode=localStorage.getItem("mode");
    
        if (getMode&&getMode==="dark-mode") {
            body.classList.add("dark"); 
        }

// js code to dark and light mode 
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");


    // js code to select the dark mode or light mode even the user refresh the file or reopen it 
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode","light-mode");
    }else{
        localStorage.setItem("mode","dark-mode");
    }

});


// js code to search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
    body.classList.toggle("cancel");

});


// js code for toggle sidebar
siderbarOpen.addEventListener("click",()=>{
    nav.classList.add("active");
});
body.addEventListener("click",e=>{
  let clickedElm=e.target;

  if (!clickedElm.classList.contains("siderbarOpen")&&!clickedElm.classList.contains("menu")){
    nav.classList.remove("active")
  }
})
function ativar () {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let buscar = document.querySelector(".bx-search-alt");

    btn.onclick = function(){
        return sidebar.classList.toggle("active")
    }
    buscar.onclick = function(){
        return sidebar.classList.toggle("active")
    }
}
import carrousel_daora from "./carrousel_daora.js";
// import menuHamburguer from "./menuHamburguer.js";

const Methods ={
    init(){

        carrousel_daora.init();
        // menuHamburguer.init();
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    Methods.init();


}) // executar os códigos no html quando forem necessários, apenas carrega os códigos de JS quando tudo estiver carregado
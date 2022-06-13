const Methods ={

    init (){

        Methods.menuLateral()
   
  

    },



    menuHamburguer: document.querySelector('.menuHamburguer'),

    menuLateral(){



       btnMobile.addEventListener('click',toggleMenu);


    },


    toggleMenu() 
    {

    
        const nav = document.getElementById('menu-lateral');
        nav.classList.toggle('active');
        // document.getElementById("menu-lateral").style.display = flex;
        

        // document.getElementById("MenuSupId").style.marginLeft = "40%";
        // document.getElementById("submenuId").style.marginLeft = "40%";

    },
    
    //  fechaMenu()
    // {
    //   document.getElementById("menu-lateral").style.width = "0%";
      
    //   document.getElementById("MenuSupId").style.marginLeft= "0%";
    //   document.getElementById("submenuId").style.marginLeft= "0%";
      
    // }



}

export default { // enviado por padrão uma propriedades Init
    init: Methods.init

}
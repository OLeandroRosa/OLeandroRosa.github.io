const Methods ={

    init (){


        Methods.createElements();
        Methods.automaticImg();


},


carrousel: window.innerWidth <= 950 ? document.querySelector('.carrousel_daora_responsive') : document.querySelector('.carrousel_daora'),

    setImageShow(img){
        Methods.carrousel.querySelectorAll('img').forEach((img,index)=>{
            img.classList.remove('active');
        });

        Methods.carrousel.querySelector(`img#slide_${img}`).classList.add('active');

    },

    createElements(){
        Methods.carrousel.querySelectorAll('img').forEach((img,index)=>{
            img.setAttribute('id',`slide_${index}`);
        });

        Methods.setImageShow(0);

        Methods.carrousel.innerHTML+=`
            <button class="next btn_carrousel"> <i class="ph-caret-right"></i> </button>
            <button class="prev btn_carrousel"> <i class="ph-caret-left"></i> </button>`;

            Methods.carrousel.querySelector('.next').addEventListener('click',()=>{Methods.nextImg()});

            Methods.carrousel.querySelector('.prev').addEventListener('click',()=>{Methods.prevImg()});
    },

    nextImg(){ 
        const atualId = parseInt(Methods.carrousel.querySelector('img.active').getAttribute('id').split('_')[1]);

        const lastId = Methods.carrousel.querySelectorAll('img').length-1;

        if (atualId === lastId){
            Methods.setImageShow(0);
        }
        else{
            Methods.setImageShow(atualId+1);
        }

        Methods.automaticImg();


    },

    prevImg(){

        const atualId = parseInt(Methods.carrousel.querySelector('img.active').getAttribute('id').split('_')[1]);

        const lastId = Methods.carrousel.querySelectorAll('img').length-1;

        if (atualId === 0){
            Methods.setImageShow(lastId);
        }
        else{
            Methods.setImageShow(atualId-1);
        }

        Methods.automaticImg();
    },

interval: null,

    automaticImg(){
        
        if (Methods.interval !== null ){
            clearInterval(Methods.interval);
            Methods.interval = null;
        }

        Methods.interval = setInterval(()=> {Methods.nextImg()},5000)
    }



};

export default { // enviado por padrão uma propriedades Init
    init: Methods.init

}
'use strict'

const switcher = document.querySelector('.botao');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro');
     document.body.classList.toggle('tema-claro');

     let nomeDaClasse= document.body.className;
     if (nomeDaClasse.includes("tema-claro")){
        this.texrcontent = "escuro";
     }else{
      this.texrcontent = "claro";
     }

});
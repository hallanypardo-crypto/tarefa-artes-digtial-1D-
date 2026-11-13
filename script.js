const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
      let curtiu = false;
      botaoCurtir.addEventListener ("click", curtir);
function curtir (){
     const contador = botaoCurtir.querySelector("span");
     if(curtiu === false){
        contador.textoContent++;
        curtiu = true;
      }
        else{
            contador.textContent--;
            curtiu = false;
     }
}
});



onst btnTema = document.querySelector (".btn-tema");
btnTema.addEventLstener ("click", mudarTema);
function mudarTema(){
   document.body.classList.toggle("tema-escuro");
   
}
const idtheme1 = document.getElementById("theme1");
const idtheme2 = document.getElementById("theme2");
const idtheme3 = document.getElementById("theme3");
const divdestheme = document.querySelector(".Letheme")
const divtheme1  = document.querySelector(".Theme1")
const divtheme2  = document.querySelector(".Theme2")
const divtheme3 = document.querySelector(".Theme3")
const bady = document.querySelector(".body1");
const input = document.getElementById("input");
const divdesbuttons = document.querySelector(".Divnumber")
const lesbuttons = document.querySelectorAll(".btn1")
const span = document.querySelector(".span")
const span1 = document.querySelector(".span1")
const span2 = document.querySelector(".span2")
const span3 = document.querySelector(".span3")
const text = document.querySelector(".texte")
const buttonsdelete = document.querySelector(".delete")
const egalebuttons = document.querySelector(".btnegale")
const resetbuttons = document.querySelector(".Reset")
const laclassinput = document.querySelector(".inputText")
console.log(divtheme3);


// const IDtheme2 = document.getElementById("theme2");
// const idtheme1 = document.getElementById("theme1");
// const inputext = document.querySelector(".inputText");
// const classdutextcaculetor = document.querySelector(".texte");
// const classspan = document.querySelector(".span1");
// const classspan2 = document.querySelector(".span2");
// const classspan3 = document.querySelector(".span3");
// const span = document.querySelector(".span");
// const divnumber = document.querySelector(".Divnumber");
// const lesboutons = document.querySelectorAll(".btn1");
// const input = document.getElementById("input");
// const divdesletheme = document.querySelector(".Letheme");
// const idtheme3 = document.getElementById("theme3");
// const btndelete = document.querySelector(".delete");
// const btnreset = document.querySelector(".Reset");
// const btnegal = document.querySelector(".btnegale");
// const letext = document.querySelector(".texte")
//  const classtheme2 = document.querySelector(".Theme2")




idtheme1.addEventListener('click',function (event) {
   if(event){



    // ================= buttons et input theme2 ================================
    input.classList.remove("colorinput2")
    divdesbuttons.classList.remove("colorpourladivdesbuttons")  
    for (let i = 0; i < lesbuttons.length; i++) {
      lesbuttons[i].classList.remove("colordesbuttons")
     }  
     span.classList.remove("colortext")
     span1.classList.remove("colortext")
     span2.classList.remove("colortext")
     span3.classList.remove("colortext")
     text.classList.remove("colortext")
     resetbuttons.classList.remove("deletecolor")
     buttonsdelete.classList.remove("deletecolor")
     egalebuttons.classList.remove("egalebuttons")
   // ================= buttons et input theme2 ================================


  //  =================================pour le theme3 ===============================
   for (let i = 0; i < lesbuttons.length; i++) {
    lesbuttons[i].classList.remove("colortheme3")
   } 
   for (let i = 0; i < lesbuttons.length; i++) {
    lesbuttons[i].classList.remove("buttonsbacgroudtheme3")
   } 
   span.classList.remove("colortheme3")
   span1.classList.remove("colortheme3")
   span2.classList.remove("colortheme3")
   span3.classList.remove("colortheme3")
   text.classList.remove("colortheme3")
   input.classList.remove("bacgroudtheme3")
   resetbuttons.classList.remove("resestheme3")
   buttonsdelete.classList.remove("resestheme3")
   divdesbuttons.classList.remove("bacgroudtheme3")
   egalebuttons.classList.remove("egalecolortheme3")
  //  =================================pour le theme3 ===============================




    // ================== pour les boby ===============================
    bady.classList.remove("bodynext3")
    bady.classList.add("bodynext")
    bady.classList.remove("bodynext2")
    bady.classList.add("bodynext")
    // ================== pour les boby ===============================


    // ================== pour les theme ===============================
    divtheme1.classList.remove("divtheme2") 
    divdestheme.classList.remove("divtheme2")
    divtheme3.classList.remove("divtheme2")
    divtheme3.classList.remove("divtheme3")
    divtheme3.classList.remove("bacgroudtheme3")
    divdestheme.classList.remove("bacgroudtheme3")
    divtheme3.classList.remove("divbacgroud3")
    divtheme2.classList.remove("bacgroudtheme3")
    divtheme1.classList.remove("bacgroudtheme3")

    divtheme2.classList.add("divtheme1") 
    divdestheme.classList.add("divtheme1")
    divtheme3.classList.add("divtheme1")
      // ================== pour les theme ========================= 
   }

      laclassinput.classList.add("inputText1")
      laclassinput.classList.remove("inputText3")
      laclassinput.classList.remove("inputText2")

})








idtheme2.addEventListener('click',function (event) {
    if (event) {



         // ================= buttons et input theme2 ================================
        input.classList.add("colorinput2")
        divdesbuttons.classList.add("colorpourladivdesbuttons")    
        for (let i = 0; i < lesbuttons.length; i++) {
         lesbuttons[i].classList.add("colordesbuttons")
        }
        span.classList.add("colortext")
        span1.classList.add("colortext")
        span2.classList.add("colortext")
        span3.classList.add("colortext")
        text.classList.add("colortext")
        resetbuttons.classList.add("deletecolor")
        buttonsdelete.classList.add("deletecolor")
        egalebuttons.classList.add("egalebuttons")
      // ================= buttons et input theme2 ================================




      // ======================== pour les body ============================
        bady.classList.remove("bodynext3")
        bady.classList.add("bodynext2")
        bady.classList.add("bodynext")
        // ================== pour les boby ===============================



          // ================== pour les theme =========================
            divtheme1.classList.add("divtheme2") 
            divdestheme.classList.add("divtheme2")
            divtheme3.classList.add("divtheme3")
        
   
            divtheme2.classList.remove("divtheme1") 
            divdestheme.classList.remove("divtheme1")
            divtheme3.classList.remove("divtheme1")
            divdestheme.classList.remove("bacgroudtheme3")
            divtheme3.classList.remove("divbacgroud3")
            divtheme2.classList.remove("bacgroudtheme3")
            divtheme1.classList.remove("bacgroudtheme3")
         // ================== pour les theme =========================
    }

    laclassinput.classList.remove("inputText3")
    laclassinput.classList.add("inputText2")
    laclassinput.classList.remove("inputText1")
});








idtheme3.addEventListener('click',function (event) {
    if (event) {

         // ================= buttons et input theme2 ================================
             input.classList.remove("colorinput2")
             divdesbuttons.classList.remove("colorpourladivdesbuttons") 
             for (let i = 0; i < lesbuttons.length; i++) {
               lesbuttons[i].classList.remove("colordesbuttons")
              }  
              span.classList.remove("colortext") 
              span1.classList.remove("colortext")
              span2.classList.remove("colortext")
              span3.classList.remove("colortext")
              text.classList.remove("colortext")
              resetbuttons.classList.remove("deletecolor")
              buttonsdelete.classList.remove("deletecolor")
              egalebuttons.classList.remove("egalebuttons")
        // ================= buttons et input theme2 ================================

  //  =================================pour le theme3 ===============================
        for (let i = 0; i < lesbuttons.length; i++) {
          lesbuttons[i].classList.add("colortheme3")
         } 
         for (let i = 0; i < lesbuttons.length; i++) {
          lesbuttons[i].classList.add("buttonsbacgroudtheme3")
         } 

         span.classList.add("colortheme3")
         span1.classList.add("colortheme3")
         span2.classList.add("colortheme3")
         span3.classList.add("colortheme3")
         text.classList.add("colortheme3")

         input.classList.add("bacgroudtheme3")
         divdesbuttons.classList.add("bacgroudtheme3")
         resetbuttons.classList.add("resestheme3")
         buttonsdelete.classList.add("resestheme3")
         egalebuttons.classList.add("egalecolortheme3")
  //  =================================pour le theme3 ===============================




      // ================== pour les boby ===============================
        bady.classList.remove("bodynext2")
        bady.classList.add("bodynext3")
        bady.classList.add("bodynext2")
        // ================== pour les boby ===============================


          // ================== pour les theme =========================
             divdestheme.classList.add("bacgroudtheme3")
             divtheme3.classList.add("divbacgroud3")
             divtheme2.classList.add("bacgroudtheme3")
             divtheme1.classList.add("bacgroudtheme3")
          // ================== pour les theme =========================
    }
    laclassinput.classList.add("inputText3")
    laclassinput.classList.remove("inputText2")
    laclassinput.classList.remove("inputText1")
});
const linput = document.getElementById("input")
console.log(linput);
let buttons = document.querySelectorAll("button")
let string = " ";

buttons.forEach(element =>{
  element.addEventListener('click', function (event) {
    let bouttonsText = event;
    console.log(bouttonsText);
    if (event.target.innerText === "=") {
      linput.value = string;
    }
    else if (event.target.innerText === 'DEL') {
      string = string.substring(0,string.length -1)
      linput.value = string;
    }
    else if (event.target.innerText === "RESET") {
      string = ''
      linput.value = string;
    }
    else if (event.target.innerText === '.') {
      if (!linput.innerText.includes('.'))data += event.target.innerText
    }
    else{
      string += event.target.innerText
      linput.value = string;
    }
  })
})
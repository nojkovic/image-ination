var url = window.location.pathname;
var url2 = window.location;

var navigacija=document.getElementById("navigacija");
let linkovi=["Home","Photographers","Gallery","About us","Contact","Author"];
let putanje=["index.html","photograph.html","gallerys.html","about.html","contact.html","author.html"];
let ispisMeni="<ul>";
for(let i=0;i<linkovi.length;i++){
    ispisMeni+="<li><a href='"+ putanje[i]+"'>"+ linkovi[i]+"<a/></li>";
}
ispisMeni+="</ul>";
navigacija.innerHTML=ispisMeni;

if(url=="/" || url=="/index.html" || url == "file:///C:/Users/Sara/Desktop/sajtSara(2)/site-Sara/index.html"){
    let categorije=document.getElementById("categorije");
    let imenaCategorije=["Categories","Couples","Portrets","Birthday","Weddings","Artist"];
    let ispisCategorije="<ul>";
    for(let i=0;i<imenaCategorije.length;i++){
        ispisCategorije+="<li>"+imenaCategorije[i]+"</li>";
    }
    ispisCategorije+="</ul>";
    categorije.innerHTML=ispisCategorije;
}




if(url=="/gallerys.html" || url2 == "file:///C:/Users/Sara/Desktop/sajtSara(2)/site-Sara/gallerys.html" || url2 == "file:///C:/Users/Sara/Desktop/sajtSara(2)/site-Sara/gallerys.html#"){

    window.addEventListener('load',slider);
    
    var objLevo=document.getElementById("levoGalerija");
    var putanjeSlike=new Array("m3.jpg","z4.jpg","z1.jpg","z6.jpg","z7.jpg","z8.jpg","z9.jpg","z10.jpg","z5.jpg");
  
    var Slike=`<div class="red">`;
    for(let i=0;i<putanjeSlike.length;i++){
        Slike += `<div class="slik"><img src="image/Model-${putanjeSlike[i]}"/></div>`;
        if((i+1)%3==0)
            Slike +=`</div><div class="red">`;
    }
    Slike +="</div>";

    objLevo.innerHTML = Slike;


    function slider(){
        let trenutni = document.querySelector("#desnoSlider .active");
        let sledeci = (trenutni.nextElementSibling)?trenutni.nextElementSibling:trenutni.parentElement.firstElementChild;
        trenutni.classList.remove("active");
        sledeci.classList.add("active");
        setTimeout(slider,3000);
    }
   
}
if(url=="/contact.html" || url2=="file:///C:/Users/Sara/Desktop/sajtSara(2)/site-Sara/contact.html" || url2=="file:///C:/Users/Sara/Desktop/sajtSara(2)/site-Sara/contact.html#"){

window.addEventListener('load', () => {
    let dugme = document.getElementById("posalji");
    dugme.addEventListener('click', obradaForme);
})


function obradaForme(){
    let objIme = document.getElementById("ime");
    let objPrezime = document.getElementById("prezime");
    let objMail = document.getElementById("mail");
    let objRadio = document.getElementsByName("rb");
    let objChc = document.getElementsByName("ckbx");
    let objSelect = document.getElementById("sel");

    //regularni izrazi za sve elemente forme
    let regIzrazIme = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,19}$/;
    let regIzrazPrezime=/^([A-ZŠĐŽČĆ][a-zšđčćž]{3,19}){1,3}$/
    let regEmail= /^[a-z]{3,30}([0-9]*)@(gmail|hotmail)\.com$/; 
    
    let greskaIme = 0;
    let greskaPrez = 0;
    let greskaEmail = 0;
    let greskaRad = 0;
    let greskaCkbx = 0;
    let greskaSel = 0;


   // provera imena
    if(!regIzrazIme.test(objIme.value)){
        objIme.nextElementSibling.classList.add("block");
        objIme.nextElementSibling.innerHTML = "The name must start with a capital letter, contain a minimum of 3 characters, for example:<br/>Sara";
        objIme.classList.add("greskaCrveno");
        greskaIme=1;
    }
    else{
        objIme.nextElementSibling.classList.remove("block");
        objIme.nextElementSibling.innerHTML = "";
        objIme.classList.remove("greskaCrveno");
        greskaIme=0;
    }

    //provera prezimena
    if(!regIzrazPrezime.test(objPrezime.value)){
        objPrezime.nextElementSibling.classList.add("block");
        objPrezime.nextElementSibling.innerHTML = "The lastname must start with a capital letter, contain a minimum of 4 characters, for example:<br/>Nojkovic";
        objPrezime.classList.add("greskaCrveno");
        greskaPrez=1;
    }
    else{
        objPrezime.nextElementSibling.classList.remove("block");
        objPrezime.nextElementSibling.innerHTML = "";
        objPrezime.classList.remove("greskaCrveno");
        greskaPrez=0;
    }

    if(!regEmail.test(objMail.value)){
        objMail.nextElementSibling.classList.add("block");
        objMail.nextElementSibling.innerHTML = "The email should contain a minimum of 3 characters, a gmail or hotmail address, example:<br/>nojkovicsara14@gmail.com";
        objMail.classList.add("greskaCrveno");
        greskaEmail=1;
    }
    else{
        objMail.nextElementSibling.classList.remove("block");
        objMail.nextElementSibling.innerHTML = "";
        objMail.classList.remove("greskaCrveno");
        greskaEmail=0;
    }



    //radio  butoon 
    let radioVrednosti = "";
    for(let i=0;i<objRadio.length;i++){
        if(objRadio[i].checked){
            radioVrednosti = objRadio[i].value;
            break;
        }
    }

    //provera radio buttona
    if(radioVrednosti == ""){
        objRadio[0].parentElement.nextElementSibling.classList.add("block");
        objRadio[0].parentElement.nextElementSibling.innerHTML = "Select a gender"
        greskaRad = 1;
    }
    else{
        objRadio[0].parentElement.nextElementSibling.classList.remove("block");
        objRadio[0].parentElement.nextElementSibling.innerHTML = ""
        greskaRad= 0;
    }


    //checkbox uzimanje vrednosti
    let chcValue = "";
    for(let i=0;i<objChc.length;i++){
        if(objChc[i].checked){
            chcValue+=objChc[i].value;
        }
    }
    //provera checkboxova
    if(chcValue==""){
        objChc[0].parentElement.parentElement.nextElementSibling.classList.add("block");
        objChc[0].parentElement.parentElement.nextElementSibling.innerHTML = "Choose at least one option"
        greskaCkbx = 1;
    }
    else{
        objChc[0].parentElement.parentElement.nextElementSibling.classList.remove("block");
        objChc[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
        greskaCkbx = 0;
    }

    
    let selectListaValue = objSelect.options[objSelect.selectedIndex].value;
        if(selectListaValue==0){
            objSelect.classList.add("greskaCrveno");
            objSelect.nextElementSibling.innerHTML="Select option";
            greskaSel = 1;
        }
        else{
            objSelect.classList.remove("greskaCrveno");
            objSelect.nextElementSibling.innerHTML="";
            greskaSel = 0;
        }










        var ispis = document.getElementById("uspelo");    
        if(greskaIme==0 && greskaPrez==0 && greskaRad==0 && greskaSel==0 && greskaEmail==0 && greskaCkbx==0 ){
                document.getElementById("form").reset();
                ispis.innerHTML = "You have successfully submitted your request, one of the employees will contact you soon.";
        }
        else{
            ispis.innerHTML="";
        }
    
        let dugmeR = document.getElementById("res");
        dugmeR.addEventListener("click",()=>{
            
        objIme.nextElementSibling.classList.remove("block");
        objIme.nextElementSibling.innerHTML = "";
        objIme.classList.remove("greskaCrveno");
        objPrezime.nextElementSibling.classList.remove("block");
        objPrezime.nextElementSibling.innerHTML = "";
        objPrezime.classList.remove("greskaCrveno");
        objMail.nextElementSibling.classList.remove("block");
        objMail.nextElementSibling.innerHTML = "";
        objMail.classList.remove("greskaCrveno");
        objRadio[0].parentElement.nextElementSibling.classList.remove("block");
        objRadio[0].parentElement.nextElementSibling.innerHTML = ""
        objChc[0].parentElement.parentElement.nextElementSibling.classList.remove("block");
        objChc[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
        objSelect.classList.remove("greskaCrveno");
        objSelect.nextElementSibling.innerHTML="";
            
        });  




    }


}





let objFooterLista2 = document.getElementById("lista-footer2");
let lista2Linkovi = new Array("index.html","photograph.html","gallerys.html","about.html","contact.html","author.html","document.pdf");
let lista2Sadrzaj = new Array("HOME","PHOTOGRAPHERS","GALERRY","ABOUT US","CONTACT","AUTOR","DOCUMENTACION");
let lista2 = "";
for(let i =0; i< lista2Linkovi.length;i++){
    lista2 += `<a href="${lista2Linkovi[i]}"><li>${lista2Sadrzaj[i]}</li></a>`;
}
objFooterLista2.innerHTML = lista2;




let objListaFooter1 = document.getElementById("lista-footer");
let listaFooter1Ikonice = new Array("instagram","facebook-box","linkedin-box","twitter","apple");
let listaFooter1 = "";
for(let i =0;i<listaFooter1Ikonice.length; i++){
    listaFooter1 += `<a href="#"><li><i class="zmdi zmdi-${listaFooter1Ikonice[i]}"></i></li></a>`
}
objListaFooter1.innerHTML = listaFooter1;


let dugme = document.getElementById("kocka");
dugme.addEventListener('click', ()=>{
    let lista = document.querySelector("#navigacija ul");
  
    if(lista.hasAttribute("class")){
        lista.classList.remove("block");
        lista.removeAttribute("class");
    }
    else{
        lista.classList.add("block");
    }
});


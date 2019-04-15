var button = document.getElementById("enter");
var inputText = document.getElementById('userinput');
var ol = document.querySelector("ol");
/* Append Item at Order Item List */

function inputLength(){

    return inputText.value.length;
}

function createListElement(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Eliminar");
    btn.appendChild(t);
    btn.id="forListen";
    btn.addEventListener("click",function(){
          btn.parentElement.remove();

    });


    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputText.value));
    li.appendChild(btn);
    ol.appendChild(li);
    inputText.value="";
}

function addListAfterClick(){

    if(inputLength() > 0){
      createListElement();
    }
}

function addListAfterEnter(event){

   if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }

}

function toggleAfterClick(){

    ol.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

inputText.addEventListener("keypress", addListAfterEnter);

ol.addEventListener("click", toggleAfterClick);

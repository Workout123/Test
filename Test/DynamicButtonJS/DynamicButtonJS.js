function myFunction()
{
   var button_value=document.getElementById("buttonvalue").value;

   var newButtonType = document.createElement("BUTTON");
   //text creates with createElement
   var newButton = document.createTextNode(button_value);

   newButtonType.onclick=function(){
     buttonlist.innerHTML=button_value;
   };

   //inserts node after previous node
   newButtonType.appendChild(newButton);
   //append to end of document body
   document.body.appendChild(newButtonType);


}

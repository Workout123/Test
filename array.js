myarray=["apple","bat","cat"];
myarray[myarray.length]="dog";
for(var i=0;i<(myarray.length-1);i+=1)
{
 document.getElementById("demo").innerHTML = myarray[i];
}

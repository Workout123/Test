var scope="global scope";
function chk()
{
	var scope="local scope";
	function f()
	{
		return scope;
	}
	document.write("<br>func f returns: "+f());
	return f;
}
document.write("<br>chk func called iwth ()(): "+chk()()+"<br>");

var uniq=(function() {
			var counter=0;
			return function() {return counter++;} ;
		    }());

document.write("<br> uniq is :"+uniq);//not working

//another closure
function counter(){
		var n=0;
		return{
			count: function() {return n++;} ,
			reset: function() {n=0;}
		      };
	      }

var c=counter();
var d=counter();
document.write("<br> c is : "+c+"<br> d is : "+d+"<br> counter() is "+counter());
document.write("<br> c.count : "+c.count());
document.write("<br> d.count : "+d.count());
document.write("<br> c.count again : "+c.count());
document.write("<br> d.count again : "+d.count());

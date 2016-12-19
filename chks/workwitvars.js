var x;
x=10;
document.write("<br> number: "+x);
x="hello world";
document.write("<br> double quote: "+x.length);
x='hello world';
document.write("<br> single quote: "+x.length);

//objects
var  book={
	topic: 'javascript guide',
	binded: true
};
document.write("<br> TOpic: "+book.topic);
document.write("<br> Binded: "+book['binded']);

// add new prop
book.author='subha';
//add another obj in this
book.contents={};//empty obj
book.contents.length=1500;
//document.write("<br> printing obj in obj :"+book[contents['length']]); wont work
document.write("<br> printing obj in obj :"+book.contents.length);

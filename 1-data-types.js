//-------------------String-----------------------------------------------------------------
var name="Akarsh"
var selection='abc';
var dynamicString=`the result is ${12+13} ` //String-interpolation
console.log(dynamicString)
//------------------------------------------------------

var menu =`
1.biryani
2.rice
`
//---------------------Number---------------------------------

var count=12;
var count_1=12.22;

//--------------------Boolean----------------------------------
var f=true;
//--------------------Undefined----------------------

var found;

//---------------------Reference-----------------------
var config= new Object();
config.url="http://";
config.httpMethod="GET";
config.doSomething=function(){
    console.log('on success will run');
}

delete config.httpMethod;

//-------------------OR---------------------------------

var newConfig={
    url:"http://",
    httpMethod:"GET",
    doSomething:function(){
        console.log('log something..');
    }

}

//-------------------Array---------------------------------

var arr=new Array();
arr.push("item-01");
arr.push("item-02");
arr[2]="item=03";

//------------------OR---------------------------------
var arr1=["item-01","item-02","item-03"];

//------------------Regular expr-------------------------------------
var ssn=new RegExp("\\d{3}-\\d{2}-\\d{4}");
//-------------------OR------------------------------------
var newSSN= /\d{3}-\d{2}-\d{4}/;

//------------------Function---------------------------------------
var add=new Function("a","b","var r=a+b;return r;");

//or

function add(n1,n2){
    var re=n1+n2;
    return re;
}

//------------------------Accessing obj elements-----------------------------------
// ==> '.'
// ==> '[]'
var person={
    name:'akarsh',
    'home-address':'Noida'
};
person.name="Akarsh";
console.log(name);

//or

person['name']="akrsh24";
console.log(person['name']);

person['home-address']="noida"
console.log(person['home-address']);

var propName="name";
console.log(person[propName]);

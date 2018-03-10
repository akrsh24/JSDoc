var a=3;
var b=5;

function add(b){
    function f1(){
         a=4;
        var c=a+b;
    console.log(c);
    
    }
    f1();
}
add(b);
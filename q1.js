// var myArray = [];

// //---------------------------------


//     var newF = function (i) {
//         let j = i;
//         function res() {
//             console.log(`${j}`);
//         };

//         return res;
//     }
//     for (var i = 0; i < 3; i++) {
//     let result=newF(i);
//     myArray.push(result);
// }

// myArray[0]();
// myArray[1]();
// myArray[2]();




// var myArray=[];

// for(var i=0;i<3;i++){
//     var newF = function(){
//         console.log(i);
//     }
//     myArray.push(newF);
// }
// myArray[0]();
// myArray[1]();
// myArray[2]();


let tnrService = {
    doTeach: function (sub) {
        console.log("Tnr-" + this.name + " teaching sub.");
    }
}

var tnr = {
    name: 'Nag'
};

let teachBtn = document.getElementById("teachBtn");
let res=function (){
    tnrService.doTeach.call(tnr);
}
teachBtn.addEventListener('click', res );

//teachBtn.addEventListener('click',tnr.doTeach.bind(tnr));
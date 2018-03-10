//-------------------------this keyword-------------------------------------------------------------

// let person={
//     pname:'akarsh',
//     sayName: function(){
//             let pname='akrsh24'
//             console.log('im '+pname)
//             console.log('im '+person.pname);
//            // console.log('im '+this.pname);
//     }
// }
// //person.sayName();
// let oldPerson=person;
//  person={pname:'kj'};//object element value is changed
// oldPerson.sayName();

//-------------------------Function-Binding-----------------------------------------------------------------

//-------------------------Static-Binding--------------------------------------------------------------

// function sayNameForAll(){
//     console.log("im "+this.pname);
// }

// person={pname:'akarsh' , sayName:sayNameForAll};
// employee={pname:'akrsh24', sayName:sayNameForAll};

// sayNameForAll();  //global-object invocation
// person.sayName();  //person object invocation
// employee.sayName(); // employee object invocation

//--------------------------------------------------------------------------------------------------

//-------------------------Dynamic-Binding-------------------------------------------------------------
// let greetlib = {
//     name:"third-party-lib",
//     sayName: function(message,from){
//         console.log(message+ " im " + this.pname +" - "+from);
//     }
// }

// person = { pname: 'akarsh' };
// employee = { pname: 'akrsh24' };

// //Way-1
// // letPersonName = greetlib.sayName.call(person,"hola","delhi");
// // letEmployeeName= greetlib.sayName.call(employee,"hey","noida");

// //Way-2
// // letPersonName = greetlib.sayName.apply(person,["hola","delhi"]);
// // letEmployeeName= greetlib.sayName.apply(employee,["hey","noida"]);

// //Way-3
// letPersonName = greetlib.sayName.bind(person,"hola","delhi");
// letEmployeeName= greetlib.sayName.bind(employee,"hey","noida");
// letPersonName();
// letEmployeeName();

//-----------------------------------------------------------------------------------------

// let tnr = {
//     name: 'akarsh',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         self = this;
//         let doLearn = function () {
//             console.log(this.name + "learning from " + self.name);
//         }

//         let emp = { name: 'sapient' };
//         doLearn.call(emp);
//     }
// }
// tnr.doTeach();
// let newTnr={name:'Ria'}
// tnr.doTeach.call(newTnr);

//-------------------------------------------------------------------------------------------

function sessionStart(){
       function Trainer(name){
           this.name=name;
           this.doTeach=function(){
               console.log(this.name +' tnr teaching.......');
               let self=this;
               let doLearn=function(){
                   console.log(this.name+" learning from "+self.name);
               }
               return doLearn;
           }
        }
        function Employee(name){
            this.name=name;
        }

        let tnr=new Trainer("akarsh");
        let e1=new Employee('a');
        let e2=new Employee('b');
        // tnr.doTeach.call(e1);
        // tnr.doTeach.call(e2);
        let learn=tnr.doTeach();
        //  learn.call(e1);
        // learn.call(e2);
        tnr.doTeach.call(e1);
        tnr.doTeach.call(e2);
        learn.call(e1);
        
        
}
sessionStart();
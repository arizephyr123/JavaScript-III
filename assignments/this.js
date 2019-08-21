/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global object binding will reference entire browser or local file
* 2. Implicit Binding- 80% of uses cases, where invoked to the left of the "."
* 3. New Binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function globalExample (attr){
    console.log('** Global/Window Binding:')
    console.log(this);
    return attr;
}
globalExample();//everything is displayed within window in console!

//================================
// Principle 2
// code example for Implicit Binding
let implicitExample = {
    message: '** Implicit Binding:',
    funct: function(){
        console.log(this.message);
        console.log(this);
    }
}
implicitExample.funct();//this attached to implicitExample Object

//================================
// Principle 3
// code example for New Binding

function ExampleNew(three){
    this.message = `** New Binding Example: (above^)`;
    console.log(this);
}

 let myNewExample = new ExampleNew();

 console.log(`${myNewExample.message}`);


//=================================
// Principle 4
// code example for Explicit Binding

function explicitExample(){
    console.log(this.message);
    console.log (this);
}

let myExample = {
    type: "Object",
    message: "Explicit Binding:"
}

explicitExample.call(myExample);
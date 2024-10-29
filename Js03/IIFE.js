

// IMMEDIATELY INVOKED FUNCTION EXPRESSION

/*  a) These are the functions which are immediately invoked in a program wihtout the need of separate function call.
    b) They are generally implemented to avoid pollution from global scope.
    c) They create their own private scope.
    d) They can be annonymouse (with arrow) or named

    syntax :
            1) NAMED :  function fun_name(paremeters){
                        // statements
                    }(arguments);
            
            eg : function foo(num1, num2){
                            console.log(num1+num2)
                    }(20,34);

                    To end a scope of a IIFE we must end it with a ; semicolon

            2) ANNONYMOUS: ( (parameters) => {execition statements})(arguements);
            
            eg: ( (num1,num2) => { console.log(num1+num2) })(23,34);

            In order to avoid error , wrap the whole iife in a cured parenthesis.
*/



// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

( (num1 , num2) => {console.log(num1+num2)})(23,34);
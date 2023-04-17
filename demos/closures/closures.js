// closure's global scope
function outie() {
    
    // closure first and only outer scope
    function closure(){
        
        // closure's local scope
        // 3 scope chains
            // its own vars
            // vars and params of outer func
            // global vars 
    }
}

function sayMyName(firstName, middleName, lastName) {
    var praiseList = ["aspirine", "gettherefast", "leavemealone", "seaways"];

    function combineName() {
        var min = 0;
        var max = praiseList.length - 1;

        function getRandomInt() {
            
            // 4 scoper chains
            return Math.floor(Math.random() * (max - min) + min);
        }

        return "Your " + praiseList[getRandomInt()] + " name is " + firstName + " " + middleName + " " + lastName;
    }

    return combineName();

}

console.log(sayMyName("Beyonce", "Giselle", "Knowles-Carter"));

function init(args) {
    var firstName = args.firstName;
    var lastName = args.lastName;

    function gerunding(action) {
        return firstName + " " + lastName + " " + "is" + " " + action;
    }
    return gerunding;
}

var data = { firstName: "George", lastName: "Rooney" };
var zombieOne = init(data);

// ... 20 hours later

console.log(zombieOne("walking"));

// closures don't store value. Values are static and store their scope chains

// state in js -> when changing the value of a var in the scope chaing before returning the closure
// the same value used within the closure will then update.

var zombieTwo = (function() {
    // private variables
    var firstName = "";
    var lastName = "";

    // private functins
    function init(data) {
        firstName = data.firstName;
        lastName = data.lastName;
    }

    function combineName() {
        return firstName + " " + lastName;
    }

    function gerunding(action) {
        return firstName + " " + lastName + " " + "is" + " " + action;
    }

    // public functions
    return {
        getName: function() {
            return combineName();
        },
        setName: function(data) {
            return init(data);
        },
        setAction: function(action) {
            return gerunding(action);
        }
    };

})();

var data1 = { firstName: "George", lastName: "Rooney" };

zombieTwo.setName(data1);
console.log(zombieTwo.getName());
console.log(zombieTwo.setAction("Walking"));

console.log('-------------------------');

var names = ['Locke', 'ABC', 'BCA'];

var logName = function(name) { 
    return function() { 
        console.log(name);
    }
};

var name;
for(var i = 0; i < names.length; i++) {
    name = names[i];
    setTimeout(function(){
        logName(name);
    }, 1000);
}

var module = (function() {
    var localVar = 1923;
    var localFunc = function() {
        return localVar;
    }
    var otherLocalFunc = function(num) {
        localVar = num;
    }

    return {
        getVar: localFunc,
        setVar: otherLocalFunc
    }

})();

function makeFunc(){
    var name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

// closure -> function and the lexical enviroment within wich that function was declared
// env -> local vars that were in-scope at the time the closure was created

function makeAdder(x) {
    return function(y){
        return x + y;
    }
}

var add5 = makeAdder(5);

console.log(add5(2)); // 7

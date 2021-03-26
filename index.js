// Your code here
// function razzle(lawyer="Billy", target="'em") {
//   console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle(); //=> Billy razzle-dazzles 'em!
// razzle("Deuce", "Klein");


function saturdayFun(satActivity="roller-skate") {
  return `This Saturday, I want to ${satActivity}!`;
}
saturdayFun(); //only works when console.log and not return
saturdayFun("laugh");


function mondayWork(monActivity="go to the office") {
  return `This Monday, I will ${monActivity}.`
}



function wrapAdjective(aParam="*") {
  return function(singleParam="special") {
    return `You are ${aParam}${singleParam}${aParam}!`
  }
}
wrapAdjective()();


//EXAMPLES BELOW
// Function Level Scope
function outer(greeting, msg="It's a fine day to learn") { // Floor 2
  const innerFunction =  function(name, lang="Python") { // Floor 3
    return `${greeting}, ${name}! ${msg} ${lang}`; // Floor 4
  }
  return innerFunction("student", "JavaScript"); // Floor 5
}
outer("Hello"); // Floor 1

// same as above - Function Level Scope (condensed)
function outer(greeting, msg="It's a fine day to learn") {
  return function(name, lang="Python") {
    return `${greeting}, ${name}! ${msg} ${lang};`
  }
}
outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript" 
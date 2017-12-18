var myApp = {
  mainMessage : "Welcome to the app",

    mainGreeting() {
      console.log('Hello amigos');
    }
}

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I'm the second file");

  },
  doSomething() {
    console.log ("called module 1 do something function");
  }
}

myApp.module3 = {
  doSomething() {
    console.log ("called module 1 do something function");
  }
}

(()=> {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup');

function myFunc() {
  var theHeading = document.querySelector ('h1');
  theHeading.textContent = myApp.mainMessage;
}
  myFunc();
});

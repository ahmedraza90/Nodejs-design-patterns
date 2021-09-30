//Observer pattern/ Event emitter pattern
//observer pattern(it is a design pattern in which one-to-many dependency relationship form one object
//known as the subject to many other object knowns as the observer(they can be functions) which watch the
//subject, wait for some signal or trigger from subject before they run kind of reminds you an event 
//listener	

function a(){
    this.observer=[]     //functional object of defining objects

}
a.prototype={
     subscriber  :   function(x){     this.observer.push(x)    },//registering event (e.g, respnonse.on)
     unsubscriber:   function(y){     this.observer=observer.filter( x=>{ 
        if(x!=y){ return x  }
     })    },
     calling:        function (){   this.observer.forEach(element => {
        element.call()        
     })   }    //fire an event

}


function obs1(){    console.log('1')    }  //listeners(subcriber)
function obs2(){    console.log('2')    }   //listneres(sbscribers)

// 1--------------creates an event (emitter instance/object)
const subject = new a() 
 
// 2---------------or add a callback-function that's going to be executed when the event is triggered
// (this function is called subscriber) sub is an event emitter object
subject.subscriber(obs1) 
subject.subscriber(obs2)

// 3----------------firing an event
subject.calling()


// The observer pattern is already built into the core and is available through the EventEmitter class. 
// The EventEmitter class allows us to register one or more functions as listeners(defined by me), 
// which will be invoked when a particular event type is fired. There can be more than one listener for 
// a given event name 



//eventemitter sourcec code Example
// class EventEmitter {
//     constructor() {
//       this.events = {};
//     }
//   }

//event
//The purpose of the events property is to store our events
// name as the key and the value as an array of subscribers 

// subscribe( eventName, fn ) {         // response.on here on is subscriber
//     if( !this.events[eventName] ) {
//        this.events[eventName] = [];
//     }
      
//     this.events[eventName].push(fn);
//   }
//  Unsubscriber(eventName, fn){
//  remove function from array
//  }

//eventname
//  The subscribe function takes the event name
//  then check if this eventname has array of listener(fn) or not
//  if not first assign an empty array and push that function(fn) into it
//  if yes then simply push the listener into the array 
//  There can be more than one listener for a given event name 

// function emit(eventName, data){
//     const event = this.events[eventName];
//     if( event ) {
//       event.forEach(fn => {
//          fn.call(null, data);
//        });
//      }
// }


// All Node.js objects (such as streams and the HTTP module) that emit events are instances of the Event 
// class.

//For Example:
// const EventEmitter = require( 'events' );
// class MyClass extends EventEmitter {
//     doSomething() {
//         // do something...
//         if ( !err )
//             this.emit( 'success', result );
//         else
//             this.emit( 'error', err );
//     }
// }

// when to use inherit event emitter 
// https://codeburst.io/event-emitters-and-listeners-in-javascript-9cf0c639fd63
// when there are multpile handlers(callback) in a function
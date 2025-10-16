// const eventEmitter = require('events')
// const myEmitter = new eventEmitter();

// myEmitter.on('greet', () => {
//     console.log('Event handling example');
// });

// myEmitter.on('greet', () => {
//     console.log('Another message');
    
// });

// myEmitter.emit('greet');




////  arguments /parameters

// const eventEmitter = require('events')
// const myEmitter = new eventEmitter();

// myEmitter.on('greet', (name) => {
//     console.log('Greetings '+ name);
// });

// myEmitter.on('greet', (name) => {
//     console.log('Another message to '+ name);
    
// });


// myEmitter.emit('greet', 'Virat');




// Q1. simple user login notification system 
// 'userLoggedIn userName age city
// also add a simple welcome message

// const eventEmitter = require('events')
// const myEmitter = new eventEmitter();

// myEmitter.on('userLoggedIn', (user) => {
//     console.log('User logged in: '+ user.userName);
//     console.log(`Age: ${user.age} City: ${user.city}`);
//     console.log(`Welcome ${user.userName}, have a great day!`);
// });

// myEmitter.emit('userLoggedIn', {userName: 'Virat', age: 35, city: 'Delhi'});
// myEmitter.emit('userLoggedIn', {userName: 'Anushka', age: 33, city: 'Mumbai'});
   





////   off ,  remove

// const eventEmitter = require('events')
// const myEmitter = new eventEmitter();

// function greetUser(name){
//     console.log('Greetings '+ name);
// }

// myEmitter.on('greet', (name) => {
//     console.log('Another message to '+ name);
    
// });

// myEmitter.on('greet', greetUser);
// // myEmitter.once('greet', greetUser);
// myEmitter.emit('greet', 'Virat');
// myEmitter.emit('greet', 'ram');
// myEmitter.removeListener('greet', greetUser);






// Q2. create a ShoppingCart EventEmitter itemadded
// 4 times


// const EventEmitter = require('events')
// const shopping = new EventEmitter()

// shopping.on('itemAdded', (item) => {
//  console.log(`Added: ${item.name} - ₹${item.price}`)
// })

// let cart = []
// let items = [
//  { name: 'Soap', price: 85 },
//  { name: 'Toothpaste', price: 150 },
//  { name: 'Bread', price: 50 },
//  { name: 'Butter', price: 60 }
// ]
// function addItem(item) {
//  cart.push(item)
//  shopping.emit('itemAdded', item)
// }
// items.forEach(addItem)
// console.log('Cart:', cart)



// Q3. chatroom   EventEmitter  (u can use extends )
// join(userName)
// leave(userName)
// sendMessage(userName)

const EventEmitter = require('events')
class ChatRoom extends EventEmitter {
    join(userName) {
        this.emit('join', userName)
    }  
    leave(userName) {
        this.emit('leave', userName)    
    }

    sendMessage(userName, message) {    
        this.emit('message', userName, message)
    }
}

const chatRoom = new ChatRoom();

chatRoom.on('join', (userName) => {
    console.log(`${userName} joined the chat`)
});

chatRoom.on('leave', (userName) => {
    console.log(`${userName} left the chat`)
});

chatRoom.on('message', (userName, message) => {
    console.log(`${userName}: ${message}`)
});

chatRoom.join('Virat')
chatRoom.sendMessage('Virat', 'Hello everyone!')
chatRoom.join('Anushka')
chatRoom.sendMessage('Anushka', 'Hi Virat!')
chatRoom.leave('Virat')
chatRoom.sendMessage('Anushka', 'Bye Virat!')
chatRoom.leave('Anushka')




























































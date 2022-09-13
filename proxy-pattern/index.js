import { isValidEmail, isAllLetters } from './validators.js'

const user = {
	firstName: 'John',
	lastName: 'Doe',
	username: 'johndoe',
	age: 42,
	email: 'john@doe.com',
}


const userProxy = new Proxy(user, {
    get: (target, prop) => {
        console.log(`The value of ${prop} is ${target[prop]}`);
        return target[prop]
    },
    set: (target, prop, value) => {
        if(prop === 'username'){
            if(value.length <= 3 || !isAllLetters(value)) { throw new Error('Invalid username') }
        }

        if(prop === 'email') {
            if(!isValidEmail(email)){ throw new Error('Please provide a valid email.'); }
        }

        if(prop === 'age') {
            if(value < 18 || typeof value !== 'number') { throw new Error('Please provide a valid age.'); }
        }

        // target[prop] = value;
        Reflect.set(target, prop, value)
        console.log(`${new Date()} | the value of ${prop} is ${target[prop]}`)
        return true
    }
})

console.log(userProxy.age);
userProxy.username = 'juanme'

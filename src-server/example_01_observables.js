import Rx from 'rxjs/Rx';

const simple$ = new Rx.Observable((observer) => {
    console.log("Generating observable")
    setTimeout( () => {
        observer.next("An item")
        setTimeout(() => {
            observer.next("Another item!")
            observer.complete();
        }, 1000)
    }, 1000)
})

// first way to call subscribe
simple$.subscribe(
    item => console.log(`one.next ${item}`),
    error => console.log(`one.error ${error}`),
    () => console.log(`one.complete`)
);

// second way to call subscribe, pass in an object, also has 3 differnt ways to call
// a function
setTimeout(() => {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(error){
            console.log(`two.error ${error}`)
        },
        complete: function(){
            console.log(`two.complete`)
        }
    })
}, 3000)


// const promise = new Promise((resolve, reject) => {
//     console.log('IN Promise')
//     resolve('Hey')
// })

// promise.then( item => console.log(item));
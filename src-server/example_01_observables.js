import Rx from 'rxjs/Rx';

// ---- PART 1 ----

// const simple$ = new Rx.Observable((observer) => {
//     console.log("Generating observable")
//     setTimeout( () => {
//         observer.next("An item")
//         setTimeout(() => {
//             observer.next("Another item!")
//             observer.complete();
//         }, 1000)
//     }, 1000)
// })

// // first way to call subscribe
// simple$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error}`),
//     () => console.log(`one.complete`)
// );

// // second way to call subscribe, pass in an object, also has 3 differnt ways to call
// // a function
// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.next ${item}`),
//         error(error){
//             console.log(`two.error ${error}`)
//         },
//         complete: function(){
//             console.log(`two.complete`)
//         }
//     })
// }, 3000)

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("Stuff check stack"))
// })

// // using error .stack on an error object gives us the stack trace
// error$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error.stack}`),
//     () => console.log(`one.complete`)
// );
// // const promise = new Promise((resolve, reject) => {
// //     console.log('IN Promise')
// //     resolve('Hey')
// // })

// // promise.then( item => console.log(item));

// ---- PART 2 ----

function createSubscriber(tag){
    return {
        next(item) {console.log(`${tag}.next ${item}`)},
        error(error) {console.log(`${tag}.error ${error.stack || error}`)},
        complete() {console.log(`${tag}.complete`)}
    }
}

function createInterval$(time){
    return new Rx.Observable(observer => {
        let index = 0;
        setInterval(() => {
            observer.next(index++)
        }, time)
    })
}


const everySecond$ = createInterval$(1000);
everySecond$.subscribe(createSubscriber("one"));
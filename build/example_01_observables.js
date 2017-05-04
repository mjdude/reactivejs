"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Observable(function (observer) {
    console.log("Generating observable");
    setTimeout(function () {
        observer.next("An item");
        setTimeout(function () {
            observer.next("Another item!");
            observer.complete();
        }, 1000);
    }, 1000);
});

// first way to call subscribe
simple$.subscribe(function (item) {
    return console.log("one.next " + item);
}, function (error) {
    return console.log("one.error " + error);
}, function () {
    return console.log("one.complete");
});

// second way to call subscribe, pass in an object, also has 3 differnt ways to call
// a function
setTimeout(function () {
    simple$.subscribe({
        next: function next(item) {
            return console.log("two.next " + item);
        },
        error: function error(_error) {
            console.log("two.error " + _error);
        },

        complete: function complete() {
            console.log("two.complete");
        }
    });
}, 3000);

// const promise = new Promise((resolve, reject) => {
//     console.log('IN Promise')
//     resolve('Hey')
// })

// promise.then( item => console.log(item));
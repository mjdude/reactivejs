import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util'; 

// timer
// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// timer
// Rx.Observable.timer(5000, 500)
//     .take(3)
//     .subscribe(createSubscriber('timer'));

Rx.Observable.of('Hello, world', 42, "whoa")
    .subscribe(createSubscriber('of'))

Rx.Observable.from([23, 10, 4])
    .subscribe(createSubscriber('from'))
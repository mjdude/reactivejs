import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util'; 

Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber("one"));
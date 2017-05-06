'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// timer
// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// timer
// Rx.Observable.timer(5000, 500)
//     .take(3)
//     .subscribe(createSubscriber('timer'));

_Rx2.default.Observable.of('Hello, world', 42, "whoa").subscribe((0, _util.createSubscriber)('of'));

_Rx2.default.Observable.from([23, 10, 4]).subscribe((0, _util.createSubscriber)('from'));
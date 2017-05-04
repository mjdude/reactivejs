import $ from 'jquery';
import Rx from 'rxjs/Rx';

const $title = $('#title');
const $results = $('#results');

const keyUps$ = Rx.Observable.fromEvent($title, "keyup");
const queries$ = keyUps$
                    .map( e => e.target.value)
                    .distinctUntilChanged()
                    .debounceTime(250);

queries$.subscribe(query => {
    getItems(query).then((items) => {
        $results.empty();
        const $items = items.map((item) => $(`<li >`).text(item))
        $results.append($items);
    })
})
// ----
// Library

const getItems = (title) => {
    console.log(`Querying ${title}`)
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`])
        }, 500 + (Math.random() *  200));
    })

}
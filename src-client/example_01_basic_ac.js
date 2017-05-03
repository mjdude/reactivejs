import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

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
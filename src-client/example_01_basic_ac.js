import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

$title.on("keyup", e => {
    const title = e.target.value;
    getItems(title)
        .then((items) => {
            console.log('items is ', items)
            $results.empty();
            const $items = items.map((item) => {return $(`<li />`).text(item)});

            console.log('items is ', $items);
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
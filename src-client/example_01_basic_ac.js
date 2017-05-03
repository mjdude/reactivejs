import $ from 'jquery';

const $title = $('#title');
const $results = $('#results');

let lastQuery = null;
$title.on("keyup", e => {
    const title = e.target.value;

    if(title === lastQuery){
        return
    }

    lastQuery = title;
    
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
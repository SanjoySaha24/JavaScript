// Activity 1
// Task 1

let book = {
    title:"Memory",
    author:"Alex",
    year: "2018",
    overview: function(){
        return `The title of the book is ${this.title} and the author is ${this.author}`; // Arrow functions do not have their own this context; instead, they inherit the this value from their enclosing scope.
    },
    updateYear: function(newYear){
        this.year=newYear
        return this
    },
    }
console.log(book);

// Task 2
console.log(book.title,",",book.author);

// Activity 2
// Task 3
console.log(book.overview())

// Task 4
console.log(book.updateYear(2024));

// Task 5
let library = {
    name: "Library of Ohara",
    books: [
        {
            title: "Atomic Habits",
            author: "James Clear",
            year: 2018,
        },
        {
            title: "The Power of Habit",
            author: "Charles Duhigg",
            year: 2012,
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Charles Duhigg",
            year: 1997,
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            year: 2020,
        },
        {
            title: "Indistractable",
            author: "Nir Eyal",
            year: 2019,
        },
    ]
};
console.log(library);

// Task 6

console.log(`Our library is named in respect to Professor Clover and is named as ${library.name}`)


// Using spread operator(...) and map() to get the book titles

const bookTitles = [...library.books.map(book => book.title)];

console.log("Books in the library:");
console.log(bookTitles);



function printBookTitles(library) {
    console.log("Books in the library:");
    library.books.forEach(book => {
        console.log(book.title);
    });
}
printBookTitles(library)

// Task 8
let books = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
}

let count=1
for (const key in book) {
    console.log(`${count}. Key and value pair respectively`)
    console.log(key)
    console.log(book[key])
    count++
}

// Task 9
console.log("Keys:", Object.keys(book)); 
console.log("Values:", Object.values(book)); 
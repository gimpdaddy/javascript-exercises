const getTheTitles = function(books) {
    const titles = [];

    for (const property in books) {
        titles.push(books[property].title)
    }

    return titles;

};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

// Do not edit below this line
module.exports = getTheTitles;

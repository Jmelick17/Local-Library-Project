const getTotalBooksCount = (books) => {return books.length}
//Return the .length of books array to show total books count
const getTotalAccountsCount = (accounts) => {return accounts.length}
//Return the .length of accounts array to show total account count
const getBooksBorrowedCount = (books) => {
  let booksBorrow = 0;
//Set a counter var to 0
  for (i = 0; i < books.length; i++){
  const booksArray = books[i];
//Loop through the books array and set book index to booksArray
  for (let j = 0; j < booksArray.borrows.length; j++){
    if (booksArray.borrows[j].returned === false){
//Loop through the nested borrows array and if returned is false
      booksBorrow ++;
//Increment the counter
    }
  }
}
    return booksBorrow;
//Return the counter
  }

  function _reduceByProp(arr,key) {
//Helper function created for getMostCommonGenres
//Will create a new array that returns the count of 'genre'
    let newArr = arr.reduce((acc, prop) => {
      let keyExists = acc.find((item) => item.name === prop[key]);
      if (keyExists) {
        keyExists.count += 1;
      } else {
        let obj = {name: prop[key], count: 1 };
        acc.push(obj);
      }
      return acc;
    }, []);
    return newArr;
  }

function getMostCommonGenres(books) {
let countArr = _reduceByProp(books, "genre");
return countArr.sort((keyA, keyB) => keyB.count - keyA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  let popBookArray = [];
  books.forEach((book) => {
    popBookArray.push({
      'name': book.title,
      'count': book.borrows.length,
    });
  });
  return popBookArray.sort((bookA,bookB) => bookB.count - bookA.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popAuthArray = [];
  books.forEach(book => {
    authors.forEach(author => {
      if (book.authorId === author.id) {
        popAuthArray.push({
        'name': `${author.name.first} ${author.name.last}`,
        'count': book.borrows.length
        });
      }
    });
  });
  return popAuthArray.sort((a,b) => b.count - a.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

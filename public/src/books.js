function findAuthorById(authors, id) {
  const matchingAuthors = authors.find((author) => 
  author.id === id);
  return matchingAuthors
}

function findBookById(books, id) {
  const matchingBooks = books.find((book) => book.id
   === id);
   return matchingBooks;
}

function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const returnedBooks = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  const newBookArray = [[...booksBorrowed],[...returnedBooks]];
  return newBookArray;
}

function getBorrowersForBook(book, accounts) {
  return (
    book.borrows.map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account};
    })
    .slice(0,10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

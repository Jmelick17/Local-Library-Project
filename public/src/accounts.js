function findAccountById(accounts, id) {
  let matchingId = accounts.find((account) => account.id
  === id);
  return matchingId;
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort((accountA, accountB) =>
  (accountA.name.last < accountB.name.last ? -1 : 1));
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrowBooks = 0;
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
      if (account.id === books[i].borrows[j].id){
        totalBorrowBooks ++;
      }
    }
  }
  return totalBorrowBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const authorAdded = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
        authorAdded.push({...book, author});
      }
    });
  });
  authorAdded.filter((acct) => {
    if (acct.borrows[0].id === account.id && !acct.borrows[0].returned) {
      result.push(acct);
    }
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

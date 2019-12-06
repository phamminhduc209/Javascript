var bookShelves = [
  {
    id: 0,
    books: [1, 3, 5]
  },
  {
    id: 1,
    books: [2, 5, 5,]
  }
];

var books = [
  {
    id: 0,
    title: 'JavaScript từ A-Z 2018',
    author: 'Thinh Pham',
    shelfId: 0
  },
  {
    id: 1,
    title: 'HTML for dummies',
    author: 'Thinh Pham',
    shelfId: 1
  },
  {
    id: 2,
    title: 'Git - from Zero to Hero',
    author: 'Thinh Pham',
    shelfId: 2
  },
  {
    id: 3,
    title: 'NodeJS Web Server using Express 2018',
    author: 'Thinh Pham',
    shelfId: 0
  },
];

var users = [
  {
    id: 0,
    userName: 'Pham Minh Duc',
    password: '125215',
    borrowedBooks: [1,5]
  },
  {
    id: 1,
    userName: 'Pham Nguyen Tan Loc',
    passWord: '222222',
    borrowedBooks: [2,3]
  }
];

var borrowedBooks = [
  {
    id: 1,
    borrowFor: 3,
    dayLeft: -2,
    user: 0,
    borrowedAt: 'Sep 8 2018 07:20'
  },
  {
    id: 5,
    borrowFor: 2,
    dayLeft: 1,
    user: 0,
    borrowedAt: 'Sep 9 2018 07:21'
  },
  {
    id: 2,
    borrowFor: 5,
    dayLeft: -1,
    user: 1,
    borrowedAt: 'Sep 10 2018 09:20'
  },
  {
    id: 3,
    borrowFor: 3,
    dayLeft: -2,
    user: 1,
    borrowedAt: 'Sep 10 2018 09:20'
  }
];

var history = [
  {
    id: 0,
    bookId: 1,
    user: 0,
    borrowedAt: 'Sep 8 2018 07:20',
    returnedAt: 'Sep 10 2018 9:20'
  }
];

function getDaysOverdue(userName) {
  var getUser = users.find(x => {
    return x.userName === userName;
  });

  var books = borrowedBooks.filter(x => {
    return getUser.id === x.user && x.dayLeft < 0;
  });

  var dayLeft = books.reduce((x, y) => {
    return x + Math.abs(y.dayLeft);
  }, 0);
  console.log(`Books borrowed by ${userName} has been overdue for ${dayLeft} day(s)`);
}

getDaysOverdue('Pham Minh Duc');
getDaysOverdue('Pham Nguyen Tan Loc');

function getHistory() {
  for (let data of history) {
    var book = data.bookId;
    dataBook = books.find(x => {
      return x.id === book;
    });

    var user = data.user;
    dataUser = users.find(x => {
      return x.id === user;
    });

    console.log(`${dataUser.userName} borrowed a book named '${dataBook.title}' at ${data.borrowedAt} and returned it at ${data.returnedAt}.`);
  }
}
getHistory();
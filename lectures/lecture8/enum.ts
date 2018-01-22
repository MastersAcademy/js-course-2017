enum Status {
  CLOSED = 5, // 5
  OPENED, // 6
  ACTIVE  // 7
}

const modal = {
  status: Status.OPENED
  // status: 6
};

console.log(modal);

//////////////

enum Roles {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN'
}

const User1 = {
  role: Roles.USER
};


console.log(User1);

const User2 = {
  role: Roles.MANAGER
};


console.log(User2);

const User3 = {
  role: Roles.ADMIN
};

console.log(User3);


// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数（メソッド）
function addList(user) {
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // console.log(res);
  const users = await res.json();
  // console.log(users);
  return users;
}

async function listUsers() {
  const users = await getUsers();
  users.forEach(addList);
}

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);

const USERS_API = 'https://jsonplaceholder.typicode.com/users';
const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';
// PromiseはIE11に対応していないからbabel（browserslistをIE 11にした上でcore.jsを利用。useBuiltIns: 'usage'）もしくはTypeScriptをつかえ。


function callApi() {
  // 実際にAPIを叩く処理
  const res = fetch(USERS_API);
  // Promiseが帰ってくるって事を覚えておけばいいかな。
  // とりあえずレスポンスを確認してみよう。
  console.log(res);
}
callApi();



// async awaitを追加してみる。（非同期）
// awaitを利用して同期処理にする。次の行の処理の実行をまってくれる。
// async function callApi() {
//   // 実際にAPIを叩く処理
//   const res = await fetch(USERS_API);
//   // Promiseが帰ってくるって事を覚えておけばいいかな。
//   console.log(res);
//   const users = await res.json();
//   console.log(users);
// }
// callApi();



// // then
// function callApiWithThen() {
//   fetch(USERS_API)
//     // thenはresolved（fetchから返されるPromiseStatusの事を指す）のときにしかよばれない
//     .then(function (res) {
//       return res.json();
//     })
//     // thenは何回でも繋げれる
//     // users = res.jsonの返り値がかえってくる
//     .then(function (users) {
//       console.log(users);
//     })
//     // catchはrejected（fetchから返されるPromiseStatusの事を指す）のときにしかよばれない（404はレスポンス自体は返ってきてるのでresolvedにいく）
//     .catch(function(error) {
//       console.log('リクエスト失敗', error);
//     });
// }
// callApiWithThen();


// エラーハンドリング
// function callApiWithThen() {
//   fetch(USERS_API)
//   .then((res) => {
//     if(res.ok) { // ステータスがokならば
//       return res.json(); // レスポンスをjsonエンコード
//     } else {
//       throw new Error();
//     }
//   })
//   .then((users) => console.log(users))
//   .catch((error) => console.log('接続失敗', error));
// }
// callApiWithThen();



// // XMLHttpRequest（fetchをつかわないやり方：昔のやりかた）
// function callApiWithXhr() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", USERS_API);
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function () {
//     console.log(xhr.response);
//   };
// }
// callApiWithXhr();




// 複数のAPIを叩いてすべての結果を待ってから吐き出す
// レスポンスを返すだけ（コールバック関数）
// function get(url) {
//   return fetch(url);
// }
// async function callApiMultiple() {
//   const urls = [USERS_API, POSTS_API];
//   // 「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返す
//   const resArr = await Promise.all(urls.map(get));
//   const users = await resArr[0].json();
//   const posts = await resArr[1].json();
//   users.forEach(user => {
//     console.log(user.name);
//   });
//   // console.log(users);
//   // console.log(posts);
// }
// callApiMultiple();

import 'whatwg-fetch';

const boardGameCall = () => {
  const url = '/board-games/';

  return fetch(url)
    .then(response => response.text())
    .then(data => console.log(data))
}

export default boardGameCall;

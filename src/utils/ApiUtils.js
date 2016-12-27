import 'whatwg-fetch';
import $ from 'jquery';

const boardGameCall = () => {
  debugger;
  const url = 'http://www.boardgamegeek.com/xmlapi2/collection?username=gedusa';

  return fetch(url)
    .then(response => response.text())
    .then(xmlString => $.parseXML(xmlString))
    .then(data => console.log(data))
}

export default boardGameCall;

import axios from 'axios';

export default function post(){
    axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

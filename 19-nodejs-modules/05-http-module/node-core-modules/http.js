const http = require('http');
const fs = require('fs');

const posts = [
  { id: 1, title: 'Post One', body: 'This is post 1' },
  { id: 2, title: 'Post Two', body: 'This is post 2' },
  { id: 3, title: 'Post Three', body: 'This is post 3' },
];



const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (error, file) => {
      if (error) {
        response.writeHead(500, {'content-type': 'text/html'});
        response.end('<h1>Sorry, we have a problem</h1>');
      } else {
        response.writeHead(200, { 
          'content-type': 'text/html'
          // ,'date': 'Thu, 11 Sep 2011 11:11:11 GMT'
        });
        response.end(file);
      }
    });
  } else if (url === '/api/posts') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ success: true, data: posts }));
    

  // Testing dtuff ----------------------------------  
  } else if (url === `/api/post?id=${posts[0].id}`) {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ success: true, data: posts[0].title }));

  } else if (url === `/api/post?id=${posts[1].id}`) {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ success: true, data: posts[1].body }));
  // Testing stuff ----------------------------------  


  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});




// ------------------------------------
function getPost(postNumber) {
  if (postNumber >= 0 && postNumber <= 2) {
    validPostNumber = postNumber;
  } else {
    console.error('Post must be between 0 and 2.');
  }
}
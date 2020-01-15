const express = require('express');
const PostController = require('./controller/post');
const app = express();

app.get('/', (request, response) => {
    new PostController().get(request, response);
})

app.post('/', (request, response) => {
    new PostController().post(request, response);
})

app.get('/allpost', (request, response) => {
    new PostController().getAll(request, response);
})

app.listen(3000, () => console.log("server is running localhost:3000"))

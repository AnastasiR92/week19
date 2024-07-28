function addPost(event) {
    event.preventDefault();

const title = document.getElementById('title').value;
const body = document.getElementById('body-text').value;

const postData = {
    title: title,
    body: body
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(postData)
})

.then(response => response.json())
.then(post => {
    const postDiv = generatePost(post);
    addPostToContainer(postDiv);
    // Очистка input после отправки формы
    document.getElementById('title').value = '';
    document.getElementById('body-text').value = '';
})
.catch(error => console.error('Ошибка добавления поста:', error));
}


document.getElementById('post-form').addEventListener('submit', addPost);

function generatePost(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
}

function addPostToContainer(postDiv) {
    const container = document.getElementById('posts-container');
    container.innerHTML += postDiv;
}
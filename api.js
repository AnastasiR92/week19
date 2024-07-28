function generatePost(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
  }

  function addPost(postDiv) {
    const container = document.getElementById('posts-container');
    container.innerHTML += postDiv;
  }

  function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((posts) => {
        posts.forEach(post => {
          const postDiv = generatePost(post);
          addPost(postDiv);
        });
      })
     .catch((error) => {
        console.error('Ошибка загрузки постов:', error)
  });
}

document.addEventListener('DOMContentLoaded', loadPosts);
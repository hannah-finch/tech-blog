const newFormHandler = async (event) => {
  event.preventDefault();

  //this might not work on deployed, cause it depends on the url and IDK what that will be. I'm sure there is a better way to do this
  let post_id = window.location.href.split('/')[4];
  console.log(post_id)

  const body = document.querySelector('#comment-text').value.trim();

  if (body) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/posts/${post_id}`);
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
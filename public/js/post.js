const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-text').value.trim();

  //come back to this cause I haven't made the route

  // if (comment) {
  //   const response = await fetch(`/api/posts`, {
  //     method: 'POST',
  //     body: JSON.stringify({ title, body }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/dashboard');
  //   } else {
  //     alert('Failed to create post');
  //   }
  // }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
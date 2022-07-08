const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
   setTimeout(function()  {
    let output = '';
    posts.forEach((post) => {
output += `<li>${post.title}</li>`;
    });
     document.body.innerHTML = output;
   }, 1000);  // 100 millsecond
}

function createPost(post) {
return new Promise((resolove, reject) => {
  setTimeout(() => {
    posts.push(post);
    
    const error = false;
  // callBack();
    if(!error) {
      resolove();
    }
    else{
      reject('Error: Something went wrong');
    }
  },2000);
});

  

}

// getPosts();

createPost({title: 'Post Three', body: 'This is post three' }, getPosts); then(getPosts);
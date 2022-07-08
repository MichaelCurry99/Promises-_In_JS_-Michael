const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
   setTimeout(function()  {
    let output = '';
    posts.fotEach((post) => {
output += `<li>${post.title}</li>`;
    });
     document.body.innerHTML = output;
   }, 1000);  // 100 millsecond
}

function createPost(post) {
  setTimeout(() => {
  posts.push(post);
},2000);

}

getPosts();

createPost({title: 'Post Three', body: 'This is post three' })
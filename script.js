const container = document.getElementById("posts");

posts.reverse().forEach(post => {
  const div = document.createElement("div");
  div.className = "post";

  div.innerHTML = `
    <h2>${post.title}</h2>
    <p><small>${post.date}</small></p>
    <p>${post.content}</p>
  `;

  container.appendChild(div);
});

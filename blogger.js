// Blog Rendering Tool

// position in blog post list
var progress = 0;
//render a block of 4 blog posts
function renderBlock(blogList) {
  // stop on 4 or end of blog list
  for (let i = 0; i <= 3 && progress <= blogList.length - 1; i++) {
    // create blog post holder with embedded script to render post
    console.log(progress);
    let div = document.createElement("div");
    let scr = document.createElement("script");
    div.className = "rollOut";
    div.id = progress;
    scr.innerHTML =
      `
		fetch('` +
      blogList[progress] +
      `').then(data => {
			data.text().then(text => {
				document.getElementById(` +
      progress +
      `).innerHTML = text
			}) 
		}) 
		`;
    div.appendChild(scr);
    document.getElementById("blogger").appendChild(div);
    progress++;
  }
}

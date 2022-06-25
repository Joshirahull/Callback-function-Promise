let cl = console.log;

// js is single threaded lang
// js is syncronous lang

// function printTen(){
	// var x =10;
	// cl(10);
// }
// function printTwenty(){
	// cl(20)
// }
// function printThirty(){
	// cl(30)
// }
// printTen();
// printTwenty();
// printThirty();

// function fetchData(callbackFun){
	// setTimeout(() => {
		// cl('data is ready now !!!')
		// callbackFun();
	// }, 3000)
// }

// function templating(){
	// setTimeout(()=>{
		// cl('UI is ready now !!!')
	// }, 1000)
// }

// fetchData(templating);
// templating();

let blogs = [
		{title : 'Blog one', info: 'this is Blog one on javascript'},
		{title : 'Blog Two', info: 'this is Blog Two on javascript'},
]

const info = document.getElementById('info');

function fetchBlogs(){
	setTimeout(() =>{
		let result =`<ul class="list-group">`;
		blogs.forEach(blog => {
			result +=`
			
					<li class="list-group-item">
						<h4>${blog.title}</h4>
						<p>${blog.info}</p>
					</li>
			`
		});
		result += `</ul>`;
		info.innerHTML = result;
	}, 1000)
}

//blog >>{title : '', info : ''}
function createBlogs(blog, callbackFun){
	setTimeout(() => {
		blogs.push(blog)
		callbackFun();
	}, 2000)
}
createBlogs({title : 'Blog three', info : 'This is Blog three on javascript'},fetchBlogs);
// fetchBlogs();

 

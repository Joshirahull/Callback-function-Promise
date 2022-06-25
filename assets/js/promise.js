let cl = console.log;

//  Promise >> it is a javacript object, it gives somevalue in a future.
// it is used to handle asyncronous oprations.

// promise has 4 states.
// 1 pending 
// 2 fullfilled 
// 3 rejected
// 4 settled

// Benifits of Promise
// 1 Improves code Readability
// 2 Better handaling asyncronous oprations.
// 3 Better Error Handaling
// 4 Better Flow of Control Defination.


// let d = new Date(2022,5);

let promise1 = new Promise((resolve, reject) =>{
	let error = false;
	if(!error){
		resolve('Date is loaded !!!'); // if there is no error this mthod will get called.
	}else{
		reject('Something went Wrong.'); // if there is error reject method  will get called.
	}
});

promise1

.then((res) =>{
	cl(res)
})
.catch((err)=>{
	cl(err)
})

let blogs = [
		{title : 'Blog one', info: 'this is Blog one on javascript'},
		{title : 'Blog Two', info: 'this is Blog Two on javascript'},
]

const info = document.getElementById('info');

function fetchBlogs(arr){
	setTimeout(() =>{
		let result =`<ul class="list-group">`;
		arr.forEach(blog => {
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
function createBlogs(blog){
	let promise = new Promise((resolve, reject) =>{
		setTimeout(()=>{
			blogs.push(blog);
			let error = false;
			if(!error){
				resolve(blogs);
			}else{
				reject("Something went Wrong");
			}
		},2000)
	});
	return promise;
}
createBlogs({title : 'Blog three', info : 'This is Blog three on javascript'})
																			.then(res => {
																				fetchBlogs(res);
																			})
																			.catch(err => cl(err))
;
	
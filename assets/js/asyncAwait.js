let cl = console.log;

const posts = [
	{
		title: "Angular",
		id:1,
		authenId:1
	},
	{
		title: "Node.js",
		id:2,
		authenId:2
	},
	{
		title: "javaScript",
		id:3,
		authenId:3
	},
	{
		title: "MpngoDB",
		id:4,
		authenId:4
	},
	{
		title: "Express",
		id:5,
		authenId:5
	},
	{
		title: "React",
		id:6,
		authenId:6
	},
	{
		title: "Vue",
		id:7,
		authenId:7
	},
];

const authors = [
	{name : "Smit", id:1},
	{name : "David", id:2},
	{name : "Kevin", id:3},
	{name : "Clark", id:4},
	{name : "Kaly", id:5},
	{name : "James", id:6},
];

function getPost(postId){
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			let post = posts.find((p) => {
				return p.id === postId;
			});
			if(post){
				resolve(post);
			} else {
			reject(Error(`There is no such Post Exists`));
			}
		}, 1000);
	});
	// return promise;
}
function getAuther(post){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let auther = authors.find(auth => {
				return post.autherId === auth.id
			})
			if(auther){
				resolve(auther);
			}else{
				reject(Error(`There is no such Auther Exists`));
			}
		}, 2000)
	});
}

function printPost(post){
	console.log(post);
}
// getPost(50)
		// .then((res) => console.log(res))
		// .catch((err) => console.log(err));
		

// getPost(5)
		// .then (console.log)
		// .catch (console.log);
		
		
// getAuther(posts[5])
	// .then((res) => {
	// console.log(res);
	// })
// .catch((err) => console.log(err));

// getAuther(posts[5])
	// .then(console.log)
	// .catch( console.log);
	
// getPost(5)
// 		.then((res) =>{
// 			console.log(res);
// 			return  getAuther(res);
// 		})
// 		.then(console.log);
// 		.catch(console.log);
		// .then((res) => console.log(res));
		// .catch((err) => console.log(err));
		
	// console.log('break');	
		
		
	// getPost(9)
	// 	.then((res) =>{
	// 		console.log(res);
	// 	  return  getAuther(res);
	// 	})
	// 	.then(console.log);
	// 	.catch(console.log);
		
	// console.log('break');
	
	// getPost(1)
	// 	.then((res) =>{
	// 		console.log(res);
	// 	  return  getAuther(res);
	// 	})
	// 	.then(console.log);
	// 	.catch(console.log);

async function init(){
    try {
    let responce = await getPost(5);
    cl(responce);
    let newResponce = await getAuther(responce);
    cl(newResponce)
    } catch (err){
        cl(err);
    }
}

init()
const http  =  require('http');

const server = http.createServer((req,res)=>{

	res.setHeader("Access-Control-Allow-Origin","*");


	const data1 = ['vvv','bbb','111'];

	const data = JSON.stringify(data1);

	res.end(data);
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000');
})
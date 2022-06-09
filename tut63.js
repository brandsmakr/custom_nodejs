const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
res.setHeader('Content-Type', 'text/html');
  res.end(`
  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&display=swap"
      rel="stylesheet"
    />
  </head>
  <style>
    /* css reset  */
 body {
    font-family: 'Baloo Bhaina 2', cursive;
    color: white;
    margin: 0;
    padding: 0;
    background: url("images/gym-x-girl.jpg");
    background-repeat: repeat-y;
    background-position: center;
    background-size: cover;
    /* height: max-content; */
    /* height: 1032px; */
  }
  /* width */
::-webkit-scrollbar {
  width: 15px;
  height: 18px;
  background: grey;
  border: black !important;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 6px;
  border: none;
}

header {
  /* border: 1px solid green; */
}
.left {
  position: absolute;
  left: 60px;
  top: 20px;
  display: inline-block;
  /* border: 2px solid red; */
}
.left img {
  width: 200px;
  height: 65px;
  filter: invert(100%);
  /* display: inline-block; */
}
.left div {
  text-align: center;
  line-height: 8px;
  /* display: inline-block; */
  /* padding-top: -50px; */
  font-size: 25px;
}
.mid {
  display: block;
  width: 40%;
  margin: 20px auto;
  /* border: 2px solid purple; */
}
.right {
  position: absolute;
  right: 40px;
  top: 20px;
  display: inline-block;
  /* border: 2px solid blue; */
}
.navbar {
  display: inline-block;
}
.navbar li {
  display: inline-block;
  font-size: 18px;
}
.navbar li a {
  color: white;
  text-decoration: none;
  padding: 16px 18px;
  font-size: 20px;
}
.navbar li a:hover,
.navbar li a.active {
  text-decoration: underline;
  color: grey;
}
.btn {
  font-family: "Baloo Bhaina 2", cursive;
  margin: 12px 9px;
  background-color: black;
  color: white;
  padding: 6px 16px;
  border: 1px solid rgb(32, 30, 30);
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  width: 140px;
}
.btn:hover {
  background-color: rgb(78, 76, 76);
}
.container {
  border: 2px solid white;
  margin: 100px 80px;
  padding: 60px;
  width: 33%;
  border-radius: 20px;
}
.container h1 {
  text-align: center;
}
.form-group input {
  text-align: center;
  display: block;
  width: 300px;
  padding: 10px;
  border: 1px solid black;
  margin: 9px auto;
  font-size: 18px;
  border-radius: 8px;
}
.container button {
  display: block;
  margin: 20px auto;
  width: 62%;
  border: 2px solid grey;
}
  </style>
  <body>
    <header class="header">
      <!-- 
            Left Box for Logo
         -->
      <div class="left">
        <img src="./images/image-removebg-preview.png" alt="" />
        <div>Health & fitness</div>
      </div>
      <!-- 
            Center Box for Menus
         -->
      <div class="mid">
        <ul class="navbar">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Filter Calculator</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <!-- 
            Right Box for buttons
         -->
      <div class="right">
        <button class="btn">Call Us Now</button>
        <button class="btn">Email</button>
      </div>
    </header>

    <div class="container">
      <h1>Join the best Gym of Lahore Now</h1>
      <form action="noaction.php">
        <div class="form-group">
          <input type="text" name="" placeholder="Enter Your Name" />
        </div>
        <div class="form-group">
          <input type="text" name="" placeholder="Enter Your Age" />
        </div>
        <div class="form-group">
          <input type="text" name="" placeholder="Enter Your Gender" />
        </div>
        <div class="form-group">
          <input type="text" name="" placeholder="Enter Your Locality" />
        </div>
        <Button class="btn">Submit</Button>
      </form>
    </div>







  </body>
</html>

  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
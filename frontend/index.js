Index.js : 
const users = [
  {
    "name" :"Jane Doe",
    "gender" : "Female",
    "image" : "../images/jane.png"
  },
  {
    "name" :"John Doe",
    "gender" : "Male",
    "image" : "../images/john.png"
  },
]
let curUserId = 0;
function toggle(){
  if(curUserId == 0)
    curUserId=1;
  else
    curUserId=0;
  document.getElementById("img").src=users[curUserId].image;
  document.getElementById("card-name").innerText=users[curUserId].name;
}

console.log("Hello from JS");
function getradndomuser()
fetch("https ://randomuser.me/api/")
.then(function(data){
    return data.json
})
.then(function(parsedData){
    let name=;
    let gender=;
    let imageUrl=;

})
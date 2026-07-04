const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let curUserId = 0;

function toggle() {
    

    curUserId = (curUserId + 1) % users.length;

    document.getElementById("img").src = users[curUserId].image;

    document.getElementById("card-name").innerText =users[curUserId].name;

    document.getElementById("card-gender").innerText = users[curUserId].gender;
}

console.log("Hello from JavaScript");

function getRandomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(data)
        {
            return data.json()
        })
        .then(function(parseData)
        {
            
            
            let gender=parseData.results[0].gender;
            console.log(gender);

            let first=parseData.results[0].name.first;
            let last=parseData.results[0].name.last;
            let name=first+" "+last;
            console.log(name);

            let imageUrl=parseData.results[0].picture.large;

            
            document.getElementById("card-gender").innerText=gender;
            
            document.getElementById("card-name").innerText=name;
            
            document.getElementById("img").src=imageUrl;
        })
}
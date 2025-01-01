console.log("hey!");

const users = [
    {
        name:"Aiman Siddiqui",
        occupation: "Data Scientist",
        Streak : true,
        profileImage:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Parisha Hafeez",
        occupation: "Mechanical Engineer",
        Streak : true,
        profileImage:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Waniya Batool",
        occupation: "Neurologist",
        Streak : true,
        profileImage:"https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
function getUsers() {
    const main = document.getElementById("main");

    setTimeout(() => {
        users.forEach(function (item) {
            const div = document.createElement("div");
            div.classList.add("user");
            main.append(div);

            const img = document.createElement("img");
            img.classList.add("img");
            img.src = item.profileImage;
            div.append(img);

            const div2 = document.createElement("div");
            const p = `<p class="p-1">${item.name}</p>
            <p class= "p-2"> ${item.occupation}</p>`
            div2.innerHTML = p 

            div.append(div2)
        });
        document.getElementById("loader").innerHTML = ""
    }, 2000);
}

getUsers();
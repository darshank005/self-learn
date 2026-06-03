async function getUsers() {
   try{ const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users[0]);

    users.forEach((user) => {
        const li = document.createElement("li");
        li.innerText = user.name +" - "+user.address.city;
        document.getElementById("userslist").appendChild(li);
    }
);
   } catch(error){
    console.log("Something went wrong: ",error);
    document.getElementById("userslist").innerText = "Failed to load users.";
   }

}
getUsers();
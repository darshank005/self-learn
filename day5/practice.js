async function fetchUsers() {
    try{
        const username = document.getElementById("searchInput").value;
        const url = "https://api.github.com/users/" + username;
         const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        if(users.message === "Not Found"){
            document.getElementById("userslist").innerText = "User not found.";
            return;
        }
        document.getElementById("userslist").innerHTML = 
  `<li>${users.name} - ${users.public_repos} repos - ${users.followers} followers</li>`;        
    }
    catch(error){
        console.log("Something went wrong: ",error);
        document.getElementById("userslist").innerText = "Failed to load users.";
    }
}
fetchUsers();
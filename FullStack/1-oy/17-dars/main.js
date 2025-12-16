(
    async () => {
        let users = await fetch("https://dummyjson.com/products");
        users = await users.json()

        for (const user of users){
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.ardress.street}</td>
                    <td>${user.ardress.city}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                </tr>
            `
        }
    }
)();



// btn.addEventListener("click", async(e) => {
//     e.preventDefault()
//     const email = inputEmail.value
//     const password = inputPass.value

//     const res = await fetch("https://dummyjson.com/products", {
//         method:"GET",
//         headers:{
//             "Content-Type":"application/json",
//             "x-api-key" : "reqres_db032cff90a04b059d9b6660aecaacd3"
//         },
//         body:JSON.stringify({email, password})
//     })

//     console.log(await res.json())

// })

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

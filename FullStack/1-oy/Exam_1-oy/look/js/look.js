let i = 0;
(
    async function getAllUsers() {
        console.log("salom")
        const AllUsers = await axios.get(
            "https://look-production.up.railway.app/users/all"
        )

        const users = AllUsers.data
        users.forEach(user => {
            customer_item.innerHTML += `
            <span class="customer-name" >${user.fullname}</span>
		    <a class="customer-phone"  href="tel:${user.phone}">${user.phone}</a><br>
            `

        });
        
        // getAllUsers()
    }
)()

 button.addEventListener("click", async (e) => {

            e.preventDefault()

            const fullname = usernameInput.value
            const phoneNumber = telephoneInput.value
            customer_item.innerHTML += `
                <span class="customer-name" >${fullname}</span>
				<a class="customer-phone"  href="tel:${phoneNumber}">${phoneNumber}</a><br>
            `
            
    })




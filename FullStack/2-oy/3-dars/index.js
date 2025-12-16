const readline = require("readline")

const app = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const table = {}

app.question("O'zbekiston poytahti: ", (poytaxt) => {
    table.poytaxt = poytaxt
    app.question("Eng baland bino: ", (bino) => {
        table.bino = bino
        app.question("Eng katta hayvon: ", (hayvon) => {
            table.hayvon = hayvon
            app.question("Eng baland tog' :",  (tog) => {
                table.tog = tog
                console.table(table)
                app.close()
            })
        })
    })
})


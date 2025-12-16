const vada = new Promise((resolve, reject) => {
    setTimeout(() => {
        let niyat = false;
        if(niyat){
            resolve(500000);
        }
        else {
            reject("Uxlading");
        }
    }, 5000)
});

console.log("Salom")
async function dev(){
    try {
        console.log(await vada)
    } catch (error) {
        console.log(error)
    }
}

console.log("Alik")

dev()



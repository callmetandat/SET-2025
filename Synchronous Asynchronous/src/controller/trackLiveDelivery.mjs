export async function trackLiveDelivery(){
    let minutes = 5;
    while (minutes >= 0) {
        console.log(minutes);
        await new Promise(resolve => {
            let myInterval = setTimeout(() => {
                console.log(`${minutes} minutes left!`);
                resolve();
            }, 1000);
        });
        
        minutes--;
        if (minutes == 0){
            break;
        }
    }
}

export async function trackLiveDeliveryd(){
    let minutes = 5;
    let myInterval = setInterval(() => {     
        console.log(`${minutes} minutes left!`);
        minutes--;
        while (minutes < 1) {
            clearInterval(myInterval);
            console.log("Order delivered!");
            console.log("Shipper is picking up your order");
        }
    }, 1000);
}

trackLiveDelivery();
export async function updateOrderStatus() {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Your order will be ready in 3 minutes");
            resolve();
        }, 3000);
    });
    console.log("Get Ready");
}

console.log("Order placed");
console.log("Waiting for updates...");
updateOrderStatus();

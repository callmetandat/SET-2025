export async function updateOrderStatus() {
    console.log("Order placed");
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Your order will be ready in 3 minutes");
            resolve();
        }, 3000);
    });
    console.log("Waiting for updates...");
}

updateOrderStatus();
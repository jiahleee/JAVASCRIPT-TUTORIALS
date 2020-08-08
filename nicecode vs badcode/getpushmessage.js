function getPushMessage(order) {
    if (order.type === "received") {
        return "Restaurant started working on your order.";
    } else if (order.type === "prepared") {
        return "Driver is picking up your food."
    } else if (order.type === "en_route") {
        return "Driver is cycling your way!";
    } else if (order.type === "arrived") {
        return "Enjoy your food!";
    }
}

//USE This

function getPushMessage(order) {
    const messages = {
        "received": "Restaurant started working on your order.",
        "prepared": "Driver is picking up your food.",
        "en_route": "Driver is cycling your way!",
        "arrived": "Enjoy your food!"
    };

    return messages[order.type];
}

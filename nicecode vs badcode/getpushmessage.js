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

//Example


/**
 * @param {string} host
 * @param {string} user
 * @param {Object[]} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
    if (booking.status === "pending") {
        return `Hey ${user}, we're awaiting confirmation from ${host}`;
    } else if (booking.status === "confirmed") {
        return `Hey ${user}, ${host} is excited to be hosting you!`;
    } else if (booking.status === "canceled") {
        return `Unfortunately ${user}, ${host} has canceled your booking request`;
    } else if (booking.status === "done") {
        return `${host} hopes you had a great stay!`;
    }
}


const getStatus = (host, user, booking) => {
    const messages = {
        "pending": `Hey ${user}, we're awaiting confirmation from ${host}`
        , "confirmed": `Hey ${user}, ${host} is excited to be hosting you!`
        , "canceled": `Unfortunately ${user}, ${host} has canceled your booking request`
        , "done": `${host} hopes you had a great stay!`
    };

    return messages[booking.status];

}
//sample usage


const booking1 = {
    status: "pending"
};
console.log(getStatus("John", "Blane", booking1));
const booking2 = {
    status: "confirmed"
}
console.log(getStatus("John", "Blane", booking2));


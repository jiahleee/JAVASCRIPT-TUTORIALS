/*
- fetch is used to send and/or receive data from a service (an API) without reloading the page.
-*** fetch always returns a promise ***
-fetch expects a url as its first parameter: fetch(url)
-use fetch to make a request to a server (could be ours or could be an external one, like a Weather API
or Facebook API) to retrieve some information without reloading the page.
-we communicate with external services by using JSON
- <<NUM1>> ==>  ex) : fetch("https://api.learnjavascript.online/demo/notifications/new.json")
-This will send a request (sometimes called AJAX request or XMLHttpRequest for historical reasons).
This request will go to the internet, reach the URL you specified and finally come back to you with the result (response) from that URL.
-whenever you fetch(URL), the response that we get back is just a response object and it doesn't know that the data it has is in JSON.
We should manually convert the response into JSON:
- <<NUM2>> ==> fetch(URL)
        .then(response => {
        return response.json();
        });
-<<Implicit Return>>

fetch(URL)
.then(response => {
    return response.json();
});

//after refactoring
fetch(URL)
.then(response => response.json());


*/

const checkForNewNotifications = () => {
    fetch("https://api.learnjavascript.online/demo/notifications/new.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayNewNotifications(data.count);
        })
}

//{count: 3, message: You've got 3 new notifications}

function displayNewNotifications(count){
    // do not modify this function
}

//sample usage
checkForNewNotifications();


/*
***Will it rain?***
    Complete the function willItRain such that it makes a fetch request to https://api.learnjavascript.online/demo/weather/{city}.json
    where city is provided as an argument to the willItRain method.
    When you get the response, you should call the showRainDrops method with a value that indicates whether it's raining or not.
*/

const willItRain = (city) => {
    fetch("https://api.learnjavascript.online/demo/weather/{city}.json")
        .then(response=>response.json())
        .then(data=>{console.log(data);
              showRainDrops(data.is_raining);
        })

}


function showRainDrops(is_raining){
    // do not modify this function
}

//sample usage

willItRain("berlin");
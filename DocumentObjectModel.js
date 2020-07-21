//*** [DOM] ***
/*
* <html code> in browser: document oriented model(object model) form
* =>DOM Tree
* html changes via JS, it needs to be shaped in certain form:DOM Tree
* use JS to search,delete html codes->Browser provide various DOM API
* DOM API ex) getElementById()
* html root element:document
* document element provides getElementById() API
* */

//*** [Selector] ***
/* Used Google developer console in Amazon website

* document.getElementById("nav-cart-count").innerText="♥"
    "♥"
* document.querySelector("#nav-cart-count");
    <span id=​"nav-cart-count" aria-hidden=​"true" class=​"nav-cart-count nav-cart-0">​♥​</span>​
* document.querySelector(".nav-line-2 .nav-arrow")
    <span class=​"nav-icon nav-arrow" style=​"visibility:​ visible;​">​</span>​

* document.querySelectorAll("div");
    NodeList(352) [div#a-page, div#navbar.nav-sprite-v1.celwidget.nav-bluebeacon.nav-a11y-t1.layout2.nav-packard-glow.hamburger.bo…
    , div#nav-belt, div.nav-left, div#nav-logo,.....

 */
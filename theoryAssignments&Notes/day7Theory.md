## What are various ways to add images into our App? Explain with code examples?
A: import image file from src dirctory use image path as constant value 
'const avtar ="https://abc.com/image/profile1.jpg"';'<img src={avtar} />'
## What would happen if we do console.log(useState())?
A:' useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }'
## How will useEffect behave if we don't add a dependency array ?
A: It execute ones when component render.
## What is SPA?
A: Single page application.
## What is difference between Client Side Routing and Server Side Routing?
A: Client-side routing is when the routing is handled by the client's web browser, typically using JavaScript. When a user clicks on a link, the browser makes an HTTP request to the server, which returns the entire web page. The JavaScript then updates the URL and changes the content displayed on the page, without requiring a full page reload. ex:React Routing,Next Js , All spa frame work and library.
Server-side routing, on the other hand, is when the routing is handled by the server. When a user clicks on a link, the browser makes an HTTP request to the server with the new URL. The server then processes the request and returns the appropriate content for that URL. 
Older aaplication load entire : home ,about, contact, these diffrent pages.

In summary, client-side routing is more efficient for user experience but less efficient for larger application, while server-side routing is more efficient for larger application but less efficient for user experience.

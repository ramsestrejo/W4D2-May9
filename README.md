
#User Authentication

##Managing State in HTTP
Today we reviewed TCP/IP as a suite of protocols that power the web. We explored the nature of requests and responses that allow clients and server to exchange information through the HTTP protocol.

Cookies travel in the request header, response header and through our DevTools. Cookies are:
1. Used to indicate information about a "client" (ie browser / user profile)
2. Represented through key-value pairs
3. Stored on the client file system (accessed by Browser, tools)
4. Readable/Writable by the client
5. Readable/Writable by the the server (eg: "Set-Cookie" response header)
6. Transmitted by browser with every HTTP request (HTTP via "Cookie" header). Since it can be tampered, it should not be trusted with critical mission data and HTTPS should be used.
7. Domain specific: It would not make sense for news.ycombinator.com to be able to read my facebook.com cookies

##Demos
We used two different mini projects to demo:

The first one was for switching preferred language. We demo'd using a lang cookie to switch between the preferred language for a user/browser. The user could click English or French to toggle their lang cookie.

The second one was for login/authentication. We implemented a simple authentication where cookies are used to store the username. Not ideal, but we stored the username in a cookie, which we used as indicator for a user to be 'logged in'. We also managed to hash passwords using bcrypt. Remember to use the (sync) compare method in bcrypt to check passwords, and do not try to compare directly.

##Additional Info
Token authentication stores random/unique token created upon authentication in a cookie.
Companies use cookies extensively for tracking user activity.


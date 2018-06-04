# How The Web Works Solutions

1.  What is HTTP?

    HTTP stands for Hypertext Transfer Protocol which defines how messages are formatted and transmitted between computers.

2.  What is a URL?

    A URL means 'Uniform Resource Locator' which is a reference to a resource on the web, specifying the resource's location on a a computer network

3.  What is TCP?

    Means Transmission Control Protocol, which is a protocol which dictates how packets of data are transmitted across network and reassembled once all the data reaches the destination or does something if an error occurs

4.  What is IP?

    An IP stands for Internet Protocol and is the principal communication protocol for relaying data between networks of computers

5.  What is DNS?

    DNS stands for Domain Name System which is a decentralized naming system for computers/servers connected to the Internet or a Private Network. DNS associates information to participating entities such as assigning a domain name to an IP address

6.  What is idempotent?

    Means that one input gets you only one specific output

7.  What is a query string?

    A query string is a string of text attached to a path name in the client request that tells the server to run some logic in its response to the client

8.  What is a path or route?

    A path or route is an address to some file that is on the server with the same path name which the server can return as a response

9.  List four HTTP Verbs and their use cases.
    GET - gets a file that the request is looking for
    POST - posts something to a database on the server
    PUT - updates something on a database on the server
    DELETE - delete something on a database on the server

10. What is a client?

    A client is the computer requesting information or files

11. What is a server?

    A server is a computer that responds to client requests with information or files

12. What is an HTTP request?

        An HTTP request is a package of data that gets sent by client computers to servers which

    has information about what the client is requesting

13. What is an HTTP response?

    The response is the package of data that gets sent by servers in response to HTTP requests from clients

14. What is an HTTP header? Give a couple examples of request and response headers you have seen.

    An HTTP header is meta-data about the HTTP request / response. An HTTP header consists of its case-insensitive name followed by a colon ':', then by its value (without line breaks). (MDN)

    ```HTML
    200 OK
    Access-Control-Allow-Origin: *
    Connection: Keep-Alive
    Content-Encoding: gzip
    Content-Type: text/html; charset=utf-8
    ```

15) What is REST?

    REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. (codeacademy)

16) What is JSON?

    Stands for Javascript Object Notation, is a data format consisting of key-value pairs adapted from javascript objects.

17) What happens when you type in "Hello World" in google.com and press enter?

    Google sends back a response in the form of HTML and other data with its search results for the term "Hello World" from its database

18) What does it mean when we say the web is "stateless"?

    The web is stateless means that the web does not remember requests and responses passed between computers after they are performed

19) What is curl?

    A library that provides a command line tool for transfering data using various protocols

20) Make a GET request to http://omdbapi.com?t=titanic using curl (your answer should be the curl command required).

    `curl http://omdbapi.com?t=titanic`

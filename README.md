#A Simple Node Server for the DiceCamp Final Project 

##Overview:
This is a very simple web app written in Node.js using express framework. By default, it runs on port 3002. Dockerfile and Docker-compose files are part of this repository.
Here's an example of caling it via Curl:
curl -v -X GET http://localhost:3002/generate-file
When this url is hit, it generates a random bse64 encoded text file at /serverdata and returns the content of the file along with its checksum (SHA256) in X-Checksum header  

Here is an example of a complete output:

irfan@irfan-4180b39:~$ curl -v -X GET http://localhost:3002/generate-file
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying 127.0.0.1:3002...
* Connected to localhost (127.0.0.1) port 3002 (#0)
> GET /generate-file HTTP/1.1
> Host: localhost:3002
> User-Agent: curl/7.81.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< X-Checksum: 26cb3e826d18668ae6bce174efa2c361124f6ec4a06aa32cfa7a7d262cb90d8b
< Content-Disposition: attachment; filename="randomData.txt"
< Accept-Ranges: bytes
< Cache-Control: public, max-age=0
< Last-Modified: Sun, 08 Sep 2024 11:53:47 GMT
< ETag: W/"558-191d17ba7d2"
< Content-Type: text/plain; charset=UTF-8
< Content-Length: 1368
< Date: Sun, 08 Sep 2024 11:53:47 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< 
qT4xNSsfua0PTVRWerzxOB8lzcOwS6UM35TFJaNzjyz/frFYq4SNgZ8mm+YuXH2ctjOpqfCEE8MG+zokGnvarlGZAkzqLh/rqE2tBQIWscw+JelIkDy3IJhXwQ6nr9XZlHVQFxwKMT8gIhiSZn/rI1vGN3srUbM+G2jdAzQj6a94iRU8+BaCyCVgnbBdNALyygKGOL+XcdgsR9Gj6Y36ntjQ1OVe+uORUyfvcaZFSLFCAr3G92xDw22BG8r59taZn5z5AqRnQ+eMeT56EthaSFwcVMv5hBILfQ9Fi3wQcA1HxsC6Si8tqhig/sDfsOILCBXbCOtb5sBC+GUqR3e/qKb4T2U5QHqi78blbKDKiDvnz81eMCnlQLW+p0C4NLEPC925Bpr+KwTyWWXujKDci81scrxQ1pqGOf8tyR4hdC6LcF133+hAVORcD0PKIBZQqsYsb35SsfWBWjPOMszNoCZpA1/E+FPh98r2XFJ6DWauxarEFxRUYb4j6jp11snT4QyhFXSwItwoIc7+iN00754LP3W26FBIQBIiNonQNfjqWFqxxe16pqJEHMTVtwz+EWHmd4ThhgH3gD+WlzFcbYP6wro6L8DTmz/OLEsnhyTGD8ooGUC/36xAxikPCKInFVsQk2juyAocWQ88WXbycryMRDzIJaIehUIjMapGdPQeNyuBp2V5mwsLoCCNANHHM5NC0Ah75GJXpyXVIsXLKXzIpdXWtNk9BTbYA5L9v07knXIlPpdSV7eo/HNogrsXhSQYp2Prvprh69GPMLB95HutwueAMdYWO+oqFnXjrREdAnPSh0EIiQQVAbUbOnfBwvENO3TDsXuOXxXw2UawqyJOemLqZW4pNMwYwYm70rqRep7iiYenoXZpE6XrMKsst4FuVq2iXfwixBeRf80mYpxna2HnRWN6UzITN+UrL8vuxZhDjoLPK1qUM00DMcCUyR0P38LiFyEvBQCcFcPHqOHjqCb2LeYDdocOXvr67mGrICuaPh8XCcodorHMV75i* Connection #0 to host localhost left intact
Ju+9VjRBzODDjzB5R63LFm5muCwZUCgJOBFcEJcrdrI8YQ4YFQWpOMq/YIVxp8d8hUmnZK/uSNcH9GxEYkuJPc8DDVtTt28x8BoJThurGR/EBdDZKT7vozpNbKivlX+gJOeVCpQW8ePrnjcrfsisBm87M2mw8UH84aeuz4XCcPCdz/vdDIU3ufMH28wX82uGoXWfuRpyRV5qEUHRws8K2QTZsCscwutAAA9k1+0mkIf3wHwFYyPMkhi7YenH/ntQ5qOtWP8R9yTNWxRKU3ydkssgqsp54D/wydZ+ajOdequC+mu1ozSr26sx7HRbSf2JPoiqMCmhs47JcYpRMTg8KQ=

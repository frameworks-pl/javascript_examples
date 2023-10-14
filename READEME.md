# JavaScript examples #
Simple examples of JavaScript, some of them can be run directly from local file system, some require running server as otherwise browser will complain about CORS issue.

## WebGL example ##
This example uses [https://github.com/xeokit/xeokit-sdk](https://github.com/xeokit/xeokit-sdk "https://github.com/xeokit/xeokit-sdk")

Sample model comes from: [https://openifcmodel.cs.auckland.ac.nz/](https://openifcmodel.cs.auckland.ac.nz/ "https://openifcmodel.cs.auckland.ac.nz/")

`npm i @xeokit/xeokit-sdk`
`npm i http-server`

To run it:

1. Install packages	
 
	`npm install`

2. Run local server

	`npx http-server`

3. Navigate to page

	`http://localhost:<poart>/webgl.html   
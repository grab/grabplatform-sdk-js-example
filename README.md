# GrabID Javascript SDK Demo Project

This demo is intended to show off some of the core scenarios for which you may want to use the GrabId JavaScript SDK.

You can find the SDK referenced for this project here: [GrabID Javascript SDK](https://github.com/grab/grabplatform-sdk-js)

You can find this demo running live here: [Live Demo](https://d3jzjbsmy9pkbd.cloudfront.net/)

The relevant points of integration with the SDK can be found in these places:

[Requesting Authorization](./src/components/AskForRide.js)

[Receiving the result of the authorization request and redirecting appropriately](./public/token.html)

[Getting a token and using it to make an authenticated call](./src/components/ConfirmRide.js)

Everything else in the repository is just there to make it feel more like a "real" site. The areas listed above are the only places where this demo implements the GrabID SDK.

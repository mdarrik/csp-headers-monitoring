const libHoney = require('libhoney')
const honeycomb = new libHoney({
    writeKey: process.env.HONEYCOMB_API_KEY,
    dataset: process.env.HONEYCOMB_DATA_SET,
})
exports.handler = async (event, context) => {
    const honeycombEvent = honeycomb.newEvent()
    honeycombEvent.add({
        functionName: context.functionName,
        functionVersion: context.functionVersion,
        requestId: context.awsRequestId,
        userId: event.UserId,
        userAction: event.UserAction,
        body: event.body
    })
    await honeycombEvent.send();
    return {
        headers: {
            "Access-Control-Allow-Origin": "https://www.darrik.dev",
        },
        statusCode: 200,
        body: "CSP data sent!"
    }
}
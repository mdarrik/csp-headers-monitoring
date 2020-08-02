exports.handler = async (event, context) => {
    console.log(event.body)
    return {
        headers: {
            "Access-Control-Allow-Origin": "https://www.darrik.dev",
        },
        status: 200,
        body: "CSP data sent!"
    }
}
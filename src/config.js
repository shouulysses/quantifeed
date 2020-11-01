const config = {
    inputFile: "./full.log",
    outputFile: "output.csv",
    skipHeartbeat: true,
    showExecutionOnly: true,
    outputFields: [{
        header: "Message Type",
        tag: 35,
        show: false
    }, {
        header: "Sending Time",
        tag: 52,
        show: false
    }, {
        header: "Sequence Number",
        tag: 34,
        show: false
    }, {
        header: "Stock Code",
        tag: 55,
        show: true
    }, {
        header: "Ordered Quantity",
        tag: 38,
        show: false
    }, {
        header: "Transaction Quantity",
        tag: 32,
        show: true
    }, {
        header: "Transaction Price",
        tag: 31,
        show: true
    }, {
        header: "Transaction Side",
        tag: 54,
        show: true
    }, {
        header: "Account",
        tag: 1,
        show: true
    }, {
        header: "Transaction Reference ID",
        tag: 11,
        show: true
    }, {
        header: "Transaction Time",
        tag: 60,
        show: true
    }, {
        header: "Order Status",
        tag: 39,
        show: false
    }]
}

export { config }; 
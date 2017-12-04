let startArray= [
        "first",
        "second",
        "third",
        "fourth",
        "Masters Academy",
        "MMM aaS"
    ],
    finalArray=[];

finalArray = startArray.map(function(element, index) {
    counterA=(element.toLowerCase().match(/a/g)||[0]);
    counterM=(element.toLowerCase().match(/m/g)||[0]);
    if (Object.keys(counterA).length === Object.keys(counterM).length) {
        return 1
    } else {
        return 0
    }
});
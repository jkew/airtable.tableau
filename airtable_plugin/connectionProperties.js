(function propertiesBuilder(attr) {
    //This script is only needed if you are using a JDBC driver.
    var params = {};

    // Set keys for properties needed for connecting using JDBC.
    // Set connection properties from existing attributes.
    params["key"] = attr[connectionHelper.attributePassword];
    params["base"] = attr[connectionHelper.attributeDatabase];
    //params["table"] = "Breeding%20Plants";

    var formattedParams = [];
    for (var key in params) {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }
    return formattedParams;
})
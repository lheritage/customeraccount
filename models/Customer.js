var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('Customer', {
    "connector": "memory",
    "fields": {
        "customerid": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "address": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;
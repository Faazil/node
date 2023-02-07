(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    console.log("kkkkkkkkkkkkkkk line 5")

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        console.log("kkkkkkkkkkk get schema")
        // var cols = [{
        //     id: "id",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
        //     id: "mag",
        //     alias: "magnitude",
        //     dataType: tableau.dataTypeEnum.float
        // }, {
        //     id: "title",
        //     alias: "title",
        //     dataType: tableau.dataTypeEnum.string
        // }, {
        //     id: "location",
        //     dataType: tableau.dataTypeEnum.geometry
        // }];

        var cols = [{
            id: "project",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "status",
            alias: "status",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "securityhotspot",
            alias: "security hotspot",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "vulnerabilities",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "reliability_rating",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "coverage",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "violations",
            dataType: tableau.dataTypeEnum.string
        },{
            id: "new_line_coverage",
            dataType: tableau.dataTypeEnum.string
        }


    ];

        var tableSchema = {
            id: "earthquakeFeed",
            alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        
        // $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function(resp) {
            $.getJSON("http://localhost:3003/url", function(resp) {
            var feat = resp,
                tableData = [];
                console.log("kkkkkkkkk getdata usgs")
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "project": feat[i].projectDetails?.data?.key,
                    "status": feat[i].status,
                    "securityhotspot": feat[i].severity?.measures[0]?.value,
                    "vulnerabilities": feat[i].severity?.measures[1]?.value,
                    "reliability_rating": feat[i].severity?.measures[2]?.value,
                    "coverage": feat[i].coverage?.[0]?.value,
                    "violations": feat[i].coverage?.[1]?.value,
                    "new_line_coverage": feat[i].coverage?.[2]?.value
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {

            console.log("kkkkkkkkkkkkkkkkk readyclcikkked")
            debugger
            tableau.connectionName = "USGS Earthquake Feed"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();

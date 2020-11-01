import { tags } from "./tags";
import { config } from './config';
import fs from "fs";
import * as _ from 'lodash';

const fixToCsv = (config, tags) => {
    let data = fs.readFileSync(config.inputFile, 'utf8').split('\n');
    // Creating an array of logs separated with line break
    const splittedLines = [];
    _.each(data, line => {
        splittedLines.push(line.split('|'));
    });
    /* Separate each array of logs into parts of key value pairs
    Then based on tag definition, create a translated array that can be read by human
     */
    const resultArray = [];
    _.each(splittedLines, splittedLine=> {
        let resultObject = {};
        _.each(splittedLine, line => {
            let indexOfEqualSign = line.indexOf('=');
            let keyLocation = line.substring(0, indexOfEqualSign);
            let valueLocation = line.substring(indexOfEqualSign + 1);
            let key = _.get(tags, `${keyLocation}.name`);

            let value = _.get(tags,`${keyLocation}.values`)
            ? _.get(tags, `${keyLocation}.values.${valueLocation}`)
            : valueLocation;
            resultObject[key] = value;
        });
        // show only execution if showExecutionOnly is true
        // Ignore heartbeat if skipHeartbeat is true
        if(!config.skipHeartbeat || resultObject.MsgType != "Heartbeat") {
            if (resultObject.MsgType == "Execution Report" || !config.showExecutionOnly) {
                resultArray.push(resultObject)
            } 
        };
    })
    
    // Creating new string excel out put
    let excelOutput = "";
    // Adding csv header into the output accoridng to config settings
    _.each(config.outputFields, field => {
        if (field.show) {
            excelOutput += `${field.header},`;
        }
    });
    excelOutput += "\n";

    // Adding content into the output according to config settings
    _.each(resultArray, resultObject => {
        _.each(config.outputFields, field => {
            if (field.show) {
                excelOutput += `${_.get(resultObject, tags[field.tag].name, "")},`;
            }
        })
        excelOutput += "\n";       
    });

    // Output the file
    fs.writeFileSync(config.outputFile, excelOutput, (err) => {
        if (err) return console.log(err);
    })

   // console.log("T//ags", tags[0]);
}

fixToCsv(config, tags);
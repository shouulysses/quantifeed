## A javascript application to turn FIX logs into csv file

## Installation

````sh
npm install
````

**Local usage**

````sh
npm run start
````

**Files explained**

index.js: main application

config.js: configurable config file for turning FIX logs into CSV

tags.js: a file storing FIX tags

**Config file explained**

inputFile: The location of the log file to be extracted

outputFile: The name of the csv file to be outputted

skipHeartbeat: Set as true to skip all heartbeat messages

showExectuionOnly: Set as true to show only execution report messages

outFields:

- header: CSV header name to be shown on the csv

- tag: The tag number of the FIX for the data wanted

- show: Set as true to make the field available in the csv



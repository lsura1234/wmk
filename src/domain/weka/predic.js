import { get } from "lodash";
import weka from "../../../node_modules/node-weka/lib/weka-lib";
import fs from "fs";
import csvParser from "csv-parser";
import csvWriter from "csv-writer";
const predict = body => {
  const data = body;
  console.log("TCL: predict -> data", data);

  const createCsvWriter = require("csv-writer").createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: "src/domain/weka/out.csv",
    header: [
      { id: "ans1", title: "SEX" },
      { id: "ans2", title: "Year of study" },
      { id: "ans3", title: "Branch" },
      { id: "ans4", title: "GPA Before University" },
      { id: "ans5", title: "Telephone service fee per month" },
      { id: "ans6", title: "Start use SmartPhone" },
      { id: "ans7", title: "Use Smartphone per day" },
      { id: "ans8", title: "time to play smartphone in 1 day" },
      { id: "ans9", title: "place to use smartphone" },
      {
        id: "ans10",
        title: "use smartphone for search and activity in classroom"
      },
      {
        id: "ans11",
        title: "use smartphone for search knowledge unknown outside classroom"
      },
      {
        id: "ans12",
        title:
          "Use smartphone to take pictures of powerpoint instead of short note"
      },
      {
        id: "ans13",
        title: "use smartphone for contact and ask about studying with friend"
      },
      {
        id: "ans14",
        title: "Duration of sneaking of a smartphone in the classroom"
      },
      {
        id: "ans15",
        title:
          "The main objective of secretly using a smartphone in the classroom"
      },
      {
        id: "ans16",
        title: "The moment when secretly using a smartphone in the classroom"
      },
      {
        id: "ans17",
        title:
          "Use smartphone for presentations and assignments in front of the class"
      },
      {
        id: "ans18",
        title:
          "Use a smartphone to contact and ask teachers about learning matters"
      },
      { id: "ans19", title: "GPA" }
    ]
  });
  const Mockdata = [
    {
      ans1: "male",
      ans2: "4",
      ans3: "IT_KMUTNB",
      ans4: 'BAD',
      ans5: 'more than 900',
      ans6: '5 to 8 year',
      ans7: '3 to 5 hour',
      ans8: '06.01 PM - 00.00 AM',
      ans9: "dorm",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: 'less than half of class time',
      ans15: 'social media',
      ans16: 'Practice Course',
      ans17: "sometimes",
      ans18: "always",
      ans19: '\'(-inf-2.5]\'',
    }
  ];

  csvWriter
    .writeRecords(Mockdata)
    .then(() => console.log("The CSV file was written successfully"));
    // let cmd ='java -classpath "src/domain/weka/weka.jar" weka.core.converters.CSVLoader balance_csv.csv > un_balance.arff';
    let cmd = 'java -classpath "src/domain/weka/weka.jar" weka.classifiers.trees.RandomForest -T "src/domain/weka/3-SMOTE.arff" -l "src/domain/weka/ModelRamdomForest.model" -p 0';
    execShellCommand(cmd);
    // let cmd1 ='java -classpath "weka.jar" weka.classifiers.trees.J48 -t balance-scale.arff -split-percentage 80 -d balance.model';
  return console.log("The CSV file was written successfully");
};
const execShellCommand =async (cmd) => {
  const exec = require('child_process').exec;
  return await((resolve, reject) => {
   exec(cmd, (error, stdout, stderr) => {
    if (error) {
     console.warn(error);
    }
    resolve(stdout? stdout : stderr);
   });
  });
 }
export default predict;

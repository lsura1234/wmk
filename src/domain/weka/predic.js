import { get } from "lodash";
import weka from "../../../node_modules/node-weka/lib/weka-lib";
import fs from "fs";
import csvParser from "csv-parser";
import csvWriter from "csv-writer";
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const predict = async body => {
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
      ans2: "1",
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
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "2",
      ans3: "ITI",
      ans4: 'GOOD',
      ans5: '600 to 900',
      ans6: 'more than 8 year',
      ans7: '5 to 7 hour',
      ans8: '06.01 AM - 00.00 PM',
      ans9: "home",
      ans10: "always",
      ans11: "always",
      ans12: "sometimes",
      ans13: "sometimes",
      ans14: 'half of class time',
      ans15: 'internet',
      ans16: 'lecture',
      ans17: "never",
      ans18: "never",
      ans19: "'(2.5-inf)'"
    },
    {
      ans1: "female",
      ans2: "3",
      ans3: "Business Computer",
      ans4: 'BAD',
      ans5: 'less than 300',
      ans6: '3 to 5 year',
      ans7: '3 to 5 hour',
      ans8: '00.01 PM - 06.00 PM',
      ans9: "computer lab",
      ans10: "never",
      ans11: "never",
      ans12: "never",
      ans13: "never",
      ans14: 'more than half of class time',
      ans15: 'call',
      ans16: 'presentation',
      ans17: "always",
      ans18: "sometimes",
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "4",
      ans3: "comsci",
      ans4: 'BAD',
      ans5: '300 to 600',
      ans6: 'less than 3 year',
      ans7: 'up to 7 hour',
      ans8: '00.01 AM - 06.00 AM',
      ans9: "restaurants",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: 'less than half of class time',
      ans15: 'play game',
      ans16: 'Practice Course',
      ans17: "always",
      ans18: "always",
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "Computer Education",
      ans4: 'BAD',
      ans5: 'more than 900',
      ans6: '5 to 8 year',
      ans7: 'less than 3 hour',
      ans8: '06.01 PM - 00.00 AM',
      ans9: "Around the university ",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: 'less than half of class time',
      ans15: 'email',
      ans16: 'group work',
      ans17: "sometimes",
      ans18: "always",
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "Computer Engineering",
      ans4: 'BAD',
      ans5: 'more than 900',
      ans6: '5 to 8 year',
      ans7: '3 to 5 hour',
      ans8: '06.01 PM - 00.00 AM',
      ans9: "everywhere",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: 'less than half of class time',
      ans15: 'entertain',
      ans16: 'Practice Course',
      ans17: "sometimes",
      ans18: "always",
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "IT_RMUTT",
      ans4: 'BAD',
      ans5: 'more than 900',
      ans6: '5 to 8 year',
      ans7: '3 to 5 hour',
      ans8: '06.01 PM - 00.00 AM',
      ans9: "home",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: 'less than half of class time',
      ans15: 'social media',
      ans16: 'Practice Course',
      ans17: "sometimes",
      ans18: "always",
      ans19: "'(-inf-2.5]'"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "Educational Information Technology",
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
      ans19: "'(-inf-2.5]'"
    }
  ];

  csvWriter
    .writeRecords(Mockdata)
    .then(() => console.log("The CSV file was written successfully"));
    let cmd ='java -classpath "src/domain/weka/weka.jar" weka.core.converters.CSVLoader "src/domain/weka/out.csv"> "src/domain/weka/out.arff" -N "2"';
    let res1 = await execShellCommand(cmd);
    console.log("TCL: res1", res1)
    // let cmd = 'java -classpath "src/domain/weka/weka.jar" weka.classifiers.trees.RandomForest -T "src/domain/weka/3-SMOTE.arff" -l "src/domain/weka/ModelRamdomForest.model" -p 0';
    cmd = 'java -classpath "src/domain/weka/weka.jar" weka.classifiers.trees.RandomForest -T "src/domain/weka/out.arff" -l "src/domain/weka/ModelRamdomForest.model" -p 0';
    let res2 = await execShellCommand(cmd);
    console.log("TCL: res2", res2)
    // let cmd1 ='java -classpath "weka.jar" weka.classifiers.trees.J48 -t balance-scale.arff -split-percentage 80 -d balance.model';
  return console.log("Success Process Predicted");
};

const execShellCommand =async (cmd) => {
  const { stdout, stderr } = await exec(cmd);
  // console.log('stdout:', stdout);
  // console.log('stderr:', stderr);
  return stdout ? stdout : stderr;
 }
export default predict;

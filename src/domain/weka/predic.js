import { get } from "lodash";
import sequelize from "sequelize";
import brandRepository from "../../cores/resources/brand/brand.repository";
import studentData from "../../cores/resources/studentData/studentData.repository";
import studentDataRepository from "../../cores/resources/studentData/studentData.repository";
import studentHistoryRepository from "../../cores/resources/studentHistory/studentHistory.repository";
import sexRepository from "../../cores/resources/sex/sex.repository";
import yearRepository from "../../cores/resources/year/year.repository";

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const predict = async (body, ctx) => {
  const data = body;

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
      ans4: "BAD",
      ans5: "more than 900",
      ans6: "5 to 8 year",
      ans7: "3 to 5 hour",
      ans8: "06.01 PM - 00.00 AM",
      ans9: "dorm",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: "less than half of class time",
      ans15: "social media",
      ans16: "Practice Course",
      ans17: "sometimes",
      ans18: "always",
      ans19: "(-inf-2.5]"
    },
    {
      ans1: "female",
      ans2: "2",
      ans3: "ITI",
      ans4: "GOOD",
      ans5: "600 to 900",
      ans6: "more than 8 year",
      ans7: "5 to 7 hour",
      ans8: "06.01 AM - 00.00 PM",
      ans9: "home",
      ans10: "always",
      ans11: "always",
      ans12: "sometimes",
      ans13: "sometimes",
      ans14: "half of class time",
      ans15: "internet",
      ans16: "lecture",
      ans17: "never",
      ans18: "never",
      ans19: "(2.5-inf)"
    },
    {
      ans1: "female",
      ans2: "3",
      ans3: "Business Computer",
      ans4: "BAD",
      ans5: "less than 300",
      ans6: "3 to 5 year",
      ans7: "3 to 5 hour",
      ans8: "00.01 PM - 06.00 PM",
      ans9: "computer lab",
      ans10: "never",
      ans11: "never",
      ans12: "never",
      ans13: "never",
      ans14: "more than half of class time",
      ans15: "call",
      ans16: "presentation",
      ans17: "always",
      ans18: "sometimes",
      ans19: "(-inf-2.5]"
    },
    {
      ans1: "female",
      ans2: "4",
      ans3: "Computer Education",
      ans4: "BAD",
      ans5: "300 to 600",
      ans6: "less than 3 year",
      ans7: "up to 7 hour",
      ans8: "00.01 AM - 06.00 AM",
      ans9: "restaurants",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: "less than half of class time",
      ans15: "play game",
      ans16: "Practice Course",
      ans17: "always",
      ans18: "always",
      ans19: "(-inf-2.5]"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "Computer Engineering",
      ans4: "BAD",
      ans5: "more than 900",
      ans6: "5 to 8 year",
      ans7: "less than 3 hour",
      ans8: "06.01 PM - 00.00 AM",
      ans9: "Around the university ",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: "less than half of class time",
      ans15: "email",
      ans16: "group work",
      ans17: "sometimes",
      ans18: "always",
      ans19: "(-inf-2.5]"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "IT_RMUTT",
      ans4: "BAD",
      ans5: "more than 900",
      ans6: "5 to 8 year",
      ans7: "3 to 5 hour",
      ans8: "06.01 PM - 00.00 AM",
      ans9: "everywhere",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: "less than half of class time",
      ans15: "entertain",
      ans16: "Practice Course",
      ans17: "sometimes",
      ans18: "always",
      ans19: "(-inf-2.5]"
    },
    {
      ans1: "female",
      ans2: "5",
      ans3: "Educational Information Technology",
      ans4: "BAD",
      ans5: "more than 900",
      ans6: "5 to 8 year",
      ans7: "3 to 5 hour",
      ans8: "06.01 PM - 00.00 AM",
      ans9: "home",
      ans10: "sometimes",
      ans11: "sometimes",
      ans12: "always",
      ans13: "always",
      ans14: "less than half of class time",
      ans15: "social media",
      ans16: "Practice Course",
      ans17: "sometimes",
      ans18: "always",
      ans19: "(-inf-2.5]"
    }
    // {
    //   ans1: "female",
    //   ans2: "5",
    //   ans3: "Educational Information Technology",
    //   ans4: 'BAD',
    //   ans5: 'more than 900',
    //   ans6: '5 to 8 year',
    //   ans7: '3 to 5 hour',
    //   ans8: '06.01 PM - 00.00 AM',
    //   ans9: "dorm",
    //   ans10: "sometimes",
    //   ans11: "sometimes",
    //   ans12: "always",
    //   ans13: "always",
    //   ans14: 'less than half of class time',
    //   ans15: 'social media',
    //   ans16: 'Practice Course',
    //   ans17: "sometimes",
    //   ans18: "always",
    //   ans19: "(-inf-2.5]"
    // }
  ];
  Mockdata.push(data);
  console.log("TCL: data", data);

  csvWriter
    .writeRecords(Mockdata)
    .then(() => console.log("The CSV file was written successfully"));
  let cmd =
    'java -classpath "src/domain/weka/weka.jar" weka.core.converters.CSVLoader "src/domain/weka/out.csv"> "src/domain/weka/out.arff" -N "2"';
  let res1 = await execShellCommand(cmd);
  // console.log("TCL: res1", res1)
  // let cmd = 'java -classpath "src/domain/weka/weka.jar" weka.classifiers.trees.RandomForest -T "src/domain/weka/3-SMOTE.arff" -l "src/domain/weka/ModelRamdomForest.model" -p 0';
  cmd =
    'java -classpath "src/domain/weka/weka.jar" weka.classifiers.trees.RandomForest -T "src/domain/weka/out.arff" -l "src/domain/weka/ModelRamdomForest.model" -p 0';
  const res2 = await execShellCommand(cmd);
  console.log("TCL: res2", res2);

  let GPA = res2.substr(430, 70).trim();
  let prob = res2.substr(460, 30).trim();
  GPA = GPA.substr(15, 10).trim();

  //data base
  // console.log('data is => ',data)
  const studentDataId = get(data, "stuId", null);
  const sexName = get(data, "ans1", null);
  const yearName = get(data, "ans2", null);
  const brandName = get(data, "ans3", null);
  const GPABefore = get(data, "ans4", null);
  const servicePerMonth = get(data, "ans5", null);
  const startUseSP = get(data, "ans6", null);
  const useSPPerDay = get(data, "ans7", null);
  const timeToPlaySPInDay = get(data, "ans8", null);
  const placeUseSP = get(data, "ans9", null);
  const searchInClass = get(data, "ans10", null);
  const searchOutClass = get(data, "ans11", null);
  const takePhotoPowerPoint = get(data, "ans12", null);
  const contactAboutClass = get(data, "ans13", null);
  const timeSneakingInClass = get(data, "ans14", null);
  const mainToUseSP = get(data, "ans15", null);
  const momentWhereUseSp = get(data, "ans16", null);
  const useSPPresentOrAssignment = get(data, "ans17", null);
  const contactTeacher = get(data, "ans18", null);
  const studentName = get(data, "studentName", null);
  if (
    !sexName ||
    !yearName ||
    !brandName ||
    !GPABefore ||
    !servicePerMonth ||
    !startUseSP ||
    !useSPPerDay ||
    !timeSneakingInClass ||
    !timeToPlaySPInDay ||
    !placeUseSP ||
    !searchInClass ||
    !searchOutClass ||
    !takePhotoPowerPoint ||
    !contactAboutClass ||
    !mainToUseSP ||
    !momentWhereUseSp ||
    !useSPPresentOrAssignment ||
    !contactTeacher ||
    !studentDataId ||
    !studentName
  ) {
    ctx.status = 400;
    return {
      error: {
        message: "error 400 Bad request"
      }
    };
  }

  const brandData = await brandRepository.findOne({ name: brandName });
  const { brandId } = brandData;
  const sexData = await sexRepository.findOne({ name: sexName });
  const { sexId } = sexData;
  const yearData = await yearRepository.findOne({ name: yearName });
  const { yearId } = yearData;

  const studentDataRes = await studentDataRepository.findOne({ studentDataId });

  if (studentDataRes) {
    await studentData.updateBy(
      { studentDataId },
      {
        name: studentName,
        yearId,
        sexId,
        brandId
      }
    );
  } else {
    await studentDataRepository.create({
      studentDataId,
      name: studentName,
      yearId,
      brandId,
      sexId
    });
  }
  await studentHistoryRepository.create({
    GPABefore,
    servicePerMonth,
    startUseSP,
    useSPPerDay,
    timeToPlaySPInDay,
    placeUseSP,
    searchInClass,
    searchOutClass,
    takePhotoPowerPoint,
    contactAboutClass,
    timeSneakingInClass,
    mainToUseSP,
    momentWhereUseSp,
    useSPPresentOrAssignment,
    contactTeacher,
    GPA,
    studentDataId
  });
  const historyData = await studentHistoryRepository.findBy(
    {},
    {
      group: ["GPA"],
      attributes: ["GPA", [sequelize.fn("COUNT", "GPA"), "count"]]
    }
  );

  // let cmd1 ='java -classpath "weka.jar" weka.classifiers.trees.J48 -t balance-scale.arff -split-percentage 80 -d balance.model';

  return { data: { GPA, historyData, prob } };
};

const execShellCommand = async cmd => {
  const { stdout, stderr } = await exec(cmd);
  return stdout ? stdout : stderr;
};
export default predict;

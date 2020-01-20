import studentDataRepository from "../../cores/resources/studentData/studentData.repository";

const getOneData = async (ctx, studentDataId) => {
  const resp =await studentDataRepository.findBy(
    { studentDataId },
    { scope: ["studentData_studentHistory"] }
  );
  
  return { data: resp };
};
export default getOneData;

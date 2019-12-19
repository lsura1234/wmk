import { get } from "lodash";
import studentDataRepository from "../../cores/resources/studentData/studentData.repository";

const gteDataGraph = async (body, ctx) => {
  const brandId = get(body, "brandId", null);
  const yearId = get(body, "yearId", null);
  const sexId = get(body, "sexId", null);
  
  const where = { brandId, sexId, yearId };
  if (!brandId) delete where.brandId;
  if (!yearId) delete where.yearId;
  if (!sexId) delete where.sexId;
  const test = await studentDataRepository.findBy(
    where,
    { scope: ["studentData_studentHistory"] }
  );
  let goodGPA = 0;
  let badGPA = 0;
  test.map(data => {
    const GPA = get(
      data,
      `studentHistory[${data.studentHistory.length - 1}].GPA`,
      null
    );
    if (GPA === "(-inf-2.5]") badGPA += 1;
    else goodGPA += 1;
  });
  return {
    data: {
      goodGPA,
      badGPA
    }
  };
};

export default gteDataGraph;

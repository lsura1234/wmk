import { get, remove } from "lodash";
import studentDataRepository from "../../cores/resources/studentData/studentData.repository";

export default async (ctx, body) => {
  const brandId = get(body, "brandId", null);
  const yearId = get(body, "yearId", null);
  const sexId = get(body, "sexId", null);
  let GPA = Array.from( get(body, "GPA", null));
  if (!GPA) {
    ctx.status = 400;
    return {
      error: {
        message: "error 400 Bad request"
      }
    };
  }
  GPA.map(data => {
    if (data.toUpperCase() === "BAD") data = "(-inf-2.5]";
    else data = "(2.5-inf)";
  });

  const where = { brandId, sexId, yearId };
  if (!brandId) delete where.brandId;
  if (!yearId) delete where.yearId;
  if (!sexId) delete where.sexId;
  const studentData = await studentDataRepository.findBy(where, {
    scope: ["studentData_studentHistory"]
  });
  let studentDataRes = studentData.map(data => {
    const GPAData = get(
      data,
      `studentHistory[${data.studentHistory.length - 1}].GPA`,
      null
    );
    if (GPA[0] === GPAData || (GPA[1] || null === GPAData)) {
      const history = get(
        data,
        `studentHistory[${data.studentHistory.length - 1}]`
      );
      const tempData = data;
      delete tempData.studentHistory;
      tempData["studentHistory"] = history;
      return { studentData: tempData };
    }
  });
  studentDataRes = remove(studentDataRes, data => {
    return data;
  });
  return { data: studentDataRes };
};

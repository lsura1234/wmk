import brandRepository from "../../cores/resources/brand/brand.repository";
import sexRepository from "../../cores/resources/sex/sex.repository";
import yearRepository from "../../cores/resources/year/year.repository";

export default async ctx => {
  const sexDataList = await sexRepository.findBy();
  const brandDataList = await brandRepository.findBy();
  const yearDataList = await yearRepository.findBy();

  return { data: { sexDataList, brandDataList, yearDataList } };
};

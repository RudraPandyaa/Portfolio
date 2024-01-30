import dayjs from "dayjs";

const VijiFoodsJoiningDate = dayjs("2022-01-01");
const VijiFoodsLeavingDate = dayjs("2022-11-01");
const DevstreeJoiningDate = dayjs("2023-04-01");

export default function totalCorporateExperience() {
  const currentDate = dayjs();

  const totalExpInVijiFoods =
    VijiFoodsLeavingDate.diff(VijiFoodsJoiningDate, "month") + 1;

  const totalExpInDevstree = currentDate.diff(DevstreeJoiningDate, "month") + 1;

  function addMonthsAndFormat(months1: number, months2: number) {
    const resultDate = dayjs().add(months1 + months2, "month");

    const years = resultDate.diff(dayjs(), "year");
    const remainingMonths = resultDate.diff(
      dayjs().add(years, "year"),
      "month"
    );

    console.log(`${years} years ${remainingMonths} months`);

    return `${years} years ${remainingMonths} months`;
  }

  const totalExperience = addMonthsAndFormat(
    totalExpInVijiFoods,
    totalExpInDevstree
  );

  console.log("Total Experience:", totalExperience);

  return `Total of ${totalExperience} of experience in Corporate`;
}

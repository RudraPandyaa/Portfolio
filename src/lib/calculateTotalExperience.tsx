import dayjs from "dayjs";

const data = {
  vijiFoods: {
    joiningDate: dayjs("2022-01-01"),
    leavingDate: dayjs("2022-11-01"),
  },
  devstree: {
    joiningDate: dayjs("2023-04-01"),
    leavingDate: dayjs(),
  },
};

export default function totalCorporateExperience() {
  const currentDate = dayjs();

  const vijiFoodsJoiningDate = dayjs("2022-01-01");

  const vijiFoodsLeavingDate = dayjs("2022-11-01");

  const totalExpInVijiFoods = vijiFoodsLeavingDate.diff(
    vijiFoodsJoiningDate,
    "month"
  );

  //Including the current month in experience
  const VijiFoodsExp = totalExpInVijiFoods + 1;

  const joiningDateInDevstree = dayjs("2023-04-01");

  const totalExpInDevstreeinMonths = currentDate.diff(
    joiningDateInDevstree,
    "month"
  );

  // console.log("totalExpInDevstreeinMonths", totalExpInDevstreeinMonths);

  //Including the current month in experience
  const devstreeExp = totalExpInDevstreeinMonths + 1;

  // console.log("devstreeExp", devstreeExp);

  function addMonthsAndFormat(months1: any, months2: any) {
    const resultDate = dayjs().add(months1 + months2, "month");

    const years = resultDate.diff(dayjs(), "year");
    const remainingMonths = resultDate.diff(
      dayjs().add(years, "year"),
      "month"
    );

    console.log(`${years} years ${remainingMonths} months`);

    return `${years} years ${remainingMonths} months`;
  }

  const resp = addMonthsAndFormat(VijiFoodsExp, devstreeExp);

  console.log("resp", resp);

  return `Total of ${resp} of experience in Corporate`;
}

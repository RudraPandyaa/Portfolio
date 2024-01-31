{
  /* {Array.from("Faizanahmed").map((letter, index) => (
          <span
            className="animate-fade-in"
            style={{ "--ani-delay": `${index * 100}ms` }}
          >
            {letter}
          </span>
        ))} */
}
{
  /* <h1 className="text-5xl  font-bold">
          <span className="animate-fade-in [--ani-delay:100ms] opacity-0 translate-y-[-1rem]">
            F
          </span>
          <span className="animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
            a
          </span>
          <span className="animate-fade-in [--ani-delay:300ms] opacity-0 translate-y-[-1rem]">
            i
          </span>
          <span className="animate-fade-in [--ani-delay:400ms] opacity-0 translate-y-[-1rem]">
            z
          </span>
          <span className="animate-fade-in [--ani-delay:500ms] opacity-0 translate-y-[-1rem]">
            a
          </span>
          <span className="animate-fade-in [--ani-delay:600ms] opacity-0 translate-y-[-1rem]">
            n
          </span>
        </h1> */
  // const currentDate = new Date();
  // const startDate = new Date("April 2023");
  // const monthsDiff =
  //   (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  //   currentDate.getMonth() -
  //   startDate.getMonth();
  // const years = Math.floor(monthsDiff / 12);
  // const remainingMonths = monthsDiff % 12;
}

// ---------------------------------------------------------------

// import dayjs from "dayjs";

// const data = {
//   vijiFoods: {
//     joiningDate: dayjs("2022-01-01"),
//     leavingDate: dayjs("2022-11-01"),
//   },
//   devstree: {
//     joiningDate: dayjs("2023-04-01"),
//     leavingDate: dayjs(),
//   },
// };

// export default function totalCorporateExperience() {
//   const currentDate = dayjs();

//   const vijiFoodsJoiningDate = dayjs("2022-01-01");

//   const vijiFoodsLeavingDate = dayjs("2022-11-01");

//   const totalExpInVijiFoods = vijiFoodsLeavingDate.diff(
//     vijiFoodsJoiningDate,
//     "month"
//   );

//   //Including the current month in experience
//   const VijiFoodsExp = totalExpInVijiFoods + 1;

//   const joiningDateInDevstree = dayjs("2023-04-01");

//   const totalExpInDevstreeinMonths = currentDate.diff(
//     joiningDateInDevstree,
//     "month"
//   );

//   //Including the current month in experience
//   const devstreeExp = totalExpInDevstreeinMonths + 1;

//   function addMonthsAndFormat(months1: any, months2: any) {
//     const resultDate = dayjs().add(months1 + months2, "month");

//     const years = resultDate.diff(dayjs(), "year");
//     const remainingMonths = resultDate.diff(
//       dayjs().add(years, "year"),
//       "month"
//     );

//     console.log(`${years} years ${remainingMonths} months`);

//     return `${years} years ${remainingMonths} months`;
//   }

//   const resp = addMonthsAndFormat(VijiFoodsExp, devstreeExp);

//   console.log("resp", resp);

//   return `Total of ${resp} of experience in Corporate`;
// }

// ---------------------------

// useEffect(() => {
//   const calculateTotalExperience = async () => {
//     const totalExperience = await totalCorporateExperience();
//     setTotalExpText(totalExperience);
//   };

//   calculateTotalExperience();
// }, []);

// ---------------------------------------

{
  /* <UiWrapper>
        <div className="grid grid-cols-2 gap-4 ">
          <Card className="px-2 py-5">
            <CardTitle
              className="px-2 py-2
                "
            >
              Devstree It Services
            </CardTitle>
            <CardDescription className="px-2 py-2">
              Jr Software Developer | April 2023 - Present <br />
            </CardDescription>
          </Card>
          <Card className="px-2 py-5">
            <CardTitle
              className="px-2 py-2
                "
            >
              Viji Foods
            </CardTitle>
            <CardDescription className="px-2 py-2">
              Customer Service Team Lead | Jan 2022 - Nov 2022 <br />
            </CardDescription>
          </Card>
        </div>
      </UiWrapper> */
}

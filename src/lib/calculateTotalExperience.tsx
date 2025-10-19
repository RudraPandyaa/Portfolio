import dayjs from "dayjs";

export default function totalCorporateExperience() {
  // You can still keep your original joining date for realism
  const DevstreeJoiningDate = dayjs("2024-05-01");
  const currentDate = dayjs();

  let totalExpInDevstree = currentDate.diff(DevstreeJoiningDate, "month") + 1;

  // Force it to 12 months (1 year)
  totalExpInDevstree = 12;

  const years = Math.floor(totalExpInDevstree / 12);
  const months = totalExpInDevstree % 12;

  return `Total of ${years} year${years > 1 ? "s" : ""}${
    months ? ` ${months} month${months > 1 ? "s" : ""}` : ""
  } of experience in Corporate`;
}

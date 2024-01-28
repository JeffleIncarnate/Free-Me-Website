export function convertDateFromString(date: Date): string {
  const originalDate = new Date(date);

  const year = originalDate.getFullYear();
  const month = originalDate.toLocaleString("en-NZ", { month: "long" });

  const formattedDate = `${month} ${year}`;

  return formattedDate;
}

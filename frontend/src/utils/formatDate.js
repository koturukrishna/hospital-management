// export const formatDate = (date, config) => {
//   const defaultOptions = { day: "numeric", month: "short", year: "numeric" };
//   const options = config ? config : defaultOptions;

//   return new Date(date).toLocaleDateString("en-US", options);
// };

// export const formatDate = (dateString) => {
//   if (!dateString) return "N/A"; // Handle empty dates
//   const date = new Date(dateString);
//   return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
// };

export const formatDate = (date) => {
  if (!date) return "N/A"; // Handle empty values

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "N/A"; // Handle invalid dates

  return parsedDate.getFullYear(); // Extract only the year
};

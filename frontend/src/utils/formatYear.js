export const formatYear = (date) => {
  if (!date || isNaN(new Date(date).getTime())) return null; // Return null for invalid dates
  return new Date(date).getFullYear(); // Extract only the year
};

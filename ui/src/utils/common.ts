export const camelCaseToText = (input: string) => {
  const text = input
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

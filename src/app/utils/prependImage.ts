const URL = 'http://localhost:8080';
export const prependImage = (imageUrl: string): string => {
  if (!imageUrl) return '';
  return `${URL}${imageUrl}`;
};

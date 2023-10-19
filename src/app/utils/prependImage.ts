const URL = 'http://localhost:8080';
export const prependImage = (damId: number): string => {
  if (!damId) return '';
  return `${URL}/dam/profile-image/${damId}`;
};

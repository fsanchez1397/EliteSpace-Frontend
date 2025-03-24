export const formatCurrentTime = () => {
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${hours}:${formattedMinutes} ${period}`;
};

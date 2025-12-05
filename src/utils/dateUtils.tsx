export const formatDate = (dateString: string) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export const formatMonthOnly = (dateString: string) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
  };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export const calculateEstimatedDays = (
  createdAt: string,
  estDate: string
) => {
  if (!createdAt || !estDate) return "-";
  const created = new Date(createdAt);
  const estimated = new Date(estDate);
  const diffTime = Math.abs(estimated.getTime() - created.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (isNaN(diffDays)) return "-";
  return `${diffDays} days`;
}; 
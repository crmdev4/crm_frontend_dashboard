export const formatCurrency = (amount: number, locale: string = "id-ID") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // No decimals (optional)
  }).format(amount);
};
export const formatNumber = (amount: number, locale: string = "en-US", fractionDigits: number = 2) => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0, // No decimals (optional)
    maximumFractionDigits: fractionDigits, // Control the number of decimal places
  }).format(amount);
};

export const parseCurrency = (currencyString: string): number => {
  // Remove all non-digit characters except decimal point
  const cleanString = currencyString.replace(/[^\d.]/g, '');
  const parsed = parseFloat(cleanString);
  return isNaN(parsed) ? 0 : parsed;
};

// Format input value for display (e.g., "100000" -> "100.000")
export const formatInputCurrency = (value: string): string => {
  const cleanValue = value.replace(/[^\d]/g, '');
  if (!cleanValue) return '';
  
  const numValue = parseInt(cleanValue, 10);
  return numValue.toLocaleString('id-ID');
};

// Parse input value back to number (e.g., "100.000" -> 100000)
export const parseInputCurrency = (value: string): number => {
  const cleanValue = value.replace(/[^\d]/g, '');
  return parseInt(cleanValue, 10) || 0;
};

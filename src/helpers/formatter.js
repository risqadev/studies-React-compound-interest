const formatter = Intl.NumberFormat;
const locale = 'pt-BR';

function formatBRL(value) {
  return formatter(locale, {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function formatPercentage(value) {
  return formatter(locale, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export { formatBRL, formatPercentage };
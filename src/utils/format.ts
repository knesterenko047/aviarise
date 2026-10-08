/**
 * Hermes on this stack ships an incomplete Intl, so Number#toLocaleString
 * silently returns an ungrouped string. Group by regex instead.
 */
export function formatCredits(value: number): string {
  const whole = Math.max(0, Math.round(value)).toString();
  return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function pad2(value: number): string {
  return value < 10 ? '0' + value : String(value);
}

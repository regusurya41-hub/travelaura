export function budgetCalc(days, travelStyle = "balanced") {
  const rates = {
    essential: 120,
    balanced: 220,
    elevated: 420
  };

  return Math.max(1, Number(days || 1)) * (rates[travelStyle] || rates.balanced);
}

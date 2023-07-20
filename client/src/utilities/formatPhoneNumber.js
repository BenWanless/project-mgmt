export function formatPhoneNumber(input) {
  const cleaned = input.replace(/\D/g, "");
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{0,4})/, "($1) $2-$3").trim();
  } else if (cleaned.length <= 11) {
    return cleaned
      .replace(/(\d)(\d{3})(\d{3})(\d{0,4})/, "+$1 ($2) $3-$4")
      .trim();
  }

  return input;
}

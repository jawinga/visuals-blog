export function calculateOverallScore(
  fontSize: number,
  lineHeight: number,
  lineLength: number
): number {
  const idealFont = 16;
  const idealHeight = 1.5;
  const idealLength = 65;

  const diffFont = Math.abs(fontSize - idealFont) / idealFont;
  const diffHeight = Math.abs(lineHeight - idealHeight) / idealHeight;
  const diffLength = Math.abs(lineLength - idealLength) / idealLength;

  const avgDiff = (diffFont + diffHeight + diffLength) / 3;
  const score = 100 - avgDiff * 100;
  return Math.round(Math.max(0, Math.min(100, score)));
}

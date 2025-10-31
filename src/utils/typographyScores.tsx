export interface TypographyMetrics {
  fontSize: number;
  lineHeight: number;
  lineLength: number;
}

export interface TypographyScores {
  readability: number;
  spacing: number;
  balance: number;
  flow: number;
}

export function calculateTypographyScores({
  fontSize,
  lineHeight,
  lineLength,
}: TypographyMetrics): TypographyScores {
  const idealFontSize = 16;
  const idealLineHeight = 1.5;
  const idealLineLength = 65;

  const normalize = (value: number) => Math.max(0, Math.min(100, value));

  const readability =
    100 -
    (Math.abs(fontSize - idealFontSize) * 3 +
      Math.abs(lineHeight - idealLineHeight) * 40);

  const spacing =
    100 -
    (Math.abs(lineHeight - 1.5) * 50 +
      Math.abs(lineLength - idealLineLength) * 1);

  const idealRatio = idealLineHeight / (fontSize / 16);
  const ratioDeviation = Math.abs(lineHeight / (fontSize / 16) - idealRatio);
  const balance = 100 - ratioDeviation * 80;

  const flow =
    100 -
    (Math.abs(lineLength - idealLineLength) * 1.5 +
      Math.abs(lineHeight - 1.5) * 30);

  return {
    readability: normalize(readability),
    spacing: normalize(spacing),
    balance: normalize(balance),
    flow: normalize(flow),
  };
}

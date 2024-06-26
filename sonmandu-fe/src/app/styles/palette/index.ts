export const PALETTE = {
  MAIN_ORANGE: '#FF6000',
  LIGHT_ORANGE: '#FFA559',
  WHITE_ORANGE: '#FFE6C7',
  MAIN_BLACK: '#454545',
  LIGHT_BLACK: '#A0A0A0',
  SUB_WHITE: '#F5F5F5',
} as {
  [key: string]: string;
  MAIN_ORANGE: '#FF6000';
  LIGHT_ORANGE: '#FFA559';
  WHITE_ORANGE: '#FFE6C7';
  MAIN_BLACK: '#454545';
  LIGHT_BLACK: '#A0A0A0';
  SUB_WHITE: '#F5F5F5';
};

type PaletteType = typeof PALETTE;
type ValueOfPalette<PaletteType> = PaletteType[keyof PaletteType];

export type { PaletteType, ValueOfPalette };

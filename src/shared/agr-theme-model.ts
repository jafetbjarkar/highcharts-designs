export type AgrThemeName = 'dynamic';

export type ColorVariant = 'lighter' | 'light' | 'normal' | 'dark' | 'darker';
/**
 * AgrTheme
 * Class that contains theme colors.
 */
export class AgrTheme {
  name: AgrThemeName;
  colors: AgrColor[] = [];

  constructor(themeName: AgrThemeName) {
    this.name = themeName;
    this.colors = colorsDynamic;
  }

  /**
   *
   * @param label
   * @param variant
   * @returns
   */
  // eslint-disable-next-line complexity
  getColor(label: string, variant: ColorVariant = 'normal'): string {
    const color = this.colors.find((color) => color.label === label);
    if (variant === 'normal' || !color) {
      return color ? color.hex : '';
    }
    switch (variant) {
      case 'dark':
        return (color as AgrExtendedColor).dark ?? color.hex;
      case 'darker':
        return (color as AgrExtendedColor).darker ?? color.hex;
      case 'light':
        return (color as AgrExtendedColor).light ?? color.hex;
      case 'lighter':
        return (color as AgrExtendedColor).lighter ?? color.hex;
      default:
        return color.hex;
    }
  }

  getDashboardColor(name: string): string {
    switch (name) {
      case 'WIDGET_CHART_RISK_OF_STOCKOUT':
        return this.colors.find((color) => color.label === 'yellow')?.hex ?? '';
      case 'WIDGET_CHART_OVERSTOCKED':
        return this.colors.find((color) => color.label === 'red')?.hex ?? '';
      case 'WIDGET_CHART_HIGH_FORECAST_UNCERTAINTY':
        return this.colors.find((color) => color.label === 'green')?.hex ?? '';
      default:
        return this.colors[0].hex;
    }
  }

  getColorsFlat(): string[] {
    return this.colors.map((color) => color.hex);
  }

  /**
   * Returns a color by index. Starts at the beginning when index is greater than the number of colors.
   */
  getColorByIndex(index: number): string {
    return this.colors[index % this.colors.length].hex;
  }
}

export interface AgrColor {
  label: string;
  hex: string;
}

export interface AgrExtendedColor extends AgrColor {
  lighter?: string;
  light?: string;
  darker?: string;
  dark?: string;
}

//////////////////////////////////////////

// Colors for Theme Dynamic - New brand colors
export const colorsDynamic: AgrExtendedColor[] = [
  { label: 'indigo', hex: '#5A25EB', lighter: '#9F81F3', light: '#7C52EF', darker: '#340E9A', dark: '#4313C9' },
  { label: 'teal', hex: '#29CC80', lighter: '#77E4B1', light: '#4CDB99', darker: '#18774B', dark: '#20A165' },
  { label: 'yellow', hex: '#F4D42F', lighter: '#F9E890', light: '#F7DE5F', darker: '#B39809', dark: '#E4C00C' },
  { label: 'red', hex: '#E8253F', lighter: '#F28291', light: '#ED5469', darker: '#981022', dark: '#C6152D' },
  { label: 'secondary', hex: '#2E2642', lighter: '#5A4B81', light: '#443861', darker: '#000000', dark: '#171320' },
  { label: 'pink', hex: '#EB47BF', lighter: '#F5A3DF', light: '#F075CF', darker: '#B8148C', dark: '#E519AF' },
  { label: 'orange', hex: '#F4962A', lighter: '#F9C58B', light: '#F6AD5A', darker: '#AE6109', dark: '#DF7C0C' },
  { label: 'blue', hex: '#3986F9', lighter: '#9CC2FC', light: '#6BA4FA', darker: '#0653C6', dark: '#0868F7' },
  { label: 'green', hex: '#2ACB2A', lighter: '#78E378', light: '#4EDA4E', darker: '#187618', dark: '#21A121' },
  { label: 'purple', hex: '#A135E9', lighter: '#CC91F3', light: '#B663EE', darker: '#6A12A5', dark: '#8817D3' },
  { label: 'cyan', hex: '#0EACDD', lighter: '#5CD1F5', light: '#2CC3F2', darker: '#085F7A', dark: '#0B86AD' },
  // Extra colors
  { label: 'brown', hex: '#C3944A' },
  { label: 'babyBlue', hex: '#4CEFFF' },
  { label: 'epicPink', hex: '#FF6CE3' },
  { label: 'brightGreen', hex: '#1BFF48' },
  { label: 'dirtyYellow', hex: '#BFC600' },
  { label: 'blueDarker', hex: '#0653C6' },
  { label: 'greenDarker', hex: '#187618' },
  { label: 'waterPurple', hex: '#E5B2FF' }
  // dashboard colors
];

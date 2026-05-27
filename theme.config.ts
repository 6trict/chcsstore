interface ThemeSettingBase {
  type: string;
  label: string;
  default: string | number | boolean | null | string[];
}

interface ColorSetting extends ThemeSettingBase {
  type: 'color';
  default: string;
}

interface FontSetting extends ThemeSettingBase {
  type: 'font';
  default: string;
}

interface RangeSetting extends ThemeSettingBase {
  type: 'range';
  default: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

interface BooleanSetting extends ThemeSettingBase {
  type: 'boolean';
  default: boolean;
}

interface TextSetting extends ThemeSettingBase {
  type: 'text';
  default: string;
}

type ThemeSetting = ColorSetting | FontSetting | RangeSetting | BooleanSetting | TextSetting;

interface ThemeSection {
  name: string;
  description: string;
  settings: Record<string, ThemeSetting>;
}

interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  preview: string;
  settings: Record<string, Record<string, ThemeSetting>>;
  sections: Record<string, ThemeSection>;
}

export const themeConfig: ThemeConfig = {
  id: 'default',
  name: 'Default',
  description: 'Default Shoppex theme',
  version: '1.0.177',
  author: 'Shoppex',
  preview: '/preview.png',
  settings: {
    colors: {
      background: {
        type: 'color',
        default: '#09090b',
        label: 'Background',
      },
      surface: {
        type: 'color',
        default: '#18181b',
        label: 'Surface',
      },
      primary: {
        type: 'color',
        default: '#7c3aed',
        label: 'Primary',
      },
      primaryDark: {
        type: 'color',
        default: '#8b5cf6',
        label: 'Primary Dark',
      },
      secondary: {
        type: 'color',
        default: '#8b5cf6',
        label: 'Secondary',
      },
      text: {
        type: 'color',
        default: '#f4f4f5',
        label: 'Text',
      },
      textMuted: {
        type: 'color',
        default: '#a1a1aa',
        label: 'Muted Text',
      },
      textContrast: {
        type: 'color',
        default: '#71717a',
        label: 'Text Contrast',
      },
      border: {
        type: 'color',
        default: '#27272a',
        label: 'Border',
      },
      muted: {
        type: 'color',
        default: '#202023',
        label: 'Muted Surface',
      },
      accent: {
        type: 'color',
        default: '#27272a',
        label: 'Accent',
      },
      hover: {
        type: 'color',
        default: '#27272a',
        label: 'Hover',
      },
      success: {
        type: 'color',
        default: '#22c55e',
        label: 'Success',
      },
      error: {
        type: 'color',
        default: '#ef4444',
        label: 'Error',
      },
    },
    typography: {
      fontFamily: {
        type: 'font',
        default: 'Inter',
        label: 'Body Font',
      },
      headingFont: {
        type: 'font',
        default: 'Inter',
        label: 'Heading Font',
      },
      fontSize: {
        type: 'range',
        default: 14,
        min: 12,
        max: 20,
        step: 1,
        label: 'Base Font Size',
        unit: 'px',
      },
    },
    effects: {
      borderRadius: {
        type: 'range',
        default: 7.2,
        min: 0,
        max: 24,
        step: 0.5,
        label: 'Border Radius',
        unit: 'px',
      },
    },
    buttons: {
      borderRadius: {
        type: 'range',
        default: 8,
        min: 0,
        max: 24,
        step: 1,
        label: 'Button Radius',
        unit: 'px',
      },
    },
    header: {
      height: {
        type: 'range',
        default: 64,
        min: 48,
        max: 96,
        step: 2,
        label: 'Header Height',
        unit: 'px',
      },
    },
    inputs: {
      height: {
        type: 'range',
        default: 40,
        min: 32,
        max: 56,
        step: 2,
        label: 'Input Height',
        unit: 'px',
      },
      borderRadius: {
        type: 'range',
        default: 8,
        min: 0,
        max: 20,
        step: 1,
        label: 'Input Radius',
        unit: 'px',
      },
    },
  },
  sections: {
    header: {
      name: 'Header',
      description: 'Top navigation header',
      settings: {
        sticky: {
          type: 'boolean',
          default: true,
          label: 'Sticky Header',
        },
        showCart: {
          type: 'boolean',
          default: true,
          label: 'Show Cart',
        },
      },
    },
    footer: {
      name: 'Footer',
      description: 'Footer section',
      settings: {
        showNewsletter: {
          type: 'boolean',
          default: false,
          label: 'Show Newsletter',
        },
      },
    },
    hero: {
      name: 'Hero',
      description: 'Hero section',
      settings: {
        title: {
          type: 'text',
          default: 'Welcome to our store',
          label: 'Title',
        },
        subtitle: {
          type: 'text',
          default: 'Discover the latest products',
          label: 'Subtitle',
        },
      },
    },
    productGrid: {
      name: 'Product Grid',
      description: 'Featured products grid',
      settings: {
        showSearch: {
          type: 'boolean',
          default: true,
          label: 'Show Search',
        },
      },
    },
  },
};

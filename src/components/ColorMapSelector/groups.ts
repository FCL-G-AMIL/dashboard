/** This file MIT Licensed from github repository h5web/app */

import type { ColorMap } from './models'

export const COLORMAP_GROUPS: Record<string, ColorMap[]> = {
  Recommended: ['Viridis', 'Inferno', 'Greys', 'RdBu', 'Rainbow', 'Sinebow'],
  'Single hue': ['Blues', 'Greens', 'Greys', 'Oranges', 'Purples', 'Reds'],
  'Multi hue': [
    'Turbo',
    'Viridis',
    'Inferno',
    'Magma',
    'Plasma',
    'Cividis',
    'Warm',
    'Cool',
    'Cubehelix',
    'BuGn',
    'BuPu',
    'GnBu',
    'OrRd',
    'PuBuGn',
    'PuBu',
    'PuRd',
    'RdPu',
    'YlGnBu',
    'YlGn',
    'YlOrBr',
    'YlOrRd',
  ],
  Cyclical: ['Rainbow', 'Sinebow', 'HSL'],
  Diverging: ['BrBG', 'PRGn', 'PiYG', 'PuOr', 'RdBu', 'RdGy', 'RdYlBu', 'RdYlGn', 'Spectral'],
}

const markerVariantColors = {
  default: {
    fillColor: 'rgba(46, 71, 170, 0.4)',
    strokeColor: 'rgb(255, 255, 255)',
  },
  warning: {
    fillColor: 'rgba(234, 179, 8, 0.4)',
    strokeColor: 'rgb(234, 179, 8)',
  },
  danger: {
    fillColor: 'rgba(239, 68, 68, 0.4)',
    strokeColor: 'rgb(239, 68, 68)',
  },
};

type MarkerVariant = keyof typeof markerVariantColors;

function isVariant(value: string): value is MarkerVariant {
  return value in markerVariantColors;
}

function getVariantColors(variant: string) {
  return isVariant(variant) ? markerVariantColors[variant] : markerVariantColors.default;
}

type GetIcon = (name: string) => { src: string };

/**
 * Provides functionality for creating marker options objects.
 * @param getIcon A function for retrieving an icon's src by icon name.
 */
export function useMarkerOptions(getIcon: GetIcon) {
  /**
   * Creates an icon marker options object.
   * @param name The name of the icon to use.
   * @param variant The marker variant to use. Marker colors are based on the variant.
   * @returns The icon marker options object.
   */
  function createIconMarkerOptions(name: string, variant: MarkerVariant = 'default') {
    const icon = getIcon(name);
    const variantColors = getVariantColors(variant);

    return {
      iconSrc: icon.src,
      fillColor: variantColors.fillColor,
      strokeColor: variantColors.strokeColor,
    };
  }

  return {
    createIconMarkerOptions,
  };
}

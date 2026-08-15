/*
  This composable provides functionality for creating a map marker options object.
*/
const markerVariantColors = {
  default: {
    fillColor: 'rgba(46, 71, 170, 0.4)',
    strokeColor: 'rgb(255, 255, 255)',
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

export function useMarker(getIcon: GetIcon) {
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

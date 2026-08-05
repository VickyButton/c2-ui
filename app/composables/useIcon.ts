const ICONS_PATH = '/icons';
const icons = {
  'battery-empty': {
    src: `${ICONS_PATH}/battery-empty.png`,
    alt: 'An empty battery with no energy bars.',
  },
  'battery-full': {
    src: `${ICONS_PATH}/battery-full.png`,
    alt: 'A full battery with 4 energy bars.',
  },
  'battery-half': {
    src: `${ICONS_PATH}/battery-half.png`,
    alt: 'A half-full battery with 2 energy bars.',
  },
  'battery-healthy': {
    src: `${ICONS_PATH}/battery-healthy.png`,
    alt: 'A three-quarters-full battery with 3 energy bars.',
  },
  'battery-low': {
    src: `${ICONS_PATH}/battery-low.png`,
    alt: 'A quarter-full battery with 1 energy bar.',
  },
  cog: {
    src: `${ICONS_PATH}/cog.png`,
    alt: 'A mechanical cog with 8 teeth.',
  },
  dashboard: {
    src: `${ICONS_PATH}/dashboard.png`,
    alt: 'An abstract list with 3 items and a box underneath.',
  },
  drone: {
    src: `${ICONS_PATH}/drone.png`,
    alt: 'A drone with a gimbal and camera.',
  },
  exit: {
    src: `${ICONS_PATH}/exit.png`,
    alt: 'An arrow pointing right and away from a line',
  },
  flag: {
    src: `${ICONS_PATH}/flag.png`,
    alt: 'A triangular flag hoisted on a flagpole.',
  },
  home: {
    src: `${ICONS_PATH}/home.png`,
    alt: 'A house with a roof and a door.',
  },
  logo: {
    src: `${ICONS_PATH}/logo.png`,
    alt: 'The letter "C" with a 2 enveloped within it.',
  },
  minus: {
    src: `${ICONS_PATH}/minus.png`,
    alt: 'A minus sign.',
  },
  plus: {
    src: `${ICONS_PATH}/plus.png`,
    alt: 'A plus sign.',
  },
  'question-mark': {
    src: `${ICONS_PATH}/question-mark.png`,
    alt: 'A circle with a question mark inside.',
  },
  route: {
    src: `${ICONS_PATH}/route.png`,
    alt: 'Two points with lines connecting them at 90 degree angles.',
  },
};

type IconName = keyof typeof icons;

function isIcon(name: string): name is IconName {
  return name in icons;
}

function getIcon(name: string) {
  return isIcon(name) ? icons[name] : icons['question-mark'];
}

export function useIcon() {
  return {
    getIcon,
  };
}

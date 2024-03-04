import SnakeGame from '../assets/snake-game.png';
import SnakeGameMobile from '../assets/snake-game-mobile.png';
import { FaDatabase, FaCode, FaCar } from 'react-icons/fa6';

export const GITHUB_CALENDAR_IMG =
  'https://ssr-contributions-svg.vercel.app/_/lbaronio?chart=3dbar&gap=0.6&scale=2&flatten=0&animation=wave&animation_duration=3&animation_delay=0.03&animation_amplitude=24&animation_frequency=0.1&animation_wave_center=19_3&format=svg&weeks=50&theme=native&dark=true';

export const IMAGES = {
  SNAKE_GAME_DESKTOP: 'SNAKE_GAME_DESKTOP',
  SNAKE_GAME_MOBILE: 'SNAKE_GAME_MOBILE',
};

export const IMAGE_COMPONENT_MAPPER = {
  [IMAGES.SNAKE_GAME_DESKTOP]: SnakeGame,
  [IMAGES.SNAKE_GAME_MOBILE]: SnakeGameMobile,
};

export const ICONS = {
  CODE: 'CODE',
  DATABASE: 'DATABASE',
  CAR: 'CAR',
};

export const ICON_COMPONENT_MAPPER = {
  [ICONS.CODE]: FaCode,
  [ICONS.DATABASE]: FaDatabase,
  [ICONS.CAR]: FaCar,
};

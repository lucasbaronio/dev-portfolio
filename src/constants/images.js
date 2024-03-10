import SnakeGame from '../assets/snake-game.png';
import SnakeGameMobile from '../assets/snake-game-mobile.png';
import FletesApp from '../assets/fletesApp.png';
import FletesAppMobile from '../assets/fletesAppMobile.png';
import Pimbay from '../assets/pimbayDesktop.png';
import PimbayMobile from '../assets/pimbayMobile.png';
import Pgkaz from '../assets/pgkaz.png';
import PostgresMysql from '../assets/postgresMysql.png';
import MongoDB from '../assets/mongoDB.png';
import MongoBkp from '../assets/mongoBkp.jpeg';
import Truck from '../assets/truck.svg';
import Code from '../assets/code.svg';
import Database from '../assets/database.svg';

export const GITHUB_CALENDAR_IMG =
  'https://ssr-contributions-svg.vercel.app/_/lbaronio?chart=3dbar&gap=0.6&scale=2&flatten=0&animation=wave&animation_duration=3&animation_delay=0.03&animation_amplitude=24&animation_frequency=0.1&animation_wave_center=19_3&format=svg&weeks=50&theme=native&dark=true';

export const IMAGES = {
  SNAKE_GAME_DESKTOP: 'SNAKE_GAME_DESKTOP',
  SNAKE_GAME_MOBILE: 'SNAKE_GAME_MOBILE',
  FLETES_APP_DESKTOP: 'FLETES_APP_DESKTOP',
  FLETES_APP_MOBILE: 'FLETES_APP_MOBILE',
  PIMBAY_DESKTOP: 'PIMBAY_DESKTOP',
  PIMBAY_MOBILE: 'PIMBAY_MOBILE',
  PGKAZ_DESKTOP: 'PGKAZ_DESKTOP',
  POSTGRES_MYSQL_DESKTOP: 'POSTGRES_MYSQL_DESKTOP',
  MONGO_BKP_DESKTOP: 'MONGO_BKP_DESKTOP',
  MONGODB_DESKTOP: 'MONGODB_DESKTOP',
};

export const IMAGE_COMPONENT_MAPPER = {
  [IMAGES.SNAKE_GAME_DESKTOP]: SnakeGame,
  [IMAGES.SNAKE_GAME_MOBILE]: SnakeGameMobile,
  [IMAGES.FLETES_APP_DESKTOP]: FletesApp,
  [IMAGES.FLETES_APP_MOBILE]: FletesAppMobile,
  [IMAGES.PIMBAY_DESKTOP]: Pimbay,
  [IMAGES.PIMBAY_MOBILE]: PimbayMobile,
  [IMAGES.PGKAZ_DESKTOP]: Pgkaz,
  [IMAGES.POSTGRES_MYSQL_DESKTOP]: PostgresMysql,
  [IMAGES.MONGO_BKP_DESKTOP]: MongoBkp,
  [IMAGES.MONGODB_DESKTOP]: MongoDB,
};

export const ICONS = {
  CODE: 'CODE',
  DATABASE: 'DATABASE',
  TRUCK: 'TRUCK',
};

export const ICON_COMPONENT_MAPPER = {
  [ICONS.CODE]: Code,
  [ICONS.DATABASE]: Database,
  [ICONS.TRUCK]: Truck,
};

import { Platform } from 'react-native'

const HORIZONTAL_SPACING_BASE = Platform.OS === 'web' ? 4 : 2
const VERTICAL_SPACING_BASE = 4

const icons = {
  logo: require('../assets/icons/bookinglogo.png'),
  menuHamburger: require('../assets/icons/hamburger-menu-icon.png'),
  playButton: require('../assets/icons/play-button.png'),
  close: require('../assets/icons/close-x-icon.png'),
  cameraFilled: require('../assets/icons/camera-filled.png'),
  userAvatar: require('../assets/icons/default-avatar.jpg'),
  backArrow: require('../assets/icons/arrow-back-icon.png'),
  creditCardIcon: require('../assets/icons/credit-card-icon.png'),
  jcb: require('../assets/icons/jcb.png'),
  unionpay: require('../assets/icons/unionpay.png'),
  visaPay: require('../assets/icons/visa.png'),
  americanExpress: require('../assets/icons/american-express.png'),
  dinersClub: require('../assets/icons/diners-club.png'),
  discover: require('../assets/icons/discover.png'),
  mastercard: require('../assets/icons/mastercard.png'),
  create: require('../assets/icons/create.png'),
  shop: require('../assets/icons/shop.png'),
  foods: require('../assets/icons/foods.png'),
  shutdown: require('../assets/icons/shutdown.png'),
  delivery: require('../assets/icons/delivery-icon.png'),
  profile: require('../assets/icons/profile.png'),
  menu: require('../assets/icons/menu.png'),
  search: require('../assets/icons/search.png'),
  cart: require('../assets/icons/cart.png'),
  reserve: require('../assets/icons/reserve.png'),
  paypal: require('../assets/icons/paypal.png'),
  cashOnDelivery: require('../assets/icons/cod.png'),
  more: require('../assets/icons/more.png'),
  call: require('../assets/icons/call.png'),
  chat: require('../assets/icons/chat.png'),
  mapMarker: require('../assets/icons/map-marker.png'),
  clock: require('../assets/icons/clock.png'),
  calendar: require('../assets/icons/calendar.png'),
  plus: require('../assets/icons/plus.png'),
  chatMessages: require('../assets/icons/chat-messages.png'),
  category: require('../assets/icons/category.png'),
  appointment: require('../assets/icons/appointment.png'),
  accountDetail: require('../assets/icons/account-detail.png'),
  settings: require('../assets/icons/settings.png'),
  contactUs: require('../assets/icons/contact-us.png'),
}

const lightColors = {
  primaryBackground: '#ffffff',
  secondaryBackground: '#ffffff',
  primaryForeground: '#c84648',
  secondaryForeground: '#fcf4f4',
  foregroundContrast: 'white',
  primaryText: '#000000',
  secondaryText: '#7e7e7e',
  hairline: '#e0e0e0',
  grey0: '#fafafa',
  grey3: '#f5f5f5',
  grey6: '#d6d6d6',
  grey9: '#939393',
  red: '#ea0606',
}

const MytraineraidTheme = {
  colors: {
    light: lightColors,
    'no-preference': lightColors,
    dark: {
      primaryBackground: '#111111',
      secondaryBackground: '#000000',
      primaryForeground: '#3875e8',
      secondaryForeground: '#8442bd',
      foregroundContrast: 'white',
      primaryText: '#ffffff',
      secondaryText: '#c5c5c5',
      hairline: '#222222',
      grey0: '#0a0a0a',
      grey3: '#2a2a2a',
      grey6: '#f5f5f5',
      grey9: '#eaeaea',
      red: '#ea0606',
    },
  },
  spaces: {
    horizontal: {
      s: 2 * HORIZONTAL_SPACING_BASE,
      m: 4 * HORIZONTAL_SPACING_BASE,
      l: 6 * HORIZONTAL_SPACING_BASE,
      xl: 8 * HORIZONTAL_SPACING_BASE,
    },
    vertical: {
      s: 2 * VERTICAL_SPACING_BASE,
      m: 4 * VERTICAL_SPACING_BASE,
      l: 6 * VERTICAL_SPACING_BASE,
      xl: 8 * VERTICAL_SPACING_BASE,
    },
  },
  fontSizes: {
    xxs: 8,
    xs: 12,
    s: 14,
    m: 16,
    l: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  icons: icons,
  // color, font size, space / margin / padding, vstack / hstack
  button: {
    borderRadius: 8,
  },
}

export default MytraineraidTheme

import { PixelRatio } from 'react-native';
const fontScale = PixelRatio.getFontScale();
export default getFontSize = size => size / fontScale;
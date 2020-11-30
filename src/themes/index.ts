import preset from './preset';
import presetDark from './presetDark';
import chaeban from './chaeban';

let themes: {[index: string]: any} = {};

themes['preset'] = preset;
themes['preset-dark'] = presetDark;
themes['chaeban'] = chaeban;

export default themes;
export const availableThemes = Object.keys(themes);

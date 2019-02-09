/**
	* @author RkEclair / https://github.com/RkEclair
	*/

import Color from '../basis/Color';
import Material from './Material';

interface LinesOptions {
  color?: Color;
  lineWidth?: number;
  linecap?: string;
  linejoin?: string;
  lights?: boolean;
};

export default class Lines extends Material {

  color = new Color(0xffffff);

	linewidth = 1;
	linecap = 'round';
	linejoin = 'round';

  lights = false;

  constructor(options: LinesOptions) {
    super(options);
    (Object as any).assign(this, options);
  }

  clone() {
    return new Lines({ ...this });
  }

  toJSON() {
    throw new Error('Not implemented');
  }
}
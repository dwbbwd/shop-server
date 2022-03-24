import { Service } from 'egg';
import { inject } from 'egg-di';
import Common from '../utils/common';

/**
 * Test Service
 */
export default class Test extends Service {

  @inject()
  public common: Common;

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    console.log(this.common);

    return `hi, ${name}`;
  }
}

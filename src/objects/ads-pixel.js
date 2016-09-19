import { AbstractCrudObject } from './../core'

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/audiences-api/pixel}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      name: 'name'
    })
  }

  static getEndpoint () {
    return 'adspixel'
  }
}

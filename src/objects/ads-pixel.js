import { AbstractCrudObject } from './../core'

/**
 * AdsPixel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/audiences-api/pixel}
 */
export default class AdsPixel extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      code: 'code'
    })
  }

  static getEndpoint () {
    return 'adspixels'
  }
}

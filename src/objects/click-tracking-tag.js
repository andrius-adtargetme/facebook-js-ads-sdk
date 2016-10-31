import { AbstractCrudObject } from './../core'

/**
 * ClickTrackingTag
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/click-tags/}
 */
export default class ClickTrackingTag extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      url: 'url',
      add_template_param: 'add_template_param'
    })
  }

  static getEndpoint () {
    return 'trackingtag'
  }
}

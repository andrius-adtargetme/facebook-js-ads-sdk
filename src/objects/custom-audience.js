import { AbstractCrudObject } from './../core'

/**
 * CustomAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/facebook-pixel/website-custom-audiences}
 */
export default class CustomAudience extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      id: 'id',
      name: 'name',
      pixel_id: 'pixel_id',
      subtype: 'subtype',
      rule: 'rule',
      retention_days: 'retention_days',
      prefill: 'prefill',
      claim_objective: 'claim_objective',
      content_type: 'content_type',
      dataset_id: 'dataset_id',
      description: 'description',
      event_source_group: 'event_source_group',
      list_of_accounts: 'list_of_accounts',
      lookalike_spec: 'lookalike_spec',
      opt_out_link: 'opt_out_link',
      origin_audience_id: 'origin_audience_id',
      product_set_id: 'product_set_id'
    })
  }

  static getEndpoint () {
    return 'customaudiences'
  }

  static get ClaimObjective () {
    return Object.freeze({
      product: 'PRODUCT',
      travel: 'TRAVEL'
    })
  }

  static get ContentType () {
    return Object.freeze({
      flight: 'FLIGHT',
      hotel: 'HOTEL'
    })
  }

  static get Subtype () {
    return Object.freeze({
      custom: 'CUSTOM',
      website: 'WEBSITE',
      app: 'APP',
      offline_conversion: 'OFFLINE_CONVERSION',
      claim: 'CLAIM',
      partner: 'PARTNER',
      managed: 'MANAGED',
      video: 'VIDEO',
      lookalike: 'LOOKALIKE',
      engagement: 'ENGAGEMENT',
      data_set: 'DATA_SET',
      bag_of_accounts: 'BAG_OF_ACCOUNTS'
    })
  }
}

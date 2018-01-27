/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Billing Plans for a single service
 *
 */
class ServiceBillingPlans {
  /**
   * Create a ServiceBillingPlans.
   * @member {boolean} [canSelectTrialPlan] Can customer select trial plan for
   * that service (if it exists)?
   * @member {string} [lastTrialPlanExpirationTime] Expiration time of the last
   * selected trial plan. Will be null if trial plan was not used.
   * @member {object} [currentBillingPeriod]
   * @member {string} [currentBillingPeriod.startTime] Inclusive start of the
   * period
   * @member {string} [currentBillingPeriod.endTime] Exclusive end of the
   * period.
   * @member {object} [currentBillingPeriod.byAccount]
   * @member {number} [currentBillingPeriod.byAccount.count] Number of
   * instances of the billing plan.
   * @member {object} [currentBillingPeriod.byAccount.plan]
   * @member {string} [currentBillingPeriod.byAccount.plan.id] The Billing Plan
   * ID
   * @member {string} [currentBillingPeriod.byAccount.plan.version] Version of
   * the Billing Plan schema
   * @member {number} [currentBillingPeriod.byAccount.plan.priceBucket] Price
   * bucket of the billing plan. Free plans start with 0, paid plans have
   * higher price buckets
   * @member {string} [currentBillingPeriod.byAccount.plan.service] Name of the
   * service that the plan applies to. Possible values include: 'Build',
   * 'Push', 'Test'
   * @member {object} [currentBillingPeriod.byAccount.plan.limits]
   * @member {object} [currentBillingPeriod.byAccount.plan.attributes]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceBillingPlans
   *
   * @returns {object} metadata of ServiceBillingPlans
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceBillingPlans',
      type: {
        name: 'Composite',
        className: 'ServiceBillingPlans',
        modelProperties: {
          canSelectTrialPlan: {
            required: false,
            serializedName: 'canSelectTrialPlan',
            type: {
              name: 'Boolean'
            }
          },
          lastTrialPlanExpirationTime: {
            required: false,
            serializedName: 'lastTrialPlanExpirationTime',
            type: {
              name: 'String'
            }
          },
          currentBillingPeriod: {
            required: false,
            serializedName: 'currentBillingPeriod',
            type: {
              name: 'Composite',
              className: 'BillingPeriod'
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceBillingPlans;
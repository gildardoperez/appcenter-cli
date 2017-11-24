/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AlertingBugtracker class.
 * @constructor
 * Alerting bugtracker resource
 *
 * @member {string} [type] type of bugtracker. Possible values include:
 * 'github', 'vsts'
 * 
 * @member {string} [state] bugtracker state. Possible values include:
 * 'enabled', 'disabled', 'unauthorized'
 * 
 * @member {string} [tokenId] ID of OAuth token
 * 
 * @member {array} [eventTypes] Event types enabled for bugtracker
 * 
 * @member {number} [crashCountThreshold] Threshold for the number of crashes
 * at which to create a bug
 * 
 * @member {object} [settings]
 * 
 * @member {string} [settings.callbackUrl]
 * 
 * @member {string} [settings.ownerName]
 * 
 * @member {string} [settings.type] Polymorhpic Discriminator
 * 
 */
function AlertingBugtracker() {
}

/**
 * Defines the metadata of AlertingBugtracker
 *
 * @returns {object} metadata of AlertingBugtracker
 *
 */
AlertingBugtracker.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertingBugtracker',
    type: {
      name: 'Composite',
      className: 'AlertingBugtracker',
      modelProperties: {
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'String'
          }
        },
        tokenId: {
          required: false,
          serializedName: 'token_id',
          type: {
            name: 'String'
          }
        },
        eventTypes: {
          required: false,
          serializedName: 'event_types',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        crashCountThreshold: {
          required: false,
          serializedName: 'crash_count_threshold',
          type: {
            name: 'Number'
          }
        },
        settings: {
          required: false,
          serializedName: 'settings',
          type: {
            name: 'Composite',
            polymorphicDiscriminator: 'type',
            uberParent: 'AlertingBugtrackerSettings',
            className: 'AlertingBugtrackerSettings'
          }
        }
      }
    }
  };
};

module.exports = AlertingBugtracker;
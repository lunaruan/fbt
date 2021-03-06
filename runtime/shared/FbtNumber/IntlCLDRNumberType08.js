/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<b6365a2d5f016c0a1c6fe1416dce4979>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType08 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n >= 0 && n <= 1 || n >= 11 && n <= 99) {
      return IntlVariations.NUMBER_ONE;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType08;

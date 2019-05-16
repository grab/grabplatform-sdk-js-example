/**
 * Copyright (c) Grab Taxi Holdings PTE LTD (GRAB)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as GrabID from '@grab-id/grab-id-client/dist/bundle';

export const clientConfig = {
  openIdUrl: GrabID.GrabPartnerUrls.PRODUCTION,
  grabApiDomain: 'partner-gateway.grab.com',
  clientId: '6b3e342dca0a46d7a1d8ce2ff11420fa',
  scopes: ['openid', 'profile.read', 'ride.book'],
};

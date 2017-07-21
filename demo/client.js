import React from 'react';
import ReactDOM from 'react-dom';
import { DFPPrebidContainer } from '../lib';

ReactDOM.render(
  React.createElement('div', {
    children: [
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Docside_elm0',
        slot: 'Diarios_View_Docside',
        dimensions: [[300, 250], [300,600]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601506',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797453'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797450'
            }
          },
          {
            bidder: 'appnexus',
            params: {
              placementId: '10433394'
            }
          }
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Toppage_elm1',
        slot: 'Diarios_View_Toppage',
        dimensions: [[728,90],[970,90], [970,250]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601505',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797446'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797462'
            }
          },
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Innerpage_elm2',
        slot: 'Diarios_View_Innerpage',
        dimensions: [[728,90],[970,90], [970,250]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601508',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797447'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797463'
            }
          },
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Bottompage_elm3',
        slot: 'Diarios_View_Bottompage',
        dimensions: [[728,90],[970,90], [970,250]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601507',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797448'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797464'
            }
          },
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Toppage_Mobile_elm4',
        slot: 'Diarios_View_Toppage_Mobile',
        dimensions: [[320,50], [320,100], [300,50], [300,100]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601511',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797456'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797458'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797460'
            }
          },
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Innerpage_Mobile_elm5',
        slot: 'Diarios_View_Innerpage_Mobile',
        dimensions: [[300,250]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601509',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797451'
            }
          },
        ]
      }),
      React.createElement(DFPPrebidContainer, {
        domID: 'Diarios_View_Bottompage_Mobile_elm6',
        slot: 'Diarios_View_Bottompage_Mobile',
        dimensions: [[300,250]],
        adNetwork: '1045205',
        bids: [
          {
            bidder: 'aol',
            params: {
              placement: '4601510',
              network: '11111.1'
            }
          },
          {
            bidder: 'criteo',
            params: {
              zoneId: '797452'
            }
          },
        ]
      })
    ]
  }),
  document.getElementById('AppRoot')
);

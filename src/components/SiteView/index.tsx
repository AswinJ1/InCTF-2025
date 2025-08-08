import React from 'react';

import ConfigContext from './context';
import SiteViewHeadTags, { PageMeta } from './head';

type AppView = {
  children: (React.ReactElement | React.ReactNode),
  meta?: PageMeta
};

const eventID = process.env.EVENT_ID || process.env.NEXT_PUBLIC_EVENT_ID;

const SiteView = ({ meta, children }: AppView) => {

  const eventConfig = require(`../../data/${eventID}/config.ts`).default;

  return (
    <ConfigContext.Provider value={eventConfig}>
      <SiteViewHeadTags meta={meta} />
      
      {/* GTM noscript - Add this at the very beginning */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-56DCPP26"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      
      <main>
        {children}
      </main>
    </ConfigContext.Provider>
  );

};

export default SiteView;
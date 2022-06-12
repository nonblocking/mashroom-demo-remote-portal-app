
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import storeFactory from './store';
import App from './components/App';

import type { MashroomPortalAppPluginBootstrapFunction } from '@mashroom/mashroom-portal/type-definitions';

export const bootstrap: MashroomPortalAppPluginBootstrapFunction = (
    portalAppHostElement,
    portalAppSetup,
    clientServices,
) => {
    const { proxyPaths, appConfig: {standalone} } = portalAppSetup;
    const bffBasePath = proxyPaths.bff;

    const store = storeFactory();

    const root = createRoot(portalAppHostElement);
    root.render(
        <Provider store={store}>
            <App standalone={!!standalone} bffBasePath={bffBasePath}/>
        </Provider>,
    );

    return Promise.resolve({
        willBeRemoved: () => {
            root.unmount();
        },
    });
};

(global as any).startupDemoRemotePortalApp = bootstrap;

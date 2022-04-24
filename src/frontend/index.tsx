
import React from 'react';
import ReactDOM from 'react-dom';
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

    ReactDOM.render(
        <Provider store={store}>
            <App standalone={!!standalone} bffBasePath={bffBasePath}/>
        </Provider>,
        portalAppHostElement,
    );

    return Promise.resolve({
        willBeRemoved: () => {
            ReactDOM.unmountComponentAtNode(portalAppHostElement);
        },
    });
};

(global as any).startupDemoRemotePortalApp = bootstrap;

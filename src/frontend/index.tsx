
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import type { MashroomPortalAppPluginBootstrapFunction } from '@mashroom/mashroom-portal/type-definitions';

export const bootstrap: MashroomPortalAppPluginBootstrapFunction = (
    portalAppHostElement,
    portalAppSetup,
    clientServices,
) => {
    const { restProxyPaths } = portalAppSetup || {};
    const restProxyPath = restProxyPaths.bff;

    ReactDOM.render(
        <App restProxyPath={restProxyPath}/>,
        portalAppHostElement,
    );

    return Promise.resolve({
        willBeRemoved: () => {
            ReactDOM.unmountComponentAtNode(portalAppHostElement);
        },
    });
};

(global as any).startupDemoRemotePortalApp = bootstrap;

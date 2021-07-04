
# Mashroom Demo Remote Portal App

Simple demo App (Microfrontend) for [Mashroom Server](https://www.mashroom-server.com) that shows a random Chuck Norris joke from http://api.icndb.com

This demo shows how to dynamically integrate an App into _Mashroom Portal_ that runs on a different server.

It also runs on http://demo-remote-app.mashroom-server.com if you want to test the Remote App capabilities of _Mashroom Portal_ without
installing this first.

## Usage

    npm install
    npm run dev

Open in your browser: http://localhost:6088/

### Integrate it into the Mashroom Portal

 * Clone, setup and start the [Mashroom Portal Quickstart](https://github.com/nonblocking/mashroom-portal-quickstart) project
 * Open http://localhost:5050/mashroom/admin/ext/remote-portal-apps
 * Copy http://localhost:6088 into the URL input and click _Add_
 * Open http://localhost:5050/portal and place the _Mashroom Demo Remote Portal App_ on any page via Drag'n'Drop

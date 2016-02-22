Package.describe ({
    summary: "Client Side templates styled for Materializecss to be used with the Meteor package accounts-meld.",
    version: "1.0.0",
    name: "sun2rise:accounts-meld-client-materializecss",
    git: "https://github.com/sun2rise/meteor-accounts-meld-client-templates-materializecss.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use([
        'minimongo',
        'mongo-livedata',
        'templating'
    ], 'client');

    api.add_files([
        'lib/accounts-meld-client-templates.html',
        'lib/accounts-meld-client-templates.js',
    ], ['client']);

    api.export([
        'MeldActions',
    ], ['client']);
});

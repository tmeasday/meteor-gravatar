Package.describe({
  summary: "Simple package to use gravatar images",
  version: "0.0.5",
  git: "https://github.com/tmeasday/meteor-gravatar"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('crypto-md5', ['client', 'server']);
  if(api.export)
    api.export('Gravatar');
  api.add_files('gravatar.js', ['client', 'server']);
});

Package.describe({
  summary: "Simple package to use gravatar images"
});

Package.on_use(function (api) {
  api.use('crypto-md5', ['client', 'server']);
  if(api.export)
    api.export('Gravatar');
  api.add_files('gravatar.js', ['client', 'server']);
});

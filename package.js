Package.describe({

  name: 'nekojira:cloudinary-jquery-upload',
  version: '0.2.0',
  summary: 'Support libraries for image uploads to Cloudinary using jQuery.',
  git: 'https://github.com/nekojira/cloudinary-jquery-upload',
  documentation: 'README.md'

});

Package.onUse(function(api) {

  api.versionsFrom('3.0');

  api.use('jquery', 'client');

  api.addFiles([
    'vendor/jquery.ui.widget.js',
    'vendor/jquery.iframe-transport.js',
    'vendor/jquery.fileupload.js',
    'vendor/jquery.cloudinary.js'
    ], 'client');

});
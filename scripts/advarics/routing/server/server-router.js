module.exports = [
  {
      path: '/RactAmp/public/js/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/js',
            listing: false
        }
    }
  },
  {
      path: '/RactAmp/public/css/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/css',
            listing: false
        }
    }
  },
   {
      path: '/RactAmp/public/images/{files*}',
      method: 'GET',
      handler: {
        directory: {
            path: 'public/images',
            listing: false
        }
    }
  },
  {
      path: '/{p*}',
      method: 'GET',
      handler: function(request, reply) {
          reply.file('index.html');
      }
  }
];

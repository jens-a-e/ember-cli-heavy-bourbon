module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {
        name: 'thoughtbot/bourbon',
        target: '4.2.1'
      },
      {
        name: 'thoughtbot/neat',
        target: '1.7.2'
      },
      {
        name: 'thoughtbot/refills',
        target: '0.1.0'
      }
    ]);
  }
};

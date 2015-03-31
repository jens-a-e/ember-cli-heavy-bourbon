/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-bourbon',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var bourbonPath = path.join(this.app.bowerDirectory, 'bourbon', 'app');
    var bourbonTree = this.pickFiles(this.treeGenerator(bourbonPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles'
    });
    var neatPath = path.join(this.app.bowerDirectory, 'neat', 'app');
    var neatTree = this.pickFiles(this.treeGenerator(neatPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles'
    });
    var refillsPath = path.join(this.app.bowerDirectory, 'refills', 'source', 'stylesheets');
    var refillsTree = this.pickFiles(this.treeGenerator(refillsPath), {
      srcDir: '/refills',
      destDir: '/app/styles/refills'
    });
    return this.mergeTrees([bourbonTree, neatTree, refillsTree]);
  }
};

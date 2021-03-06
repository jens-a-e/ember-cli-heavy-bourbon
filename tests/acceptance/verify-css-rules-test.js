import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';

var application;

module('Acceptance: Verify CSS Rules', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('check that bourbon and sass are generating css that is getting applied', function(assert) {
  visit('/');

  andThen(function() {
    var opacity = Math.floor(parseFloat(Ember.$('.devs li:eq(0)').css('opacity')) * 10) / 10.0;
    assert.equal(opacity, 0.6, 'opacity');
  });

  click('button');


  andThen(function() {
    var opacity = Math.floor(parseFloat(Ember.$('.devs li:eq(0)').css('opacity')) * 10) / 10.0;
    assert.notEqual(opacity, 1.0, 'opacity'); // still animating
    Ember.run.later(function(){
      var opacity = Math.floor(parseFloat(Ember.$('.devs li:eq(0)').css('opacity')) * 10) / 10.0;
      assert.equal(opacity, 1.0, 'opacity');
    }, 600);
  });
});

# This is a manifest file that'll be compiled into application.js, which will include all the files
# listed below.
#
# Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
# or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
#
# It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
# compiled file.
#
# Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
# about supported directives.
#
#= require jquery
#= require jquery_ujs
#= require turbolinks
#= require angular
#= require_tree .
app = angular.module('app', [])

Hoge = ->
  scope:
    name: '='
    alert_wa: '&'
  restrict: 'E'
  templateUrl: '/templates/_hoge.html'
  replace: true
  controller: [
    '$rootScope',
    ($rootScope)->
      test_event: (name)-> $rootScope.$broadcast('testEvent', name)
  ]
  link: (scope, elm, attrs, ctrl)->
    scope.name = 'initial'
    scope.hello = ->
      console.log "Hoge: #{scope.name}"
      ctrl.test_event(scope.name)
      scope.name = "#{scope.name}_"

app.directive('hoge', Hoge)

Fuga = ->
  scope: {}
  restrict: 'E'
  template: '<span>hoge</span>'
  controller: [
    '$rootScope',
    ($rootScope)->
      $rootScope.$on(
        'testEvent',
        (event, data)-> console.log "Fuga: #{data}"
      )
  ]

app.directive('fuga', Fuga)


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


class BroadcastService
  $inject: ['$rootScope']
  constructor: ($rootScope)->
    @$rootScope = $rootScope
  send: (msg, data)->
    @$rootScope.$broadcast(msg, data)

class EventCtrl
  $inject: ['BroadcastService']
  constructor: (BroadcastService)->
    @BroadcastService = BroadcastService
  test_event: (name)->
    @BroadcastService.send('testEvent', name)

class ListenCtrl
  $inject: ['$rootScope']
  name: 'hogehoge'
  constructor: ($rootScope)->
    $rootScope.$on 'testEvent',
      (event, data)=>
        console.log "Fuga: #{data}"
        @name = data

Hoge = ->
  scope:
    name: '='
  restrict: 'E'
  templateUrl: '/templates/_hoge.html'
  replace: true
  controller: 'EventCtrl'
  link: (scope, elm, attrs, ctrl)->
    scope.name = 'initial'
    scope.hello = ->
      console.log "Hoge: #{scope.name}"
      ctrl.test_event(scope.name)
      scope.name = "#{scope.name}_"

Fuga = ->
  scope: {}
  restrict: 'E'
  template: '<span>{{ctrl.name}}</span>'
  controller: 'ListenCtrl'
  link: (scope, elm, attrs, ctrl)->
    scope.ctrl = ctrl
    console.log ctrl

app = angular.module('app', [])

app.service('BroadcastService', BroadcastService)
app.controller('EventCtrl', EventCtrl)
app.controller('ListenCtrl', ListenCtrl)
app.directive('hoge', Hoge)
app.directive('fuga', Fuga)


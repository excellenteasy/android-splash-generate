'use strict'
var test = require('tape')
var resize = require('./')
var fs = require('fs')
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')

test('creates all icons in tmp directory', function (t) {
  t.plan(13)
  rimraf('tmp', function () {
    mkdirp('tmp', function () {
      resize('test/com.appbusinesspodcast.www.png', 'tmp/').then(function () {
        t.ok(fs.existsSync('tmp/splash-port-hdpi.png'), 'splash-port-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-mdpi.png'), 'splash-port-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-ldpi.png'), 'splash-port-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xhdpi.png'), 'splash-port-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxhdpi.png'), 'splash-port-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-port-xxxhdpi.png'), 'splash-port-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-hdpi.png'), 'splash-land-hdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-mdpi.png'), 'splash-land-mdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-ldpi.png'), 'splash-land-ldpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xhdpi.png'), 'splash-land-xhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxhdpi.png'), 'splash-land-xxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/splash-land-xxxhdpi.png'), 'splash-land-xxxhdpi.png' + ' created')
        t.ok(fs.existsSync('tmp/GooglePlayFeature.png'), 'GooglePlayFeature.png' + ' created')
      })
    })
  })
})

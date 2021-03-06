# android-splash-generate 
[![Build Status](https://travis-ci.org/excellenteasy/android-splash-generate.svg?branch=master)](https://travis-ci.org/excellenteasy/android-splash-generate)
[![Dependency Status](https://david-dm.org/excellenteasy/android-splash-generate.svg)](https://david-dm.org/excellenteasy/android-splash-generate)
[![devDependency Status](https://david-dm.org/excellenteasy/android-splash-generate/dev-status.svg)](https://david-dm.org/excellenteasy/android-splash-generate#info=devDependencies)

> Generate all required splash screen images from one source. Right size, right file name.

The default splash screen image file names and required sizes for android are retrieved from the [android-splash](http://github.com/excellenteasy/android-splash) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project and the correct dimensions.

## Important

Require node.js v0.10.46 and npm v2.15.1

## How does it work?

A 2208x2208 source image gets scaled first and then cropped to the target dimensions. If you put the relevant part (logo, text, etc.) of your splash screen in the exact center of your source image, this means that the resulting images are all going to be centered as well.


## Install

```sh
$ npm install --save android-splash-generate
```


## Usage

```js
var generate = require('android-splash-generate');

generate('path/to/source.png', 'output/splash/').then(function() {
	// splash images created
});

```


## CLI

```sh
$ npm install --global android-splash-generate
```

```sh
$ android-splash-generate --help
Generate all required splash screen images from one source. Right size, right file name.

Example
  $ android-splash-generate -i path/to/source.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com)

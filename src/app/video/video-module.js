"use strict";

require('angular-material');
var videoCtrl = require('./video-controller.js');
var videoModule = angular.module('myApp.video',['vAccordion',
			'ngAnimate',
			'ngMaterial',
			'ngSanitize'
			]);
videoModule.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

videoModule.controller('videoCtrl',videoCtrl);
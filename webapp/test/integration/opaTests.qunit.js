/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"openui5/movies/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
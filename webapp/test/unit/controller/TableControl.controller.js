/*global QUnit*/

sap.ui.define([
	"comapplexus/aggregation-binding/controller/TableControl.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TableControl Controller");

	QUnit.test("I should test the TableControl controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

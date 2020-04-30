sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function(jQuery, Controller, MessageToast) {
	"use strict";

	var StartController = Controller.extend("BWATC.BookstoreWebAppTC.controller.StartView", {
		press : function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("mainView");
		},

		press2 : function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("managerMain");
		}
	});

	return StartController;{
	}
});
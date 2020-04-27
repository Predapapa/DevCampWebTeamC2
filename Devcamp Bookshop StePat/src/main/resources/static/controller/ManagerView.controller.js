sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History"
], function (Controller, MessageToast, JSONModel, History) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.ManagerView", {
		onInit: function () {
			
		},
		
		onPress: function(oEvent){
			
			var oSource = oEvent.getSource(),
			oListItemData=
				oSource.getBindingContext().getObject();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detailManager",{
				"isbn":oListItemData.isbn});
//			MessageToast.show("Book: "+ oListItemData.isbn + " has been pressed")
			},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
		}
	
});
	
});
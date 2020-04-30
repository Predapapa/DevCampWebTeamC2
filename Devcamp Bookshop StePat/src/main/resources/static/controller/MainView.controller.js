sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
	], function (Controller, MessageToast, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.MainView", {
		onInit: function () {
			
		},
		
		onPress: function(oEvent){
			
			var oSource = oEvent.getSource(),
			oListItemData=
				oSource.getBindingContext().getObject();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{
				"isbn":oListItemData.isbn});
			},
			
		onNavBack: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("start");
		}	
			
			
		
	

		

});
	
});
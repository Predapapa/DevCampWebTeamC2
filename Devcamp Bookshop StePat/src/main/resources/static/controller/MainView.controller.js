sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
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
			MessageToast.show("Book: "+ oListItemData.isbn + " has been pressed")
			}
			
			
			
			
		
	

		

});
	
});
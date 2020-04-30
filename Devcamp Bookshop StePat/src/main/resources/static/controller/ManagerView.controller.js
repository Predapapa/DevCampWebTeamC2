sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast, JSONModel, History, Fragment, ResourceModel, UIComponent) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.ManagerView", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("managerMain").attachPatternMatched(this._onObjectMatched,this);
		},

		_onObjectMatched: function() {
			console.log("test");
			// this.getView().byId("List1").getBinding("items").refresh();
			// location.reload();
		},
		
		onPress: function(oEvent){
			
			var oSource = oEvent.getSource(),
			oListItemData=
				oSource.getBindingContext().getObject();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detailManager",{
				"isbn":oListItemData.isbn});
		},

		onNavBack: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("start");
		},
        
        onCreate: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("create");
		},

		onRefresh: function() {
			// this.getView().byId("List1").getBinding("items").refresh();
			location.reload();
		}
		
		
        
});
	
});
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.DetailManagerView", {
		
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detailManager").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent){
			var sIsbn = oEvent.getParameter("arguments").isbn;
			this._loadModel(sIsbn);
			
		},
		
		_loadModel: function(sIsbn){
			
			if(sIsbn){
				var oBookModel = new JSONModel();
				oBookModel.loadData("/api/v1/"+sIsbn);
				this.getView().setModel(oBookModel);
			}
			else{
				console.log("hey");
			}
			
			
		},
		
		onNavBack: function() {
	        window.location.replace("http://localhost:8282/#/managerMain");
		}
	

		

});
	
});
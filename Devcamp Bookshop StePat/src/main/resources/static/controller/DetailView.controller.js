sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.DetailView", {
		
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent){
			var sIsbn = oEvent.getParameter("arguments").isbn;
			this._loadModel(sIsbn);
			
		},
		
		_loadModel: function(sIsbn){
			
			if(sIsbn){
				var oBookModel = new JSONModel();
				oBookModel.loadData("api/v1/"+sIsbn);
				this.getView().setModel(oBookModel);
			}
			
			
		}
	

		

});
	
});
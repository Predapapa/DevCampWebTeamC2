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

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.UpdateView", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("update").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent){
			var sIsbn = oEvent.getParameter("arguments").isbn;
			this._loadModel(sIsbn);
			/hmm
		},
		
		_loadModel: function(sIsbn){
			
			$.get("api/v1/"+sIsbn, function(oData) {
				this.getView().getModel("applicationBookModel").setProperty("/editedBook", oData);
			}.bind(this));
		},


		onSave: function() {

			
			var request = $.ajax({
				  url: "api/v1/updateBook",
				  method: "PUT",
				  data: JSON.stringify(this.getView().getModel("applicationBookModel").getProperty("/editedBook")), 
					    
					    dataType: "json",
					    contentType: "application/json"
					    
				  
				});
			
			
				 
				request.done(function( msg ) {
					MessageToast.show("Book updated");
				});
				
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("managerDetail");
				 
				request.fail(function( jqXHR, textStatus ) {
				  alert( "Request failed: " + textStatus );
				});
			
			
			
		},

		onNavBack: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("detailManager",{"isbn":this.getView().getModel("applicationBookModel").getProperty("/editedBook").isbn});
		}
	});
});
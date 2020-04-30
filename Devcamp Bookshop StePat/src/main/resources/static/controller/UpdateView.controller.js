sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, History, Fragment, ResourceModel) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.UpdateView", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("update").attachPatternMatched(this._onObjectMatched,this);
		},
		
		_onObjectMatched: function(oEvent){
			var sIsbn = oEvent.getParameter("arguments").isbn;
			this._loadModel(sIsbn);
			
		},
		
		_loadModel: function(sIsbn){
			
		
			// this.getView().byId("title").setValue(oBookModel.getProperty("title"));
			$.get("api/v1/"+sIsbn, function(oData) {
				this.getView().getModel("applicationBookModel").setProperty("/editedBook", oData);
			}.bind(this));
			// var request = $.ajax({
			// 	url: "api/v1/",
			// 	method: "GET"
			// })

			// request.done(function( ) {

			// });
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
					MessageToast.show("Book created");
				});
				
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("managerDetail",{
					"isbn":this.getView().getModel("applicationBookModel").getProperty("isbn")});
				 
				request.fail(function( jqXHR, textStatus ) {
				  alert( "Request failed: " + textStatus );
				});
			
			
			
		}
	});
});
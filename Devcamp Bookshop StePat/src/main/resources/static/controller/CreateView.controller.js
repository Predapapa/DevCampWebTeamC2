sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/UIComponent"
], function (Controller, MessageToast, JSONModel, History, Fragment, ResourceModel,UIComponent) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.CreateView", {
		onInit: function () {
		},

		onSave: function() {

			
			var request = $.ajax({
				url: "api/v1/saveBook",
				method: "POST",
				data: JSON.stringify(this.getView().getModel("applicationBookModel").getData()),    
				dataType: "json",
				contentType: "application/json"
				});
			
			
				 
				request.done(function( msg ) {
					MessageToast.show("Book created");
				});
				
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("managerMain");
				 
				request.fail(function( jqXHR, textStatus ) {
				  alert( "Request failed: " + textStatus );
				});
			
			
			
		},

		onNavBack: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("managerMain", {}, true);
		}
	});
});
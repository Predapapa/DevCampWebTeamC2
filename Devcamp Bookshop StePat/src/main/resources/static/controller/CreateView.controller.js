sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, History, Fragment, ResourceModel) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.CreateView", {
		onInit: function () {
		},

		onSave: function() {
			var title = this.getView().byId("title").getValue();
			var author = this.getView().byId("author").getValue();
			var editor = this.getView().byId("editor").getValue();
			var isbn = this.getView().byId("isbn").getValue();
			var stock = this.getView().byId("stock").getValue();
			var pubYear = this.getView().byId("pubYear").getValue();
			var price = this.getView().byId("price").getValue();

			console.log(title + author + editor + isbn + stock + pubYear + price);
			
		}
	});
});
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
			var sTitle = this.getView().byId("title").getValue();
			var sAuthor = this.getView().byId("author").getValue();
			var sEditor = this.getView().byId("editor").getValue();
			var sIsbn = this.getView().byId("isbn").getValue();
			var sStock = this.getView().byId("stock").getValue();
			var sPubYear = this.getView().byId("pubYear").getValue();
			var sPrice = this.getView().byId("price").getValue();

			console.log(sTitle + sAuthor + sEditor + sIsbn + sStock + sPubYear + sPrice);
			
			var oBook = new JSONModel();
			oBook.setData({
			    title: sTitle,
			    author: sAuthor,
			    editor: sEditor,
			    isbn: sIsbn,
			    stock: sStock,
			    pubyear: sPubYear,
			    price: sPrice
			});
			
			console.log(oBook);
			
			
			
			
		}
	});
});
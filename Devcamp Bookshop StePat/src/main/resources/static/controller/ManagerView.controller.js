sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, History, Fragment) {
	"use strict";

	return Controller.extend("BWATC.BookstoreWebAppTC.controller.ManagerView", {
		onInit: function () {
			
		},
		
		onPress: function(oEvent){
			
			var oSource = oEvent.getSource(),
			oListItemData=
				oSource.getBindingContext().getObject();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detailManager",{
				"isbn":oListItemData.isbn});
//			MessageToast.show("Book: "+ oListItemData.isbn + " has been pressed")
		},

		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
		},
	
		_getDialog: function () {
            // create dialog lazily
            if (!this._oDialog) {
                // create dialog via fragment factory
                this._oDialog = sap.ui.xmlfragment("addBooksDialog", "BWATC.BookstoreWebAppTC.view.Create", this);
                // connect dialog to view (models, lifecycle)
                this.getView().addDependent(this._oDialog);
            }
            return this._oDialog;
        },
        
        onCreate: function (oEvent) {
            this._getDialog().open();
        },
       
        onCloseDialog: function () {
            this._getDialog().close();
        },
       
        onSaveDialog: function (oEvent) {
			// var testST = sap.ui.getCore().byId("newTitle").getValue();
			var testST2 = this._getDialog("newTitle");
            // var oSource = oEvent.getSource(),
			// oListItemData=
			// 	oSource.getObject();
				
			console.log(testST2);
        }
});
	
});
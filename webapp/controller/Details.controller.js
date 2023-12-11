sap.ui.define([
    "com/applexus/aggregationbinding/controller/BaseController",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";
        return Controller.extend("com.applexus.aggregationbinding.controller.Details", {
            onInit: function () {
                this.router = this.getOwnerComponent().getRouter();
                this.router.getRoute("RouteDetails").attachPatternMatched(this.bindValue,this);
            },
            bindValue: function(oEvent) {
                // var idx = this.router.oHashChanger.hash.split("/")[1];
                // var fruitPath = "fruit>/fruit/"+idx;
                // console.log("fruitPath "+fruitPath);

                // var sPath = oEvent.getParameter("arguments").idx;
                // // console.log(sPath);
                // var fruitPath1 = "fruit>/fruit/"+sPath;
                //  console.log(fruitPath1);
                var fruitPath = this.getPath(oEvent);
                this.getView().byId("sform1").bindElement({path: fruitPath});
            },
            onLinkPress: function(oEvent) {
                var sText = oEvent.oSource.mProperties.text;
                var url = 'https://www.google.com/?q='+sText
                window.open(url);
            },
            onValueHelpRequest: function(oEvent) {
                this.selectedField = oEvent.getSource();
                var oView = this.getView();
                if(!this.oValueHelpDialog) {
                    this.oValueHelpDialog = Fragment.load({
                        id: "city",
                        name: "com.applexus.aggregationbinding.fragment.SelectDialog",
                        controller: this
                    }).then(function (oValueHelp){
                        oView.addDependent(oValueHelp);
                        oValueHelp.bindAggregation("items",{
                            path: 'fruit>/city',
                            template: new sap.m.DisplayListItem({
                                label: "{fruit>cityName}",
                                value: "{fruit>cityName}"
                            })
                        })
                        return oValueHelp;
                    });
                }
                this.oValueHelpDialog.then(function(oValueHelp){
                    oValueHelp.open();
                }.bind(this));
            },
            onFilter: function() {
                var oView = this.getView();
                if(!this.oFilterDialog) {
                    this.oFilterDialog = Fragment.load({
                        id: "supplier",
                        name: "com.applexus.aggregationbinding.fragment.SelectDialog",
                        controller: this
                    }).then(function (oFilterClick){
                        oView.addDependent(oFilterClick);
                        oFilterClick.bindAggregation("items",{
                            path: 'fruit>/supplier',
                            template: new sap.m.DisplayListItem({
                                label: "{fruit>name}",
                                value: "{fruit>name}"
                            })
                        })
                        return oFilterClick;
                    });
                }
                this.oFilterDialog.then(function(oFilterClick){
                    oFilterClick.open();
                }.bind(this));
            },
            onConfirm: function(oEvent) {
                var sId = oEvent.getSource().getId();
                if(sId.indexOf("city !=== -1")) {
                    var oSelectedItem = oEvent.getParameter("selectedItem");
                    var oItem = oSelectedItem.mProperties.value;
                    this.selectedField.setValue(oItem);
                }
                else {
                    var oTable = this.getView().byId("table1");
                    var oSelectedItems = oEvent.getParameters("selectedItem");
                    console.log(oSelectedItems);
                    for(var i=0;i<oSelectedItems.length;i++) {
                        Element = oSelectedItems[i];
                    }
                }
            }
        });
    });

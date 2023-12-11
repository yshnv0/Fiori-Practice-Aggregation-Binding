sap.ui.define([
    "com/applexus/aggregationbinding/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("com.applexus.aggregationbinding.controller.List", {
            onInit: function () {
                 this.router = this.getOwnerComponent().getRouter();
                 this.router.getRoute("RouteDetails").attachPatternMatched(this.bindValue,this);
                
            },
            bindValue: function(oEvent) {
                console.log(this.router);
                //debugger;
                // var idx = this.router.oHashChanger.hash.split("/")[1];
                // var fruitPath = "fruit>/fruit/"+idx;
                // var sPath = oEvent.getParameter("arguments").idx;
                // console.log(sPath);
                // var fruitPath1 = "fruit>/fruit/"+sPath;
                // console.log(fruitPath1);
                var fruitPath1 = this.getPath(oEvent);
                var oList = this.getView().byId("list");
                // console.log(oList);
                // console.log(oList.getItems());
                var element ;
                if(oList.getItems().length > 0){
                    for(var i=0;i<oList.getItems().length;i++){
                        element = oList.getItems()[i];
                        var oBind ="fruit>" + element.getBindingContextPath();
                        if(oBind === fruitPath1){
                            oList.setSelectedItem(element);
                          
                        }
                    }
                }
            },
            onSearch: function(oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if(sQuery) {
                    var filterName = new Filter("name",FilterOperator.Contains, sQuery);
                    var filterTaste = new Filter("taste",FilterOperator.Contains, sQuery);
                    aFilters.push(filterName);
                    aFilters.push(filterTaste);
                    var filter = new Filter({
                        filters: aFilters,
                        and: false
                    })
                }
                var oList = this.byId("list");
			    var oBinding = oList.getBinding("items");
			    oBinding.filter(filter);
            },
            onDeletePress: function() {
                var oList = this.getView().byId("list");
                var items = oList.getSelectedItems();
                for(var i = 0;i<items.length;i++){
                    oList.removeItem(items[i]);
                }
            },
            onNavPress: function(oEvent) {
                //console.log(oEvent);
                var sPath = oEvent.oSource.oBindingContexts.fruit.sPath;
                sessionStorage.setItem("path",sPath);
                //console.log(sPath);
                var idx = sPath.split("/")[2];
                this.router.navTo("RouteDetails",{idx});
            }  
        });
    });
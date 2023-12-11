sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models,formatter) {
        "use strict";
        var oModel;
        return Controller.extend("com.applexus.aggregationbinding.controller.TableControl", {
            customFormatter: formatter,
            onInit: function () {
                oModel = models.loadJsonData();
                this.getView().setModel(oModel);
            },
            fetchDetails: function(oEvent){
                var sPath = oEvent.getParameter("rowContext").getPath();
                var form = this.getView().byId("form1")
                form.bindElement({
                    path: sPath
                });
            }
        });
    });

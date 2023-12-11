sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("com.applexus.aggregationbinding.controller.BaseController", {
            onInit: function () {
                
            },
            getPath: function(oEvent) {
                var sPath = oEvent.getParameter("arguments").idx;
                // console.log(sPath);
                var fruitPath1 = "fruit>/fruit/"+sPath;
                return fruitPath1;
            }
        });
    });

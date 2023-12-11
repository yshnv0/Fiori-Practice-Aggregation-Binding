sap.ui.define(
    [
        "sap/ui/core/format/DateFormat",
        "sap/ui/core/format/NumberFormat"
    ],
    function(DateFormat,NumberFormat) {
      "use strict";
  
      return {
        formatDoj: function(empDoj) {
            debugger;
            if(empDoj){
                var oDateFormat = DateFormat.getDateInstance({
                    pattern: "dd/MM/YYY"
                })
                var oDate = new Date(empDoj);
                return oDateFormat.format(oDate);
            }
        },
        formatSalary: function(empSalary,currency) {
            if(empSalary) {
                var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                    currencyCode: false
                });
                return oCurrencyFormat.format(empSalary,currency);
            }
        },
        formatName: function(empName) {
            if(empName) {
                return empName.toUpperCase();
            }
        }
      }
    }
  );
  
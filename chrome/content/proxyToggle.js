/*global Components */
var proxyToggle = (function () {
    "use strict";
    var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
    return {
        run : function () {
            var currType = prefManager.getIntPref("network.proxy.type"),
                toolbarButton = document.getElementById("proxy-toggle-toolbar-button");
            // 1 = localhost
            // 5 = system default
            if (currType === 1) {
                prefManager.setIntPref("network.proxy.type", 5);
                toolbarButton.style.background = "";
            } else if (currType === 5) {
                prefManager.setIntPref("network.proxy.type", 1);
                toolbarButton.style.background = "#4C9ED9";
            }
        }
    };
}());

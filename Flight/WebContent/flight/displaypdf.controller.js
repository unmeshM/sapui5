sap.ui.controller("flight.displaypdf", {

	rangeBegin : 2000,
	rangeEnd : 2005,
	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf flight.displaypdf
	 */
	onInit : function() {
		this.getView().byId("txtYear").setValue(this.rangeBegin);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf flight.displaypdf
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf flight.displaypdf
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf flight.displaypdf
	 */
	// onExit: function() {
	//
	// }
	
	//get value of text that shows year in number
	getTxtValue : function(id) {
		var txt = parseInt(this.getView().byId(id).getValue());
		return txt;
	},
	//get id of button that is event source
	getNavBtnId : function(evt) {
		var id = evt.getSource().getId();
		return id;
	},
	//update year by 1 acccording to navigation
	updateYear : function(btn, year) {
		if (btn.search("next") != -1) {
			++year;
		} else {
			--year;
		}

		return year;
	},
	
	//update the navigation button state(enabled/disabled)
	updateNav : function(year) {
		try {
			if (year >= this.rangeEnd)
				this.disableNav("next");
			else
				this.enableNav("next");

			if (year <= this.rangeBegin)
				this.disableNav("back");
			else
				this.enableNav("back");
		} catch (e) {
			console.log(e);
		}
	},
	//enable nav button
	enableNav : function(nav) {
		var navBtn = this.getView().byId(nav);
		navBtn.setEnabled(true);
	},
	//disable nav button
	disableNav : function(nav) {
		var navBtn = this.getView().byId(nav);
		navBtn.setEnabled(false);
	},

	//request to odata url and use requestUri in response
	//use the returned url to display pdf inside iframe 
	readPdf : function(year) {
		
		//write your code for querying for pdf or use following code
		
		 var oPanel = this.getView().byId("pdfPanel");
		 var sRead = "/pdfset(customer='" + oTF.getValue() + "')" + "/$value";

		 oModel.read(sRead, null, null, true, function(oData, oResponse) {
		 var pdfURL = oResponse.requestUri;
		 var html = new sap.ui.core.HTML();
		 html.setContent("<iframe src=" + pdfURL
		 + " width='700' height='700'></iframe>");
		 oPanel.addContent(html);
		 oPanel.placeAt("content");
		
		 }, function() {
		 alert("Read failed");
		 });
	},
	
	//This function gets invoked everytime user tries to navigate
	//this function uses all underline functionality to manage ui 
	//and read pdf using associated functions
	display : function(evt) {
		try {
			var year = this.getTxtValue("txtYear");
			var btn = this.getNavBtnId(evt);

			year = this.updateYear(btn, year);

			if (year <= this.rangeEnd && year >= this.rangeBegin) {

				// this.enableNav("back");
				// this.enableNav("next");
				
				//update text value that shows year
				this.getView().byId("txtYear").setValue(year);
				
				this.readPdf(year);
			}
			this.updateNav(year);
		} catch (e) {
			console.log(e);
		}

	}

});
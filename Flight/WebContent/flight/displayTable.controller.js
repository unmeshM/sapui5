sap.ui.controller("flight.displayTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf flight.displayTable
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf flight.displayTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf flight.displayTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf flight.displayTable
*/
//	onExit: function() {
//
//	}
	
	/*
	 * update entity using path and status=approve/decline 
	 */
	update:function(sPath,status){
		try{
			
			//TODO: your update code
		}
		catch(e){
			
		}
	},
	
	/*
	 * Get selected item context
	 * extracts the path and loop update for each selected context
	 */
	Approve:function(evt){
		try{
			var oTable = this.getView().byId("myTable");
			
			//get selected item contexts
			var selContext = oTable.getSelectedContexts();
			
			for(var i = 0;i<selContext.length;i++){
				//get current context
				var currentContext = selContext[i];
				//your own status value
				this.update(currentContext.sPath,"Approve");
			}
		
		}
		catch(e){
			console.log(e);
		}
	},
	
	Decline:function(evt){
		try{
			var oTable = this.getView().byId("myTable");
			
			//get selected item contexts
			var selContext = oTable.getSelectedContexts();
			
			for(var i = 0;i<selContext.length;i++){
				//get current context
				var currentContext = selContext[i];
				//your own status value
				this.update(currentContext.sPath,"Approve");
			}
		
		}
		catch(e){
			console.log(e);
		}
	}

});
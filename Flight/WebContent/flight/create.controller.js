sap.ui.controller("flight.create", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf flight.create
	 */
	// onInit: function() {
	//
	// },
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf flight.create
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf flight.create
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf flight.create
	 */
	// onExit: function() {
	//
	// }
	// <d:cityFrom>new york</d:cityFrom>
	// <d:airportFrom>JFK</d:airportFrom>
	// <d:countryTo>US</d:countryTo>
	// <d:cityTo>SAN FRANCISCO</d:cityTo>
	// <d:airportTo>SFO</d:airportTo>
	// <d:flightTime>361</d:flightTime>
	// <d:departureTime>PT11H00M00S</d:departureTime>
	// <d:arrivalTime>PT14H01M00S</d:arrivalTime>
	// <d:distance>2572.0000</d:distance>
	// <d:distanceUnit>SMI</d:distanceUnit>
	// <d:flightType></d:flightType>
	// <d:period>0</d:period>
	// </d:flightDetails>
	// <d:carrid>AA</d:carrid>
	// <d:connid>0017</d:connid>
	// <d:fldate>2014-09-17T00:00:00</d:fldate>
	// <d:PRICE>422.94</d:PRICE>
	// <d:CURRENCY>USD</d:CURRENCY>
	// <d:PLANETYPE>747-400</d:PLANETYPE>
	// <d:SEATSMAX>385</d:SEATSMAX>
	// <d:SEATSOCC>362</d:SEATSOCC>
	// <d:PAYMENTSUM>188035.19</d:PAYMENTSUM>
	// <d:SEATSMAX_B>31</d:SEATSMAX_B>
	// <d:SEATSOCC_B>29</d:SEATSOCC_B>
	// <d:SEATSMAX_F>21</d:SEATSMAX_F>
	// <d:SEATSOCC_F>20</d:SEATSOCC_F>
	//	
	createflight : function() {
		try {
			var flight = {
				carrid : "AA",
				connid : "0017",
				fldate : "2015-05-19T00:00:18",
				flightDetails : {
					countryFrom : "IN",
					cityFrom : "mumbai",
					countryTo : "US",
					cityTo : "New York",
					airportTo : "SFO",
					flightTime : "361",
					departureTime : "PT11H00M00S",
					arrivalTime : "PT14H01M00S",
					distanceUnit : "SMI",
					period : "0"
				}

			};
			oModel.create('/FlightCollection', flight, null, {
				success : function() {
					console.log("flight created");
				},
				error : function() {
					console.log("failed");
				}
			});
		} catch (e) {
			console.log(e);
		}
	},

	bookflight : function() {
		try {
			var bookingData = {
				bookid:"98827364",
				carrid : "AA",
				connid : "0017",
				fldate : '2015-04-15T00:00:00Z',
				CUSTOMID : "00001743",
				COUNTER : "00000028"
			};

			oModel.create('BookingCollection', bookingData, null, function() {
				console.log("Created Successfully");
			}, function() {
				console.log("create failed");
			});
		} catch (e) {
			console.log(e);
		}
	},
	
	createAgency : function() {
		try {
			var agency = {

				agencynum : "00000777",
				NAME : "ramson agency",
				STREET : "sapewada",
				POSTBOX : "440034",
				CITY : "ngp",
				COUNTRY : "IN",
				REGION : "05"
			};

			oModel.create("TravelagencyCollection", agency, null, function(
					odata, response) {
				console.log("agency created");
				
				console.log(response);
			}, function() {
				console.log("failed");
			});
		} catch (e) {
			console.log(e);
		}
	},
	
	updateBooking:function(){
		try{
			var entry={PASSNAME:"yash"};
			oModel.update("BookingCollection?$filter=bookid eq '00000077'",entry,null,function(){
				console.log("updated");
			},
			function(){console.log("failed");});
		}
		catch(e){
			console.log(e);
		}
	},
	getKeyValue:function(entry){
		return entry[Object.keys(entry)[0]];
	},
	
	updateAgency:function(){
		try{
			var entry={
					agencynum:"00000777",
					CITY:"ngp"};
//			
			oModel.update("/TravelagencyCollection('"+entry.agencynum+"')",entry,null,function(odata,response){
				console.log("updated");
				console.log(response);
			},function(){
				console.log("failed");
			});
			
//			var aBatchReq=[];
//			var update = oModel.createBatchOperation("/TravelagencyCollection('"+entry.agencynum+"')","PUT",entry,null);
//			aBatchReq.push(update);
//			oModel.addBatchChangeOperations(aBatchReq);
//			
//			oModel.submitBatch(function(){
//				console.log("submit success");
//				oModel.clearBatch();
//				},
//				function(){
//					console.log("failed");
//				},true);
		}
		catch(e){console.log(e);}
	},
	
	deleteAgency:function(){
		try{
			
			var entry={agencynum:"00000888"};
			oModel.remove("/TravelagencyCollection('"+entry.agencynum+"')",null,function(){
				console.log("deleted");
			},function(){
				console.log("failed");
			});
		}
		catch(e){
			console.log(e);
		}
	}

});
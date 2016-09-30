'use strict';

/* Magic Mirror
 * Module: MMM-PIR-Sensor
 *
 * By Benjamin Angst 
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const exec = require('child_process').exec;

module.exports = NodeHelper.create({
		 start: function () {
			 console.log('Temperatur helper started ...');
		 },
		 
		 // Subclass socketNotificationReceived received.
		 socketNotificationReceived: function(notification, payload) {
		   const self = this;
		   if (notification === 'REQUEST') {
			   const self = this
			   this.config = payload
			   
			   // execute external DHT Script
			   exec("sudo ./modules/temperature/dht_var " + this.config.sensorPIN, (error, stdout) => {
			   if (error) {
				    console.error(`exec error: ${error}`);
				    return;
				  }
			   	  var arr = stdout.split(",");
			   	  
				  //console.log("Log: " + temp + " - " + hum);
				  // Send Temperatur
		          self.sendSocketNotification('DATA',{
						temp: arr[1],
						humidity: arr[0]
				  });
			 });
		   }
		 }
 
});

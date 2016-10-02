
Module.register("MMM-DHT22",{
    // Default module config.
    defaults: {
    	sensorPIN: 2,
        updateInterval: 0.5, // Minutes
    },
    
	// Define start sequence.
    start: function() {
		Log.info("Starting module: " + this.name);
		
		this.loaded = false;
        this.temperature = '';
        this.humidity= '';
        
        this.update();
        setInterval(
        		this.update.bind(this),
        		this.config.updateInterval * 60 * 1000);
    },
    
	update: function(){
		this.sendSocketNotification('REQUEST', this.config);
	},

    // Override dom generator.
    getDom: function() {	
    	
    	var wrapper = document.createElement("div");
    	wrapper.className = "light small";
    	
		if (!this.loaded) {
			wrapper.innerHTML = "Loading ...";
			wrapper.className = "dimmed light small";
			return wrapper;
		}
    	
		var temp = document.createElement("div");
        temp.innerHTML = "Temperatur: " + this.temperature + " °C";
        wrapper.appendChild(temp);
        
        var hum = document.createElement("div");
        hum.innerHTML = "Luftfeuchtigkeit: " + this.humidity + " %";
        wrapper.appendChild(hum);
        
        return wrapper;
    },
    

    socketNotificationReceived: function(notification, payload) {
    if (notification === 'DATA') {
        this.temperature = payload.temp;
        this.humidity = payload.humidity;
        this.loaded = 1;
        this.updateDom();
    }
    },
});

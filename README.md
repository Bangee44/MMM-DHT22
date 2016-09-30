# MMM-DHT22
Additional Module for MagicMirror²  https://github.com/MichMich/MagicMirror

## Dependencies
- An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation

Navigate into your MagicMirror's `modules` folder:
```
cd ~/MagicMirror/modules
```

Clone this repository:
```
git clone https://github.com/BenRoe/MMM-DHT22
```

Navigate to the new `MMM-DHT22` folder and install the node dependencies.

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
```javascript
modules: [
  {
    module: 'MMM-DHT22',
    position: 'top_right',
    config: {
        sensorPIN: 2,
        updateInterval: 0.5, // Minutes    
    },
  },
]
```

## Configuration options

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>sensorPIN</code></td>
			<td>GPIO PIN
        <br>
        <br>
        <b>Possible values:</b> wPi 
        <br>
				<b>Default value:</b> <code>2</code>
			</td>
		</tr>

    <tr>
			<td><code>updateInterval</code></td>
			<td>Updateinterval for DHT22 sensor in minutes
        <br>
        <b>Possible values:</b> int 
        <br>
				<b>Default value:</b> <code>0.5</code>
			</td>
		</tr>
	</tbody>
</table>

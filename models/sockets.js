const Markers = require("./markers");


class Sockets {

	constructor( io ) {

		this.io = io;
		this.markers = new Markers()
		this.socketEvents();
	}

	socketEvents() {
		// On connection
		this.io.on('connection', ( socket ) => {
			console.log('cliente conectado')


			socket.emit('marcadores-activos',this.markers.activos)

			//se va a estar escuchando cuando cualquier cliente cree marcador-nuevo
			//? palabra clave "on"
			socket.on('marcador-nuevo',(marcador)=>{ // {id,lng,lat}
				this.markers.addMarker(marcador)
				socket.broadcast.emit('marcador-nuevo',marcador)
			})
			// se va a estar escuchando cuando se mueva un marcador y se hace un broadcast a todos los clientes conectados
			socket.on('marcador-actualizado',(marcador)=>{
				this.markers.updateMarker(marcador)
				socket.broadcast.emit('marcador-actualizado',marcador)
			})
		
		});
	}


}


module.exports = Sockets;
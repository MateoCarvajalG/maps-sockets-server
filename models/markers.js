class Markers{

    constructor(){
        this.activos={}
    }

    addMarker(marker){
        this.activos[marker.id] = marker
        return marker
    }

    deleteMarker(id){
        delete this.activos[id]
    }

    updateMarker(marker){
        this.activos[marker.id] = marker
    }


}

module.exports = Markers
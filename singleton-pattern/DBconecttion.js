
let instanciate = false

class DBconecction {
    constructor (uri){
        if(instanciate) { throw new Error('Solo puede haber una unica instancia de la base de datos') }

        this.uri = uri
        instanciate = true
    }

    connect(){
        console.log(`DB connected ${this.uri}`)
    }

    disconnect(){
        console.log(`DB disconnected`);
    }
}


const dataBase = Object.freeze(new DBconecction('https://mongodb...'))

export { dataBase }
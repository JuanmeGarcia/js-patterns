

const DBconnection = uri => Object.freeze({
    uri,
    connect: () => console.log(`Connected to ${uri}`),
    disconnect: () => console.log(`Disconnect from DB`)
})


const connection = DBconnection('mongodb://....')

export default connection
const uidTomap = new Map()

function setUID(id,user){
    return uidTomap.set(id,user)
}

function getUID(id){
    return uidTomap.get(id)
}

module.exports = {
    setUID,
    getUID
}
import instance from "../Config/axios"

export function getAllProductos(){
    return instance.get("sites/MLA/search?category=MLA1763&seller_id=181681546&q=moto%20motomel%20sirius%20190")
}

export function getByIdProductos(id){
    return instance.get("items/"+id)
}

export const GET_ONE_ITEM = 'GET_ONE_ITEM'


export const getOneItem = (id) =>{
    return{
        type:GET_ONE_ITEM,
        payload:id
    }
}
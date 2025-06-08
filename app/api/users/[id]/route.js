import users from "../../../../db.json"

export const  GET =async (request,{params})=>{
      let { id }=  await params
      const findedUser =  users.find((user)=>{return id === user._id})
        if(!findedUser){
             return Response.json({error:`user with id ${id} not found`},{status:404})
         }
    return Response.json({userInfo: findedUser},{status:200})

}

export const PUT =async(request,{params})=>{
      
     try {
         let {id} = await params;
         let findedUser = users.find((user)=>{return id === user._id})
          if(!findedUser){
             return Response
          }

     } catch (error) {
        
     }
      
    
}
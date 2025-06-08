import users from "../../../db"


export const GET=()=>{
     return Response.json(users)
}


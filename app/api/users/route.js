import users from "../../../db"
import { writeFile } from "fs/promises"

export const GET = () => {
    return Response.json(users)
}

export const POST = async (request) => {
    let { age, name, gender, email, phone, about } = await request.json()
    let requiredFields = { age, name, gender, email, phone, about } // assigning name ,age ets from line 9

    for (const [key, value] of Object.entries(requiredFields)) {  // destructure the array
        if (!value) {
            return Response.json({ error: `${key} is required` }, { status: 400 });
        }
    }


    let newUser = {
        _id: crypto.randomUUID(),
        ...requiredFields
    }
    users.push(newUser)

    try {
        await writeFile("db.json", JSON.stringify(users, null, 2))
        return Response.json({ message: "user added successfully" }, { status: 201 })

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }
}


export const DELETE = async (request,{params})=>{
      try{

      }catch(error){

      }
}
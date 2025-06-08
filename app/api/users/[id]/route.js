import users from "../../../../db.json"
import {writeFile} from "fs/promises"


export const GET = async (request, { params }) => {
    let { id } = await params
    const findedUser = users.find((user) => { return id === user._id })
    if (!findedUser) {
        return Response.json({ error: `user with id ${id} not found` }, { status: 404 })
    }
    return Response.json({ userInfo: findedUser }, { status: 200 })

}

export const PUT = async (request, { params }) => {

    try {
        let { id } = await params;
        let userdata = await request.json()
        let findedUserIndex = users.findIndex((user) =>  id === user._id )

        if (!findedUserIndex) {
            return Response({ error: `user with id ${id} not found` }, { status: 404 })
        }

        if (userdata._id) {
            return Response.json({ error: 'you dont have a parmission to update user _id' }, { status: 403 })
        }

        let updateUserInfo = { ...users[findedUserIndex], ...userdata }
        users[findedUserIndex] = updateUserInfo
        await writeFile("db.json", JSON.stringify(users, null, 2))

        return Response.json({ message: "user updated successfully" }, { status: 200 })

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }

}
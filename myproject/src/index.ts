import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"


AppDataSource.initialize()
    .then(() => {
        console.log("Database connection initialized successfully")
    })
    .catch((error) => {
        console.log(error)
    })

const getPhotos = async () => {
    const photoRepository = AppDataSource.getRepository(Photo)

    const savedPhotos = await photoRepository.find()
    console.log(savedPhotos)
}
getPhotos()

// import express from "express";


// const app = express();
// app.get("/users", async (request,response) => {
//     try {
//         const users = await AppDataSource.manager.find(User)
//         response.send(users)
//     } catch (error) {
//         response.send(error)
//     }
// })


// app.listen(3000, () => {
//     console.log("Server listening to port 3000")
// })

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Wood"
//     user.lastName = "Teak"
//     user.age = 10
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     const photo = new Photo()
//     photo.name = "The Kingsmen"
//     photo.description = "A man with courage"
//     photo.filename = "story book"
//     photo.isPublished = false
//     photo.views = 1200

//     await AppDataSource.manager.save(photo)
//     console.log("Saved a new book with id: " + user.id)

//     console.log("Loading photo from the database....")
//     const photos = await AppDataSource.manager.find(Photo)
//     console.log("Loaded photos: ", photos)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

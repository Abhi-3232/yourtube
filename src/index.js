import { connectDB } from './db/index.js'

connectDB()










// const app = express()

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error", (err) => {
//             console.log(`ERR : ${err}`);
//             throw err
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`app is listeningon port : ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.log(`Error : ${error}`)
//     }
// })()
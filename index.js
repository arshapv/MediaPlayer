// 1.import json server

const jsonServer=require('json-server')
// 2.create server for our application using create()

 const Mpserver=jsonServer.create()
// 3.create middileware()-to communicate front end and the backend

 const middileware=jsonServer.defaults()

// set router to the db.json file to save all datas
 const route=jsonServer.router('db.json')

// to deploy the project
 const PORT=3000 || process.env.PORT

 Mpserver.use(middileware)
 Mpserver.use(route)
//  used to notify the running port and give an message to us 
 Mpserver.listen(PORT,()=>{
    console.log(`Media player server running at ${PORT} and waiting for client request`);
 })

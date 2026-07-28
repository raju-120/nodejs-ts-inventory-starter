import express, { Request,Response }  from "express";

require("dotenv").config();

const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.use(express.json());
app.listen(port, ()=>{
  console.log(`Server is running on http://localhost:${port}`)
});


app.get("/",(req: Request, res: Response)=>{
  return res.status(200).json('Server is working properly')
})

app.get('/customers', async(req: Request, res:Response)=>{
  const customers =[
    { 
      name: "Jhon Doe",
      email: "jhon@email.com",
      phone:"+1478855254"
    },
    {
      name: "Jack Anderson",
      email: "jack@email.com",
      phone:"+58948044585"
    },
    {
      name: "Anna Hattaway",
      email: "anna@email.com",
      phone:"+895522538"
    },
  ];
  return res.status(200).json(customers);
})
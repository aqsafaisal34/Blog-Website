import * as fs from 'fs';
import Cors from 'cors';

const cors = Cors({
    methods: ['POST'],
    origin: ['https://blog-website-drab-eight.vercel.app', '*'] // Replace with your actual frontend URL
  });

  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  }
export default async function handler(req,res){
    await runMiddleware(req, res, cors);
    if(req.method === 'POST'){
     let data = await fs.promises.readdir('contactdata');
     fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body));
    res.status(200).json(req)
    }else{
        res.status(200).json({name:"hello"})
    }
}
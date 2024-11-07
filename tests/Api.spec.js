import{test,expect} from '@playwright/test'
import { request } from 'http'
import { name } from '../playwright.config'
let userid;
test('Get users',async({request})=>{
  const response=  await request.get("https://reqres.in/api/users?page=2")
  console.log(await response.json())
  await expect(response.status()).toBe(200)
})

test('create users',async({request})=>{
   const response= await request.post("https://reqres.in/api/users",{
                                                      
                                                      data:{"name":"mouni","job":"Developer"},
                                                      headers:{"Accept":"application/json"}
                                                      });
     console.log(await response.json())
     await expect(response.status()).toBe(201);
     var resid=await response.json()
     resid=userid


})
test('update users',async({request})=>{
   const resp= await request.put("https://reqres.in/api/users/"+userid,{
                                                        data:{"name":"mouni","job":"Tester"},
                                                        headers:{"Accept":"Application/json"},
         
                                                        });

    console.log(await resp.json())
    expect(await resp.status()).toBe(200)
})
test('delete users',async({request})=>{
    const res=await request.delete("https://reqres.in/api/users/"+userid)
    expect(res.status()).toBe(204)
})




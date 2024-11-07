import{test,expect} from '@playwright/test'
test.beforeAll(async()=>{
    console.log("this is beforeall hook")
})
test.afterAll(async()=>{
    console.log("this is afterall hook")
})
test.beforeEach(async()=>{
    console.log("this is beforeEach hook")
})
test.afterEach(async()=>{
    console.log("this is aftereach hook")
})

test.describe('Group1',()=>{
    test('test1',async({page})=>{
        console.log("test1...")
    })
    test('test2',async({page})=>{
        console.log("test2...")
    })
})
import{test,expect} from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //total no of frames
//    const frame= await page.frames()
//    console.log(frame.length)

   const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
     //frame1.locator("input[name='mytext1']").fill("good")
     frame1.fill("input[name='mytext1']","good")

//    const frames1=await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
//    await frames1.fill("Hello")
   await page.waitForTimeout(3000)
})
test.only('inner',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //await frame3.locator("input[name='mytext3']").fill("mouni")

    const child=await frame3.childFrames()
     child[0].locator("//*[@id='i5']/div[3]/div").check()
  
    await page.waitForTimeout(3000)
})
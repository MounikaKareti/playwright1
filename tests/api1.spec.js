import{test,expect} from '@playwright/test';
test('dbl',async({page})=>{
    // Start waiting for download before clicking. Note no await.
const downloadPromise = page.waitForEvent('download');
await page.locator("a[href='/context_menu']").click();
const download = await downloadPromise;

// Wait for the download process to complete and save the downloaded file somewhere.
await download.saveAs('/path/to/save/at/' + download.suggestedFilename());

})
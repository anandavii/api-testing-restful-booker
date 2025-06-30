import { test, expect } from '@playwright/test'

test('GET- Get all the booking details', async ({ request }) => {
    const response = await request.get(`/booking`)
    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)

    //log the response
    console.log(responseBody)
})
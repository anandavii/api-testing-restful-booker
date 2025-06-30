import { test, expect } from '@playwright/test'

test('POST- Create a new booking', async ({ request }) => {

    const response = await request.post(`/booking`, {
        data: {
            "firstname": "Abhishek",
            "lastname": "Anand",
            "totalprice": 1099,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-07-01",
                "checkout": "2019-07-10"
            },
            "additionalneeds": "Lunch and Breakfast"
        }
    })
    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)


    console.log(responseBody)
})
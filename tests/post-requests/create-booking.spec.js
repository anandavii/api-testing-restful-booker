import { test, expect } from '@playwright/test'

test('POST- Create a new booking', async ({ request }) => {
    //Booking payload
    const bookingPayload = {
        "firstname": "Abhishek",
        "lastname": "Anand",
        "totalprice": 1099,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-07-01",
            "checkout": "2025-07-10"
        },
        "additionalneeds": "Lunch and Breakfast"
    }

    // POST request
    const response = await request.post(`/booking`, {
        data: bookingPayload
    })

    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)

    // Validate booking id is present
    expect(responseBody).toHaveProperty('bookingid')
    expect(typeof responseBody.bookingid).toBe('number')
    expect(responseBody).toHaveProperty('booking')

    // Validate booking details
    expect(responseBody.booking).toMatchObject(bookingPayload)

    // log
    //console.log(responseBody)
})
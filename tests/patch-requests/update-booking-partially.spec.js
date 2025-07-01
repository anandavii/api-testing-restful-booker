import { test, expect } from '@playwright/test'
require('dotenv').config()

test('PATCH- Update the booking details partially', async ({ request }) => {
    const bookingPayload = {
        "firstname": "Abhishek",
        "lastname": "Anand",
        "totalprice": 121,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-07-01",
            "checkout": "2025-07-10"
        },
        "additionalneeds": "Breakfast and everything"
    }

    // POST request to create a new booking
    const response = await request.post(`/booking`, {
        data: bookingPayload
    })

    // store the booking id for the new booking created
    const { bookingid } = await response.json()

    // now get the auth token
    const authRes = await request.post(`/auth`, {
        data: {
            username: process.env.AUTH_USERNAME,
            password: process.env.AUTH_PASSWORD,
        }
    })

    // store the auth token
    const { token } = await authRes.json()

    //update the booking
    const updateBookingPayload = {
        "firstname": "Abhishek-updated",
        "lastname": "Anand-updated",
        "additionalneeds": "Breakfast and everything updated"
    }

    const updateRes = await request.patch(`/booking/${bookingid}`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: updateBookingPayload
    })

    // assert status code
    expect(updateRes.status()).toBe(200)
    expect(updateRes.ok()).toBe(true)

    const updatedResponseBody = JSON.parse(await updateRes.text())

    // match the updated record
    expect(updatedResponseBody).toMatchObject(updateBookingPayload)
})

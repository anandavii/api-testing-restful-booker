import { test, expect } from '@playwright/test'

test('PUT- Update the booking details', async ({ request }) => {
    const bookingPayload = {
        "firstname": "James",
        "lastname": "Brown",
        "totalprice": 111,
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
            username: 'admin',
            password: 'password123'
        }
    })

    // store the auth token
    const { token } = await authRes.json()

    //update the booking
    const updateBookingPayload = {
        "firstname": "James-updated",
        "lastname": "Brown-updated",
        "totalprice": 222,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2025-07-10",
            "checkout": "2025-07-15"
        },
        "additionalneeds": "Breakfast and everything updated"
    }

    const updateRes = await request.put(`/booking/${bookingid}`, {
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
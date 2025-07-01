import { test, expect } from '@playwright/test'
import bookingPayload from '../../testdata/createBookingPayload.json'
import updateBookingPayload from '../../testdata/updateBookingPayload.json'
require('dotenv').config()

test('PUT- Update the booking details using JSON from external File', async ({ request }) => {

    // POST request to create a new booking
    const response = await request.post(`/booking`, {
        data: bookingPayload
    })

    //log the new booking
    //console.log(await response.json())

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

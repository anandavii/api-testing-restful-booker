import { test, expect } from '@playwright/test'
import bookingPayload from '../../testdata/createBookingPayload.json'

test('DELETE- Delete a booking', async ({ request }) => {

    //get auth code
    const authToken = await request.post(`/auth`, {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    // POST request to create a new booking
    const responseBooking = await request.post(`/booking`, {
        data: bookingPayload
    })

    // store the booking id for the new booking created
    const { bookingid } = await responseBooking.json()

    const { token } = await authToken.json()


    const response = await request.delete(`/booking/${bookingid}`, {
        headers: {
            Cookie: `token=${token}`
        },
    })

    const responseBody = await response.text()

    //assert successful deletion
    expect(response.status()).toBe(201)
    expect(responseBody).toEqual('Created')

})
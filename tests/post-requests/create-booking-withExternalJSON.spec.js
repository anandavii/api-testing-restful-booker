import { test, expect } from '@playwright/test'
import bookingPayload from '../../testdata/createBookingPayload.json'

test('POST- Create a new booking using JSON from external File', async ({ request }) => {

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
    expect(responseBody.booking.additionalneeds).toEqual('Lunch and Breakfast')

    // log
    //console.log(responseBody)
})
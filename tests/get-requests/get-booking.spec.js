import { test, expect } from '@playwright/test'

test('GET- Get all the booking details', async ({ request }) => {
    const response = await request.get(`/booking`)
    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)

    //assert schema
    expect(responseBody[0]).toHaveProperty('bookingid')
    expect(typeof responseBody[0].bookingid).toBe('number')

    //validate booking id is non zero
    expect(responseBody.length).toBeGreaterThan(0)
})

test('GET- Get specific booking by booking id 1', async ({ request }) => {
    const response = await request.get(`/booking/1`)
    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)

    // Schema validation
    expect(responseBody).toMatchObject({
        firstname: expect.any(String),
        lastname: expect.any(String),
        totalprice: expect.any(Number),
        depositpaid: expect.any(Boolean),
        bookingdates: expect.any(Object),
    })

    //vaidate the checkin and checkout are date type
    expect(!isNaN(Date.parse(responseBody.bookingdates.checkin))).toBe(true)
    expect(!isNaN(Date.parse(responseBody.bookingdates.checkout))).toBe(true)

    // Check the optional field
    if ('additionalneeds' in responseBody) {
        expect(typeof responseBody.additionalneeds).toBe('string')
    }

    //log the response
    console.log(responseBody)
})

test('GET- Get specific booking by first name', async ({ request }) => {
    const response = await request.get(`/booking`, {
        params: {
            firstname: "Susan"
        }
    })
    const responseBody = JSON.parse(await response.text())

    //assert status code 200
    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)

    //assert schema
    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0)

    expect(responseBody[0]).toHaveProperty('bookingid')
    expect(typeof responseBody[0].bookingid).toBe('number')

    //log the response
    console.log(responseBody)
})
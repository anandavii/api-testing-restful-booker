import { test, expect } from '@playwright/test'

test('DELETE- Delete a booking', async ({ request }) => {

    //get auth code
    const authToken = await request.post(`/auth`, {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    const { token } = await authToken.json()


    const response = await request.delete(`/booking/2`, {
        headers: {
            Cookie: `token=${token}`
        },
    })

    //assert successful deletion
    expect(response.status()).toBe(201)

})
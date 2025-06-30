import { test, expect } from '@playwright/test'

test('GET- Get the booking details', async ({ request }) => {
    const response = await request.get(`/booking`)
    expect(response.status()).toBe(200)
})
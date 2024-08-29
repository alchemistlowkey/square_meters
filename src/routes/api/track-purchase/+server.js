// src/routes/api/track-purchase/+server.js
import { json } from '@sveltejs/kit';
import { createHash } from 'crypto'; // ES Module import
import bizSdk from 'facebook-nodejs-business-sdk';

const { ServerEvent, EventRequest, UserData, CustomData } = bizSdk;
const access_token = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
const pixel_id = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);

export async function POST({ request }) {
    try {
        const { email, value, currency } = await request.json();
        const current_timestamp = Math.floor(new Date() / 1000);

        // Hash email using SHA-256
        const hashedEmail = createHash('sha256')
            .update(email)
            .digest('hex');

        // Create user data
        const userData = new UserData().setEmails([hashedEmail]);

        // Create custom data
        const customData = new CustomData()
            .setValue(value)
            .setCurrency(currency);

        // Create server event
        const serverEvent = new ServerEvent()
            .setEventName('Purchase')
            .setEventTime(current_timestamp)
            .setUserData(userData)
            .setCustomData(customData)
            .setActionSource('website');

        // Send event to Facebook
        const eventRequest = new EventRequest(access_token, pixel_id)
            .setEvents([serverEvent]);
        await eventRequest.execute();

        return json({ message: 'Purchase event tracked successfully.' });
    } catch (error) {
        console.error('Error tracking purchase event:', error);
        return json({ error: 'Error tracking purchase event.' }, { status: 500 });
    }
}

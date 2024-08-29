import { json } from '@sveltejs/kit';
import { FACEBOOK_ACCESS_TOKEN, FACEBOOK_PIXEL_ID } from '$env/static/private';
import { FacebookAdsApi, ServerEvent, EventRequest, UserData, CustomData } from 'facebook-nodejs-business-sdk';

export async function POST({ request }) {
    try {
        // Initialize the SDK
        FacebookAdsApi.init(FACEBOOK_ACCESS_TOKEN);

        // Parse the request body
        const { emails, value, currency, eventName, eventTime } = await request.json();

        // Set user data
        const userData = new UserData().setEmails(emails); // Ensure emails are already hashed if needed

        // Set custom data
        const customData = new CustomData().setValue(value).setCurrency(currency);

        // Set server event
        const serverEvent = new ServerEvent()
            .setEventName(eventName)
            .setEventTime(eventTime || Math.floor(new Date() / 1000)) // Use current time if not provided
            .setUserData(userData)
            .setCustomData(customData)
            .setActionSource("website");

        // Send event request
        const eventRequest = new EventRequest(FACEBOOK_ACCESS_TOKEN, FACEBOOK_PIXEL_ID)
            .setEvents([serverEvent]);

        // Execute the request
        await eventRequest.execute();

        // Return success response
        return json({ status: 'success', message: 'Event sent successfully' });

    } catch (error) {
        console.error('Error sending event to Meta Pixel:', error);
        return json({ status: 'error', message: 'Failed to send event' }, { status: 500 });
    }
}

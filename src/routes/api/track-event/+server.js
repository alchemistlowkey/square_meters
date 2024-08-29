import { json } from "@sveltejs/kit";
import { createHash } from "crypto";
import bizSdk from "facebook-nodejs-business-sdk";

const { ServerEvent, EventRequest, UserData, CustomData } = bizSdk;
const access_token = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;
const pixel_id = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
const api = bizSdk.FacebookAdsApi.init(access_token);

export async function POST({ request }) {
  try {
    const eventData = await request.json();
    const { eventName, url, referrer, timestamp } = eventData;

    const hashedEmail = createHash("sha256")
      .update(eventData.email || "")
      .digest("hex");

    const userData = new UserData().setClientIpAddress(
      request.headers.get("x-forwarded-for") || ""
    );

    const customData = new CustomData()
      .setValue(eventData.value || 0)
      .setCurrency(eventData.currency || "USD");

    const serverEvent = new ServerEvent()
      .setEventName(eventName)
      .setEventTime(timestamp)
      .setUserData(userData)
      .setCustomData(customData)
      .setActionSource("website");

    const eventRequest = new EventRequest(access_token, pixel_id).setEvents([
      serverEvent,
    ]);

    await eventRequest.execute();

    return json({ message: "Event tracked successfully." });
  } catch (error) {
    console.error("Error tracking event:", error);
    return json({ error: "Error tracking event." }, { status: 500 });
  }
}

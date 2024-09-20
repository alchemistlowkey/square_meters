import { dev } from '$app/environment';

export const load = async ({ fetch }) => {
  // You can fetch any server-side data here (e.g., from APIs)
  
  // Preload the Google Analytics script
  const gtagScript = dev ? '' : 'https://www.googletagmanager.com/gtag/js?id=G-7REW6CW0T8';

  return {
    gtagScript
  };
};

import { toast } from "@zerodevx/svelte-toast";

export const toastsuccess = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "#0D493D",
      "--toastColor": "#F6FFFD",
      "--toastBarBackground": "#F96B29",
      "--toastBorderRadius": "6px",
    },
  });

export const warning = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "#0D493D",
      "--toastColor": "#F96B29",
      "--toastBarBackground": "#F6FFFD",
      "--toastBorderRadius": "6px",
    },
  });

export const failure = (m) =>
  toast.push(m, {
    theme: {
      "--toastBackground": "#0D493D",
      "--toastColor": "red",
      "--toastBarBackground": "#F6FFFD",
      "--toastBorderRadius": "6px",
    },
  });

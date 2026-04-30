import type { BusinessInfo } from "../types/businessInfo";

export const businessInfoFallback: BusinessInfo = {
  id: 1,
  name: "Dorothy's Massage Studio",
  phoneDisplay: "(661) 405-4079",
  phoneHref: "tel:+16614054079",
  addressLines: ["1034 W Ave L 12", "Suite 101 Room #5", "Lancaster, CA 93534"],
  homeIntroTitle: "Therapeutic care with over 25 years of experience",
  homeIntroParagraphs: [
    "Book your appointment with Dorothy, a seasoned massage therapist and healing practitioner with over 25 years of experience.",
    "Since 1996, she has offered mindful, intuitive touch-customized treatments designed to calm the nervous system, release tension, and revitalize both body and mind.",
    "Sessions are designed to support the body's natural healing process.",
  ],
  businessHours: [
    { id: 1, day: "Monday", hours: "8:00 am - 10:00 pm", displayOrder: 1 },
    { id: 2, day: "Tuesday", hours: "8:00 am - 10:00 pm", displayOrder: 2 },
    { id: 3, day: "Wednesday", hours: "7:00 pm - 10:00 pm", displayOrder: 3 },
    { id: 4, day: "Thursday", hours: "8:00 am - 10:00 pm", displayOrder: 4 },
    { id: 5, day: "Friday", hours: "8:00 am - 10:00 pm", displayOrder: 5 },
    { id: 6, day: "Saturday", hours: "8:00 am - 10:00 pm", displayOrder: 6 },
    { id: 7, day: "Sunday", hours: "Closed", displayOrder: 7 },
  ],
};

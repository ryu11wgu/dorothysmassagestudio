import type { BusinessInfo } from "../types/businessInfo";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchBusinessInfo(): Promise<BusinessInfo> {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL}/api/business-info`);

  if (!response.ok) {
    throw new Error("Failed to load business information.");
  }

  return response.json();
}

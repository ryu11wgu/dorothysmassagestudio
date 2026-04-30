import { useEffect, useState } from "react";
import type { BusinessInfo } from "../types/businessInfo";
import { fetchBusinessInfo } from "../api/businessInfoApi";
import { businessInfoFallback } from "../data/businessInfoFallback";

export function useBusinessInfo() {
  const [businessInfo, setBusinessInfo] =
    useState<BusinessInfo>(businessInfoFallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBusinessInfo() {
      try {
        const data = await fetchBusinessInfo();
        setBusinessInfo(data);
      } catch (error) {
        console.warn("Using fallback business info:", error);
        setBusinessInfo(businessInfoFallback);
      } finally {
        setLoading(false);
      }
    }

    loadBusinessInfo();
  }, []);

  return { businessInfo, loading };
}

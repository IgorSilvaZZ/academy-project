import { geocodingApi } from "../lib/axios";

export interface IGeocodingApi {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export const getForwardGeocoding = async ({
  street,
  city,
  state,
  country,
  postalCode,
}: IGeocodingApi) => {
  const { data } = await geocodingApi.get("/search", {
    params: {
      street,
      city,
      state,
      country,
      postalCode,
    },
  });

  const [infoData] = data;

  return infoData;
};

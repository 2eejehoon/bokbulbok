interface locationType {
  coordinates?: { lat: number; lng: number };
  error?: { code: number; message: string };
}

export function saveLocationDataToStorage(): void {
  const { geolocation } = navigator;

  if (!geolocation) return;

  const onSuccess = (location: { coords: { longitude: number; latitude: number } }) => {
    window.localStorage.setItem(
      "location",
      JSON.stringify({
        coordinates: {
          mapX: location.coords.longitude,
          mapY: location.coords.latitude,
        },
      })
    );
  };

  const onError = (error: { code: number; message: string }) => {
    window.localStorage.setItem(
      "location",
      JSON.stringify({
        error: {
          code: error.code,
          message: error.message,
        },
      })
    );
  };

  geolocation.getCurrentPosition(onSuccess, onError);
}

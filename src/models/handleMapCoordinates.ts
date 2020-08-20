function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 36.964, lng: -122.015 },
        zoom: 18,
        mapTypeId: "satellite"
      }
    );
    map.setTilt(45);
  }
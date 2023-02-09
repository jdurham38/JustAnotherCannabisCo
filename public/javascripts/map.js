mapboxgl.accessToken =
  "pk_test_51MYwm7HR3c6JyWy2jPbtJFfpwTfZbyrLxwsTi2ODXXd45BT7PJ6JGKMVbSPQAJBmlkl9cmoSOUgApmAGGUz2NDSE007UAB9268";
const lat = 48.8606;
const lng = 2.3376;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 8,
  center: [lng, lat],
});

const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

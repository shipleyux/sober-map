
<!-- JavaScript -->
<script>
    // Initialize the map
    const map = L.map('map');
    map.setView([52.488, -0.89], 7);

    // Add a tile layer
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
</script>
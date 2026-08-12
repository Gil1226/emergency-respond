function MarkerDesign(severity) {
    let color = "#22c55e";

    if (severity === "critical") {
        color = "#ef4444";
    } else if (severity === "sever") {
        color = "#f97316";
    } else if (severity === "moderate") {
        color = "#eab308";
    }

    return L.divIcon({
        className: "custom-emergency-marker",
        html: `
            <div
                style="
                    width: 32px;
                    height: 32px;
                    background: ${color};
                    border: 3px solid white;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    box-shadow: 0 3px 8px rgba(0,0,0,0.35);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                "
            >
                <div
                    style="
                        width: 10px;
                        height: 10px;
                        background: white;
                        border-radius: 50%;
                    "
                ></div>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
}
export default MarkerDesign;
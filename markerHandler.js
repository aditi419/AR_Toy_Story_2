AFRAME.registerComponent("markerhandler", {
    init: async function(){
        this.el.addEventListener("markerFound", () => {
            console.log("Marker is Found!");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            console.log("Marker is Lost!");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary");

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i:imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Ordering!",
                text: "  ",
                timer: 2000,
                buttons: false
            });
        });

        orderSummaryButton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work In Progress"
            });
        });
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
})
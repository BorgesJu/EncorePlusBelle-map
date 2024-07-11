let myPopup;

// Ouvrir le popup lorsque le joueur entre dans la zone définie
WA.room.onEnterLayer("popupZone").subscribe(() => {
    myPopup = WA.ui.openPopup("popupRectangle", 'Bienvenue dans cette zone!', [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            popup.close();
        }
    }]);
});

// Fermer le popup lorsque le joueur quitte la zone définie
WA.room.onLeaveLayer("popupZone").subscribe(() => {
    if (myPopup) {
        myPopup.close();
    }
});

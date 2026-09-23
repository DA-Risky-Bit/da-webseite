function fullScreen(element) {
    element.requestFullscreen();
    if (document.fullscreenElement !== null) {
        document.exitFullscreen();
    }
}
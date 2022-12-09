var layers = {}

function AddLayer(layername, layerdata) {
    layers[layername] = layerdata
}

window.setInterval(function() {document.getElementById("testing").innerHTML = JSON.stringify(layers)},500)

AddLayer(
    "rebirth",
    {test: "a",
    test2: "b"}
)
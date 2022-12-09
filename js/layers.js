var layers = {}

function AddLayer(layername, layerdata) {
    layers[layername] = layerdata
}

document.getElementById("testing").innerHTML = JSON.stringify(layers)

AddLayer(
    "rebirth",
    {test: "a",
    test2: "b"}
)
$(function(){
    // your code here. 
    "use strict";
var canvasData = document.querySelector(".hero__background");
if (canvasData) {
    var canvasColours = canvasData.getAttribute("data-colour");
    if (canvasColours) {
        var width,
            height,
            center,
            points = 3,
            smooth = !0,
            path = new Path({ strokeColor: canvasColours || "#1c2a35", strokeWidth: 1 }),
            path2 = new Path({ strokeColor: canvasColours || "#1c2a35", strokeWidth: 3, dashArray: [1, 10], strokeCap: "round" }),
            path3 = new Path({ strokeColor: canvasColours || "#1c2a35", strokeWidth: 1 }),
            mousePos = view.center / 2,
            pathHeight = mousePos.y;
        initializePath();
    }
}
function initializePath() {
    (center = view.center), (width = view.size.width), (height = view.size.height / 2), (path.segments = []), path.add(0, center.y + height / 10);
    for (var t = 1; t < points; t++) {
        var e = new Point((width / points) * t, center.y);
        path.add(e);
    }
    path.add(width, center.y + height / 8), (path2.segments = []), path2.add(0, center.y - height / 15);
    for (t = 1; t < points; t++) {
        e = new Point((width / points) * t, center.y);
        path2.add(e);
    }
    path2.add(width, center.y + height / 5), (path3.segments = []), path3.add(0, center.y + height / 20);
    for (t = 1; t < points; t++) {
        e = new Point((width / points) * t, center.y);
        path3.add(e);
    }
    path3.add(width, center.y + height / 15);
}
function onFrame(t) {
    pathHeight += (center.y - mousePos.y - pathHeight) / 80;
    for (var e = 1; e < points; e++) {
        var a = t.count + 100 * (e + (e % 10)),
            h = Math.sin(a / 200) * pathHeight,
            o = Math.sin(a / 100) * h + height;
        path.segments[e].point.y = o;
    }
    for (e = 1; e < points; e++) {
        (a = t.count + 50 * (e + (e % 3))), (h = Math.sin(a / 200) * pathHeight), (o = Math.sin(a / 100) * h + height);
        path2.segments[e].point.y = o;
    }
    for (e = 1; e < points; e++) {
        (a = t.count + 80 * (e + (e % 2))), (h = Math.sin(a / 200) * pathHeight), (o = Math.sin(a / 100) * h + height);
        path3.segments[e].point.y = o;
    }
    smooth && path.smooth({ type: "continuous" }), smooth && path2.smooth({ type: "continuous" }), smooth && path3.smooth({ type: "continuous" });
}
function onResize(t) {
    initializePath();
}
//# sourceMappingURL=paperHero.js.map
   
});
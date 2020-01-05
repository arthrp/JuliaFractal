const canv = document.querySelector("#main-canv");
const ctx = canv.getContext("2d");
const fractalDrawer = new FractalDrawer(canv, ctx);
let cReal = -0.4;
document.querySelector("#c-real").addEventListener("input", (e) => {
    let val = (e.srcElement).value;
    document.querySelector("#c-real-value").innerHTML = val;
    cReal = val;
    fractalDrawer.draw(parseFloat(val));
});
fractalDrawer.draw(-0.5);
//# sourceMappingURL=main.js.map
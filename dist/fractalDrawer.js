class FractalDrawer {
    constructor(_canv, _ctx) {
        this._canv = _canv;
        this._ctx = _ctx;
    }
    draw(cReal) {
        const cImaginary = -0.6;
        const maxWidth = this._canv.width;
        const maxHeight = this._canv.height;
        const imageData = this._ctx.getImageData(0, 0, maxWidth, this._canv.height);
        const data = imageData.data;
        const maxIterations = 255;
        let x = 0, y = 0;
        for (var h = 0; h < maxHeight; h++) {
            for (var w = 0; w < maxWidth; w++) {
                //Hardcoded pan
                x = -1.5 + w * 3.0 / maxWidth;
                y = -1.0 + h * 2.0 / maxHeight;
                let i = 0;
                while ((x * x + y * y < 4) && (i < maxIterations)) {
                    let xNew = x * x - y * y + cReal;
                    let yNew = 2 * x * y + cImaginary;
                    x = xNew;
                    y = yNew;
                    i++;
                }
                data[h * maxWidth * 4 + w * 4 + 0] = i * 25;
                data[h * maxWidth * 4 + w * 4 + 1] = i * 5;
                data[h * maxWidth * 4 + w * 4 + 2] = i * 8;
                data[h * maxWidth * 4 + w * 4 + 3] = 255;
            }
        }
        this._ctx.putImageData(imageData, 0, 0);
    }
}
//# sourceMappingURL=fractalDrawer.js.map
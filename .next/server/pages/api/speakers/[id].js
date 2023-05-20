"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userHandler)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const { promisify  } = __webpack_require__(837);
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));
const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));
const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
async function userHandler(req, res) {
    const id = parseInt(req?.query?.id);
    const method = req?.method;
    const recordFromBody = req?.body;
    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");
    async function getSpeakersData() {
        const readFileData = await readFile(jsonFile);
        return JSON.parse(readFileData).speakers;
    }
    switch(method){
        case "GET":
            const speakers = await getSpeakersData();
            const speaker = speakers.find((rec)=>rec.id === id);
            if (speaker) {
                res.status(200).json(speaker);
            } else {
                res.status(404).send("speaker not found");
            }
            //speaker ? res.status(200).json(speaker) : res.status(404);
            // Get data from your database
            //res.status(200).json({ id, name: `User ${id}` });
            console.log(`GET /api/speakers/${id} status: 200`);
            break;
        case "PUT":
            try {
                await delay(1000);
                // res.status(404).json(recordFromBody);
                // return;
                const speakers1 = await getSpeakersData();
                const newSpeakersArray = speakers1.map(function(rec) {
                    return rec.id === id ? recordFromBody : rec;
                });
                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray
                }, null, 2));
                res.status(200).json(recordFromBody);
                console.log(`PUT /api/speakers/${id} status: 200`);
            } catch (e) {
                console.log("/api/speakers PUT error:", e);
            }
            break;
        case "POST":
            try {
                await delay(1000);
                // res.status(404).json(recordFromBody);
                // return;
                const speakers2 = await getSpeakersData();
                const newSpeakersArray1 = [
                    recordFromBody,
                    ...speakers2.map(function(rec) {
                        return rec.id === id ? recordFromBody : rec;
                    }), 
                ];
                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray1
                }, null, 2));
                res.status(200).json(recordFromBody);
                console.log(`POST /api/speakers/${id} status: 200`);
            } catch (e1) {
                console.log("/api/speakers POST error:", e1);
            }
            break;
        case "DELETE":
            try {
                await delay(1000);
                // res.status(404).json(recordFromBody);
                // return;
                const speakers3 = await getSpeakersData();
                const newSpeakersArray2 = speakers3.filter(function(rec) {
                    return rec.id != id;
                });
                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray2
                }, null, 2));
                res.status(200).json(recordFromBody);
                console.log(`DELETE /api/speakers/${id} status: 200`);
            } catch (e2) {
                console.log("/api/speakers DELETE error:", e2);
            }
            break;
        default:
            res.setHeader("Allow", [
                "GET",
                "PUT",
                "POST",
                "DELETE"
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(225));
module.exports = __webpack_exports__;

})();
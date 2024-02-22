"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.DB_CONNECTION);
const carecenter_1 = require("./routes/carecenter");
const volunteer_1 = require("./routes/volunteer");
//For env File
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const port = process.env.PORT || 8000;
exports.app.set("view engine", "jade");
exports.app.use("/", index_1.default);
exports.app.listen(port, () => {
    console.log(`not live http://localhost:${port}`);
});
exports.app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
exports.app.use(express_1.default.json());
exports.app.use("/api/carecenter", carecenter_1.router);
exports.app.use("/api/volunteer", volunteer_1.router);

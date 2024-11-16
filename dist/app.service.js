"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ble_entity_1 = require("./entities/ble.entity");
let BleService = class BleService {
    constructor(bleDataRepository) {
        this.bleDataRepository = bleDataRepository;
    }
    async createBleData(bleDataDto) {
        const { deviceId, orgId, deviceLocation, beaconPayloads, metaData } = bleDataDto;
        const latitude = deviceLocation.point.latitudeMicro / 1_000_000;
        const longitude = deviceLocation.point.longitudeMicro / 1_000_000;
        const bleManufacturerData = beaconPayloads[0].bleManufacturerData;
        const receiveTime = new Date(beaconPayloads[0].receiveTime.seconds * 1000);
        const rssiDbm = beaconPayloads[0].rssiDbm;
        const bleData = new ble_entity_1.BleData();
        bleData.deviceId = deviceId;
        bleData.orgId = orgId;
        bleData.latitude = latitude;
        bleData.longitude = longitude;
        bleData.accuracyCm = deviceLocation.accuracyCm;
        bleData.bleManufacturerData = bleManufacturerData;
        bleData.receiveTime = receiveTime;
        bleData.rssiDbm = rssiDbm;
        bleData.type = metaData.type;
        bleData.version = metaData.version;
        return await this.bleDataRepository.save(bleData);
    }
};
exports.BleService = BleService;
exports.BleService = BleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ble_entity_1.BleData)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BleService);
//# sourceMappingURL=app.service.js.map
import { BleService } from './app.service';
import { CreateBleDataDto } from './dto/ble.dto';
export declare class BleController {
    private readonly bleService;
    constructor(bleService: BleService);
    createBleData(createBleDataDto: CreateBleDataDto): Promise<import("./entities/ble.entity").BleData>;
}

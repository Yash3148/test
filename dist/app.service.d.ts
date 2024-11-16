import { Repository } from 'typeorm';
import { BleData } from './entities/ble.entity';
import { CreateBleDataDto } from './dto/ble.dto';
export declare class BleService {
    private bleDataRepository;
    constructor(bleDataRepository: Repository<BleData>);
    createBleData(bleDataDto: CreateBleDataDto): Promise<BleData>;
}

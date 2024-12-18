import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BleService {
  private readonly logger = new Logger(BleService.name);

  // async createBleData(bleDataDto: CreateBleDataDto): Promise<BleData> {
  //   const { deviceId, orgId, deviceLocation, beaconPayloads, metaData } =
  //     bleDataDto;

  //   this.logger.log('Starting to create BLE data entry');

  //   // Convert micro-degree values to decimal degrees for latitude and longitude
  //   const latitude = deviceLocation.point.latitudeMicro / 1_000_000;
  //   const longitude = deviceLocation.point.longitudeMicro / 1_000_000;

  //   // Extract relevant information from the first beacon payload
  //   const bleManufacturerData = beaconPayloads[0].bleManufacturerData;
  //   const receiveTime = new Date(beaconPayloads[0].receiveTime.seconds * 1000);
  //   const rssiDbm = beaconPayloads[0].rssiDbm;
  //   this.logger.debug(
  //     `Extracted beacon data - ManufacturerData: ${bleManufacturerData}, RSSI: ${rssiDbm}, ReceiveTime: ${receiveTime}`,
  //   );

  //   // Create and populate a new BleData entity
  //   const bleData = new BleData();
  //   bleData.deviceId = deviceId;
  //   bleData.orgId = orgId;
  //   bleData.latitude = latitude;
  //   bleData.longitude = longitude;
  //   bleData.accuracyCm = deviceLocation.accuracyCm;
  //   bleData.bleManufacturerData = bleManufacturerData;
  //   bleData.receiveTime = receiveTime;
  //   bleData.rssiDbm = rssiDbm;
  //   bleData.type = metaData.type;
  //   bleData.version = metaData.version;

  //   this.logger.log('Saving BLE data to the database');

  //   // Save the BleData entity to the database
  //   try {
  //     const savedData = await this.bleDataRepository.save(bleData);
  //     this.logger.log(
  //       `BLE data saved successfully -  ${JSON.stringify(savedData, null, 2)}`,
  //     );
  //     return savedData;
  //   } catch (error) {
  //     this.logger.error('Failed to save BLE data', error.stack);
  //     throw error;
  //   }
  // }

  async responseLogger(logs: any) {
    this.logger.log(`Client Response log - ${JSON.stringify(logs, null, 2)}`);
  }
}


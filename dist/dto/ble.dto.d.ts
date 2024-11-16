declare class PointDto {
    latitudeMicro: number;
    longitudeMicro: number;
}
declare class DeviceLocationDto {
    point: PointDto;
    accuracyCm: number;
}
declare class ReceiveTimeDto {
    seconds: number;
}
declare class BeaconPayloadDto {
    bleManufacturerData: string;
    receiveTime: ReceiveTimeDto;
    rssiDbm: number;
}
declare class MetaDataDto {
    type: number;
    version: string;
}
export declare class CreateBleDataDto {
    deviceId: string;
    orgId: string;
    deviceLocation: DeviceLocationDto;
    beaconPayloads: BeaconPayloadDto[];
    metaData: MetaDataDto;
}
export {};

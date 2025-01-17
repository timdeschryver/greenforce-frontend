/**
 * DataHub BFF
 * Backend-for-frontend for DataHub
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface MeteringPointDto { 
    meteringPointId?: string;
    gsrnNumber?: string;
    streetName?: string;
    postCode?: string;
    cityName?: string;
    countryCode?: string;
    connectionState?: string;
    meteringPointSubType?: string;
    readingOccurrence?: string;
    meteringPointType?: string;
    maximumCurrent?: number | null;
    maximumPower?: number | null;
    gridAreaName?: string;
    gridAreaCode?: string;
    powerPlantGsrnNumber?: string;
    locationDescription?: string;
    product?: string;
    unitType?: string;
    effectiveDate?: string | null;
    meterNumber?: string;
    streetCode?: string;
    citySubDivisionName?: string;
    floor?: string;
    suite?: string;
    buildingNumber?: string;
    municipalityCode?: number | null;
    isActualAddress?: boolean | null;
    geoInfoReference?: string | null;
    capacity?: number | null;
    settlementMethod?: string;
    netSettlementGroup?: string;
    assetType?: string;
    toGridAreaCode?: string;
    fromGridAreaCode?: string;
    supplyStart?: string | null;
    connectionType?: string;
    disconnectionType?: string;
    productionObligation?: boolean | null;
}



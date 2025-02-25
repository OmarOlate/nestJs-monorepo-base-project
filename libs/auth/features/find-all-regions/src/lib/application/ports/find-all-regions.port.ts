import { FindAllRegionsOutputDto } from '../../domain';

export type FindAllRegionsService = {
  execute: () => Promise<Readonly<FindAllRegionsOutputDto>>;
};

export const FIND_ALL_REGIONS_SERVICE = Symbol('FindAllRegionsService');

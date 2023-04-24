/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListQueryItemDto } from './ListQueryItemDto';
import type { NumberQueryDto } from './NumberQueryDto';
import type { StringQueryDto } from './StringQueryDto';

export type PokemonQueryDto = {
    Name?: StringQueryDto;
    Pokedex?: NumberQueryDto;
    Types?: Array<ListQueryItemDto>;
};

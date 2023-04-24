/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasicPokemonDto } from '../models/BasicPokemonDto';
import type { PokemonDetailDto } from '../models/PokemonDetailDto';
import type { TypesInfoWithMetaDto } from '../models/TypesInfoWithMetaDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Get all the pokemon
     * Retrieve all the pokemon
     * @param locale The locale to retrieve the pokemon in
     * @returns BasicPokemonDto A JSON array of all the pokemon
     * @throws ApiError
     */
    public getPokemon(
        locale?: string,
    ): CancelablePromise<Array<BasicPokemonDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pokemon',
            query: {
                'locale': locale,
            },
            errors: {
                400: `Validation did not succeed`,
            },
        });
    }

    /**
     * Get all the types with metadata
     * Get all the types with metadata by type name
     * @param typeName The typename
     * @param locale The locale to retrieve the pokemon in
     * @returns TypesInfoWithMetaDto A JSON array of all the pokemon
     * @throws ApiError
     */
    public getTypesByName(
        typeName: string,
        locale?: string,
    ): CancelablePromise<Array<TypesInfoWithMetaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/types/{typeName}',
            path: {
                'typeName': typeName,
            },
            query: {
                'locale': locale,
            },
            errors: {
                400: `Validation did not succeed`,
            },
        });
    }
    public getTypes(
        locale?: string,
    ): CancelablePromise<Array<TypesInfoWithMetaDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/types/',
            query: {
                'locale': locale,
            },
            errors: {
                400: `Validation did not succeed`,
            },
        });
    }

    /**
     * Get all the pokemon with one single type
     * Retrieve all the pokemon by type
     * @param typeName The typename
     * @param locale The locale to retrieve the pokemon in
     * @returns PokemonDetailDto A JSON array of all the pokemon
     * @throws ApiError
     */
    public static getPokemonBytypename(
        typeName: string,
        locale?: string,
    ): CancelablePromise<Array<PokemonDetailDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pokemon/bytypename/{typeName}',
            path: {
                'typeName': typeName,
            },
            query: {
                'locale': locale,
            },
            errors: {
                400: `Validation did not succeed`,
            },
        });
    }

    /**
     * Get single pokemon by pokedex
     * Retrieve one pokemon
     * @param pokedex The typename
     * @param locale The locale to retrieve the pokemon in
     * @returns PokemonDetailDto A JSON array of all the pokemon
     * @throws ApiError
     */
    public static getPokemonBypokedex(
        pokedex: number,
        locale?: string,
    ): CancelablePromise<PokemonDetailDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pokemon/bypokedex/{pokedex}',
            path: {
                'pokedex': pokedex,
            },
            query: {
                'locale': locale,
            },
            errors: {
                400: `Validation did not succeed`,
            },
        });
    }

}

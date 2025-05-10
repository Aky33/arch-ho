export const nactiPodleIdReceptSchema = {
    type: 'object',
    properties: {
        id: { type: 'integer', minimum: 1 }
    },
    required: ['id'],
    additionalProperties: false
};

export const nactiNahodneReceptSchema = {
    type: 'object',
    properties: {
        idKategorie: { type: 'integer', minimum: 1 },
        limit: { type: 'integer', minimum: 1 }
    },
    required: ['idKategorie', 'limit'],
    additionalProperties: false
};

export const vlozReceptSchema = {
    type: 'object',
    properties: {
        idKategorie: { type: 'integer', minimum: 1 },
        nazev: { type: 'string' },
        postup: { type: 'string' }
    },
    required: ['idKategorie', 'nazev'],
    additionalProperties: false
};
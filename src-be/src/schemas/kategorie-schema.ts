export const nactiPodleIdKategorieSchema = {
    type: 'object',
    properties: {
        id: { type: 'integer', minimum: 1 }
    },
    required: ['id'],
    additionalProperties: false
};

export const vlozKategorieSchema = {
    type: 'object',
    properties: {
        nazev: { type: 'string' }
    },
    required: ['nazev'],
    additionalProperties: false
};
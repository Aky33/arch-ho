import { Request, Response, NextFunction } from "express";
import Ajv from 'ajv';
import { ValidaceError } from '../models/errors/validation-error.js';

const ajv = new Ajv({ coerceTypes: true });

export function validujParametry(schema: Record<string, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validni = ajv.validate(schema, req.params);
        
        if (!validni) 
            throw new ValidaceError("Vstupní parametry jsou špatně!");

        next();
    }
}

export function validujQuery(schema: Record<string, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validni = ajv.validate(schema, req.query);
        
        if (!validni) 
            throw new ValidaceError("Vstupní parametry jsou špatně!");

        next();
    }
}
 
export function validujBody(schema: Record<string, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validni = ajv.validate(schema, req.body);
        
        if (!validni) 
            throw new ValidaceError("Vstupní parametry jsou špatně!");

        next();
    }
}
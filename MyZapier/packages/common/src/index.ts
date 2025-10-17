import { z } from "zod"

export const signUpSchema = z.object({
    name : z.string().min(3),
    email : z.email(),
    password : z.string().min(8)
});

export const signInSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8)
});

export const zapCreateSchema = z.object({
    avilableTriggerId : z.string().optional(),
    triggerMetaData : z.any().optional(),
    actions : z.array(z.object({
        avilableActionId : z.string(),
        actionMetaData : z.any().optional(),
        sortingOrder : z.any()
    })).optional()
});


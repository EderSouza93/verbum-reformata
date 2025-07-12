import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import AppError from "./AppError";

export default class ErrorHandleMiddleware {
    public static handleError: ErrorRequestHandler = (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }
        response.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    };
}
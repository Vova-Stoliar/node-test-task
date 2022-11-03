export class ApiError extends Error {
    status: number;

    errors: { [key in string]: unknown };

    constructor(message: Error['message'], status: ApiError['status'], errors: ApiError['errors'] = {}) {
        super(message);

        this.errors = errors;
        this.status = status;
    }

    static BadRequest(message: Error['message'] = 'Bad request', errors: ApiError['errors'] = {}) {
        return new ApiError(message, 400, errors);
    }

    static Unauthorized() {
        return new ApiError('User is not authorized', 401);
    }

    static NotFound() {
        return new ApiError('Not Found', 404);
    }

    static Forbidden() {
        return new ApiError('Forbidden', 403);
    }
}

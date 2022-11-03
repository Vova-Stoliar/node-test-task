type Params<TValue> = {
    value?: TValue;
    Error: Error;
};

export function validateValueExistence<TValue>(params: Params<TValue>) {
    const { Error, value } = params;

    if (value === undefined) {
        throw Error;
    }

    return value;
}

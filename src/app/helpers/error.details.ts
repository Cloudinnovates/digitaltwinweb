export function getError(errors: any) {
    const mapObject = {
        '[username/password] invalid': 'Invalid username or password',
        '[Password] required': 'Please enter password.',
        '[Username] required': 'Please enter username.',
    };

    const messages: string[] = [];

    for (const fieldName of Object.keys(errors)) {
        const errorCodes = errors[fieldName];
        errorCodes.forEach((errorCode: string) => {
            const key = `[${fieldName}] ${errorCode}`;
            if (mapObject[key]) {
                messages.push(mapObject[key]);
            }
        });
    }

    return messages;
}




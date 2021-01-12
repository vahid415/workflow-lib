import { EnvironmentDescriptor } from '@navaco/mcb-infra';

export const environment: EnvironmentDescriptor = {
    name: 'dev',
    production: false,
    useFakeAuthenticationProvider: false,
    useZcoreSignin: false
};

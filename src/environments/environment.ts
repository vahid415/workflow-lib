import { EnvironmentDescriptor } from 'angular-infra';

export const environment: EnvironmentDescriptor = {
    name: 'dev',
    production: false,
    useFakeAuthenticationProvider: true,
    useZcoreSignin: false
};

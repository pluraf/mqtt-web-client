export interface MqttConfig {
    protocol: 'ws' | 'wss';
    server: string;
    port: number;
}

export interface Environment {
    production: boolean;
    mqtt: MqttConfig;
}
export const environment: Environment = {
    production: false,
    mqtt: {
        server: 'broker.emqx.io',
        protocol: "wss",
        port: 1883,

    }
};

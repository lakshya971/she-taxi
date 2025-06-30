import { createLogger, format, transports } from 'winston';
import type { TransformableInfo } from 'logform';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf((info: TransformableInfo) => {
            return `${info.timestamp} [${info.level}]: ${info.message}`;
        })
    ),
    transports: [
        new transports.Console(),
    ],
});

export default logger;
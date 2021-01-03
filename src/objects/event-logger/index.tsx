import { useXREvent } from "@react-three/xr";
import { FC, useCallback, useEffect } from "react";
import debug from 'debug';

const logger = debug('ControllerEvents');

enum XREventType {
    select = 'select',
    selectstart = 'selectstart',
    selectend = 'selectend',
    squeeze = 'squeeze',
    squeezestart = 'squeezestart',
    squeezeend = 'squeezeend'
}

interface EventLoggerProps {}

const EventLogger : FC<EventLoggerProps> = () => {

    const log = useCallback((...args) => {
        const elogger = logger.extend
        console.log(...args);
    }, []);

    useXREvent(XREventType.select, log);
    useXREvent(XREventType.selectstart, log);
    useXREvent(XREventType.selectend, log);
    useXREvent(XREventType.squeeze, log);
    useXREvent(XREventType.squeezestart, log);
    useXREvent(XREventType.squeezeend, log);
    useXREvent(XREventType.squeezeend, log);

    return null;    
}

export default EventLogger;
## API Report File for "firebase-admin.messaging"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Agent } from 'http';

// @public
export interface AndroidConfig {
    collapseKey?: string;
    data?: {
        [key: string]: string;
    };
    fcmOptions?: AndroidFcmOptions;
    notification?: AndroidNotification;
    priority?: ('high' | 'normal');
    restrictedPackageName?: string;
    ttl?: number;
}

// @public
export interface AndroidFcmOptions {
    analyticsLabel?: string;
}

// @public
export interface AndroidNotification {
    body?: string;
    bodyLocArgs?: string[];
    bodyLocKey?: string;
    channelId?: string;
    clickAction?: string;
    color?: string;
    defaultLightSettings?: boolean;
    defaultSound?: boolean;
    defaultVibrateTimings?: boolean;
    eventTimestamp?: Date;
    icon?: string;
    imageUrl?: string;
    lightSettings?: LightSettings;
    localOnly?: boolean;
    notificationCount?: number;
    priority?: ('min' | 'low' | 'default' | 'high' | 'max');
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    titleLocArgs?: string[];
    titleLocKey?: string;
    vibrateTimingsMillis?: number[];
    visibility?: ('private' | 'public' | 'secret');
}

// @public
export interface ApnsConfig {
    fcmOptions?: ApnsFcmOptions;
    headers?: {
        [key: string]: string;
    };
    payload?: ApnsPayload;
}

// @public
export interface ApnsFcmOptions {
    analyticsLabel?: string;
    imageUrl?: string;
}

// @public
export interface ApnsPayload {
    // (undocumented)
    [customData: string]: any;
    aps: Aps;
}

// @public
export interface Aps {
    // (undocumented)
    [customData: string]: any;
    alert?: string | ApsAlert;
    badge?: number;
    category?: string;
    contentAvailable?: boolean;
    mutableContent?: boolean;
    sound?: string | CriticalSound;
    threadId?: string;
}

// @public (undocumented)
export interface ApsAlert {
    // (undocumented)
    actionLocKey?: string;
    // (undocumented)
    body?: string;
    // (undocumented)
    launchImage?: string;
    // (undocumented)
    locArgs?: string[];
    // (undocumented)
    locKey?: string;
    // (undocumented)
    subtitle?: string;
    // (undocumented)
    subtitleLocArgs?: string[];
    // (undocumented)
    subtitleLocKey?: string;
    // (undocumented)
    title?: string;
    // (undocumented)
    titleLocArgs?: string[];
    // (undocumented)
    titleLocKey?: string;
}

// @public (undocumented)
export interface BaseMessage {
    // (undocumented)
    android?: AndroidConfig;
    // (undocumented)
    apns?: ApnsConfig;
    // (undocumented)
    data?: {
        [key: string]: string;
    };
    // (undocumented)
    fcmOptions?: FcmOptions;
    // (undocumented)
    notification?: Notification;
    // (undocumented)
    webpush?: WebpushConfig;
}

// @public
export interface BatchResponse {
    failureCount: number;
    responses: SendResponse[];
    successCount: number;
}

// @public (undocumented)
export interface ConditionMessage extends BaseMessage {
    // (undocumented)
    condition: string;
}

// @public
export interface CriticalSound {
    critical?: boolean;
    name: string;
    volume?: number;
}

// @public
export interface DataMessagePayload {
    // (undocumented)
    [key: string]: string;
}

// @public
export interface FcmOptions {
    analyticsLabel?: string;
}

// Warning: (ae-forgotten-export) The symbol "App" needs to be exported by the entry point index.d.ts
//
// @public
export function getMessaging(app?: App): Messaging;

// @public
export interface LightSettings {
    color: string;
    lightOffDurationMillis: number;
    lightOnDurationMillis: number;
}

// @public
export type Message = TokenMessage | TopicMessage | ConditionMessage;

// @public
export class Messaging {
    constructor(app: App);
    get app(): App;
    send(message: Message, dryRun?: boolean): Promise<string>;
    sendAll(messages: Message[], dryRun?: boolean): Promise<BatchResponse>;
    sendMulticast(message: MulticastMessage, dryRun?: boolean): Promise<BatchResponse>;
    sendToCondition(condition: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingConditionResponse>;
    sendToDevice(registrationTokenOrTokens: string | string[], payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingDevicesResponse>;
    sendToDeviceGroup(notificationKey: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingDeviceGroupResponse>;
    sendToTopic(topic: string, payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingTopicResponse>;
    subscribeToTopic(registrationTokenOrTokens: string | string[], topic: string): Promise<MessagingTopicManagementResponse>;
    unsubscribeFromTopic(registrationTokenOrTokens: string | string[], topic: string): Promise<MessagingTopicManagementResponse>;
    }

// @public
export function messaging(app?: App): messaging.Messaging;

// @public (undocumented)
export namespace messaging {
    // (undocumented)
    export type AndroidConfig = AndroidConfig;
    // (undocumented)
    export type AndroidFcmOptions = AndroidFcmOptions;
    // (undocumented)
    export type AndroidNotification = AndroidNotification;
    // (undocumented)
    export type ApnsConfig = ApnsConfig;
    // (undocumented)
    export type ApnsFcmOptions = ApnsFcmOptions;
    // (undocumented)
    export type ApnsPayload = ApnsPayload;
    // (undocumented)
    export type Aps = Aps;
    // (undocumented)
    export type ApsAlert = ApsAlert;
    // (undocumented)
    export type BatchResponse = BatchResponse;
    // (undocumented)
    export type ConditionMessage = ConditionMessage;
    // (undocumented)
    export type CriticalSound = CriticalSound;
    // (undocumented)
    export type DataMessagePayload = DataMessagePayload;
    // (undocumented)
    export type FcmOptions = FcmOptions;
    // (undocumented)
    export type LightSettings = LightSettings;
    // (undocumented)
    export type Message = Message;
    // (undocumented)
    export type Messaging = Messaging;
    // (undocumented)
    export type MessagingConditionResponse = MessagingConditionResponse;
    // (undocumented)
    export type MessagingDeviceGroupResponse = MessagingDeviceGroupResponse;
    // (undocumented)
    export type MessagingDeviceResult = MessagingDeviceResult;
    // (undocumented)
    export type MessagingDevicesResponse = MessagingDevicesResponse;
    // (undocumented)
    export type MessagingOptions = MessagingOptions;
    // (undocumented)
    export type MessagingPayload = MessagingPayload;
    // (undocumented)
    export type MessagingTopicManagementResponse = MessagingTopicManagementResponse;
    // (undocumented)
    export type MessagingTopicResponse = MessagingTopicResponse;
    // (undocumented)
    export type MulticastMessage = MulticastMessage;
    // (undocumented)
    export type Notification = Notification;
    // (undocumented)
    export type NotificationMessagePayload = NotificationMessagePayload;
    // (undocumented)
    export type SendResponse = SendResponse;
    // (undocumented)
    export type TokenMessage = TokenMessage;
    // (undocumented)
    export type TopicMessage = TopicMessage;
    // (undocumented)
    export type WebpushConfig = WebpushConfig;
    // (undocumented)
    export type WebpushFcmOptions = WebpushFcmOptions;
    // (undocumented)
    export type WebpushNotification = WebpushNotification;
}

// @public
export interface MessagingConditionResponse {
    messageId: number;
}

// @public
export interface MessagingDeviceGroupResponse {
    failedRegistrationTokens: string[];
    failureCount: number;
    successCount: number;
}

// @public (undocumented)
export interface MessagingDeviceResult {
    canonicalRegistrationToken?: string;
    // Warning: (ae-forgotten-export) The symbol "FirebaseError" needs to be exported by the entry point index.d.ts
    error?: FirebaseError;
    messageId?: string;
}

// @public
export interface MessagingDevicesResponse {
    // (undocumented)
    canonicalRegistrationTokenCount: number;
    // (undocumented)
    failureCount: number;
    // (undocumented)
    multicastId: number;
    // (undocumented)
    results: MessagingDeviceResult[];
    // (undocumented)
    successCount: number;
}

// @public
export interface MessagingOptions {
    // (undocumented)
    [key: string]: any | undefined;
    collapseKey?: string;
    contentAvailable?: boolean;
    dryRun?: boolean;
    mutableContent?: boolean;
    priority?: string;
    restrictedPackageName?: string;
    timeToLive?: number;
}

// @public
export interface MessagingPayload {
    data?: DataMessagePayload;
    notification?: NotificationMessagePayload;
}

// @public
export interface MessagingTopicManagementResponse {
    // Warning: (ae-forgotten-export) The symbol "FirebaseArrayIndexError" needs to be exported by the entry point index.d.ts
    errors: FirebaseArrayIndexError[];
    failureCount: number;
    successCount: number;
}

// @public
export interface MessagingTopicResponse {
    messageId: number;
}

// @public
export interface MulticastMessage extends BaseMessage {
    // (undocumented)
    tokens: string[];
}

// @public
export interface Notification {
    body?: string;
    imageUrl?: string;
    title?: string;
}

// @public
export interface NotificationMessagePayload {
    // (undocumented)
    [key: string]: string | undefined;
    badge?: string;
    body?: string;
    bodyLocArgs?: string;
    bodyLocKey?: string;
    clickAction?: string;
    color?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    title?: string;
    titleLocArgs?: string;
    titleLocKey?: string;
}

// @public
export interface SendResponse {
    error?: FirebaseError;
    messageId?: string;
    success: boolean;
}

// @public (undocumented)
export interface TokenMessage extends BaseMessage {
    // (undocumented)
    token: string;
}

// @public (undocumented)
export interface TopicMessage extends BaseMessage {
    // (undocumented)
    topic: string;
}

// @public
export interface WebpushConfig {
    data?: {
        [key: string]: string;
    };
    fcmOptions?: WebpushFcmOptions;
    headers?: {
        [key: string]: string;
    };
    notification?: WebpushNotification;
}

// @public
export interface WebpushFcmOptions {
    link?: string;
}

// @public
export interface WebpushNotification {
    // (undocumented)
    [key: string]: any;
    actions?: Array<{
        action: string;
        icon?: string;
        title: string;
    }>;
    badge?: string;
    body?: string;
    data?: any;
    dir?: 'auto' | 'ltr' | 'rtl';
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: number;
    title?: string;
    vibrate?: number | number[];
}


// (No @packageDocumentation comment for this package)

```
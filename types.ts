import { Client, Guild, Message, Permissions } from "discord.js";

interface DiscordJS {

}

export default interface DBM {
    version: string;
    DiscordJS: DiscordJS;
    Bot: Bot;
    Actions: Actions;
}

export interface Bot {
    $cmds: {};
    $icds: [];
    $regx: [];
    $anym: [];
    $evts: {};
    bot: null | Client;
    /**
     * Initializes the Bot with all Resources,
     * Events and logs in.
     */
    init: () => void;
    initBot: () => void;
    intents: () => number;
    setupBot: () => void;
    onRawData: () => void;
    reformatData: () => void;
    reformatCommands: () => void;
    reformatEvents: () => void;
    initEvents: () => void;
    login: () => void;
    onReady: () => void;
    restoreVariables: () => void;
    preformInitialization: () => void;
    onMessage: (msg: Message) => void;
    checkCommand: (msg: Message) => boolean | void;
    checkTag: (content: string) => string | null;
    onAnyMessage: (msg: Message) => void;
    checkIncludes: (msg: Message) => void;
    checkRegExps: (msg: Message) => void;
}

interface Actions {
    actionsLocation: null;
    aventsLocation: null;
    extensionsLocation: null;
    server: {};
    global: {};

    timeStamp: [];

    exists: (action: Action) => boolean;
    /**
     * @returns a file from the project folder.
     */
    getLocalFile: (url: string) => unknown;
    /**
     * @returns the DBM Object
     */
    getDBM: () => DBM;
    // TODO: Elaborate what this function does and extend typings
    callListFunc: (list: Array<() => any>, funcName: string, args: any[]) => Promise<void>;
    getActionVariable: (name: string, defaultValue: any) => any;
    eval: (content: string, cache: Cache) => false | unknown;
    evalMessage: (content: string, cache: Cache) => string | unknown;
    initMods: () => void;
    // TODO: Elaborate what this function does and extend typings
    modDirectories: () => unknown;
    performActions: (msg: Message, cmd: Command) => void;
    checkConditions: (msg: Message, cmd: Command) => boolean;
    checkTimeRestriction: (msg: Message, cmd: Command) => boolean | void;
    generateTimeString: (miliSeconds: number) => string;
    checkPermissions: (msg: Message, permissions: Permissions) => boolean;
    invokeActions: (msg: Message, actions: Action[]) => void;
    // EDIT: Make sure that these types are correct
    invokeEvent: (event: Event, server: Guild, temp: any) => void;
    /**
     * Calls next action in the action sequence of a command or event
     */
    callNextAction: () => void;
    // EDIT: Extend types
    getErrorString: (data: any, cache: Cache) => string;
    displayError: (data: any, cache, err: any) => void;
    getSendTarget: (type: 1 | 2 | 3 | 4 | 5 | 6 | 7, varName: string, cache: Cache) => any;
    getMember: (type:1|2|3|4, varName:string, cache:Cache)=>false|any;
    

}

interface Action {

}

interface Cache { }

interface Command { }


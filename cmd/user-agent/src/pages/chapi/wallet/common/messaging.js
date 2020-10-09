/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/


/**
 * Messenger provides messaging service for sending/replying secured messages our didcomm
 * @param aries instance
 * @class
 */
export class Messenger {
    constructor(aries) {
        this.aries = aries
    }

    async register(name, type) {
        await this.aries.messaging.registerService({name, type})
    }

    async services(){
        return await this.aries.messaging.services()
    }

    send(connectionID, msg) {
        this.aries.messaging.send({"connection_ID": connectionID, "message_body": msg})
    }

    reply(msgID, msg) {
        this.aries.messaging.reply({"message_ID": msgID, "message_body": msg})
    }

    async sendAndWaitForReply(connectionID, msg) {
        this.send(connectionID, msg)
        // TODO implement listen for reply and correlate [Issue#405]
    }
}
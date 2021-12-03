interface ReplyOptions {
    content: string
    ephemeral: boolean
}

export function successReply (msg: string = "Success!"): ReplyOptions {
    return {
        content: "**✓**  ** **" + msg, ephemeral: true
    }
}

export function errorReply (error: string = "Error"): ReplyOptions {
    return {
        content: "**✘**  ** **" + error, ephemeral: true
    }
}
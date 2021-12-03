import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, TextChannel } from "discord.js";
import {errorReply, successReply} from "../Tools/replies";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Sends a message to another channel.")

        .addChannelOption(option =>
            option.setName('dest')
                .setDescription('The channel to send the message to')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('msg')
                .setDescription('The message to send')
                .setRequired(true))

    , async execute (interaction: CommandInteraction) {
        const dest = interaction.options.getChannel("dest")
        const message = interaction.options.getString("msg")

        if (!message || !dest) { throw new Error("Required parameters in /send empty.") }

        const destChannel = await interaction.client.channels.cache.get(dest.id) as TextChannel || interaction.channel
        try {
            await destChannel.send(message)
            await interaction.reply(successReply(`Sent \`${message}\` in <#${destChannel.id}>!`))
        } catch (e) {
            await interaction.reply(errorReply("Please choose a **Text Channel**!"))
        }
    },

    global: false
}

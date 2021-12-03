import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("favorite")
        .setDescription("Set your favorite member/seiyuu/unit.")

        .addSubcommand(subcommand =>
            subcommand.setName("member")
                .setDescription("Brings up a menu to set your favourite character!"))

        .addSubcommand(subcommand =>
            subcommand.setName("seiyuu")
                .setDescription("Brings up a menu to set your favourite seiyuu!"))

        .addSubcommand(subcommand =>
            subcommand.setName("unit")
                .setDescription("Brings up a menu to set your favourite unit/group!"))

    , async execute (interaction: CommandInteraction) {
        console.log("what")
        await interaction.reply("Hi")
    },

    global: false
}
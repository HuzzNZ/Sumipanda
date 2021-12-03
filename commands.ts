import dotenv from 'dotenv'
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9"
import fs from  "fs"

dotenv.config()
const commands = []
const globalCommands = []
const commandFiles = fs.readdirSync("./src/Commands").filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    commands.push(command.data.toJSON());

    if (command.global) globalCommands.push(command.data.toJSON())
}

if (process.env.CHEESEBURGER) {
    const rest = new REST({ version: '9' }).setToken(process.env.CHEESEBURGER);

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            if (process.env.FRIEDCHICKEN) {

                commands.map(command => console.log(`~ /${command.name}${command.global? " (global)":""}`))

                await rest.put(
                    Routes.applicationGuildCommands(process.env.FRIEDCHICKEN, "916232497241681971"),
                    { body: commands },
                );

                if (globalCommands) {
                    await rest.put(
                        Routes.applicationCommands(process.env.FRIEDCHICKEN),
                        { body: globalCommands },
                    );
                }

                console.log('Successfully reloaded application (/) commands.');
            } else {
                console.log('Client ID is not set.')
            }

        } catch (error) {
            console.error(error);
        }
    })();
}

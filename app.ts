import dotenv from 'dotenv'
import {Client, Collection, Intents} from "discord.js"
import fs from "fs";

dotenv.config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const commandFiles = fs.readdirSync('./src/Commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    client.commands = new Collection();
    console.log("\nLoading Commands...")
    for (const file of commandFiles) {
        const command = require(`./Commands/${file}`);
        console.log(`~ /${command.data.name}${command.global? "(global)":""}`)
        client.commands.set(command.data.name, command);
    }

    console.log("\nSumipanda is ready!")
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (!interaction.replied) {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

console.log("Initializing Sumipanda...")

client.login(process.env.CHEESEBURGER)

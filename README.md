<div align="center">
    <h1>discordjs-template</h1>
    <h3>A template for your own bot using discord.js</h3>
</div>

## Index
<ol>
    <li><a href="#about">About</a></li>
    <li>
        <a href="#setup">Setup</a>
        <ol>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#configuration">Configuration</a></li>
            <li><a href="#running">Running</a></li>
        </ol>
    </li>
    <li><a href="#license">License</a></li>
</ol>

## About
This project is made for people that are either starting on discord.js or that are way too lazy to start a bot from scratch (like me).  
It includes the just the basics for it to start.  
Note that this was made using the now old discord.js library.

## Setup
### Prerequisites
<ul>
  <li><a href="https://nodejs.org/en/download/" target="_blank">Node v12.0.0</a> or higher. Check with <code>node -v</code></li>
  <li><a href="https://nodejs.org/en/download/" target="_blank">Npm</a>. Check with <code>npm -v</code></li>
</ul>

### Installation
1. Clone this repository downloading the .zip or via git:
  ```sh
  git clone https://github.com/Omi036/discordjs-template/
  ```  
2. Cd into the folder and setup the dependencies:
  ```sh
  cd discordjs-template
  npm run setup
  ```  
All the packages and a file named config.json should be now created.
### Configuration
Before running the script, make sure to fill up the `config.json` file.  
You can access your bot token on your bot section inside the discord developer dashboard, and the client id should be on a label named Application ID inside General Information.  
It should end up looking like this:
```json
{
    "token":"YOUR_TOKEN_HERE",
    "clientId":"YOUR_CLIENT_ID"
}
```
### Running
Finally, to run the bot, run `npm run start` and your bot should be now alive.


## License
Distributed under the MIT License. See `LICENSE` for more information.    

<p align="right"><a href="#index">back to top</a></p>
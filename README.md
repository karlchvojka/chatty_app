# Lighthouse Labs Project: Chatty App

## Screenshots
!['Screenshot Of Homepage'](https://github.com/basktballer/TheWallMidterm/blob/master/docs/desktop-home.png)


## Getting Started

### Prerequisites
- NODEJS (v8.10.0)
```
sudo apt install nodejs
```
- NPM (v8.9.4)
```
sudo apt install npm
```

### Installing
Once you have NodeJS and NPM running, follow the instructions below:

#### NOTE: this app is in two parts. Follow carefully:

This will install the server and the app seperately. Be sure to do both.

#### Install the app front end
1. Clone this repository (do not fork)
2. Enter the chatty_app folder (`cd chatty_app`)
3. Run `npm install`

#### Install the Server.
1. Enter the chatty_server folder (`cd chatty_server`)
2. Run `npm install`


### Starting
To start the app follow the instructions below. Be sure to do both, and be sure to have either or running in their own terminal window.

#### Start the Server
1. Enter the chatty_server folder (`cd chatty_server`)
2. Run `npm start`

#### Start the App
1. Enter the chatty_server folder (`cd chatty_app`)
2. Run `npm start`

Visit `http://localhost:3000/`

## Dependencies

### App Dependencies:
- Node 5.10.x or above
- NPM 3.8.x or above
- Babel Core 6.23.x or above
- Babel Loader 6.3.x or above
- Babel Presets:
  - es2015 6.22.x or above
  - react 6.23.x or above
  - stage-0 6.22.x or above
- CSS loader 0.26.x or above
- Eslint 3.15.x or above
- Eslint Plugin React 6.9.x or above
- Node Sass 4.5.x or above
- Sass Loader 6.0.x or above
- Sockjs-client 1.1.x or above
- Webpack 2.2.x or above
- Webpack Dev Server 2.3.x or above.

### Server Dependencies
- Express 4.16.x or above
- UUID 3.3.x or above
- WS 7.0.x or above.

## Upcoming Features
1. Ability for users to set the color of their own username.
2. Login abilities
3. User ability to have profiles and change them.
4. Encrypted passwords.

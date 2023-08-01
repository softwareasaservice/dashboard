# @softwareasaservice/dashboard

Create a dashboard for your SaaS in under a minute

![image](https://github.com/importsaas/screenshots/raw/main/dashboard/apikeys-1.png)


In other words, with this package in your React app - one `dashboard` snippet automagically adds the following pages to your react app

- /tour
- /settings
- /apikeys
- /team
- /forums
- /login
- /logout

## Why use this package

If you have built or are building a SaaS - you know that 75% of the features involve rudimentary things like account management, billing, settings, and these api keys, forums, and documentation.

This package bundles all these features in an opiniated fashion much like how you would see on `platform.openai.com`

**WIP**

- /docs
- /help
- /register
- /billing

## Screenshots

### give your customers a login screen to login to your SaaS
Google Login coming soon.
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/login-1.png)

### Allow customers to invite their teammates
Choose their roles as well
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/team-1.png)

### Allow customers to manage api keys
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/apikeys-1.png)

### Allow users to name their account
And to indicate if for personal use
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/settings-1.png)


### Forums included*
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/forums-1.png)

### Include a tour*
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/tour-2.png)


## Install

    # with yarn 
    yarn add @softwareasaservice/dashboard
    
    # or with npm
    npm install @softwareasaservice/dashboard


## Usage

    import {Dashboard} from '@softwareasaservice/dashboard';
    
    function HomePage() {
      return (<h1>Welcome</h1>);
    }
    
    function App() {
      return (
        <div>
          <Dashboard
            brand={<>Acme</>}
            home={<HomePage />}
            settings={<>Terms apply</>}>
          </Dashboard>
    
        </div>
      );
    }
    
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/integration-1.png)

### Navigation your react app will get automagically
![image](https://github.com/importsaas/screenshots/raw/main/dashboard/links-1.png)
    

| option | value|
|--------|------|
|`brand` | Acme or the topleft logo |
|`home` | what to show on `/`|
|`settings` | An additional line to show in settings|

### Re-using styles

    import pico from '@softwareasaservice/dashboard/dist/index.css';

### Caveat
Ready for production from Oct 1 '23.

## Licence
MIT

## Authors

**importSaaS**, a stealth startup that simplifies the SaaS journey for builders. 

Email `help@importsaas.com` to see how to self-host, share feedback, or to to say hello.

Also see https://github.com/softwareasaservice/queue - a soon to be launched queue for your React/Next App on the cloud or self-host
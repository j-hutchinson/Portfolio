import { CFGLogo, CheckoutLogo, MendeleyLogo, TrayLogo } from './Logos/component';

export const Jobs = {
    Tray: 'Tray.io',
    Mendeley: 'Mendeley',
    Checkout: 'Checkout.com',
    CFG: 'Code First Girls',
}

const TrayDesc = `Senior Frontend Engineer specialising in frontend architecture. Looking at CI/CD, AWS Cloudfront and S3 in addition to feature work.`

const CKODesc = `
    Senior Software engineer specialising in front end web development responsible for Checkout.com's documentation rebuild. Currently working on 
    our Design System and micro-frontend architecture.`;

const ElsDesc = `
    Leading and designing the Front-end architecture within a cross-functional team developing a React web app and 
    GraphQL service supporting multiple teams. Responsible for multiple micro-frontends supporting mendeley.com.`

const CFGDesc = `
    Organised and ran events as part of a team, mentoring a group of 15-20 people on how to start coding. 
    Lead several sessions, working directly with students in 2 hour lessons split into lecture and practical application of concepts. 
    Covering topics such as HTML, CSS, bootstrap, javascript and git.`

const colorSchemeDesc = 'Fun project to generate a color scheme based on a given Hue, mostly aimed at learning how to publish npm packages and manage versions';

export const Mendeley = {
    name: Jobs.Mendeley,
    startDate: "04/09/17",
    endDate: "31/11/20",
    title: "Graduate Engineer",
    desc: ElsDesc,
    link: 'https://mendeley.com/search',
    logo: <MendeleyLogo />
};

export const CodeFirstGirls = {
    name: Jobs.CFG,
    startDate: "01/20",
    endDate: "04/20",
    title: "Instructor",
    desc: CFGDesc,
    link: 'https://codefirstgirls.org.uk/',
    logo: <CFGLogo />
};

export const Checkout = {
    name: Jobs.Checkout,
    startDate: "04/01/21",
    title: "Senior Frontend Engineer",
    desc: CKODesc,
    link: 'https://checkout.com/',
    logo: <CheckoutLogo />
};

export const Tray = {
    name: Jobs.Tray,
    startDate: "14/11/22",
    title: "Senior Frontend Engineer",
    desc: TrayDesc,
    link: 'https://tray.io/',
    logo: <TrayLogo />
};

export const JobsList = [Tray, Checkout, CodeFirstGirls, Mendeley];

export const ColorScheme = {
    name: 'Color Scheme',
    desc: colorSchemeDesc,
    link: "https://github.com/j-hutchinson/ColorPalette"
};

import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import mobile_icon from './mobile-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import Myprofile from './Myprofile.jpeg'
import Myprofile2 from './Myprofile2.jpeg'
import linkedinicon from './linkedinicon.png'
import instaicon from './instaicon.png'
import githubicon from './githubicon.png'
import logo1 from './logo1.png'
import profile2 from './profile2.jpeg'


// import left_arrow from './left_arrow.svg'
// import right_arrow from './right_arrow.svg'




export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    
    mobile_icon,
    
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    Myprofile,
    Myprofile2,
    linkedinicon,
    instaicon,
    githubicon,
    logo1,
    profile2
    

    // left_arrow,
    // right_arrow
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'I created an estate website designed to make buying, selling, and renting properties simple and efficient. The site offers easy navigation, detailed listings, and user-friendly features to enhance the overall experience for buyers and sellers alike. ',
        bgImage: '/estate1.jpg',
    },
    {
        title: 'Doctor Appointment app',
        description: 'I developed a user-friendly website for booking doctor appointments, allowing patients to easily schedule visits, view doctor availability, and receive appointment reminders. The platform ensures a seamless experience with simple navigation and quick access to healthcare services.',
        bgImage: './doctor2.webp',
    },
    {
        title: 'Food Website',
        description: 'I created a food delivery website that makes ordering meals quick and convenient. With a clean design and easy-to-use interface, users can explore menus, place orders, and track deliveries with ease, ensuring a smooth and enjoyable dining experience from start to finish.',
        bgImage: '/foodweb.jpg',
    },
    {
        title: 'E-Commerce',
        description: 'UI/UX Design of an e-commerce website that offers a smooth and efficient shopping experience. With intuitive navigation, secure payment options, and a wide range of products, customers can easily browse, shop, and track their orders, all while enjoying a seamless and secure checkout process.',
        bgImage: '/ecommerce1.jpg',
    },
    {

        title: 'Portfolio Website',
        description: 'I created a portfolio website that showcases my work and skills in a clean, visually appealing layout. It highlights my projects, achievements, and services, providing potential clients or employers with a clear and professional overview of my capabilities. ',
        bgImage: '/portfolio1.jpg',
    },
 
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url('susrecomm.jpg'), url('sus1.jpg'), url('sus2.jpg'), url('sus3.jpg'), url('sus4.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    animation: backgroundSlideshow 20s infinite;

    @keyframes backgroundSlideshow {
        0% {
            background-image: url('susrecomm.jpg');
        }
        25% {
            background-image: url('sus1.jpg');
        }
        50% {
            background-image: url('sus2.jpg');
        }
        75% {
            background-image: url('sus3.jpg');
        }
        100% {
            background-image: url('sus4.jpg');
        }
    }

    @media (max-width: 768px) {
        background-position: top;
        background-attachment: scroll;
        height: auto;
        padding: 20px;
        flex-direction: column;
    }
`;

const HeroContent = styled(motion.div)`
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    padding: 50px;
    border-radius: 10px;
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
        padding: 20px;
        font-size: 14px;
    }
`;

const Button = styled(motion.button)`
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    background: #000072;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #000072;
        transform: scale(1.1);
    }

    &:active {
        background: darkorange;
        transform: scale(0.9);
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 16px;
    }
`;

const Modal = styled.div`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 600px;
    z-index: 1000;
    max-height: 90%; /* Removed scrolling by adjusting height */
    overflow: visible; /* Ensure there's no vertical scrolling */
    
    @media (max-width: 768px) {
        width: 95%;
        padding: 15px;
        max-height: 100%; /* Allow full height on smaller devices */
    }
`;

const ModalContent = styled.div`
    text-align: left;

    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
    }

    img {
        width: 100%;
        height: auto;
        max-height: 350px;
        border-radius: 10px;
        margin-bottom: 20px;
        object-fit: cover;
    }

    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.6;
        margin-bottom: 20px;
        text-align: justify;
    }

    a {
        color: #1f8bfa;
        text-decoration: none;
        font-weight: bold;
    }

    .highlight {
        color: #1f8bfa;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }

        img {
            max-height: 250px;
        }

        p {
            font-size: 0.95rem;
        }
    }
`;

const ServiceCard = styled(motion.div)`
    width: 400px;
    height: 300px;
    margin: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 90%;
        height: 200px;
        margin: 10px 0;
    }
`;

const ServicesSection = styled.section`
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
`;

const Footer = styled.footer`
    background-color: #2b2b2b; 
    color: #ffffff; 
    padding: 40px 20px; 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const FooterSection = styled.div`
    flex: 1;
    margin-right: 20px;
    color: #dddddd; 

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
        width: 100%;
        text-align: center;
    }
`;

const FooterLinks = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0; 
`;

const FooterLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    display: block;
    margin-bottom: 10px; 
    transition: color 0.3s ease;

    &:hover {
        color: #ffcc00; 
    }
`;

const NewsletterInput = styled.input`
    padding: 10px;
    width: 70%;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #444444; 
    color: #ffffff; 

    @media (max-width: 768px) {
        width: 60%;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

const SubscribeButton = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #000072; 
    color: whitesmoke ; 
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000072; 
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const ContactInfo = styled.p`
    margin: 10px 0;
    color: #dddddd; 

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const ModalOverlay = styled.div`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const HomePage = () => {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const heroContents = [
        {
            title: "Welcome to Our Website",
            description: "Discover more about what we do."
        },
        {
            title: "Innovating for a Sustainable Future",
            description: "Explore our solutions for a better tomorrow."
        },
        {
            title: "Empowering Communities",
            description: "Join us in making a positive impact."
        },
        {
            title: "Green Energy Solutions",
            description: "Harnessing the power of nature."
        },
        {
            title: "Building Sustainable Homes",
            description: "Eco-friendly housing for the future."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [heroContents.length]);

    const handleCardClick = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const { title, description } = heroContents[backgroundIndex];

    return (
        <>
            <HeroSection>
                <HeroContent
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {description}
                    </motion.p>
                    <Link to="services" smooth={true} duration={1000}>
                        <Button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Explore Now
                        </Button>
                    </Link>
                </HeroContent>
            </HeroSection>

            <ServicesSection id="services">
                <ServiceCard whileHover={{ scale: 1.1 }} background="water.png" onClick={() => handleCardClick({
                    title: 'Water and Waste Management',
                    image: 'water1.jpg',
                    text: (
                        <>
                Despite heavy investments in water and waste management, many projects have continued to be unsustainable . 
                        That is why we are seeking  to work with partner organizations so as to shift from traditonal sustainability models mostly based on the triple bottom line 
                        (economic ,social and enviromental )and lack a more integrated system . 
                        We believe in developing workable models around sustainability indicators through possible public-private partnership
                        we also look forward to making water available to the underserverd an attractive investment 
                    
                    </>
                    )
                })} />
                <ServiceCard whileHover={{ scale: 1.1 }} background="energy.png" onClick={() => handleCardClick({
                    title: 'Green Energy Solutions',
                    image: 'energy1.jpg',
                    text:( <>
                        Together with our partner experts in renewable energy , we are pushing for innovations towards the achievement of 
                        Sustainable Development Scenarios within communites around us . To help countries achieve greater shares in renewable energy 
                        ,we believe in partnership to integrate and redesign the already available sustainable technologies in wind and solar . 
                        We also seek to be at the forefront of creating awareness of well-reserched solutionsto addressing electricity and energy challenges .
                        We aim to achieve  expansive energy infrastructure and upgrade  technology to provide clean and more efficient energy 

                    </>
                    )
                })} />
                <ServiceCard whileHover={{ scale: 1.1 }} background="housing.png" onClick={() => handleCardClick({
                    title: 'Sustainable Housing',
                    image: 'housing1.jpg',
                    text: (<>
                        'We seek to play an integral role in land management, housing and the ultimate development of future sustainable cities 
                        and communities. 
                        According to the United Nation's half of the world 's population live in cities, and this is projected to be more than two- thirds by 2050.
                        we are committing  ourselves to deliver sustainable green and living space as part of this agenda '</>
                    )
                })} />
                <ServiceCard whileHover={{ scale: 1.1 }} background="jim.png" onClick={() => handleCardClick({
                    title: 'Community Development',
                    image: 'jim1.jpg',
                    text: (<>
                        We promote sustainable infrastructure planning and development , which is able to deliver optimal social , environmental 
                        and economic results . We believe this is achievable through strategic partnership and financing capable of assisting 
                        governments in delivering on promises to its citizens .
                    </>)
                })} />
            </ServicesSection>

            <ModalOverlay isVisible={isModalVisible} onClick={closeModal} />
            <Modal isVisible={isModalVisible}>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <ModalContent>
                    <h2>{modalContent?.title}</h2>
                    <img src={modalContent?.image} alt={modalContent?.title} />
                    <p>{modalContent?.text}</p>
                </ModalContent>
            </Modal>

            <Footer>
               <FooterSection>
                   <h4>Quick Links</h4>
                   <FooterLinks>
                       <li><FooterLink href="/about-us">About Us</FooterLink></li>
                       <li><FooterLink href="/founder-statement">Founder's Statement</FooterLink></li>
                       <li><FooterLink href="/services">Our Services</FooterLink></li>
                       <li><FooterLink href="/contact-us">Contact Us</FooterLink></li>
                       <li><FooterLink href="./components/signup.jsx">User Sign-Up</FooterLink></li>
                       <li><FooterLink href="/my-account">My Account</FooterLink></li>
                   </FooterLinks>
               </FooterSection>
               <FooterSection>
                   <h4>Contact Details</h4>
                   <ContactInfo>SusRecomm LTD Nairobi Office<br/>Musa Gitau, Nairobi, Kenya.</ContactInfo>
                   <ContactInfo>SusRecomm LTD Kisumu Office<br/>Checkmula Building, Off Achieng Oneko Road, Kisumu, Kenya.</ContactInfo>
                   <ContactInfo>Email Address: <FooterLink href="mailto:info@susrecomm.co.ke">info@susrecomm.co.ke</FooterLink></ContactInfo>
                   <ContactInfo>Telephone Contacts: (+254) 716 108 282 | (+254) 207 847 628</ContactInfo>
               </FooterSection>
               <FooterSection>
                   <h4>Newsletter Subscription</h4>
                   <p>Subscribe to our newsletter.</p>
                   <NewsletterInput type="email" placeholder="Enter Your Email Address..." />
                   <SubscribeButton>Subscribe</SubscribeButton>
               </FooterSection>
           </Footer>
        </>
    );
};

export default HomePage; 

import React, { useState } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    color: #1b1b1b;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: white;
        background-color: #001ba1; /* Dark blue */
        width: 100%;
        padding: 10px;
        border-radius: 4px;
    }

    p, ul {
        font-size: 1rem;
        color: #555;
        display: ${props => (props.isOpen ? "block" : "none")};
        margin-top: 10px;
        transition: opacity 0.3s ease-in-out;
    }

    ul {
        list-style-type: none;
        padding-left: 0;

        li {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.2rem;
        }

        p, ul {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 1rem;
        }

        p, ul {
            font-size: 0.85rem;
        }
    }
`;

const VisionSection = styled(Section)`
    background-color: #e8f0ff; /* Match the Mission section background color */
`;

const MissionSection = styled(Section)`
    background-color: #e8f0ff;
`;

const ObjectivesSection = styled(Section)`
    background-color: #f0f8ff;
`;

const AboutUs = () => {
    const [isVisionOpen, setVisionOpen] = useState(false);
    const [isMissionOpen, setMissionOpen] = useState(false);
    const [isObjectivesOpen, setObjectivesOpen] = useState(false);

    const toggleSection = (section) => {
        if (section === "vision") setVisionOpen(!isVisionOpen);
        if (section === "mission") setMissionOpen(!isMissionOpen);
        if (section === "objectives") setObjectivesOpen(!isObjectivesOpen);
    };

    return (
        <AboutContainer>
            <VisionSection isOpen={isVisionOpen} onClick={() => toggleSection("vision")}>
                <h3>Vision</h3>
                <p>Africa's hub of sustainable infrastructural solutions.</p>
            </VisionSection>
            <MissionSection isOpen={isMissionOpen} onClick={() => toggleSection("mission")}>
                <h3>Mission</h3>
                <p>Our mission is to promote efficient and effective design, recommendations, and implementation of sustainable infrastructure solutions to individuals, households, and communities towards a prosperous Africa.</p>
            </MissionSection>
            <ObjectivesSection isOpen={isObjectivesOpen} onClick={() => toggleSection("objectives")}>
                <h3>Our Objectives</h3>
                <ul>
                    <li>To deliver sustainable projects
                        <p>We are committed to answering critical questions on project sustainability to individuals, households, communities, corporations, and state bodies without compromising the life and prosperity of future generations. We place significant emphasis on sustainable delivery, operation, and maintenance of projects.</p>
                    </li>
                    <li>To establish an expert access platform
                        <p>We aim to enable quick access to experts in our strategic areas of focus. This, we trust, will build an interactive platform that rewards experts and clients by boosting engagement and satisfaction with reliable interaction, tracking, rewards, and in-app customizations towards sustainable goal achievement.</p>
                    </li>
                    <li>To establish an integrated database of skilled professionals
                        <p>We seek to build an integrated database of engineers in our key fields. We aim to provide a platform for engineers in different levels of career progression from technicians to professional experts. This we trust will build networks of experts who can peer review and provide quality assurance to clients. The career progression of junior experts is guaranteed with this model.</p>
                    </li>
                    <li>To be responsive to customer needs
                        <p>We understand that our success is a direct consequence of the success of our customers, and that is why we inspire imagination and sustainable realization of dreams. We are passionate about the success of our clients. We put together and deliver solutions that are tailor-made to individual and unique client needs. Our culture ensures that every interaction with new and existing clients remains professional, warm, and honest.</p>
                    </li>
                </ul>
            </ObjectivesSection>
        </AboutContainer>
    );
};

export default AboutUs;

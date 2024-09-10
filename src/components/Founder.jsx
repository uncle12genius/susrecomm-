import React from "react";

const SusRecomm = () => {
  const containerStyle = {
    width: "60%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const subHeaderStyle = {
    fontSize: "18px",
    marginTop: "20px",
  };

  const paragraphStyle = {
    marginBottom: "15px",
  };

  const boldStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>JAMES AYACKO-ONDIEGE</h1>
      <p style={boldStyle}>
        B. Com (Finance), BSc Civil Engineering.
      </p>
      
      <p style={boldStyle}>
        Dear Stakeholder,
      </p>
      
      <h2 style={subHeaderStyle}>Welcome to SusRecomm.</h2>
      <p style={paragraphStyle}>
        We are a Kenyan Incorporated and 100% youth-owned company endeavoring to deliver a sustainable future through
        innovative solutions to households and communities. We dream of a sustainable world where we are prepared even
        for the once in a million years calamity occurrences. We continuously and iteratively engage our young minds -
        to blend social, financial, environmental, and technological tools at our disposal in tackling infrastructural
        challenges around us.
      </p>
      <p style={paragraphStyle}>
        We are driven by social entrepreneurial fierceness and spirit to challenge orthodoxies and reinvent. This we
        accomplish through knowledge sharing with our partners and innovating towards a sustainable future. Key pillars
        to our mission are the universally adopted Sustainable Development Goals (SDGs), which presents an opportunity
        to leave a sustainability imprint in each project undertaken. Our strategy is geared towards facilitating the
        achievement of SDG 6: Clean water and sanitation access, SDG 7: Affordable and clean energy, SDG 9: Industry,
        Innovation, and Infrastructure, SDG 11: Sustainable Cities and Communities, and SDG 17: Partnership for the Goals.
      </p>
      <p style={paragraphStyle}>
        Because we are impact-driven means, we have greater responsibilities – to clients, partners, and colleagues
        even if it means making short-term financial sacrifices where there is a clear long-term benefit. We are
        positioning ourselves as the partner of choice for experts and organizations. Our business model is built
        around the integration of sustainability-driven experts and contractors who can be accessed and efficiently
        managed through our platform.
      </p>
      <p style={paragraphStyle}>
        I am confident and committed to delivering a sustainable future to everyone.
      </p>
      <p style={boldStyle}>
        Ride with us.
      </p>
    </div>
  );
};

export default SusRecomm;

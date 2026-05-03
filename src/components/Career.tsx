import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>Cisco Networking Academy</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a three-month Cisco-certified internship focused on
              networking and security. Configured 10+ secure campus networks in
              Cisco Packet Tracer using VLANs and routing protocols, and
              practiced designing fault-tolerant networks with NIIT Foundation
              guidance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Thrizll</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Processed 50K+ records with a focus on accuracy and consistency.
              Delivered 5+ insights through detailed analysis and built 3 data
              pipelines that improved workflow efficiency by about 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science &amp; AI/ML Intern</h4>
                <h5>YBI Foundation</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a logistic regression model reaching 85% accuracy on bank
              churn prediction. Cleaned and engineered features on 10K+ records
              and visualized churn trends with Matplotlib and Seaborn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>1 YR</h3>
            </div>
            <p>
              One year of freelancing on real-world projects—shipping efficient,
              scalable solutions and working directly with clients from scope to
              delivery across web and data-focused work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

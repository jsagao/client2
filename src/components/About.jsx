import diesel1 from "../assets/images/diesel1.jpg";

function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2 className="tab">
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={diesel1} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p className="tab">
            At our diesel service, we take pride in being the best choice for
            changing oil in diesel engines. Our commitment to excellence,
            technical expertise, and customer satisfaction sets us apart from
            the competition. We prioritize customer satisfaction above all else.
            Our friendly and knowledgeable staff is always ready to address your
            queries, explain the process in detail, and provide personalized
            recommendations. We value your trust and strive to build long-term
            relationships with our customers through exceptional service and
            transparent communication. When you choose us, you can be confident
            that your diesel engine is in capable hands and will receive the
            highest level of care.
          </p>
          <a href="#services" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section id="sec-1">
        <div className="photo-container" id='cf'>
          <img
            src="https://media.defense.gov/2021/Oct/03/2002866624/-1/-1/0/160225-D-UB488-001.JPG"
            alt="airforce"
            className="pic"
            id="pic1"
          ></img>
          <img
            className="pic"
            id="pic2"
            src="https://media.defense.gov/2022/Sep/30/2003088694/-1/-1/1/220909-F-JV039-9117.JPG"
            alt="airforce"
          ></img>
          <img
            className="pic"
            id="pic3"
            src="https://media.defense.gov/2022/Sep/16/2003078712/-1/-1/1/220831-F-LY743-9005.JPG"
            alt="airforce"
          ></img>
          {/* <img
            className="pic"
            id="pic4"
            src="https://media.defense.gov/2022/Aug/26/2003065196/-1/-1/1/220803-Z-AP992-9014.JPG"
            alt="airforce"
          ></img> */}

          <div className="centered">Air Force Research Laboratory</div>
          <a href="#sec-2">
            <div class="scroll-down"></div>
          </a>
        </div>
      </section>
      <section id="sec-2">
        <div class="container">
          <h1>Mission</h1>
          <p>
            The Air Force Research Laboratory leads the discovery, development
            and integration of affordable warfighting technologies for our air,
            space and cyberspace forces.
          </p>
        </div>
        <div class="container">
          <h1>History</h1>
          <p>
            While our heritage dates back to 1918, AFRL officially launched in
            1997 to consolidate the four former Air Force laboratories and the
            Air Force Office of Scientific Research. The laboratory and its
            predecessors have overseen more than 100 years of critical research
            efforts for the Department of the Air Force and Department of
            Defense. With technology breakthroughs found in all of today's
            modern aircraft and weapons systems, including the F-117 Nighthawk,
            B-2 Spirit, C-17 Globemaster and the F-22 Raptor, AFRL has
            contributed to significant advancements in modern communications,
            electronics, manufacturing, medical research and products.
          </p>
        </div>
        <div class="container">
          <h1>Personnel and Resources</h1>
          <p>
            AFRL employs approximately 11,500 military, civilian and contractor
            personnel, and manages a $7 billion portfolio of investments. The
            lab supports external customers and partners with industry while
            investing in basic research, applied research and advanced
            technology development. As one integrated lab, AFRL seamlessly
            supports the Science & Technology needs of two services: the Air
            Force and the Space Force.
          </p>
        </div>
        <div class="container">
          <h1>Headquarters</h1>
          <p className="bold">Wright-Patterson Air Force Base, Ohio</p>
          <p>
            With other locations in 10 States: California, Florida, Hawaii,
            Nevada, New Mexico, New York, Ohio, Tennessee, Texas and Virginia
            Edwards AFB, California Eglin AFB, Florida Maui, Hawaii Kirtland
            AFB, New Mexico Rome, New York Arlington, Virginia Arnold AFB,
            Tennessee Wright-Patterson AFB, Ohio Fort Sam Houston, Texas
          </p>
          <p>
            AFWERX: Austin, Texas; Dayton, Ohio; Las Vegas, Nevada; Washington,
            D.C.
          </p>
          <p>SpaceWERX: Los Angeles, California</p>
        </div>
        <div className="container">
          <h1>Organizations</h1>
          <p>
            AFRL accomplishes its mission through nine Technology Directorates,
            the 711th Human Performance Wing, the Air Force Office of Scientific
            Research, AFWERX and a central headquarters staff.
          </p>
          <div className="card-container">
            <div className="card">
              <img
                className="photo"
                src="https://www.daytondailynews.com/resizer/9SV3mZlv_Xw9VraagS90dmVQZ8w=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/UXTE7P4G74PQUN54PHKAP23ZDA.jpg"
                alt="Headquarter OH-1"
              ></img>
              <p1>Headquarters AFRL</p1>
              <p2 class="img__description">
                Headquarters AFRL operates the Major Shared Resource Center at
                Wright-Patterson AFB, one of four high-performance computing
                centers in the DoD. The center tackles large-scale problems
                previously beyond the reach of processing platforms and provides
                a vast array of services in a collaborative environment.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.burgessniple.com/media/27a1168c-01e3-49ed-8297-e81d3999abfe/"
                alt="711th-2"
              ></img>
              <p1>711th Human Performance Wing</p1>
              <p2 class="img__description">
                The 711th Human Performance Wing, which consolidates research,
                education and consultation under a single organization,
                comprises the Airman Systems Directorate and the United States
                Air Force School of Aerospace Medicine (USAFSAM)
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.daytondailynews.com/resizer/2T1EadvnmynJgcrbBcCfjB6UOGw=/814x458/cloudfront-us-east-1.images.arcpublishing.com/coxohio/MLJ6SE5SYPLIH4LL36Z6ZXLST4.jpg"
                alt="airmansystem-3"
              ></img>
              <p1>Airman Systems Directorate</p1>
              <p2 class="img__description">
                The Airman Systems Directorate focuses on human factors science,
                engineering and research to advance Airman-related technology
                for systems crucial to continued aerospace superiority, and to
                enhance the health and performance of the multi-domain Airman.​
                Our goal is to sustain operations, integrate operators and
                weapon systems, while enhancing preparation and mission
                execution across military operations.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/coxohio/3QGL7R6VUSFQM26SPNUFWFMCKQ.jpg"
                alt="aerospacesystem-4"
              ></img>
              <p1>Aerospace Systems Directorate</p1>
              <p2 className="img__description">
                The Aerospace Systems Directorate advances technologies to
                unleash transformative space and air capabilities to make the
                fight unfair. Areas of focus include aerospace vehicles,
                control, power, thermal management, high speed systems, rocket
                propulsion, turbine engines, and systems analysis. These core
                competencies mature technologies to enable innovative aerospace
                weapon system capabilities.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.defensedaily.com/wp-content/uploads/2019/03/directed-energy.jpeg"
                alt="directedenergy-5"
              ></img>
              <p1>Directed Energy Directorate</p1>
              <p2 className="img__description">
                The Directed Energy Directorate advances laser systems, high
                power electromagnetics, weapons modeling and simulation
                capabilities, and electro-optics for space superiority. Known
                for their expertise in directed energy and optical technologies,
                scientists and engineers transition game-changing
                counter-electronics weapon technologies that degrade, damage, or
                destroy electronic systems with minimum collateral damage.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.afrl.af.mil/portals/90/Images/RI/160713-F-ZZ999-38-afrl-ri-header.jpg?ver=vjfnxk9ho87zT1qOPLbQ9w%3d%3d"
                alt="information-6"
              ></img>
              <p1>Information Directorate</p1>
              <p2 className="img__description">
                The Information Directorate explores, prototypes, and
                demonstrates command and control, communications, computing,
                cyber, and intelligence technologies that enable the DAF and the
                Nation to maintain its superior technical advantage.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://cdn.afresearchlab.com/wp-content/uploads/2019/01/03155145/4496105-scaled.jpg"
                alt="material-7"
              ></img>
              <p1>Materials and Manufacturing</p1>
              <p2 className="img__description">
                The Materials and Manufacturing Directorate develops new
                materials, processes and manufacturing technologies for
                aircraft, spacecraft, missiles, rockets, ground-based systems
                and their structural, electronic and optical components. In
                addition to its manufacturing technology programs and
                affordability initiatives, the directorate also provides
                material solutions to Air Force acquisition offices, field
                organizations and maintenance depots.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.gannett-cdn.com/presto/2021/12/01/NNWF/d1a18f3c-abe3-42a5-959d-0d074f7ebeb6-KHILS-2018_73.jpg?crop=6360,3578,x0,y324&width=660&height=372&format=pjpg&auto=webp"
                alt="munitions-8"
              ></img>
              <p1>Munitions Directorate</p1>
              <p2 className="img__description">
                The Munitions Directorate rapidly develops and delivers
                war-winning munitions technologies to enable the multi-domain
                effects our Air and Space forces need to address the pacing
                threat. These technologies are allowing weapons to survive and
                thrive in highly-contested, multi-domain environments, making
                them more connected, more affordable, more capable and with
                greater load-out capacity.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/coxohio/GVGKAWAJOU55BLIBAPUEQD6DVY.jpg"
                alt="sensor-9"
              ></img>
              <p1>Sensors Directorate</p1>
              <p2 className="img__description">
                The Sensors Directorate focuses on affordable sensor and
                countermeasure technologies for reconnaissance, surveillance,
                precision engagement and electronic warfare systems. The goal is
                to provide robust sensors and adaptive countermeasures that
                guarantee complete freedom of air, space and cyber operations
                for our forces, and deny these capabilities to our adversaries.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2020/04/07/a01_jd_08apr_afrl.jpg"
                alt="space-vehicle-10"
              ></img>
              <p1>Space Vehicles Directorate</p1>
              <p2 className="img__description">
                The Space Vehicles Directorate develops and transitions
                technologies for more effective and affordable space missions,
                thereby ensuring America's defensive advantage in space. Primary
                mission thrusts include Space-Based Surveillance (space-to-space
                and space-to-ground) and Space Capability Protection (protecting
                space assets from man-made and natural effects).
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://media.defense.gov/2016/Oct/03/2001643060/-1/-1/0/160920-F-ZZ999-002.JPG"
                alt="strategicplanning-11"
              ></img>
              <p1>Strategic Developmental Planning </p1>
              <p2 className="img__description">
                The Strategic Developmental Planning & Experimentation
                Directorate, which includes the Transformational Capabilities
                Office (TCO) and the Strategic Development Planning and
                Experimentation Office (SDPE), is the mission organization that
                supports Future Force demonstration, strategic development
                planning, experimentation, prototyping, and DAF architecture
                design and evaluation.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://images.prismic.io/archerv2/81d1c09d-46b3-4878-83ee-42f41794a03d_CMIV8257.jpg?auto=compress,format"
                alt="afwerx-12"
              ></img>
              <p1>AFWERX</p1>
              <p2 className="img__description">
                AFWERX is a part of AFRL and the innovation arm of the DAF,
                transitions agile, affordable and accelerated capabilities by
                teaming innovative technology developers with Airmen and
                Guardian talent. Such teaming occurs across academia, industry,
                investment, interagency and international partners to expand
                technology, identify talent and transition dual-use
                capabilities.
              </p2>
            </div>
            <div className="card">
              <img
                className="photo"
                src="https://www.thinkorbital.com/assets/img/TP4.jpg"
                alt="spacewerx-13"
              ></img>
              <p1>SpaceWERX</p1>
              <p2 className="img__description">
                SpaceWERX is the U.S. Space Force-affiliated arm of the AFWERX
                team, focuses on advancing innovative technologies for U.S.
                Space Force Guardians and expanding the industrial space by
                guiding additional partners, leveraging commercial investment
                and rapidly pursuing new technologies, while closely aligning
                its efforts with space operators and acquisition professionals
                within the U.S. Space Force.
              </p2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

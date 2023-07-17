import React from "react";

const About = () => {
	return (
		<div className="about">
			<div className="presentation">
				<div className="portrait">
					{/* <img className="portrait-img" src={portrait} /> */}
					<span className="portrait-nom">Chantal, fondatrice de Venus</span>
				</div>
				<div className="presentation-text">
					<h2 className="subtitle">
						Les perles, bien plus qu'une passion, c'est un mode de vie
					</h2>
					<p className="paragraph">
						Née il y a quelques années, Venus est une entreprise familliale qui
						a vu le jour à l'issue d'une période de trouble au sein de la
						famille.<br/>Chantal, de profession médicale, est la créatrice et la
						pierre angulaire de Venus. Elle a renforcé son titre de matriarche en s'adonnant à la création de ses bijoux de
						perles qui lui ont permis de retrouver sa paix intérieure.<br/>Puisant
						sa force dans les énergies dont sont dotées les perles et pierres
						qui ornent nos bijoux, <span className="venus">Venus</span> allie un besoin ardent d'aider son prochain
						à un style de vie sain et positive comme le prône les valeurs de sa
						créatrice.
					</p>
          <div className="slogan">
            <p>
              <span className="venus">Venus</span>, comme "la planète de l'amour".
            </p>
            <p>
              <span className="venus">Vénus</span>, comme la déesse de l'amour, de la beaté et du plasir.
            </p>
            <p>
              <span className="venus">Vénus</span>, aussi comme notre nom de famille.
            </p>
          </div>
				</div>
			</div>
		</div>
	);
};

export default About;

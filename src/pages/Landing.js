import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Agender, Ally, Androgynous, Aromantic, Asexual, Bigender, Bisexual, Butch, Demiboy, Demigender, Demigirl, Demisexual, Drag, Gay, Genderfluid, Genderflux, Genderqueer, Graysexual, Hijra, Intersex, Lesbian, Maverique, Neutrois, Nonbinary, Omnisexual, Pangender, Polysexual, Progress, Queer, Questioning, Transgender, Trigender, Unlabeled } from '../assets/flags';
import '../css/Landing.css';
import { Logo } from '../components/';
import '../scss/image-infinite-scroll.scss';

function Landing(props) {
    return (
        <div className={"App " + props.bgColor}>
            <header className="Land-header">
                <Logo size="large" />
                <p>A Safe Space for you to go if you want support, guidance or company from people in the LGBTQ+ Community.</p>
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Link to="/register">
                        <Button
                            variant="contained"
                            id="get-started-btn"
                            className="turq-bg"
                            style={{
                                backgroundColor: "#30D5C8"
                            }}
                        >
                            Get Started
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            variant="contained"
                            id="login-btn"
                            className="orng-bg"
                            style={{
                                backgroundColor: "#FFA500"
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                </Stack>
            </header>
            <logo-slider>
                <div className='noselect'>
                    <img src={Progress} alt="Progress Pride Flag" title="Progress Pride Flag" />
                    <img src={Lesbian} alt="Lesbian Pride Flag" title="Lesbian Pride Flag" />
                    <img src={Gay} alt="Gay Pride Flag" title="Gay Pride Flag" />
                    <img src={Bisexual} alt="Bisexual Pride Flag" title="Bisexual Pride Flag" />
                    <img src={Transgender} alt="Transgender Pride Flag" title="Transgender Pride Flag" />
                    <img src={Queer} alt="Queer Pride Flag" title="Queer Pride Flag" />
                    <img src={Questioning} alt="Questioning Pride Flag" title="Questioning Pride Flag" />
                    <img src={Unlabeled} alt="Unlabeled Pride Flag" title="Unlabeled Pride Flag" />
                    <img src={Demiboy} alt="Demiboy Pride Flag" title="Demiboy Pride Flag" />
                    <img src={Demigender} alt="Demigender Pride Flag" title="Demigender Pride Flag" />
                    <img src={Demigirl} alt="Demigirl Pride Flag" title="Demigirl Pride Flag" />
                    <img src={Intersex} alt="Intersex Pride Flag" title="Intersex Pride Flag" />
                    <img src={Agender} alt="Agender Pride Flag" title="Agender Pride Flag" />
                    <img src={Ally} alt="Ally Pride Flag" title="Ally Pride Flag" />
                    <img src={Androgynous} alt="Androgynous Pride Flag" title="Androgynous Pride Flag" />
                    <img src={Aromantic} alt="Aromantic Pride Flag" title="Aromantic Pride Flag" />
                    <img src={Asexual} alt="Asexual Pride Flag" title="Asexual Pride Flag" />
                    <img src={Bigender} alt="Bigender Pride Flag" title="Bigender Pride Flag" />
                    <img src={Butch} alt="Butch Pride Flag" title="Butch Pride Flag" />
                    <img src={Demisexual} alt="Demisexual Pride Flag" title="Demisexual Pride Flag" />
                    <img src={Drag} alt="Drag Pride Flag" title="Drag Pride Flag" />
                    <img src={Genderfluid} alt="Genderfluid Pride Flag" title="Genderfluid Pride Flag" />
                    <img src={Genderflux} alt="Genderflux Pride Flag" title="Genderflux Pride Flag" />
                    <img src={Genderqueer} alt="Genderqueer Pride Flag" title="Genderqueer Pride Flag" />
                    <img src={Graysexual} alt="Graysexual Pride Flag" title="Graysexual Pride Flag" />
                    <img src={Hijra} alt="Hijra Pride Flag" title="Hijra Pride Flag" />
                    <img src={Maverique} alt="Maverique Pride Flag" title="Maverique Pride Flag" />
                    <img src={Neutrois} alt="Neutrois Pride Flag" title="Neutrois Pride Flag" />
                    <img src={Nonbinary} alt="Nonbinary Pride Flag" title="Nonbinary Pride Flag" />
                    <img src={Omnisexual} alt="Omnisexual Pride Flag" title="Omnisexual Pride Flag" />
                    <img src={Pangender} alt="Pangender Pride Flag" title="Pangender Pride Flag" />
                    <img src={Polysexual} alt="Polysexual Pride Flag" title="Polysexual Pride Flag" />
                    <img src={Trigender} alt="Trigender Pride Flag" title="Trigender Pride Flag" />
                </div>
                <div className='noselect'>
                    <img src={Progress} alt="Progress Pride Flag" title="Progress Pride Flag" />
                    <img src={Lesbian} alt="Lesbian Pride Flag" title="Lesbian Pride Flag" />
                    <img src={Gay} alt="Gay Pride Flag" title="Gay Pride Flag" />
                    <img src={Bisexual} alt="Bisexual Pride Flag" title="Bisexual Pride Flag" />
                    <img src={Transgender} alt="Transgender Pride Flag" title="Transgender Pride Flag" />
                    <img src={Queer} alt="Queer Pride Flag" title="Queer Pride Flag" />
                    <img src={Questioning} alt="Questioning Pride Flag" title="Questioning Pride Flag" />
                    <img src={Unlabeled} alt="Unlabeled Pride Flag" title="Unlabeled Pride Flag" />
                    <img src={Demiboy} alt="Demiboy Pride Flag" title="Demiboy Pride Flag" />
                    <img src={Demigender} alt="Demigender Pride Flag" title="Demigender Pride Flag" />
                    <img src={Demigirl} alt="Demigirl Pride Flag" title="Demigirl Pride Flag" />
                    <img src={Intersex} alt="Intersex Pride Flag" title="Intersex Pride Flag" />
                    <img src={Agender} alt="Agender Pride Flag" title="Agender Pride Flag" />
                    <img src={Ally} alt="Ally Pride Flag" title="Ally Pride Flag" />
                    <img src={Androgynous} alt="Androgynous Pride Flag" title="Androgynous Pride Flag" />
                    <img src={Aromantic} alt="Aromantic Pride Flag" title="Aromantic Pride Flag" />
                    <img src={Asexual} alt="Asexual Pride Flag" title="Asexual Pride Flag" />
                    <img src={Bigender} alt="Bigender Pride Flag" title="Bigender Pride Flag" />
                    <img src={Butch} alt="Butch Pride Flag" title="Butch Pride Flag" />
                    <img src={Demisexual} alt="Demisexual Pride Flag" title="Demisexual Pride Flag" />
                    <img src={Drag} alt="Drag Pride Flag" title="Drag Pride Flag" />
                    <img src={Genderfluid} alt="Genderfluid Pride Flag" title="Genderfluid Pride Flag" />
                    <img src={Genderflux} alt="Genderflux Pride Flag" title="Genderflux Pride Flag" />
                    <img src={Genderqueer} alt="Genderqueer Pride Flag" title="Genderqueer Pride Flag" />
                    <img src={Graysexual} alt="Graysexual Pride Flag" title="Graysexual Pride Flag" />
                    <img src={Hijra} alt="Hijra Pride Flag" title="Hijra Pride Flag" />
                    <img src={Maverique} alt="Maverique Pride Flag" title="Maverique Pride Flag" />
                    <img src={Neutrois} alt="Neutrois Pride Flag" title="Neutrois Pride Flag" />
                    <img src={Nonbinary} alt="Nonbinary Pride Flag" title="Nonbinary Pride Flag" />
                    <img src={Omnisexual} alt="Omnisexual Pride Flag" title="Omnisexual Pride Flag" />
                    <img src={Pangender} alt="Pangender Pride Flag" title="Pangender Pride Flag" />
                    <img src={Polysexual} alt="Polysexual Pride Flag" title="Polysexual Pride Flag" />
                    <img src={Trigender} alt="Trigender Pride Flag" title="Trigender Pride Flag" />
                </div>
            </logo-slider>
        </div>
    );
}

export default Landing;
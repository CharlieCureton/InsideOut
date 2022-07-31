import React, { useState } from "react";
import { Agender, Ally, Androgynous, Aromantic, Asexual, Bigender, Bisexual, Butch, Demiboy, Demigender, Demigirl, Demisexual, Drag, Gay, Genderfluid, Genderflux, Genderqueer, Graysexual, Hijra, Intersex, Lesbian, Maverique, Neutrois, Nonbinary, Omnisexual, Pangender, Polysexual, Progress, Queer, Questioning, Transgender, Trigender, Unlabeled, NotFound } from '../assets/flags';
import onClickOutside from "react-onclickoutside";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function DropDown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const toggle = () => setIsOpen(!isOpen);

    DropDown.handleClickOutside = () => setIsOpen(false);

    const selectOption = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    }

    const optionData = [{
        id: 1,
        text: <img src={Agender} />
    }, {
        id: 2,
        text: <img src={Ally} />
    }, {
        id: 3,
        text: <img src={Androgynous} />
    }, {
        id: 4,
        text: <img src={Aromantic} />
    }, {
        id: 5,
        text: <img src={Asexual} />
    }, {
        id: 6,
        text: <img src={Bigender} />
    }, {
        id: 7,
        text: <img src={Bisexual} />
    }, {
        id: 8,
        text: <img src={Butch} />
    }, {
        id: 9,
        text: <img src={Demiboy} />
    }, {
        id: 10,
        text: <img src={Demigender} />
    }, {
        id: 11,
        text: <img src={Demigirl} />
    }, {
        id: 12,
        text: <img src={Demisexual} />
    }, {
        id: 13,
        text: <img src={Drag} />
    }, {
        id: 14,
        text: <img src={Gay} />
    }, {
        id: 15,
        text: <img src={Genderfluid} />
    }, {
        id: 16,
        text: <img src={Genderflux} />
    }, {
        id: 17,
        text: <img src={Genderqueer} />
    }, {
        id: 18,
        text: <img src={Graysexual} />
    }, {
        id: 19,
        text: <img src={Hijra} />
    }, {
        id: 20,
        text: <img src={Intersex} />
    }, {
        id: 21,
        text: <img src={Lesbian} />
    }, {
        id: 22,
        text: <img src={Maverique} />
    }, {
        id: 23,
        text: <img src={Neutrois} />
    }, {
        id: 24,
        text: <img src={Nonbinary} />
    }, {
        id: 25,
        text: <img src={Omnisexual} />
    }, {
        id: 26,
        text: <img src={Pangender} />
    }, {
        id: 27,
        text: <img src={Polysexual} />
    }, {
        id: 28,
        text: <img src={Progress} />
    }, {
        id: 29,
        text: <img src={Queer} />
    }, {
        id: 30,
        text: <img src={Questioning} />
    }, {
        id: 31,
        text: <img src={Transgender} />
    }, {
        id: 32,
        text: <img src={Trigender} />
    }, {
        id: 33,
        text: <img src={Unlabeled} />
    }]

    return (
        <div className={"dd-wrapper " + props.ext}>
            <div onClick={toggle} className="dd-selected">
                {selectedValue}
                <ArrowDropDownIcon className="caret-down" />
            </div>
            {
                isOpen ?
                    <ul className="dd-items-wrapper">
                        {optionData.map((option) =>
                            <li className={option.text === selectedValue ? 'dd-item active' : 'dd-item'} key={option.id} onClick={() => selectOption(option.text)}>
                                {option.text}
                            </li>
                        )}
                    </ul>
                    : null
            }

        </div>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside,

};

export default onClickOutside(DropDown, clickOutsideConfig);
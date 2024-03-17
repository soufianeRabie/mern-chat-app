import React, {useState} from 'react';

const GenderCheckbox = ({ onChange }) => {

    const [selectedGender, setSelectedGender] = useState('');
    const handleCheckboxChange = (e) => {
        const { name, checked, value } = e.target;
        if (checked) {
            onChange(name, value);
            setSelectedGender(value);
        } else {
            onChange(name, '');
            setSelectedGender('')
        }
    };

    return (
        <div className={"flex"}>
            <div className={"form-control"}>
                <label className={"label gap-2 cursor-pointer"}>
                    <span className={"label label-text"}>Male</span>
                    <input
                        onChange={(e) => handleCheckboxChange(e)}
                        type="checkbox"
                        name={"gender"}
                        value={"male"}
                        className={'checkbox border-slate-900'}
                        checked={selectedGender === 'male'}
                    />
                </label>
            </div>
            <div className={"form-control"}>
                <label className={"label gap-2 cursor-pointer"}>
                    <span className={"label label-text"}>Female</span>
                    <input
                        onChange={(e) => handleCheckboxChange(e)}
                        type="checkbox"
                        name={"gender"}
                        value={"female"}
                        className={"checkbox border-slate-900"}
                        checked={selectedGender === 'female'}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;

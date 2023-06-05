import {useState} from 'react';

const Select = () => {
    const monstersData = [
        {
            name: 'リオレウス',
            weakPoint: '龍'
        },
        {
            name: 'リオレイア',
            weakPoint: '龍'
        },
        {
            name: 'マガイマガド',
            weakPoint: '水'
        },
    ];

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    };

    return (
        <div>
            <h1 className="title">モンハン弱点教えてくれるくん</h1>
            <h2>モンスターをえらんでね</h2>
            <select className = "selectMenu"
                    value = {selectedOption}
                    onChange = {handleOptionChange}
            >
                <option value = ''>--- 選択 ---</option>
                {monstersData.map((monster,i)=>{
                    return (
                        <option key={i}
                                value = {monster.name}>{monster.name}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}

export default Select;
import React from 'react';

const Select = () => {
    return (
        <div className = "select">
            <h2>モンスターをえらんでね</h2>
            <select className = "selectMenu">
                <option value = "リオレウス">リオレウス</option>
                <option value = "リオレイア">リオレイア</option>
                <option value = "マガイマガド">マガイマガド</option>
            </select>
        </div>
    );
}

export default Select;
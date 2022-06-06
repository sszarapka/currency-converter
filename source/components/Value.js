import React, { createRef } from 'react'

const Value = ({
    data,
    amount,
    currency,
    setInputValue,
    setResultValue,
    setCurrency,
    type,
}) => {
    const object = data.symbols
    const list = Object.entries(object)

    const currencyButton = createRef()
    const displayCurrency = e => {
        setCurrency(e.target.closest('li').dataset.ticker)
        // currencyButton.current.textContent =
        //     e.target.closest('li').dataset.ticker
    }

    const displayValues = e => {
        if (type === 'input') {
            setInputValue(parseInt(e.target.value))
            setResultValue(0)
        }
        if (type === 'result') {
            setResultValue(parseInt(e.target.value))
            setInputValue(0)
        }
    }

    return (
        <>
            <button ref={currencyButton}>{currency}</button>
            <div>
                <div>
                    <input type="search" placeholder="Enter currency" />
                </div>
                <ul
                    style={{
                        height: '200px',
                        overflow: 'hidden',
                        overflowY: 'scroll',
                        width: '15%',
                        listStyle: 'none',
                    }}
                >
                    <li>Main</li>
                    <li
                        data-ticker={'PLN'}
                        key={'PLN'}
                        onClick={displayCurrency}
                    >
                        <span>PLN </span>
                        <span>Polish Zloty</span>
                    </li>
                    <li
                        data-ticker={'USD'}
                        key={'USD'}
                        onClick={displayCurrency}
                    >
                        <span>USD </span>
                        <span>United States Dollar</span>
                    </li>
                    <li
                        data-ticker={'EUR'}
                        key={'EUR'}
                        onClick={displayCurrency}
                    >
                        <span>EUR </span>
                        <span>Euro</span>
                    </li>
                    <li
                        data-ticker={'GPB'}
                        key={'GPB'}
                        onClick={displayCurrency}
                    >
                        <span>GPB </span>
                        <span>British Pound Sterling</span>
                    </li>
                    <li>------------------</li>
                    <li>All</li>
                    {list.map(el => {
                        return (
                            <li
                                data-ticker={el[0]}
                                key={el[0]}
                                onClick={displayCurrency}
                            >
                                <span>{el[0]} </span>
                                <span>{el[1]}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <input
                type="number"
                value={amount}
                placeholder="Enter amount"
                onChange={displayValues}
            />
        </>
    )
}

export default Value
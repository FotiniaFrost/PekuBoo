import React from 'react'
import CardBun from './CardBun'

function TopOfWeek({ topBuns }) {
    return (
        <div>
            <div className='BGtopOfWeek'></div>
            <div className='topOfWeek'>
                <h2 className='top_title'>Топ недели</h2>
                <div className="topOfWeek_buns">
                    {topBuns.map((obj) =>
                        <CardBun key={obj.id}
                            img={obj.imageUrl}
                            name={obj.name}
                            desc={obj.descript}
                            price={obj.price} />)}

                </div>

            </div>
        </div>

    )
}

export default TopOfWeek
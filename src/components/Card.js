import React from 'react'

export default function Card({ char }) {
    return (
        <>
            <div className='imgname'>
                <img style={{ verticalAlign: "middle" }} src={char.image} alt={char.name + '_profile'} />
                <div>{char.name}</div>
            </div>
            <div className='orginspecies'>
                <div className='button'
                    style={
                        {
                            backgroundColor: char.status === "Alive" ? '#04dd76'
                                : char.status === "Dead" ? 'red'
                                    : '#aab7cb'
                        }
                    }
                ></div>
                {char.status + '-' + char.species}
            </div>

        </>
    )
}

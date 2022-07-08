import React from 'react'
import '../App.css'


export default function ({ popdata, visible, setVisible }) {
    return (
        <div className='modal-overlay'>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal" >
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={() => setVisible(false)}>
                            <div aria-hidden="true">&times;</div>
                        </button>
                    </div>
                    <div className='imgname1'
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        < div style={{ marginRight: "24px", marginLeft: "30px" }}>
                            <img style={{ height: "100px", borderRadius: "50%" }} src={popdata.image} alt={popdata.name + '_profile'} />
                        </div>

                        <div  >
                            <div className='name'>{popdata.name}</div>
                            <div className='status'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    < div className='button'
                                        style={
                                            {
                                                backgroundColor: popdata.status === "Alive" ? '#04dd76'
                                                    : popdata.status === "Dead" ? 'red'
                                                        : '#aab7cb',
                                                marginRight: '8px'
                                            }
                                        }
                                    ></div>

                                    <div>
                                        {popdata.status + ' - ' + popdata.species}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='details'>

                        <div>Gender:
                            <div>{popdata.gender}</div>
                        </div>

                        <div>Location:
                            <div>{popdata.location.name}</div>
                        </div>
                        <div>Species:
                            <div>{popdata.species}</div>
                        </div>
                        <div>Origin:
                            <div>{popdata.origin.name}</div>
                        </div>
                    </div>

                </div>


            </div >

        </div >



    )
}
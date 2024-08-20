import { faChartLine, faCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import MultiColorProgressBar from './MulticolorProgressBar/MultiColorProgressBar'
import { ProgressBar } from 'react-bootstrap'

function Widget({widget, category, onRemove}) {
  return (
    <div className='widget col-4 border-end border-bottom border-2 mb-3 rounded bg-white'>
        <div className='row row-cols-1 mt-3'>
            <div className='col-11'>
                <h6 className='' style={{letterSpacing:'0.5px'}}><b>{widget.name}</b></h6>
            </div>
            <div className='col-1' style={{ top: '200px', right: '200px', cursor:'pointer'}}>
                    <FontAwesomeIcon className='text-dark' icon={faXmark} onClick={onRemove} size='xl'/>
            </div>
        </div>
        <div className='widget-content row row-cols-1'>
            {category.id===1 ? (
                widget.id===1 ? (
                <div className='col-6 mt-4'>
                    <CircularProgressbar strokeWidth={18} className='bar' title="Cloud Accounts" value={50} text={2} styles={buildStyles({ textColor: "#000", pathColor: `rgba(62, 152, 199,)`, trailColor: "#d6d6d6",strokeLinecap: 'butt'})}/>
                </div>
            ) : (
                <div className='col-6'>
                    <MultiColorProgressBar className='bar' percentage={100} />
                </div>
            ) 
            ) : category.id===2 ? (
                <div className='col-1 mx-auto d-block noGraph'><FontAwesomeIcon className='text-secondary' size='2xl' icon={faChartLine} /></div>
            ) : category.id===3 ? (
                widget.id===1 ? (
                    <div>
                        <div className='mt-3'>
                            <p><strong>1470</strong> <span style={{fontSize:'13.5px'}}>{widget.description}   </span></p>
                        </div>
                        <div className='col-12 mt-3'>
                            <ProgressBar style={{width:'500px'}} >
                                <ProgressBar style={{backgroundColor:'#6e0f0a'}} now={7} key={1} />
                                <ProgressBar style={{backgroundColor:'#c82819'}} now={12} key={2} />
                                <ProgressBar style={{backgroundColor:'#eb9132'}} now={50} key={3} />
                                <ProgressBar style={{backgroundColor:'#f0c341'}} now={38} key={4} />
                            </ProgressBar>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='mt-3'>
                            <p><strong>2</strong> <span style={{fontSize:'13.5px'}}>{widget.description}   </span></p>

                        </div>
                        <div className='col-12 mt-3'>
                                <ProgressBar style={{width:'500px'}}>
                                    <ProgressBar style={{backgroundColor:'#6e0f0a'}} now={28} key={1} />
                                    <ProgressBar style={{backgroundColor:'#c82819'}} now={28} key={2} />
                                    <ProgressBar style={{backgroundColor:'#eb9132'}} now={28} key={3} />
                                    <ProgressBar style={{backgroundColor:'#f0c341'}} now={16} key={4} />
                                </ProgressBar>
                        </div> 
                    </div>
                )
            ) : (
                console.log("hello")
            )}

            {Array.isArray(widget.content) ? (
                <div className='mt-5 col-6'>
                    {widget.content.map((item, index) => (
                        <>
                            <h6 key={index} style={{fontSize:'14px', fontFamily:'sans-serif', letterSpacing:'0.3px'}}><FontAwesomeIcon icon={faCircle} style={{color: item.color}} size='xs'/> {item.status} ({item.count})</h6>
                        </>
                    ))}
                </div>
            ) : (
                <>
                    <p className='lead text-center' style={{fontSize:'14px'}}>{widget.content}</p>
                </>
            )}
        </div>
    </div>
  )
}

export default Widget

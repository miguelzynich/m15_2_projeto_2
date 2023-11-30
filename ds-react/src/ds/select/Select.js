import './styles.css'

const Select = (props) => {

    const color = `color-action-${props.variation}`
    const size = `size-action-${props.size}`
    const fSize = `fSize-action-${props.fSize}`

    return (
        <div className='selectDS'>
            <label className={`${color} ${fSize}`} for={props.id}>{props.labelText}</label>
            <select className={`${color} ${size} ${fSize} w4 br2`} id={props.id}>
                {props.children}
            </select>
        </div>
        
    )
}

export default Select;
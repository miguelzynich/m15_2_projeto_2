import './styles.css'

const Flex = (props) => {

    const direction = `direction-action-${props.direction}`
    const align = `align-action-${props.align}`
    const justify = `justify-action-${props.justify}`

    return <div className={`ds-flex ${direction} ${align} ${justify}`}>
                {props.children}
           </div>
}

export default Flex;
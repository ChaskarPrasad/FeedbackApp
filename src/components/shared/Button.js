function Button(props) {
    return (
        <button type={props.type} disabled={props.isDisable} className={`btn btn-${props.version}`}>
            {props.children}
        </button>
    )
};

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisable: false
}
export default Button;
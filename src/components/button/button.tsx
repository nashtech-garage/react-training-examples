const Button = ({ label, onClick }: {label: string; onClick: any}) => {
    return (
        <button type='button' onClick={onClick}>{label}</button>
    )
}

export default Button
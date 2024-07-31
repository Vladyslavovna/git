
export default function Button(props) {
    return (
        <button
            onClick={() => props.handleClick(props.value)}
            className="button"
        >
            {props.label}
        </button>
    );
}
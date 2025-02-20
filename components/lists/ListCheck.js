import 'material-symbols'
export default function ListCheck({listText,className}) {
    return (
        <li className={className}>
            <span className='material-symbols-rounded align-middle text-muted fs-5 me-3'>
                check_circle
            </span>
            {listText}
        </li>
    );
}
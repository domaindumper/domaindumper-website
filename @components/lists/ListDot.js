import 'material-symbols'
export default function ListDot({listText,className}) {
    return (
        <li className={className}>
            <span className="material-symbols-sharp align-middle opacity-50 fs-6 me-2">
fiber_manual_record
</span>
            {listText}
        </li>
    );
}
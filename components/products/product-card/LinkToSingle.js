import Link from 'next/link'

export default function LinkTitle({ href, onClickSingleLink, label }) {

    return (
        <Link href={href}>
            <a onClick={() => onClickSingleLink()}>{label}</a>
        </Link>
    )
}
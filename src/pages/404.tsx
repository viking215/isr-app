import Link from 'next/link'
import styled from "styled-components";

const CustomTitle = styled.h1`  
    color: red;  
`

const ErrorPage = () => {
    return (
        <>
            <CustomTitle >404 Not Found</CustomTitle>
            <p>Please<Link href={'/'}> go to safety</Link></p>
        </>
    )
}

export default ErrorPage
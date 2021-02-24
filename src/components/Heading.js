import styled from "styled-components";

export default function Heading ({ name, size, color }) {
    const Heading = styled.h1`
        font-size: ${size}em;
        color: ${color};
    `;
    return (
        <Heading>{name}</Heading>
    )
}
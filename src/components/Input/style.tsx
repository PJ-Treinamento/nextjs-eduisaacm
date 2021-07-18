import styled from 'styled-components';

const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    + .input-block {
        margin-top: 1.4rem;
    }
    label {
        font-size: 1rem;
    }
    input {
        width: 100%;
        height: 2.8rem;
        margin-top: 0.8rem;
        border-radius: 0.5rem;
        background: #EDEFF2;
        outline: 0;
        padding: 0 0.6rem;
    }
    :focus-within::after {
        width: (100% - 3.2rem);
        height: 2px;
        content: "";
        background: #2D6A4F;
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
    }
`;

export default InputStyle;
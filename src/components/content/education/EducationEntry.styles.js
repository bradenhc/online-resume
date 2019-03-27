import styled from 'styled-components';

export const Entry = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 8px;
    &:last-child {
        border-bottom: none;
    }
    display: flex;
    flex-direction: column;
`;

export const EntryHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 5px;
`;

export const EntryHeaderContent = styled.div`
    margin-left: 15px;
    display: flex;
    width: 100%;
`;

export const EntryHeaderContentLeft = styled.div`
    
`;

export const EntryHeaderContentRight = styled.div`
    margin-left: auto;
`;

export const DegreeInfo = styled.span`
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.family};
    font-weight: bold;
    margin-bottom: 3px;
    display: block;
`;

export const SchoolName = styled.span`
    display: block;
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.colors.faint};
`;

export const AdditionalInfo = styled.span`
    display: block
    font-size: 14px;
    margin-bottom: 3px;
    text-align: right;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.font.colors.faint};
`;

export const EntryContent = styled.div``;
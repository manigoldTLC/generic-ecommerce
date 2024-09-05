import styled from 'styled-components';
import theme from '../../styles/theme';

export const CardSelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f6;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    height: 62px;
`;

export const CardLogo = styled.div`
    width: 40px;
    height: auto;
`;

export const CardNumber = styled.span`
    font-size: 16px;
    color: #333;
    margin-left: 16px;
    letter-spacing: 1px;
`;

export const ArrowIcon = styled.span`
    font-size: 14px;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
`;

export const Dropdown = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 10px 0 0 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: ${({ open }) => (open ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;
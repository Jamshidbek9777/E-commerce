import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: flex;
    > ul {
      display: flex;
      list-style: none;
      gap: 3px;
      padding: 20px 30px;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }

      > li {
        width: fit-content;
        padding: 5px 5px;
        height: 36px;
        flex-shrink: 0;
        flex-shrink: 0;
        color: var(--primary, #0d6efd);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-radius: 16px;
        background: var(--gray-200, #eff2f4);
      }
    }
  }
`;
export { Container };

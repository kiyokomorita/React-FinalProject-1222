import styled from "styled-components";
export const style = () => {
  const SFormcontainer = styled.div`
    table {
      border-collapse: collapse;
      width: 100%;
    }

    th,
    td {
      border: 1px solid #ffffff;
      text-align: left;
      padding: 8px;
      font-size: 32px;
    }

    th {
      background-color: #fc46aa;
    }

    td {
      background-color: rgb(255, 192, 203);
    }

    form {
      display: flex;
      gap: 5px;
    }

    form td:last-child {
      display: flex;
      justify-content: space-evenly;
    }

    form * {
      font-size: 28px;
    }
  `;
};

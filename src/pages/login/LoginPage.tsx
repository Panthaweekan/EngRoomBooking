import styled from "styled-components";
import { config } from "../../core/config";
import { useEffect } from "react";
import { ClientRouteKey } from "../../common/constants/keys";
import useAccountContext from "../../common/contexts/AccountContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { accountData } = useAccountContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (accountData) {
      navigate(ClientRouteKey.Home, { replace: true });
    }
  }, [accountData, navigate]);

  return (
    <Container>
      <LoginBtn href={config.cmuOAuthUrl} target="_self">
        <p className="font-normal text-2xl text-white">
          Login with CMU Account
        </p>
      </LoginBtn>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/imgs/login_book.svg);
  background-size: cover;
`;

const LoginBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 0.5em;
  padding: 0.25em 0;

  max-width: 15em;
  height: 3.4em;
  width: 14em;

  font-size: 1.3em;

  border-radius: 10px;
  background: linear-gradient(90deg, #b1b1e7 0.83%, #6974d6 76.08%),
    var(--purple-5-purple, #6974d6);
`;

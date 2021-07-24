import { Fragment } from "react";
import * as S from "./styles";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <S.HomeContainer>
        <S.ClubMainText>
          <b>Abmoah</b>&nbsp;we 'SKATE'
        </S.ClubMainText>
      </S.HomeContainer>
    </Fragment>
  );
};

export default Home;

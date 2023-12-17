import { FC } from 'react';
import { iconsSteps } from '../../helpers/iconsSteps';
import {
  ShowStepStyle,
  ArticleContainerStyle,
  LineStyle,
  ContainerStepStyle,
  IconStyle,
} from './ShowStepStyle';
import { useLocation } from 'wouter';

export const ShowStep: FC = () => {
  const [location] = useLocation();

  return (
    <ShowStepStyle>
      <LineStyle></LineStyle>
      <ArticleContainerStyle>
        {iconsSteps.map((step, index) => (
          <ContainerStepStyle key={index}>
            <IconStyle $location={location} name={step.url}>
              {step.icon}
            </IconStyle>
            <p>{step.name}</p>
          </ContainerStepStyle>
        ))}
      </ArticleContainerStyle>
    </ShowStepStyle>
  );
};

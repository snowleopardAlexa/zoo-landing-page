import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';

const Features = () => {
    return (
      <Section>
          <Container>
              <FeatureTextWrapper>
                  <FeatureTitle>
            
                  </FeatureTitle>
              </FeatureTextWrapper>
              <FeatureWrapper>
                 <FeatureColumn>
                     <FeatureImageWrapper>

                     </FeatureImageWrapper>
                     <FeatureName></FeatureName>
                     <FeatureText></FeatureText>
                 </FeatureColumn>
              </FeatureWrapper>
          </Container>
      </Section>
    );
};

export default Features;
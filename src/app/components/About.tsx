import { t } from "i18next";
import React from "react";

const AboutSection = () => {
  return (
    <div id="about">

      <p>
        {t('about.paragraph1')}
      </p>
      <br />
      <p>
        {t('about.paragraph2')}
      </p>
      <br />
      <p>
        {t('about.paragraph3')}
      </p>
    </div>
  );
};

export default AboutSection;

 

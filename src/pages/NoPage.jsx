import React from "react";
import TopLevelContext from "./../TopLevelContext";

function AboutPage() {
  return (
    <TopLevelContext.Consumer>
      {t => <div>{t("Introduction")}</div>}
    </TopLevelContext.Consumer>
  );
}

export default AboutPage;

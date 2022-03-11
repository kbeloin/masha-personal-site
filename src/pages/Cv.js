import Page from "./Page";
import { awards, awardElement } from "../data/awards";
import { service, serviceElement } from "../data/service";
import { education, educationElement } from "../data/education";
import { presentations, presentationElement } from "../data/presentations";
import { Divider, Header } from "semantic-ui-react";

export const Cv = () => {
  const title = "Curriculum Vitae";
  const content = (
    <div style={{ position: "relative" }}>
      <Divider horizontal>
        <Header as="h3">Education</Header>
      </Divider>
      {education.map((e, i) => educationElement(e, i))}
      <Divider horizontal>
        <Header as="h3">Presentations</Header>
      </Divider>
      {presentations.map((e, i) => presentationElement(e, i))}
      <Divider horizontal>
        <Header as="h3">Service</Header>
      </Divider>
      {service.map((e, i) => serviceElement(e, i))}
      <Divider horizontal>
        <Header as="h3">Awards</Header>
      </Divider>
      {awards.map((e, i) => awardElement(e, i))}
    </div>
  );
  return <Page {...{ title, content }} />;
};

export default Cv;

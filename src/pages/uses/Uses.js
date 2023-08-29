import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="Here's a reasonably inclusive compilation of tools, applications, hardware, and more that constitute my everyday arsenal for crafting designs and writing code."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Web Design & Video Maker</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Lately, <Link href="https://www.figma.com">Figma</Link> has taken the
                    lead as my go-to tool for UI design. Whether it's crafting proposals,
                    business decks, or working on web design projects, Figma is my
                    versatile companion for all things related to the world of UI design.
                  </ListItem>
                  <ListItem>
                    When it comes to video-related tasks, I rely on{' '}
                    <Link href="https://www.adobe.com/">Adobe Premiere</Link> and
                    <Link href="https://www.adobe.com/"> Adobe After Effects</Link> for a
                    polished finish. These two tools form the cornerstone of my video
                    editing and post-production endeavors.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    For my coding needs, I opt for{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>.
                    It's a widely used choice among many, so it's a tool that needs no
                    introduction.
                  </ListItem>

                  <ListItem>
                    When it comes to front-end JavaScript libraries,{' '}
                    <Link href="https://reactjs.org/">React</Link> is my preferred choice.
                    Its component-centric approach is what initially resonated with me as
                    a designer, offering a mental model that truly clicked.
                  </ListItem>
                  <ListItem>
                    When delving into 3D effects and image shaders, my tool of choice is{' '}
                    <Link href="https://threejs.org/">three.js</Link>. While it might come
                    with a bit of a learning curve, the potential it offers is
                    substantial. It enables the creation of impressive and potent visual
                    experiences that can be harnessed for various projects.
                  </ListItem>
                  <ListItem>
                    In the realm of CSS, I've explored a variety of pre-processors and
                    CSS-in-JS solutions, including styled-components. However, my current
                    approach involves utilizing vanilla CSS alongside{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> and{' '}
                    <Link href="https://tailwindcss.com/">TailwindCSS</Link>. This
                    combination allows me to harness forthcoming CSS features in the
                    present, enhancing the flexibility and capabilities of my stylesheets.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

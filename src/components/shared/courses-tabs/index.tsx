import { ReactNode } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './index.scss';

interface Props {
  contentFirstTab: ReactNode;
  contentSecondTab: ReactNode;
  contentThirdTab: ReactNode;
}
const CoursesTabs = ({ contentFirstTab, contentSecondTab, contentThirdTab }: Props) => {
  return (
    <Tabs className="tabs">
      <TabList className="tabList">
        <Tab>Overview</Tab>
        <Tab>Curriculum</Tab>
        <Tab>Lecturers</Tab>
      </TabList>
      <TabPanel className="tabPanel">{contentFirstTab}</TabPanel>
      <TabPanel className="tabPanel">{contentSecondTab}</TabPanel>
      <TabPanel className="tabPanel">{contentThirdTab}</TabPanel>
    </Tabs>
  );
};

export default CoursesTabs;
